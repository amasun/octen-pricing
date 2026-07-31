/**
 * ditherShaderEngine.ts
 * Standalone WebGL2 Bottom-Fade Dither Shader Engine with Pass4MouseLiquify Fluid Trail.
 * Driven by X:\XCoding\shader\unicorn\pass4-mouse-liquify.js
 */

export interface DitherShaderParams {
  pixelate?: number;
  ditherLevels?: number;
  ditherScale?: number;
  exposure?: number;
  whiteCutoff?: number;
  whiteSpacing?: number;
  inBlack?: number;
  inMid?: number;
  inWhite?: number;
  colorMix?: number;
  opacity?: number;
  transparentDark?: number | boolean;
  darkColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  edgeColorWidth?: number;
  whiteColor?: string;

  // Pixel Grid Line Overlay Parameters
  showGrid?: number | boolean;
  gridOpacity?: number;
  gridColor?: string;
  gridLineWidth?: number;

  useTurbulence?: number | boolean;
  patternMode?: number;
  aspectScale?: number;
  rippleFrequency?: number;
  rippleWidth?: number;
  hollowRadius?: number;
  hollowFeather?: number;
  noiseScale?: number;
  noiseSpeed?: number;
  turbulenceAmount?: number;

  useBottomFade?: number | boolean;
  bottomFadeHeight?: number;
  bottomFadeFeather?: number;

  // Pass 4 Liquify Params
  liquifyRadius?: number;
  liquifyStrength?: number;
  liquifyTurbulence?: number;
  liquifyTail?: number;
}

function normalizeColor(color: string | number[] | undefined): [number, number, number] {
  if (!color) return [0, 0, 0];
  if (typeof color === 'string') {
    const trimmed = color.trim();
    if (trimmed.startsWith('#')) {
      let hex = trimmed.replace('#', '');
      if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
      }
      const bigint = parseInt(hex, 16);
      return [((bigint >> 16) & 255) / 255.0, ((bigint >> 8) & 255) / 255.0, (bigint & 255) / 255.0];
    }
  }
  if (Array.isArray(color) && color.length >= 3) {
    if (color[0] > 1 || color[1] > 1 || color[2] > 1) {
      return [color[0] / 255.0, color[1] / 255.0, color[2] / 255.0];
    }
    return [color[0], color[1], color[2]];
  }
  return [0, 0, 0];
}

function mixVal(a: number, b: number, t: number) { return a + (b - a) * t; }

function hexToRgb(hex: string): [number, number, number] {
  let c = String(hex).replace('#', '').trim();
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  if (c.length !== 6) return [0.41176, 0.67058, 0.51372];
  const num = parseInt(c, 16);
  if (isNaN(num)) return [0.41176, 0.67058, 0.51372];
  return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
}

// ============================================================================
// Pass 4: Mouse Liquify Fluid Trail Engine
// ============================================================================
export class Pass4MouseLiquify {
  gl: WebGL2RenderingContext;
  w: number = 0;
  h: number = 0;
  pingPong: number = 0;
  params: any;
  fbo4_a: any = null;
  fbo4_b: any = null;
  fbo4_out: any = null;
  quadBuf: WebGLBuffer | null = null;
  prog4_0: WebGLProgram | null = null;
  prog4_1: WebGLProgram | null = null;
  _smoothMX?: number;
  _smoothMY?: number;

  constructor(gl: WebGL2RenderingContext, params: any = {}) {
    this.gl = gl;
    this.params = Object.assign({
      radius: 27,
      strength: 35,
      turbulence: 50,
      tint: '#38ef7d',
      colorMix: 0,
      bloom: 50,
      tail: 70,
      distortion: 40,
      blendMode: 0,
      trackMouse: 1,
      momentum: 25,
      spring: 0,
      mouseAxes: 0
    }, params);

    this._initShaders();
    this._initQuadBuffer();
  }

  resize(width: number, height: number) {
    if (this.w === width && this.h === height) return;
    this.w = width;
    this.h = height;
    this._destroyFBOs();
    this.fbo4_a = this._createFBO(width, height);
    this.fbo4_b = this._createFBO(width, height);
    this.fbo4_out = this._createFBO(width, height);
  }

  getTrailTexture(): WebGLTexture {
    return this.pingPong === 0 ? this.fbo4_a.tex : this.fbo4_b.tex;
  }

  render(time: number, mouseX: number, mouseY: number, prevMouseX: number, prevMouseY: number): WebGLTexture {
    const gl = this.gl;
    const w = this.w;
    const h = this.h;
    if (w === 0 || h === 0 || !this.prog4_1 || !this.prog4_0) return this.getTrailTexture();

    const p = this.params;

    let mX = mouseX, mY = mouseY, pmX = prevMouseX, pmY = prevMouseY;
    if (p.trackMouse === 0) {
      mX = pmX;
      mY = pmY;
    } else {
      if (p.spring > 0) {
        const factor = Math.max(0.02, 1.0 - p.spring * 0.009);
        if (this._smoothMX === undefined) {
          this._smoothMX = mouseX;
          this._smoothMY = mouseY;
        }
        this._smoothMX += (mouseX - this._smoothMX) * factor;
        this._smoothMY += (mouseY - this._smoothMY) * factor;
        mX = this._smoothMX;
        mY = this._smoothMY;
      } else {
        this._smoothMX = mouseX;
        this._smoothMY = mouseY;
      }
    }

    if (p.mouseAxes === 1) { mY = 0.5; pmY = 0.5; }
    else if (p.mouseAxes === 2) { mX = 0.5; pmX = 0.5; }

    const currFBO = this.pingPong === 0 ? this.fbo4_a : this.fbo4_b;
    const prevFBO = this.pingPong === 0 ? this.fbo4_b : this.fbo4_a;
    this.pingPong = 1 - this.pingPong;

    // Stage 1: Ping-Pong Liquify Simulator
    gl.bindFramebuffer(gl.FRAMEBUFFER, currFBO.fbo);
    gl.viewport(0, 0, w, h);
    gl.useProgram(this.prog4_1);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, prevFBO.tex);
    gl.uniform1i(gl.getUniformLocation(this.prog4_1, 'uPingPongTexture'), 0);
    gl.uniform2f(gl.getUniformLocation(this.prog4_1, 'uPreviousMousePos'), pmX, pmY);
    gl.uniform2f(gl.getUniformLocation(this.prog4_1, 'uMousePos'), mX, mY);
    gl.uniform1f(gl.getUniformLocation(this.prog4_1, 'uTime'), time);
    gl.uniform2f(gl.getUniformLocation(this.prog4_1, 'uResolution'), w, h);

