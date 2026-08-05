import { useEffect, useRef, useState } from "react";
import { CurvedLightTrails, CurvedLightTrailsParams } from "../utils/curvedLightTrails";

interface CurvedLightTrailsCanvasProps {
  params?: CurvedLightTrailsParams;
  className?: string;
  isAnimating?: boolean;
  fallbackSrc?: string;
}

export default function CurvedLightTrailsCanvas({
  params,
  className = "size-full",
  isAnimating = false,
  fallbackSrc
}: CurvedLightTrailsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<CurvedLightTrails | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let engine: CurvedLightTrails | null = null;

    const initEngine = () => {
      try {
        engine = new CurvedLightTrails(canvas, {
          warpStrength: 3.78,
          warpWidth: 1.10,
          heightScale: 0.23,
          heightAnim: false,
          heightAnimMin: 0.02,
          heightAnimMax: 0.23,
          speed: 1.00,
          lineDensity: 24,
          densityAnim: false,
          densityAnimMin: 12,
          densityAnimMax: 60,
          lineThickness: 0.0012,
          streakLength: 0.50,
          noiseScale: 1.00,
          intensity: 0.5,
          dispersion: 0.000,
          chromatic: 2.000,
          chromaticAngle: 0.0,
          chromaticMode: 0,
          baseColor: "#b892dd",
          tintColor: "#00b32d",
          tintAmount: 0.00,
          opacity: 0.85,
          glow: 1.00,
          colorTheme: 0,
          ...params
        });
        engineRef.current = engine;
        engine.start();
      } catch (err) {
        console.warn("WebGL2 initialization failed for CurvedLightTrails, falling back to placeholder image:", err);
        setHasError(true);
      }
    };

    initEngine();

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      if (engine) engine.stop();
    };

    const handleContextRestored = () => {
      initEngine();
    };

    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      if (engine) {
        engine.destroy();
        engineRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const engine = engineRef.current;
    if (!engine) return;

    if (isAnimating) {
      engine.setParams({ speed: 1.8, lineDensity: 36, intensity: 0.8, heightAnim: true, densityAnim: true });
    } else {
      engine.setParams({ speed: 1.0, heightScale: 0.23, heightAnim: false, lineDensity: 24, densityAnim: false, intensity: 0.5 });
    }
    engine.start();
  }, [isAnimating]);

  if (hasError && fallbackSrc) {
    return (
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[199px] left-1/2 mix-blend-screen top-1/2 w-[439px] pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={fallbackSrc} />
      </div>
    );
  }

  return <canvas ref={canvasRef} className={`block ${className}`} />;
}
