import { useEffect, useRef, useState } from "react";
import { DitherShaderEngine, DitherShaderParams } from "../utils/ditherShaderEngine";

interface DitherBackgroundCanvasProps {
  params?: DitherShaderParams;
  className?: string;
  fallbackSrc?: string;
}

export default function DitherBackgroundCanvas({
  params,
  className = "size-full",
  fallbackSrc
}: DitherBackgroundCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<DitherShaderEngine | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    let engine: DitherShaderEngine | null = null;
    try {
      engine = new DitherShaderEngine(canvasRef.current, {
        useTurbulence: 1,
        patternMode: 2,          // 模式三: 稀疏离散不规则斑块点阵
        aspectScale: 1.00,       // 1.00x
        rippleFrequency: 2.50,   // 2.50 (斑块数量/密度 Blob Threshold)
        rippleWidth: 1.40,       // 1.40 (边缘软硬度)
        hollowRadius: 0.26,      // 0.26 (中心空出半径)
        hollowFeather: 0.32,     // 0.32 (过渡羽化)
        noiseScale: 0.40,        // 0.40 (湍流块状尺寸)
        noiseSpeed: 0.135,       // 0.135x (流动运动速度)
        turbulenceAmount: 0.34,  // 0.34 (湍流扭曲强度)
        ditherScale: 0.31,       // 0.31 (Bayer 矩阵尺寸)
        pixelate: 0.29,          // 0.29 (像素网格)
        opacity: 1.00,           // 整体不透明度 (默认 1.00)
        useBottomFade: 1,
        bottomFadeHeight: 1.00,
        bottomFadeFeather: 0.05,
        exposure: -0.10,
        whiteCutoff: 0.76,
        whiteSpacing: 16.0,
        colorMix: 0.0,
        transparentDark: 0,      // 纯黑实色背景 #000000
        darkColor: '#000000',
        primaryColor: '#38ef7d',  // 核心主体第一色彩 (霓虹绿)
        secondaryColor: '#d4f952',// 边缘羽化第二色彩 (黄绿)
        edgeColorWidth: 0.98,    // 边缘第二色彩宽度占比 (0.98 Edge Color Width)
        whiteColor: '#ffffff',
        showGrid: 1,
        gridOpacity: 0.24,       // 网格透明度 0.24
        gridColor: '#a8a8a8',     // 网格颜色 银灰 (RGB 168 168 168)
        gridLineWidth: 1.0,       // 线宽 1.0px
        ...params
      });
      engineRef.current = engine;
      engine.start();
    } catch (err) {
      console.warn("WebGL2 initialization failed for DitherBackgroundCanvas, falling back to static placeholder:", err);
      setHasError(true);
    }

    return () => {
      if (engine) {
        engine.destroy();
        engineRef.current = null;
      }
    };
  }, []);

  // Performance optimization: stop animation loop when canvas is off-screen
  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = engineRef.current;
    if (!canvas || !engine) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          engine.stop();
        } else {
          engine.start();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  if (hasError && fallbackSrc) {
    return (
      <div className="absolute inset-0 size-full pointer-events-none">
        <img alt="" className="absolute inset-0 object-cover size-full" src={fallbackSrc} />
      </div>
    );
  }

  return <canvas ref={canvasRef} className={`block ${className}`} />;
}