    const bloomExp = mixVal(10.0, 1.0, p.bloom * 0.01);
    gl.uniform1f(gl.getUniformLocation(this.prog4_1, 'uRadiusParam'), p.radius * 0.01);
    gl.uniform1f(gl.getUniformLocation(this.prog4_1, 'uTurbulenceParam'), p.turbulence * 0.01);
    gl.uniform1f(gl.getUniformLocation(this.prog4_1, 'uBloomParam'), bloomExp);
    gl.uniform1f(gl.getUniformLocation(this.prog4_1, 'uTailParam'), mixVal(0.60, 0.98, p.tail * 0.01));
    gl.uniform1f(gl.getUniformLocation(this.prog4_1, 'uDistortionParam'), p.distortion * 0.01 * 0.01);
    gl.uniform1f(gl.getUniformLocation(this.prog4_1, 'uMomentumParam'), mixVal(0.5, 2.5, p.momentum * 0.01));

    this._drawQuad(this.prog4_1);

    return currFBO.tex;
  }

  destroy() {
    const gl = this.gl;
    this._destroyFBOs();
    if (this.quadBuf) gl.deleteBuffer(this.quadBuf);
    if (this.prog4_0) gl.deleteProgram(this.prog4_0);
    if (this.prog4_1) gl.deleteProgram(this.prog4_1);
  }

  private _createFBO(w: number, h: number) {
    const gl = this.gl;
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    return { fbo, tex, w, h };
  }

  private _destroyFBOs() {
    const gl = this.gl;
    [this.fbo4_a, this.fbo4_b, this.fbo4_out].forEach(item => {
      if (item) {
        if (item.tex) gl.deleteTexture(item.tex);
        if (item.fbo) gl.deleteFramebuffer(item.fbo);
      }
    });
  }

  private _initQuadBuffer() {
    const gl = this.gl;
    this.quadBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quadBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 0,  0, 0,
       1, -1, 0,  1, 0,
      -1,  1, 0,  0, 1,
      -1,  1, 0,  0, 1,
       1, -1, 0,  1, 0,
       1,  1, 0,  1, 1
    ]), gl.STATIC_DRAW);
  }

  private _drawQuad(prog: WebGLProgram) {
    const gl = this.gl;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quadBuf);
    const aPos = gl.getAttribLocation(prog, 'aVertexPosition');
    const aUV = gl.getAttribLocation(prog, 'aTextureCoord');
    if (aPos >= 0) {
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 20, 0);
    }
    if (aUV >= 0) {
      gl.enableVertexAttribArray(aUV);
      gl.vertexAttribPointer(aUV, 2, gl.FLOAT, false, 20, 12);
    }
    const identityMat = new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]);
    const uP = gl.getUniformLocation(prog, 'uPMatrix');
    const uMV = gl.getUniformLocation(prog, 'uMVMatrix');
    const uTexMat = gl.getUniformLocation(prog, 'uTextureMatrix');
    if (uP) gl.uniformMatrix4fv(uP, false, identityMat);
    if (uMV) gl.uniformMatrix4fv(uMV, false, identityMat);
    if (uTexMat) gl.uniformMatrix4fv(uTexMat, false, identityMat);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  private _compileShader(type: number, src: string): WebGLShader | null {
    const gl = this.gl;
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error('[Pass4] Shader Compile Error:', gl.getShaderInfoLog(s));
      gl.deleteShader(s);
      return null;
    }
    return s;
  }

  private _createProgram(vsSrc: string, fsSrc: string): WebGLProgram | null {
    const gl = this.gl;
    const vs = this._compileShader(gl.VERTEX_SHADER, vsSrc);
    const fs = this._compileShader(gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) return null;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('[Pass4] Program Link Error:', gl.getProgramInfoLog(prog));
      return null;
    }
    return prog;
  }

  private _initShaders() {
    const vs4_0 = `#version 300 es
precision mediump float;
in vec3 aVertexPosition; in vec2 aTextureCoord;
uniform mat4 uMVMatrix; uniform mat4 uPMatrix; uniform mat4 uTextureMatrix;
out vec2 vTextureCoord;
void main() {
  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
  vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`;

    const vs4_1 = `#version 300 es
precision mediump float;
in vec3 aVertexPosition; in vec2 aTextureCoord;
uniform mat4 uMVMatrix; uniform mat4 uPMatrix;
out vec2 vTextureCoord;
void main() {
  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
  vTextureCoord = aTextureCoord;
}`;

    const fs4_0 = `#version 300 es
precision highp float;
precision highp int;
in vec2 vTextureCoord;
uniform sampler2D uTexture;
uniform sampler2D uPingPongTexture;
uniform vec2 uMousePos;
uniform vec3 uTint;
uniform float uStrengthParam;
uniform float uColorMixParam;
uniform int uBlendMode;

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}

out vec4 fragColor;
void main() {
  vec2 uv = vTextureCoord;
  vec3 mouseRgb = texture(uPingPongTexture, uv).rgb;
  vec3 mouseTrail = rgb2hsv(mouseRgb);
  float strength = mouseTrail.z * uStrengthParam;
  vec4 bg = texture(uTexture, uv);
  
  vec3 trailHue = mix(vec3(1.0), mouseRgb, uColorMixParam);
  vec3 finalTrailColor = uTint * trailHue * strength;
  
  vec3 blendedRgb;
  if (uBlendMode == 0) {
    blendedRgb = vec3(1.0) - (vec3(1.0) - bg.rgb) * (vec3(1.0) - clamp(finalTrailColor, 0.0, 1.0));
  } else if (uBlendMode == 1) {
    blendedRgb = bg.rgb + finalTrailColor;
  } else {
    blendedRgb = mix(bg.rgb, finalTrailColor, clamp(length(finalTrailColor), 0.0, 1.0));
  }

  fragColor = vec4(blendedRgb, 1.0);
}`;

    const fs4_1 = `#version 300 es
precision highp float;
in vec2 vTextureCoord;
uniform sampler2D uPingPongTexture;
uniform vec2 uPreviousMousePos;
uniform float uTime;
uniform vec2 uMousePos;
uniform vec2 uResolution;

uniform float uRadiusParam;
uniform float uTurbulenceParam;
uniform float uBloomParam;
uniform float uTailParam;
uniform float uDistortionParam;
uniform float uMomentumParam;

const float PI = 3.14159265359;
const float TAU = 6.28318530718;
out vec4 fragColor;

vec3 toLinear(vec3 c) { return c * c; }
vec3 toGamma(vec3 c) { return sqrt(c); }
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
mat2 rot(float a) { float s = sin(a), c = cos(a); return mat2(c, -s, s, c); }
vec2 angleToDir(float angle) { float rad = angle * 2.0 * PI; return vec2(cos(rad), sin(rad)); }

vec2 liquify(vec2 st, vec2 dir, float aspectRatio) {
  st.x *= aspectRatio;
  float amplitude = uDistortionParam;
  float freq = mix(3.0, 12.0, uTurbulenceParam);
  for (float i = 1.0; i <= 3.0; i++) {
    st = st * rot(i / 3.0 * TAU);
    st += vec2(amplitude * cos(i * freq * st.y + uTime * 0.02 * dir.x), amplitude * sin(i * freq * st.x + uTime * 0.02 * dir.y));
  }
  st.x /= aspectRatio;
  return st;
}

float trailIntensity(vec2 segStart, vec2 correctedUv, vec2 scaledDir, float segLen, float aspectRatio, float radius) {
  vec2 posToUv = correctedUv - segStart * vec2(aspectRatio, 1.0);
  float projection = clamp(dot(posToUv, scaledDir), 0.0, segLen);
  vec2 closestPoint = segStart * vec2(aspectRatio, 1.0) + scaledDir * projection;
  float distToLine = length(correctedUv - closestPoint);
  return (1.0 + radius) / (distToLine + radius) * radius;
}

void main() {
  float aspectRatio = uResolution.x / uResolution.y;
  vec2 uv = vTextureCoord;
  vec2 correctedUv = uv * vec2(aspectRatio, 1.0);
  vec3 lastFrameColor = texture(uPingPongTexture, uv).rgb;
  vec3 hsv = rgb2hsv(lastFrameColor);
  float prevStrength = hsv.z * hsv.z;
  vec2 prevDir = angleToDir(hsv.x);
  vec2 mouseVec = (uMousePos - uPreviousMousePos) * uMomentumParam;
  float mouseLen = length(mouseVec);
  vec2 dir = mouseVec * vec2(aspectRatio, 1.0);
  float dist = length(dir);
  float blurAmount = 0.03 * prevStrength;
  uv = uv - prevDir * blurAmount;
  if(prevStrength > 0.0 && uDistortionParam > 0.0) {
    uv = mix(uv, liquify(uv - prevDir * 0.005, prevDir, aspectRatio), (1.0 - prevStrength) * 0.25);
  }
  lastFrameColor = toLinear(texture(uPingPongTexture, uv).rgb);
  float clampedDist = 0.0;
  vec3 trailColor = vec3(0.0);
  if (dist > 0.001) {
    vec2 normDir = mouseVec / mouseLen;
    vec2 scaledDir = normDir * vec2(aspectRatio, 1.0);
    float angle = atan(dir.y, dir.x);
    if (angle < 0.0) angle += TAU;
    vec3 pointColor = toLinear(hsv2rgb(vec3(angle / TAU, 1.0, 1.0)));
    int numPoints = int(max(6.0, dist * 24.0));
    float radius = mix(0.05, 0.8, uRadiusParam * clamp(dist, 0.7, 1.3));
    float segLenAspect = mouseLen * aspectRatio / float(numPoints);
    float totalIntensity = 0.0;
    int iter = min(numPoints, 16);
    totalIntensity += trailIntensity(uPreviousMousePos, correctedUv, scaledDir, 0.0, aspectRatio, radius);
    for (int i = 1; i <= iter; i++) {
      vec2 segStart = mix(uPreviousMousePos, uMousePos, float(i - 1) / float(numPoints));
      totalIntensity += trailIntensity(segStart, correctedUv, scaledDir, segLenAspect, aspectRatio, radius);
    }
    trailColor = pointColor * totalIntensity / float(min(numPoints, 50) + 1);
    trailColor = pow(trailColor, vec3(uBloomParam));
    clampedDist = clamp(length(trailColor) * dist, 0.0, 1.0);
  }
  float blurRadius = 0.005;
  vec3 blurredLastFrame = lastFrameColor * 0.2;
  blurredLastFrame += toLinear(texture(uPingPongTexture, uv + vec2(blurRadius, 0.0)).rgb) * 0.2;
  blurredLastFrame += toLinear(texture(uPingPongTexture, uv + vec2(-blurRadius, 0.0)).rgb) * 0.2;
  blurredLastFrame += toLinear(texture(uPingPongTexture, uv + vec2(0.0, blurRadius)).rgb) * 0.2;
  blurredLastFrame += toLinear(texture(uPingPongTexture, uv + vec2(0.0, -blurRadius)).rgb) * 0.2;
  blurredLastFrame *= pow(abs(uTailParam), 0.2);
  vec3 draw = mix(blurredLastFrame, trailColor, clampedDist);
  draw = toGamma(draw);
  draw = max(draw - 0.005, vec3(0.0));
  fragColor = vec4(draw, 1.0);
}`;

    this.prog4_0 = this._createProgram(vs4_0, fs4_0);
    this.prog4_1 = this._createProgram(vs4_1, fs4_1);
  }
}

