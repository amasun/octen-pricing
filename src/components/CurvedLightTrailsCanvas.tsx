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
    if (!canvasRef.current) return;

    let engine: CurvedLightTrails | null = null;
    try {
      engine = new CurvedLightTrails(canvasRef.current, {
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

      // Initial static frame render at t = 0.0s, heightScale = 0.23
      engine.renderOnce(0.0);
    } catch (err) {
      console.warn("WebGL2 initialization failed for CurvedLightTrails, falling back to placeholder image:", err);
      setHasError(true);
    }

    return () => {
      if (engine) {
        engine.destroy();
        engineRef.current = null;
      }
    };
  }, []);

  // Optimization: stop WebGL rAF when off-screen, resume when visible
  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = engineRef.current;
    if (!canvas || !engine) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          engine.stop();
        } else if (isAnimating) {
          engine.start(0.0);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [isAnimating]);

  useEffect(() => {
    const engine = engineRef.current;
    if (!engine) return;

    if (isAnimating) {
      engine.setParams({ heightAnim: true, densityAnim: true });
      engine.start(0.0);
    } else {
      engine.setParams({ heightScale: 0.23, heightAnim: false, lineDensity: 24, densityAnim: false });
      engine.renderOnce(0.0);
      engine.stop();
    }
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
