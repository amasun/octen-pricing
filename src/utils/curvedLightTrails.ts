/**
 * CurvedLightTrails.ts
 * WebGL2 Curved Light Trail / Speed Line Warp Shader Engine
 */

function normalizeColor(color: string | number[]): [number, number, number] {
  if (typeof color === 'string') {
    const bigint = parseInt(color.replace('#', ''), 16);
    return [((bigint >> 16) & 255) / 255.0, ((bigint >> 8) & 255) / 255.0, (bigint & 255) / 255.0];
  }
  if (Array.isArray(color) && color.length >= 3) {
    if (color[0] > 1 || color[1] > 1 || color[2] > 1) {
      return [color[0] / 255.0, color[1] / 255.0, color[2] / 255.0];
    }
    return [color[0], color[1], color[2]];
  }
  return [1.0, 1.0, 1.0];
}

function getHoldWave(time: number, transDuration = 1.5, holdDuration = 2.0): number {
  const cycle = 2 * transDuration + 2 * holdDuration;
  const phase = ((time % cycle) + cycle) % cycle;

  if (phase < holdDuration) {
    return 1.0;
  } else if (phase < holdDuration + transDuration) {
    const u = (phase - holdDuration) / transDuration;
    return 0.5 + 0.5 * Math.cos(Math.PI * u);
  } else if (phase < 2 * holdDuration + transDuration) {
    return 0.0;
  } else {
    const u = (phase - (2 * holdDuration + transDuration)) / transDuration;
    return 0.5 - 0.5 * Math.cos(Math.PI * u);
  }
}

