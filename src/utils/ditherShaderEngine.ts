/**
 * ditherShaderEngine.ts
 * Standalone WebGL2 Bottom-Fade Dither Shader Engine with Pixel Grid Line Overlay
 * Converted for Octen AI Pricing Hero Background.
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
uniform sampler2D uInputTexture;
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

vec2 distortUV_L2(vec2 uv) {
  vec2 pos = vec2(0.5, 0.5);
  float aspectRatio = uResolution.x / max(uResolution.y, 1.0);
  float gridSize = (uL2_Amount + 0.005) * 0.083;
  float baseGrid = 1.0 / gridSize;
  vec2 cellSize = vec2(1.0 / (baseGrid * aspectRatio), 1.0 / baseGrid) * mix(aspectRatio, 1.0 / aspectRatio, 0.5);
  float skew = (0.5000 - 0.5) * 4.0;
  cellSize *= vec2(1.0 + max(skew, 0.0), 1.0 + max(-skew, 0.0));
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
  vec2 pos = vec2(0.5, 0.5);
  float aspectRatio = uResolution.x / max(uResolution.y, 1.0);
  float gridSize = (uL2_Amount + 0.005) * 0.083;
  float baseGrid = 1.0 / gridSize;
  vec2 cellSize = vec2(1.0 / (baseGrid * aspectRatio), 1.0 / baseGrid) * mix(aspectRatio, 1.0 / aspectRatio, 0.5);
  float skew = (0.5000 - 0.5) * 4.0;
  cellSize *= vec2(1.0 + max(skew, 0.0), 1.0 + max(-skew, 0.0));

  vec2 offsetUv = uv - pos;
  vec2 gridCoord = fract(offsetUv / cellSize);

  vec2 cellPx = cellSize * uResolution;
  vec2 distFromBorder = min(gridCoord * cellPx, (1.0 - gridCoord) * cellPx);
  float minEdgeDist = min(distFromBorder.x, distFromBorder.y);

  float halfWidth = max(uGridLineWidth * 0.5, 0.5);
  return 1.0 - smoothstep(halfWidth - 0.5, halfWidth + 0.5, minEdgeDist);
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
  centerUv.x *= uResolution.x / max(uResolution.y, 1.0);
  return smoothstep(uHollowRadius, uHollowRadius + uHollowFeather, length(centerUv));
}

vec3 getLeveledColor(vec2 rawUv) {
  vec2 sampleSt = distortUV_L2(rawUv);
  vec3 sampled = vec3(0.0);

  float bottomFade = getBottomFade(sampleSt);
  float hollowMask = getHollowMask(sampleSt);
  float maskFactor = hollowMask * bottomFade;

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

    float intensity = patternVal * maskFactor;
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

  params: Required<DitherShaderParams>;
  isRunning: boolean = false;
  animFrameId: number | null = null;
  totalTime: number = 0.0;

  curDarkRgb: [number, number, number];
  curPrimaryRgb: [number, number, number];
  curSecondaryRgb: [number, number, number];
  curGridRgb: [number, number, number];
  curWhiteRgb: [number, number, number];

  constructor(canvas: HTMLCanvasElement, initialParams?: DitherShaderParams) {
    this.canvas = canvas;
    const gl = canvas.getContext('webgl2', { preserveDrawingBuffer: true, alpha: true });
    if (!gl) {
      throw new Error('[DitherShaderEngine] WebGL2 is not supported.');
    }
    this.gl = gl;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Initial Parameters matching bottom-dither-demo.html
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
      edgeColorWidth: 1.00,
      whiteColor: '#ffffff',
      showGrid: 1,
      gridOpacity: 0.24,
      gridColor: '#a8a8a8',       // Silver Grey
      gridLineWidth: 1.0,
      useTurbulence: 1,
      patternMode: 2,
      aspectScale: 1.00,
      rippleFrequency: 2.60, // Blob Threshold = 2.60
      rippleWidth: 1.40,
      hollowRadius: 0.21,
      hollowFeather: 0.32,
      noiseScale: 0.40,
      noiseSpeed: 0.135,
      turbulenceAmount: 0.34,
      useBottomFade: 1,
      bottomFadeHeight: 1.00,
      bottomFadeFeather: 0.05,
      ...initialParams
    };

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
      uBottomFadeFeather: gl.getUniformLocation(prog, 'uBottomFadeFeather')
    };

    this._renderFrame = this._renderFrame.bind(this);
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

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(this.program);

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
    gl.uniform2f(u.uMousePos, 0.5, 0.5);
    gl.uniform1i(u.uEngineMode, 3);
    gl.uniform1f(u.uL2_Amount, p.pixelate);
    gl.uniform1f(u.uL3_Dither, 1.0 / Math.max(p.ditherLevels, 1.0));
    gl.uniform1f(u.uDitherScale, p.ditherScale);
    gl.uniform1f(u.uExposure, p.exposure);
    gl.uniform1f(u.uWhiteCutoff, p.whiteCutoff);
    gl.uniform1f(u.uWhiteSpacing, p.whiteSpacing);
    gl.uniform1f(u.uHover, 0.0);
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
    if (this.gl) {
      const gl = this.gl;
      if (this.vertexBuffer) gl.deleteBuffer(this.vertexBuffer);
      if (this.program) gl.deleteProgram(this.program);
    }
  }
}