// ============================================================================
// Main Dither Shader Engine (Sampling Pass 4 Liquify Trail Texture)
// ============================================================================

const VERTEX_SHADER = `#version 300 es
in vec2 position;
out vec2 vTextureCoord;
void main() {
  vTextureCoord = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 vTextureCoord;
uniform sampler2D uLiquifyTrailTexture;
uniform int uEngineMode;
uniform float uExposure;
uniform vec2 uResolution;
uniform vec2 uMousePos;
uniform float uL2_Amount;
uniform float uL3_Dither;
uniform float uDitherScale;
uniform float uWhiteCutoff;
uniform float uWhiteSpacing;
uniform float uHover;
uniform float uInBlack;
uniform float uInMid;
uniform float uInWhite;

uniform float uColorMix;
uniform float uOpacity;
uniform int uTransparentDark;

uniform vec3 uDarkColor;
uniform vec3 uGreenColor;
uniform vec3 uSecondaryColor;
uniform float uEdgeColorWidth;
uniform vec3 uWhiteColor;

uniform int uShowGrid;
uniform float uGridOpacity;
uniform vec3 uGridColor;
uniform float uGridLineWidth;

uniform float uTime;
uniform int uUseTurbulence;
uniform int uPatternMode;
uniform float uAspectScale;
uniform float uRippleFrequency;
uniform float uRippleWidth;
uniform float uHollowRadius;
uniform float uHollowFeather;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uTurbulenceAmount;

uniform int uUseBottomFade;
uniform float uBottomFadeHeight;
uniform float uBottomFadeFeather;

out vec4 fragColor;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

vec2 getIntegerCellPx() {
  // Exact 36px x 36px integer display pixels (3x3 major grid = 108px)
  return vec2(36.0, 36.0);
}

vec2 distortUV_L2(vec2 uv) {
  vec2 cellPx = getIntegerCellPx();
  vec2 cellSize = cellPx / uResolution;
  vec2 pos = vec2(0.5, 0.5);
  vec2 offsetUv = uv - pos;
  vec2 cell = floor(offsetUv / cellSize);
  vec2 cellCenter = (cell + 0.5) * cellSize;
  vec2 pixelatedCoord = cellCenter + pos;
  return vec2(
    mix(uv.x, pixelatedCoord.x, 1.0),
    mix(uv.y, pixelatedCoord.y, 1.0)
  );
}

float getGridLineMask(vec2 uv) {
  if (uShowGrid <= 0 || uGridOpacity <= 0.001) return 0.0;
  
  vec2 cellPx = getIntegerCellPx();

  // Pixel-Perfect screen integer coordinates aligned to screen center
  vec2 screenPx = floor(gl_FragCoord.xy);
  vec2 centerPx = floor(uResolution * 0.5);
  vec2 offsetPx = screenPx - centerPx;

  // Compute exact integer pixel distances inside each cell
  vec2 cellIndex = floor(offsetPx / cellPx);
  vec2 distInCell = mod(offsetPx, cellPx);
  distInCell = mix(distInCell, distInCell + cellPx, step(distInCell, vec2(0.0)));

  vec2 distFromBorderPx = min(distInCell, cellPx - distInCell);
  float minEdgeDistPx = min(distFromBorderPx.x, distFromBorderPx.y);

  // Razor-sharp 1.0 integer pixel line width
  float targetLineWidth = max(floor(uGridLineWidth + 0.5), 1.0);
  float halfWidth = targetLineWidth * 0.5;
  float lineMask = 1.0 - smoothstep(halfWidth - 0.5, halfWidth + 0.5, minEdgeDistPx);

  if (lineMask <= 0.0) return 0.0;

  // 3x3 Major Grid Line Hierarchy: Major lines = 100% opacity, Inner lines = 70% opacity
  bool isNearVertLine = distFromBorderPx.x < distFromBorderPx.y;
  float lineIdx = isNearVertLine ? cellIndex.x : cellIndex.y;

  float mod3 = abs(mod(lineIdx, 3.0));
  bool isMajorGrid = (mod3 < 0.1 || mod3 > 2.9);

  float opacityScale = isMajorGrid ? 1.0 : 0.7; // Inner grid lines opacity set to 0.7 (70%)
  return lineMask * opacityScale;
}

float getBayerFromCoordLevelScaled_L3(vec2 pixelpos, float scale) {
  float finalBayer = 0.0;
  float finalDivisor = 0.0;
  float layerMult = 1.0;
  for(float bayerLevel = 4.0; bayerLevel >= 1.0; bayerLevel--) {
    float bayerSize = exp2(bayerLevel) * 0.5 / max(scale, 0.0001);
    vec2 bayercoord = mod(floor(pixelpos.xy / bayerSize), 2.0);
    layerMult *= 4.0;
    float byxx2 = bayercoord.x * 2.0;
    finalBayer += mix(byxx2, 3.0 - byxx2, bayercoord.y) / 3.0 * layerMult;
    finalDivisor += layerMult;
  }
  return (finalBayer / finalDivisor - 0.006);
}

float getBayerNoise_L3(vec2 st, float scale) {
  vec2 center = uResolution * 0.5;
  vec2 centered = st * uResolution - center;
  return getBayerFromCoordLevelScaled_L3(centered + center, scale);
}

vec3 dither_L3(vec3 color, vec2 st) {
  float noise = getBayerNoise_L3(st, uDitherScale);
  float dither_threshold = max(0.0001, uL3_Dither);
  float num_levels = 1.0 / dither_threshold;
  return floor(color * num_levels + noise) / num_levels;
}

float getBottomFade(vec2 st) {
  if (uUseBottomFade <= 0) return 1.0;
  return 1.0 - smoothstep(uBottomFadeHeight - uBottomFadeFeather, uBottomFadeHeight, st.y);
}

float getHollowMask(vec2 st) {
  if (uHollowRadius <= 0.0005) return 1.0;
  vec2 centerUv = st - vec2(0.5);
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  centerUv.x *= aspect;
  float effectiveRadius = uHollowRadius * clamp(aspect, 0.45, 1.0);
  return smoothstep(effectiveRadius, effectiveRadius + uHollowFeather, length(centerUv));
}

vec3 getLeveledColor(vec2 rawUv) {
  vec2 sampleSt = distortUV_L2(rawUv);
  vec3 sampled = vec3(0.0);

  float bottomFade = getBottomFade(sampleSt);
  float hollowMask = getHollowMask(sampleSt);
  float maskFactor = hollowMask * bottomFade;

  // Pass 4 Mouse Liquify Fluid Trail texture sampling
  vec3 liquifyTrailRgb = texture(uLiquifyTrailTexture, sampleSt).rgb;
  float liquifyTrailIntensity = clamp(length(liquifyTrailRgb) * 1.6, 0.0, 1.0);

  if (uUseTurbulence > 0) {
    vec2 aspectUv = sampleSt;
    aspectUv.x *= (uResolution.x / max(uResolution.y, 1.0)) * max(uAspectScale, 0.05);

    vec2 st = aspectUv * (uNoiseScale * 2.2);

    vec2 warp = vec2(
      snoise(st + vec2(uTime * uNoiseSpeed * 0.20, uTime * uNoiseSpeed * 0.15)),
      snoise(st + vec2(5.2, 1.3) + uTime * uNoiseSpeed * 0.18)
    );

    float n1 = snoise(st + warp * max(uTurbulenceAmount, 0.01) * 3.0 + vec2(uTime * uNoiseSpeed * 0.15, 0.0));
    float n2 = snoise(st * 2.2 + vec2(3.7, 7.1) - uTime * uNoiseSpeed * 0.25);
    float n3 = snoise(st * 0.8 + vec2(1.3, 4.9) + vec2(n1, n2) * 1.8);

    float rawVal = (n1 * 0.45 + n2 * 0.35 + n3 * 0.20) * 0.5 + 0.5;

    float thresholdCut = mix(0.52, 0.74, clamp(uRippleFrequency * 0.35, 0.0, 1.0));
    float sparseBlob = smoothstep(thresholdCut, thresholdCut + 0.22, rawVal);

    float patternVal = pow(sparseBlob, max(uRippleWidth * 0.7, 0.1));

    // Combine procedural pattern with Pass 4 Mouse Liquify Fluid Trail
    float intensity = clamp(patternVal * maskFactor + liquifyTrailIntensity * 0.90, 0.0, 1.0);
    sampled = vec3(intensity);
  }

  float inB = uInBlack / 255.0;
  float inW = uInWhite / 255.0;
  float normMid = clamp((uInMid - uInBlack) / max(uInWhite - uInBlack, 1.0), 0.005, 0.995);
  float inGamma = clamp(log(0.5) / log(normMid), 0.05, 10.0);

  vec3 leveled = clamp((sampled - vec3(inB)) / max(inW - inB, 0.0001), 0.0, 1.0);
  return pow(leveled, vec3(1.0 / inGamma));
}

void main() {
  vec2 uv = vTextureCoord;

  vec3 leveledColor = getLeveledColor(uv);

  float rawIntensity = dot(leveledColor, vec3(0.299, 0.587, 0.114));

  vec3 ditheredGrayColor = dither_L3(leveledColor, uv);
  float gray = dot(ditheredGrayColor, vec3(0.299, 0.587, 0.114));

  vec2 pixelPos = floor(uv * uResolution);
  vec2 cellOffset = mod(pixelPos, uWhiteSpacing);
  vec2 blockOrigin = floor(pixelPos / uWhiteSpacing) * uWhiteSpacing;
  vec2 blockCenterUv = (blockOrigin + uWhiteSpacing * 0.5) / uResolution;

  vec3 dotRefColor = getLeveledColor(blockCenterUv);
  float origGray = dot(dotRefColor, vec3(0.299, 0.587, 0.114));

  bool isWhiteHighlight = (origGray >= uWhiteCutoff && cellOffset.x < 2.0 && cellOffset.y < 2.0);

  float primaryThreshold = mix(0.01, 0.90, clamp(1.0 - uEdgeColorWidth, 0.0, 1.0));

  vec3 blobTone;
  if (rawIntensity < primaryThreshold) {
    blobTone = uSecondaryColor;
  } else {
    blobTone = uGreenColor;
  }

  vec3 paletteColor;
  float pixelAlpha = uOpacity;

  if (isWhiteHighlight) {
    paletteColor = uWhiteColor;
  } else if (gray < 0.05) {
    paletteColor = uDarkColor;
    if (uTransparentDark > 0) {
      pixelAlpha = 0.0;
    }
  } else {
    paletteColor = blobTone;
  }

  vec3 ditheredOriginalRgb = dither_L3(leveledColor, uv);
  if (isWhiteHighlight) {
    ditheredOriginalRgb = vec3(1.0);
  }

  vec3 finalColor = mix(paletteColor, ditheredOriginalRgb, clamp(uColorMix, 0.0, 1.0));

  float gridMask = getGridLineMask(uv);
  if (gridMask > 0.0) {
    finalColor = mix(finalColor, uGridColor, gridMask * clamp(uGridOpacity, 0.0, 1.0));
  }

  fragColor = vec4(finalColor, pixelAlpha);
}`;