const VERTEX_SHADER = `#version 300 es
in vec2 position;
out vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform vec2 uResolution;
uniform float uTime;
uniform float uWarpStrength;
uniform float uWarpWidth;
uniform float uHeightScale;
uniform float uSpeed;
uniform float uLineDensity;
uniform float uLineThickness;
uniform float uStreakLength;
uniform float uIntensity;
uniform float uDispersion;
uniform float uChromatic;
uniform float uChromaticAngle;
uniform int uChromaticMode;
uniform vec3 uBaseColor;
uniform vec3 uTint;
uniform float uTintAmount;
uniform float uOpacity;
uniform float uGlow;
uniform int uColorTheme;

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

vec2 hash21(float p) {
  vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.zy) * p3.zy);
}

float renderBaseLineIntensity(vec2 warpedUv) {
  vec2 p = warpedUv - 0.5;
  float distY = p.y;
  float pixelHeight = 1.0 / max(uResolution.y, 1.0);

  float accumulated = 0.0;
  float numLines = clamp(uLineDensity, 10.0, 200.0);

  for (float i = 0.0; i < 200.0; i += 1.0) {
    if (i >= numLines) break;

    vec2 rand = hash21(i * 17.13 + 1.0);
    float speed = mix(0.5, 1.8, rand.x) * uSpeed;

    float lineY = (hash11(i * 43.21) - 0.5) * 0.92 * uHeightScale;

    float xOffset = hash11(i * 91.7);
    float trailX = mod(p.x - uTime * speed * 0.35 + xOffset + 0.5, 1.4) - 0.7;

    float halfLen = uStreakLength * mix(0.4, 1.8, hash11(i * 33.7)) * 0.5;
    float xDist = trailX;

    float streakIntensity = 0.0;
    if (abs(xDist) < halfLen) {
      float normX = xDist / halfLen;
      float bellCurve = cos(normX * 1.57079632679);
      streakIntensity = pow(bellCurve, 2.0);
    }

    if (streakIntensity > 0.001) {
      float thick = uLineThickness * (0.6 + 0.8 * rand.y) * (0.3 + 0.7 * streakIntensity);
      float dy = abs(distY - lineY);

      // Core crisp center line + Dual-layer Gaussian soft bloom for silky smooth edges
      float coreGaussian = exp(-pow(dy / max(thick, 0.0001), 2.0));
      float softBloom = exp(-pow(dy / max(thick * 4.2, 0.0001), 1.2)) * 0.45;
      float yGaussian = coreGaussian + softBloom;

      // Sub-pixel Screen-Space Derivative Anti-Aliasing (fwidth + pixelHeight)
      float aaWidth = max(fwidth(dy) * 2.0, pixelHeight * 4.0);
      float edgeAA = smoothstep(thick * 4.5 + aaWidth, 0.0, dy);
      float yIntensity = yGaussian * edgeAA;

      float lineVal = yIntensity * streakIntensity * uGlow;
      accumulated += lineVal;
    }
  }

  return accumulated * uIntensity;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  vec2 p = uv - 0.5;

  float xScaled = p.x * uWarpWidth;
  float xSq = xScaled * xScaled;
  float warpFactor = 1.0 + xSq * uWarpStrength * 3.2;

  vec2 warpedP = vec2(p.x, p.y / max(warpFactor, 0.0001));
  vec2 warpedUv = warpedP + 0.5;

  float vignette = 1.0 - smoothstep(0.45, 0.95, length(warpedP));

  vec2 radialDir = normalize(warpedP + vec2(0.0001));
  vec2 radialShift = radialDir * uDispersion * dot(warpedP, warpedP);

  float rad = uChromaticAngle * 3.14159265 / 180.0;
  vec2 dirShift = vec2(cos(rad), sin(rad)) * uChromatic * 0.05;

  vec2 totalShift = radialShift + dirShift;
  float shiftMagnitude = length(totalShift);

  float baseIntensity = renderBaseLineIntensity(warpedUv);

  vec3 finalColor = vec3(0.0);

  if (shiftMagnitude > 0.0001) {
    float s1 = renderBaseLineIntensity(warpedUv + totalShift * 1.0);
    float s2 = renderBaseLineIntensity(warpedUv + totalShift * 0.5);
    float s3 = baseIntensity;
    float s4 = renderBaseLineIntensity(warpedUv - totalShift * 0.5);
    float s5 = renderBaseLineIntensity(warpedUv - totalShift * 1.0);

    if (uChromaticMode == 1) {
      vec3 redFringe  = vec3(1.0, 0.10, 0.05) * s1;
      vec3 whiteCore  = mix(uBaseColor, vec3(0.95), 0.7) * s3;
      vec3 cyanFringe = vec3(0.05, 0.80, 1.0) * s5;
      finalColor = redFringe + whiteCore + cyanFringe;
    } else {
      vec3 c1, c2, c3, c4, c5;

      if (uColorTheme == 0) {
        c1 = vec3(1.0, 0.38, 0.05) * s1;
        c2 = vec3(1.0, 0.72, 0.15) * s2;
        c3 = mix(uBaseColor, vec3(0.95), 0.6) * s3;
        c4 = vec3(0.1, 0.85, 1.0)  * s4;
        c5 = mix(uBaseColor, vec3(0.08, 0.45, 1.0), 0.5) * s5;
      } else if (uColorTheme == 1) {
        c1 = vec3(1.0, 0.05, 0.65) * s1;
        c2 = vec3(0.85, 0.20, 1.0) * s2;
        c3 = vec3(0.95, 0.95, 1.0) * s3;
        c4 = vec3(0.0, 0.95, 0.90) * s4;
        c5 = vec3(0.0, 0.50, 1.0)  * s5;
      } else if (uColorTheme == 2) {
        c1 = vec3(1.0, 0.15, 0.02) * s1;
        c2 = vec3(1.0, 0.50, 0.05) * s2;
        c3 = vec3(1.0, 0.88, 0.40) * s3;
        c4 = vec3(0.95, 0.95, 0.7) * s4;
        c5 = vec3(0.80, 0.60, 0.1) * s5;
      } else {
        c1 = vec3(0.0, 0.65, 0.35) * s1;
        c2 = vec3(0.0, 0.90, 0.55) * s2;
        c3 = vec3(0.8, 1.0, 0.9)   * s3;
        c4 = vec3(0.1, 0.85, 0.75) * s4;
        c5 = vec3(0.05, 0.45, 0.8) * s5;
      }

      finalColor = c1 + c2 + c3 + c4 + c5;
    }
  } else {
    vec3 themeBase = uBaseColor;
    if (uColorTheme == 1) {
      themeBase = mix(vec3(0.0, 0.95, 0.90), uBaseColor, 0.5);
    } else if (uColorTheme == 2) {
      themeBase = mix(vec3(1.0, 0.70, 0.10), uBaseColor, 0.5);
    } else if (uColorTheme == 3) {
      themeBase = mix(vec3(0.05, 1.0, 0.50), uBaseColor, 0.5);
    }
    finalColor = themeBase * baseIntensity;
  }

  if (uTintAmount > 0.001) {
    vec3 tinted = finalColor * uTint;
    finalColor = mix(finalColor, tinted, clamp(uTintAmount, 0.0, 1.0));
  }

  vec3 mappedColor = finalColor / (1.0 + finalColor * 0.35);
  float finalAlpha = clamp(uOpacity, 0.0, 1.0);
  fragColor = vec4(mappedColor * vignette, finalAlpha);
}`;

