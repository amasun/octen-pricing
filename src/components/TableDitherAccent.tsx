import { useEffect, useRef, useState } from "react";
import { DitherShaderEngine } from "../utils/ditherShaderEngine";

interface TableDitherAccentProps {
  tableRef: React.RefObject<HTMLDivElement | null>;
  fallbackImg?: string;
}

export default function TableDitherAccent({ tableRef, fallbackImg }: TableDitherAccentProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<DitherShaderEngine | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    let engine: DitherShaderEngine | null = null;
    try {
      engine = new DitherShaderEngine(canvasRef.current, {
        useTurbulence: 1,
        patternMode: 2,
        aspectScale: 1.0,
        rippleFrequency: 2.8,
        rippleWidth: 1.5,
        hollowRadius: 0.0,
        hollowFeather: 0.15,
        noiseScale: 0.45,
        noiseSpeed: 0.12,
        turbulenceAmount: 0.35,
        ditherScale: 0.32,
        pixelate: 0.28,
        opacity: 0.50,
        transparentDark: 1,
        darkColor: '#000000',
        primaryColor: '#038b4d',
        secondaryColor: '#30c774',
        edgeColorWidth: 0.85,
        whiteColor: '#ffffff',
        showGrid: 0,
        liquifyRadius: 35,
        liquifyStrength: 60,
        liquifyTurbulence: 65,
        liquifyTail: 80,
      });
      engineRef.current = engine;
      engine.start();
    } catch (err) {
      console.warn("WebGL2 Dither engine fallback:", err);
      setHasError(true);
    }

    return () => {
      if (engine) {
        engine.destroy();
        engineRef.current = null;
      }
    };
  }, []);

  // Listen to mouse events on the parent Table container
  useEffect(() => {
    const tableEl = tableRef.current;
    if (!tableEl) return;

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (engineRef.current) {
        engineRef.current.setParams({
          noiseSpeed: 0.38,
          opacity: 0.95,
          turbulenceAmount: 0.65,
          liquifyStrength: 90,
        });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (engineRef.current) {
        engineRef.current.setParams({
          noiseSpeed: 0.12,
          opacity: 0.50,
          turbulenceAmount: 0.35,
          liquifyStrength: 40,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const engine = engineRef.current;
      const canvas = canvasRef.current;
      if (!engine || !canvas) return;

      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1.0 - (e.clientY - rect.top) / rect.height;
        engine.targetMouseX = x;
        engine.targetMouseY = y;
      }
    };

    tableEl.addEventListener("mouseenter", handleMouseEnter);
    tableEl.addEventListener("mouseleave", handleMouseLeave);
    tableEl.addEventListener("mousemove", handleMouseMove);

    return () => {
      tableEl.removeEventListener("mouseenter", handleMouseEnter);
      tableEl.removeEventListener("mouseleave", handleMouseLeave);
      tableEl.removeEventListener("mousemove", handleMouseMove);
    };
  }, [tableRef]);

  if (hasError && fallbackImg) {
    return (
      <img
        src={fallbackImg}
        alt=""
        className="absolute h-[64.2px] right-[-50px] top-0 w-[754px] pointer-events-none object-cover mix-blend-multiply"
      />
    );
  }

  return (
    <div className="absolute right-0 top-0 h-[64.2px] w-[650px] sm:w-[750px] pointer-events-none overflow-hidden rounded-tr-[12px] z-0">
      {/* Background Static Accent Fallback blended */}
      {fallbackImg && (
        <img
          src={fallbackImg}
          alt=""
          className={`absolute h-[64.2px] right-[-50px] top-0 w-[754px] pointer-events-none object-cover mix-blend-multiply transition-opacity duration-500 ${
            isHovered ? "opacity-30" : "opacity-80"
          }`}
        />
      )}
      {/* Dynamic WebGL Dither Shader Canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 size-full pointer-events-none transition-all duration-500 ${
          isHovered ? "opacity-100 scale-105" : "opacity-50 scale-100"
        }`}
        style={{
          maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0) 100%)",
        }}
      />
    </div>
  );
}