export class DitherShaderEngine {
  canvas: HTMLCanvasElement;
  gl: WebGL2RenderingContext;
  program: WebGLProgram;
  vertexBuffer: WebGLBuffer;
  posAttrib: number;
  uniforms: Record<string, WebGLUniformLocation | null>;

  pass4: Pass4MouseLiquify;

  params: Required<DitherShaderParams>;
  isRunning: boolean = false;
  animFrameId: number | null = null;
  totalTime: number = 0.0;

  curDarkRgb: [number, number, number];
  curPrimaryRgb: [number, number, number];
  curSecondaryRgb: [number, number, number];
  curGridRgb: [number, number, number];
  curWhiteRgb: [number, number, number];

  // Mouse Tracking
  targetMouseX: number = 0.5;
  targetMouseY: number = 0.5;
  prevMouseX: number = 0.5;
  prevMouseY: number = 0.5;
  curMouseX: number = 0.5;
  curMouseY: number = 0.5;

  constructor(canvas: HTMLCanvasElement, initialParams?: DitherShaderParams) {
    this.canvas = canvas;
    const gl = canvas.getContext('webgl2', { preserveDrawingBuffer: true, alpha: true });
    if (!gl) {
      throw new Error('[DitherShaderEngine] WebGL2 is not supported.');
    }
    this.gl = gl;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Initial Parameters matching bottom-dither-demo.html & Pass 4
    this.params = {
      pixelate: 0.29,
      ditherLevels: 2,
      ditherScale: 0.31,
      exposure: -0.10,
      whiteCutoff: 0.76,
      whiteSpacing: 16.0,
      inBlack: 39,
      inMid: 145,
      inWhite: 348,
      colorMix: 0.0,
      opacity: 1.0,
      transparentDark: 0,
      darkColor: '#000000',
      primaryColor: '#38ef7d',   // Neon Green
      secondaryColor: '#d4f952', // Yellow Green
      edgeColorWidth: 0.98,      // Edge Color Width = 0.98
      whiteColor: '#ffffff',
      showGrid: 1,
      gridOpacity: 0.24,
      gridColor: '#a8a8a8',       // Silver Grey
      gridLineWidth: 1.0,
      useTurbulence: 1,
      patternMode: 2,
      aspectScale: 1.00,
      rippleFrequency: 2.50,      // Blob Threshold = 2.50
      rippleWidth: 1.40,
      hollowRadius: 0.21,
      hollowFeather: 0.32,
      noiseScale: 0.40,
      noiseSpeed: 0.135,
      turbulenceAmount: 0.34,
      useBottomFade: 1,
      bottomFadeHeight: 1.00,
      bottomFadeFeather: 0.05,
      liquifyRadius: 27,
      liquifyStrength: 35,
      liquifyTurbulence: 50,
      liquifyTail: 70,
      ...initialParams
    };

    // Instantiate Pass 4 Mouse Liquify Engine
    this.pass4 = new Pass4MouseLiquify(gl, {
      radius: this.params.liquifyRadius,
      strength: this.params.liquifyStrength,
      turbulence: this.params.liquifyTurbulence,
      tail: this.params.liquifyTail,
      tint: this.params.primaryColor
    });

    this.curDarkRgb = normalizeColor(this.params.darkColor);
    this.curPrimaryRgb = normalizeColor(this.params.primaryColor);
    this.curSecondaryRgb = normalizeColor(this.params.secondaryColor);
    this.curGridRgb = normalizeColor(this.params.gridColor);
    this.curWhiteRgb = normalizeColor(this.params.whiteColor);

    // Compile Shaders
    const vs = this._compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = this._compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);