export interface CurvedLightTrailsParams {
  warpStrength?: number;
  warpWidth?: number;
  heightScale?: number;
  heightAnim?: boolean;
  heightAnimMin?: number;
  heightAnimMax?: number;
  heightAnimSpeed?: number;
  speed?: number;
  lineDensity?: number;
  densityAnim?: boolean;
  densityAnimMin?: number;
  densityAnimMax?: number;
  densityAnimSpeed?: number;
  animHoldDuration?: number;
  animTransDuration?: number;
  lineThickness?: number;
  streakLength?: number;
  noiseScale?: number;
  intensity?: number;
  dispersion?: number;
  chromatic?: number;
  chromaticAngle?: number;
  chromaticMode?: number;
  baseColor?: string;
  tintColor?: string;
  tintAmount?: number;
  opacity?: number;
  glow?: number;
  colorTheme?: number;
}

export class CurvedLightTrails {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram;
  private uniforms: Record<string, WebGLUniformLocation> = {};
  private vao: WebGLVertexArrayObject | null = null;
  private params: CurvedLightTrailsParams;
  private animFrameId: number | null = null;
  private startTime: number = 0;
  private isRunning: boolean = false;

  constructor(canvas: HTMLCanvasElement, params: CurvedLightTrailsParams = {}) {
    this.canvas = canvas;
    const gl = canvas.getContext("webgl2", { antialias: true, alpha: true, powerPreference: "high-performance" });
    if (!gl) {
      throw new Error("WebGL2 is not supported on this browser/hardware context.");
    }
    this.gl = gl;

    this.params = Object.assign({
      warpStrength: 3.78,
      warpWidth: 1.10,
      heightScale: 0.20,
      heightAnim: true,
      heightAnimMin: 0.02,
      heightAnimMax: 0.23,
      heightAnimSpeed: 1.0,
      speed: 1.00,
      lineDensity: 24,
      densityAnim: true,
      densityAnimMin: 12,
      densityAnimMax: 60,
      densityAnimSpeed: 1.0,
      animHoldDuration: 2.0,
      animTransDuration: 1.5,
      lineThickness: 0.0012,
      streakLength: 0.50,
      noiseScale: 1.00,
      intensity: 0.5,
      dispersion: 0.000,
      chromatic: 2.000,
      chromaticAngle: 0.0,
      chromaticMode: 0,
      baseColor: '#b892dd',
      tintColor: '#00b32d',
      tintAmount: 0.00,
      opacity: 0.85,
      glow: 1.00,
      colorTheme: 0
    }, params);

    this._initWebGL();
    this._renderFrame = this._renderFrame.bind(this);
  }

  private _initWebGL() {
    const gl = this.canvas.getContext('webgl2', { 
      alpha: true, 
      antialias: true, 
      preserveDrawingBuffer: true 
    });
    if (!gl) {
      throw new Error('[CurvedLightTrails] WebGL2 not supported.');
    }
    this.gl = gl;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const vs = this._compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = this._compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);

    const prog = gl.createProgram();
    if (!prog) throw new Error('[CurvedLightTrails] Failed to create GL program.');

    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      throw new Error('[CurvedLightTrails] Program link error: ' + gl.getProgramInfoLog(prog));
    }
    this.program = prog;

    const vBuf = gl.createBuffer();
    if (!vBuf) throw new Error('[CurvedLightTrails] Failed to create buffer.');
    this.vertexBuffer = vBuf;

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1
    ]), gl.STATIC_DRAW);

    this.uniforms = {
      uResolution: gl.getUniformLocation(prog, 'uResolution'),
      uTime: gl.getUniformLocation(prog, 'uTime'),
      uWarpStrength: gl.getUniformLocation(prog, 'uWarpStrength'),
      uWarpWidth: gl.getUniformLocation(prog, 'uWarpWidth'),
      uHeightScale: gl.getUniformLocation(prog, 'uHeightScale'),
      uSpeed: gl.getUniformLocation(prog, 'uSpeed'),
      uLineDensity: gl.getUniformLocation(prog, 'uLineDensity'),
      uLineThickness: gl.getUniformLocation(prog, 'uLineThickness'),
      uStreakLength: gl.getUniformLocation(prog, 'uStreakLength'),
      uIntensity: gl.getUniformLocation(prog, 'uIntensity'),
      uDispersion: gl.getUniformLocation(prog, 'uDispersion'),
      uChromatic: gl.getUniformLocation(prog, 'uChromatic'),
      uChromaticAngle: gl.getUniformLocation(prog, 'uChromaticAngle'),
      uChromaticMode: gl.getUniformLocation(prog, 'uChromaticMode'),
      uBaseColor: gl.getUniformLocation(prog, 'uBaseColor'),
      uTint: gl.getUniformLocation(prog, 'uTint'),
      uTintAmount: gl.getUniformLocation(prog, 'uTintAmount'),
      uOpacity: gl.getUniformLocation(prog, 'uOpacity'),
      uGlow: gl.getUniformLocation(prog, 'uGlow'),
      uColorTheme: gl.getUniformLocation(prog, 'uColorTheme')
    };
    this.posAttrib = gl.getAttribLocation(prog, 'position');
  }

  private _compileShader(type: number, source: string): WebGLShader {
    const gl = this.gl;
    const shader = gl.createShader(type);
    if (!shader) throw new Error('[CurvedLightTrails] Failed to create shader.');
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const info = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error('[CurvedLightTrails] Shader compile error: ' + info);
    }
    return shader;
  }

  setParams(newParams: CurvedLightTrailsParams) {
    Object.assign(this.params, newParams);
  }

  renderOnce(timeInSeconds?: number) {
    if (timeInSeconds !== undefined) {
      this.startTime = performance.now() - timeInSeconds * 1000;
    }
    const wasRunning = this.isRunning;
    this.isRunning = true;
    this._renderFrame(performance.now());
    if (!wasRunning) {
      this.stop();
    }
  }

  start(baseTimeInSeconds?: number) {
    if (baseTimeInSeconds !== undefined) {
      this.startTime = performance.now() - baseTimeInSeconds * 1000;
    }
    if (!this.isRunning) {
      this.isRunning = true;
      this.animFrameId = requestAnimationFrame(this._renderFrame);
    }
  }

  stop() {
    if (this.isRunning) {
      this.isRunning = false;
      if (this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }
    }
  }

  private _renderFrame(now: number) {
    if (!this.isRunning) return;

    const gl = this.gl;
    const canvas = this.canvas;

    // Match HiDPI devicePixelRatio (up to 2.0) to eliminate bilinear pixelation on high-res screens
    const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
    const parentRect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : canvas.getBoundingClientRect();
    const targetWidth = Math.floor((parentRect.width || canvas.clientWidth || 400) * dpr);
    const targetHeight = Math.floor((parentRect.height || canvas.clientHeight || 300) * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      gl.viewport(0, 0, targetWidth, targetHeight);
    }

    gl.useProgram(this.program);

    const elapsedTime = (now - this.startTime) * 0.001;
    const p = this.params;
    const u = this.uniforms;

    const baseRgb = normalizeColor(p.baseColor || '#b892dd');
    const tintRgb = normalizeColor(p.tintColor || '#00b32d');

    gl.uniform2f(u.uResolution, canvas.width, canvas.height);
    gl.uniform1f(u.uTime, elapsedTime);
    gl.uniform1f(u.uWarpStrength, p.warpStrength);
    gl.uniform1f(u.uWarpWidth, p.warpWidth);
    let currentHeightScale = p.heightScale;
    if (p.heightAnim) {
      const minH = p.heightAnimMin !== undefined ? p.heightAnimMin : 0.02;
      const maxH = p.heightAnimMax !== undefined ? p.heightAnimMax : 0.23;
      const holdT = p.animHoldDuration !== undefined ? p.animHoldDuration : 2.0;
      const transT = p.animTransDuration !== undefined ? p.animTransDuration : 1.5;
      const wave = getHoldWave(elapsedTime, transT, holdT);
      currentHeightScale = minH + (maxH - minH) * wave;
    }
    this.currentCalculatedHeight = currentHeightScale;

    gl.uniform1f(u.uHeightScale, currentHeightScale);
    gl.uniform1f(u.uSpeed, p.speed);

    let currentLineDensity = p.lineDensity;
    if (p.densityAnim) {
      const minD = p.densityAnimMin !== undefined ? p.densityAnimMin : 20;
      const maxD = p.densityAnimMax !== undefined ? p.densityAnimMax : 200;
      const holdT = p.animHoldDuration !== undefined ? p.animHoldDuration : 2.0;
      const transT = p.animTransDuration !== undefined ? p.animTransDuration : 1.5;
      const wave = getHoldWave(elapsedTime, transT, holdT);
      currentLineDensity = minD + (maxD - minD) * wave;
    }
    this.currentCalculatedDensity = currentLineDensity;

    gl.uniform1f(u.uLineDensity, currentLineDensity);
    gl.uniform1f(u.uLineThickness, p.lineThickness);
    gl.uniform1f(u.uStreakLength, p.streakLength);
    gl.uniform1f(u.uIntensity, p.intensity !== undefined ? p.intensity : 0.20);
    gl.uniform1f(u.uDispersion, p.dispersion !== undefined ? p.dispersion : 0.000);
    gl.uniform1f(u.uChromatic, p.chromatic || 0.0);
    gl.uniform1f(u.uChromaticAngle, p.chromaticAngle || 0.0);
    gl.uniform1i(u.uChromaticMode, p.chromaticMode || 0);
    gl.uniform3fv(u.uBaseColor, baseRgb);
    gl.uniform3fv(u.uTint, tintRgb);
    gl.uniform1f(u.uTintAmount, p.tintAmount || 0.0);
    gl.uniform1f(u.uOpacity, p.opacity !== undefined ? p.opacity : 0.31);
    gl.uniform1f(u.uGlow, p.glow);
    gl.uniform1i(u.uColorTheme, p.colorTheme);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.enableVertexAttribArray(this.posAttrib);
    gl.vertexAttribPointer(this.posAttrib, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    this.animFrameId = requestAnimationFrame(this._renderFrame);
  }

  destroy() {
    this.stop();
    if (this.gl) {
      const gl = this.gl;
      if (this.vertexBuffer) gl.deleteBuffer(this.vertexBuffer);
      if (this.program) gl.deleteProgram(this.program);
    }
  }
}