    const prog = gl.createProgram();
    if (!prog) throw new Error('[DitherShaderEngine] Failed to create WebGL program.');
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      throw new Error('[DitherShaderEngine] Link error: ' + gl.getProgramInfoLog(prog));
    }
    this.program = prog;

    this.vertexBuffer = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1
    ]), gl.STATIC_DRAW);

    this.posAttrib = gl.getAttribLocation(prog, 'position');

    this.uniforms = {
      uResolution: gl.getUniformLocation(prog, 'uResolution'),
      uMousePos: gl.getUniformLocation(prog, 'uMousePos'),
      uEngineMode: gl.getUniformLocation(prog, 'uEngineMode'),
      uL2_Amount: gl.getUniformLocation(prog, 'uL2_Amount'),
      uL3_Dither: gl.getUniformLocation(prog, 'uL3_Dither'),
      uDitherScale: gl.getUniformLocation(prog, 'uDitherScale'),
      uExposure: gl.getUniformLocation(prog, 'uExposure'),
      uWhiteCutoff: gl.getUniformLocation(prog, 'uWhiteCutoff'),
      uWhiteSpacing: gl.getUniformLocation(prog, 'uWhiteSpacing'),
      uHover: gl.getUniformLocation(prog, 'uHover'),
      uInBlack: gl.getUniformLocation(prog, 'uInBlack'),
      uInMid: gl.getUniformLocation(prog, 'uInMid'),
      uInWhite: gl.getUniformLocation(prog, 'uInWhite'),
      uColorMix: gl.getUniformLocation(prog, 'uColorMix'),
      uOpacity: gl.getUniformLocation(prog, 'uOpacity'),
      uTransparentDark: gl.getUniformLocation(prog, 'uTransparentDark'),
      uDarkColor: gl.getUniformLocation(prog, 'uDarkColor'),
      uGreenColor: gl.getUniformLocation(prog, 'uGreenColor'),
      uSecondaryColor: gl.getUniformLocation(prog, 'uSecondaryColor'),
      uEdgeColorWidth: gl.getUniformLocation(prog, 'uEdgeColorWidth'),
      uWhiteColor: gl.getUniformLocation(prog, 'uWhiteColor'),
      uShowGrid: gl.getUniformLocation(prog, 'uShowGrid'),
      uGridOpacity: gl.getUniformLocation(prog, 'uGridOpacity'),
      uGridColor: gl.getUniformLocation(prog, 'uGridColor'),
      uGridLineWidth: gl.getUniformLocation(prog, 'uGridLineWidth'),
      uTime: gl.getUniformLocation(prog, 'uTime'),
      uUseTurbulence: gl.getUniformLocation(prog, 'uUseTurbulence'),
      uPatternMode: gl.getUniformLocation(prog, 'uPatternMode'),
      uAspectScale: gl.getUniformLocation(prog, 'uAspectScale'),
      uRippleFrequency: gl.getUniformLocation(prog, 'uRippleFrequency'),
      uRippleWidth: gl.getUniformLocation(prog, 'uRippleWidth'),
      uHollowRadius: gl.getUniformLocation(prog, 'uHollowRadius'),
      uHollowFeather: gl.getUniformLocation(prog, 'uHollowFeather'),
      uNoiseScale: gl.getUniformLocation(prog, 'uNoiseScale'),
      uNoiseSpeed: gl.getUniformLocation(prog, 'uNoiseSpeed'),
      uTurbulenceAmount: gl.getUniformLocation(prog, 'uTurbulenceAmount'),
      uUseBottomFade: gl.getUniformLocation(prog, 'uUseBottomFade'),
      uBottomFadeHeight: gl.getUniformLocation(prog, 'uBottomFadeHeight'),
      uBottomFadeFeather: gl.getUniformLocation(prog, 'uBottomFadeFeather'),
      uLiquifyTrailTexture: gl.getUniformLocation(prog, 'uLiquifyTrailTexture')
    };

    // Attach Mouse Events
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    window.addEventListener('mousemove', this._onMouseMove);
    window.addEventListener('mouseleave', this._onMouseLeave);

    this._renderFrame = this._renderFrame.bind(this);
  }

  private isMouseActive: boolean = false;

  private _onMouseMove(e: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const isInside = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );

      if (isInside) {
        if (!this.isMouseActive) {
          this.isMouseActive = true;
          const x = (e.clientX - rect.left) / rect.width;
          const y = 1.0 - (e.clientY - rect.top) / rect.height;
          this.targetMouseX = x;
          this.targetMouseY = y;
          this.curMouseX = x;
          this.curMouseY = y;
          this.prevMouseX = x;
          this.prevMouseY = y;
        } else {
          const x = (e.clientX - rect.left) / rect.width;
          const y = 1.0 - (e.clientY - rect.top) / rect.height;
          this.targetMouseX = x;
          this.targetMouseY = y;
        }
      } else {
        this._deactivateMouse();
      }
    }
  }

  private _onMouseLeave() {
    this._deactivateMouse();
  }

  private _deactivateMouse() {
    this.isMouseActive = false;
    this.targetMouseX = -9999;
    this.targetMouseY = -9999;
    this.curMouseX = -9999;
    this.curMouseY = -9999;
    this.prevMouseX = -9999;
    this.prevMouseY = -9999;
  }

  private _compileShader(type: number, source: string): WebGLShader {
    const gl = this.gl;
    const shader = gl.createShader(type)!;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const info = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error('[DitherShaderEngine] Shader compile error: ' + info);
    }
    return shader;
  }

  setParams(newParams: DitherShaderParams) {
    Object.assign(this.params, newParams);
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.animFrameId = requestAnimationFrame(this._renderFrame);
    }
  }

  stop() {
    if (this.isRunning) {
      this.isRunning = false;
      if (this.animFrameId !== null) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }
    }
  }

  private _renderFrame() {
    if (!this.isRunning) return;

    this.totalTime += 0.016;

    this.prevMouseX = this.curMouseX;
    this.prevMouseY = this.curMouseY;
    this.curMouseX += (this.targetMouseX - this.curMouseX) * 0.25;
    this.curMouseY += (this.targetMouseY - this.curMouseY) * 0.25;

    const p = this.params;
    const gl = this.gl;
    const canvas = this.canvas;

    const parentRect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : canvas.getBoundingClientRect();
    const targetWidth = Math.floor(parentRect.width || canvas.clientWidth || 300);
    const targetHeight = Math.floor(parentRect.height || canvas.clientHeight || 300);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      gl.viewport(0, 0, targetWidth, targetHeight);
    }

    // Step 1: Render Pass 4 Mouse Liquify Fluid Simulation Ping-Pong FBO
    this.pass4.resize(canvas.width, canvas.height);
    const trailTex = this.pass4.render(this.totalTime, this.curMouseX, this.curMouseY, this.prevMouseX, this.prevMouseY);

    // Step 2: Render Main Dither Shader Output
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, canvas.width, canvas.height);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(this.program);

    // Bind Pass 4 Liquify Trail Texture to TEXTURE0
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, trailTex);
    gl.uniform1i(this.uniforms.uLiquifyTrailTexture, 0);

    const targetDarkRgb = normalizeColor(p.darkColor);
    const targetPrimaryRgb = normalizeColor(p.primaryColor);
    const targetSecondaryRgb = normalizeColor(p.secondaryColor);
    const targetGridRgb = normalizeColor(p.gridColor);
    const targetWhiteRgb = normalizeColor(p.whiteColor);

    this.curDarkRgb[0] += (targetDarkRgb[0] - this.curDarkRgb[0]) * 0.08;
    this.curDarkRgb[1] += (targetDarkRgb[1] - this.curDarkRgb[1]) * 0.08;
    this.curDarkRgb[2] += (targetDarkRgb[2] - this.curDarkRgb[2]) * 0.08;

    this.curPrimaryRgb[0] += (targetPrimaryRgb[0] - this.curPrimaryRgb[0]) * 0.08;
    this.curPrimaryRgb[1] += (targetPrimaryRgb[1] - this.curPrimaryRgb[1]) * 0.08;
    this.curPrimaryRgb[2] += (targetPrimaryRgb[2] - this.curPrimaryRgb[2]) * 0.08;

    this.curSecondaryRgb[0] += (targetSecondaryRgb[0] - this.curSecondaryRgb[0]) * 0.08;
    this.curSecondaryRgb[1] += (targetSecondaryRgb[1] - this.curSecondaryRgb[1]) * 0.08;
    this.curSecondaryRgb[2] += (targetSecondaryRgb[2] - this.curSecondaryRgb[2]) * 0.08;

    this.curGridRgb[0] += (targetGridRgb[0] - this.curGridRgb[0]) * 0.08;
    this.curGridRgb[1] += (targetGridRgb[1] - this.curGridRgb[1]) * 0.08;
    this.curGridRgb[2] += (targetGridRgb[2] - this.curGridRgb[2]) * 0.08;

    this.curWhiteRgb[0] += (targetWhiteRgb[0] - this.curWhiteRgb[0]) * 0.08;
    this.curWhiteRgb[1] += (targetWhiteRgb[1] - this.curWhiteRgb[1]) * 0.08;
    this.curWhiteRgb[2] += (targetWhiteRgb[2] - this.curWhiteRgb[2]) * 0.08;

    const u = this.uniforms;
    gl.uniform2f(u.uResolution, canvas.width, canvas.height);
    gl.uniform2f(u.uMousePos, this.curMouseX, this.curMouseY);
    gl.uniform1i(u.uEngineMode, 3);
    gl.uniform1f(u.uL2_Amount, p.pixelate);
    gl.uniform1f(u.uL3_Dither, 1.0 / Math.max(p.ditherLevels, 1.0));
    gl.uniform1f(u.uDitherScale, p.ditherScale);
    gl.uniform1f(u.uExposure, p.exposure);
    gl.uniform1f(u.uWhiteCutoff, p.whiteCutoff);
    gl.uniform1f(u.uWhiteSpacing, p.whiteSpacing);
    gl.uniform1f(u.uHover, 1.0);
    gl.uniform1f(u.uInBlack, p.inBlack);
    gl.uniform1f(u.uInMid, p.inMid);
    gl.uniform1f(u.uInWhite, p.inWhite);
    gl.uniform1f(u.uColorMix, p.colorMix);
    gl.uniform1f(u.uOpacity, p.opacity);
    gl.uniform1i(u.uTransparentDark, p.transparentDark ? 1 : 0);

    gl.uniform3fv(u.uDarkColor, this.curDarkRgb);
    gl.uniform3fv(u.uGreenColor, this.curPrimaryRgb);
    gl.uniform3fv(u.uSecondaryColor, this.curSecondaryRgb);
    gl.uniform1f(u.uEdgeColorWidth, p.edgeColorWidth);
    gl.uniform3fv(u.uWhiteColor, this.curWhiteRgb);

    gl.uniform1i(u.uShowGrid, p.showGrid ? 1 : 0);
    gl.uniform1f(u.uGridOpacity, p.gridOpacity);
    gl.uniform3fv(u.uGridColor, this.curGridRgb);
    gl.uniform1f(u.uGridLineWidth, p.gridLineWidth);

    gl.uniform1f(u.uTime, this.totalTime);
    gl.uniform1i(u.uUseTurbulence, p.useTurbulence ? 1 : 0);
    gl.uniform1i(u.uPatternMode, 2);
    gl.uniform1f(u.uAspectScale, p.aspectScale);
    gl.uniform1f(u.uRippleFrequency, p.rippleFrequency);
    gl.uniform1f(u.uRippleWidth, p.rippleWidth);
    gl.uniform1f(u.uHollowRadius, p.hollowRadius);
    gl.uniform1f(u.uHollowFeather, p.hollowFeather);
    gl.uniform1f(u.uNoiseScale, p.noiseScale);
    gl.uniform1f(u.uNoiseSpeed, p.noiseSpeed);
    gl.uniform1f(u.uTurbulenceAmount, p.turbulenceAmount);

    gl.uniform1i(u.uUseBottomFade, p.useBottomFade ? 1 : 0);
    gl.uniform1f(u.uBottomFadeHeight, p.bottomFadeHeight);
    gl.uniform1f(u.uBottomFadeFeather, p.bottomFadeFeather);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.enableVertexAttribArray(this.posAttrib);
    gl.vertexAttribPointer(this.posAttrib, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    this.animFrameId = requestAnimationFrame(this._renderFrame);
  }

  destroy() {
    this.stop();
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseleave', this._onMouseLeave);
    if (this.pass4) this.pass4.destroy();
    if (this.gl) {
      const gl = this.gl;
      if (this.vertexBuffer) gl.deleteBuffer(this.vertexBuffer);
      if (this.program) gl.deleteProgram(this.program);
    }
  }
}
