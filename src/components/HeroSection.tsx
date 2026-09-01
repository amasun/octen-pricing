import { useState, useRef } from "react";
import svgPaths from "./svgPaths";
import CurvedLightTrailsCanvas from "./CurvedLightTrailsCanvas";
import DitherBackgroundCanvas from "./DitherBackgroundCanvas";
import imgShader2 from "../../imports/4dd5750c60a3ca94cca35fcd8f4b9c20eccd90e1.png";
import imgDither1 from "../../imports/64635f1bb002f492bde3cdcba5e5dadaf111f260.png";

function HeroHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] sm:gap-[18px] items-center py-0 px-4 relative shrink-0 w-full max-w-[900px]">
      <h1 className="bg-clip-text font-['Fraunces',serif] font-normal leading-tight py-[6px] w-full text-center relative shrink-0 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[60px] text-[transparent]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1', backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(136, 136, 136) 27.404%, rgb(0, 0, 0) 50.962%)" }}>
        Plans and Pricing
      </h1>
      {/* Subtitle Group */}
      <div className="flex flex-col items-center gap-[10px] w-full max-w-[720px]">
        <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] sm:text-[17px] md:text-[18px] leading-[1.3] text-white text-center m-0 select-text">
          Sign up and get <span className="font-bold text-[#70FE7E]">$5 in free balance</span>.
        </p>
      </div>
      <a 
        href="https://octen.ai/platform/billing"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-transparent hover:bg-[#60ff70]/10 active:scale-[0.97] border border-[#60ff70] transition-all duration-200 ease-out inline-flex items-center justify-center h-[48px] px-[20px] gap-[8px] rounded-[10px] shrink-0 cursor-pointer select-none box-border mt-[12px]"
      >
        <span className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-none text-[#60ff70] whitespace-nowrap">
          Start Building
        </span>
        <svg 
          className="size-[16px] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M3 13L13 3M13 3H5M13 3V11" 
            stroke="#60ff70" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

function OctenCenterHub({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className={`-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 size-[60px] z-20 pointer-events-none flex items-center justify-center transition-transform duration-500 ease-out ${isHovered ? "scale-[1.06]" : "scale-100"}`}>
      {/* Ambient soft outer neon halo behind the hub - reduced opacity by 50% */}
      <div 
        className={`absolute -inset-1.5 rounded-full bg-[#70FE7E]/25 blur-[10px] pointer-events-none transition-opacity duration-500 ease-out ${isHovered ? "opacity-100" : "opacity-0"}`} 
      />

      {/* Solid Center Hub Box */}
      <div className={`size-[60px] rounded-[14px] bg-black flex items-center justify-center relative overflow-hidden transition-all duration-500 ease-out ${
        isHovered 
          ? "shadow-[0px_0px_18px_0px_rgba(112,254,126,0.25)]" 
          : "shadow-none"
      }`}>
        <svg className="w-[32px] h-[26px]" fill="none" viewBox="0 0 32 26">
          <path d={svgPaths.p78eff80} fill="#70FE7E" />
        </svg>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_4px_0px_rgba(155,231,181,0.25),inset_0px_-3px_8px_0px_#70fe7e]" />
      </div>
    </div>
  );
}

function QpsCardGraphic({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="h-[180px] relative rounded-[16px] shrink-0 w-full overflow-hidden bg-black border border-[#2a2a2a] flex items-center justify-center isolate select-none">
      {/* Background radial glow matching Card 3 */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${isHovered ? "opacity-95" : "opacity-60"}`}
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(112, 254, 126, 0.22) 0%, rgba(3, 152, 85, 0.08) 45%, rgba(0, 0, 0, 0) 75%)"
        }}
      />
      {/* 20px Subtle Grid Texture (1px stroke, 0.1 opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />
      <div className="absolute inset-0 size-full pointer-events-none opacity-85 z-10">
        <CurvedLightTrailsCanvas isAnimating={isHovered} fallbackSrc={imgShader2} />
      </div>
      <OctenCenterHub isHovered={isHovered} />
      <div className="absolute inset-0 pointer-events-none rounded-[16px] z-20 shadow-[inset_-30px_0px_30px_0px_#000000,inset_20px_0px_30px_0px_#000000]" />
    </div>
  );
}

function PayAsYouGoGraphic({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="h-[180px] relative rounded-[16px] shrink-0 w-full overflow-hidden bg-black border border-[#2a2a2a] flex items-center justify-center isolate select-none">
      {/* Background radial glow matching Card 3 */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${isHovered ? "opacity-95" : "opacity-60"}`}
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(112, 254, 126, 0.22) 0%, rgba(3, 152, 85, 0.08) 45%, rgba(0, 0, 0, 0) 75%)"
        }}
      />
      {/* 20px Subtle Grid Texture (1px stroke, 0.1 opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />
      <svg className="w-full h-auto max-h-[140px] pointer-events-none relative z-10" overflow="visible" width="451" height="140" viewBox="0 0 451 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base Static Circuit Paths */}
        <path d="M-2.67245 17.9568H122.631 C138.667 17.9568, 138.667 51.736, 154.702 51.736H220.307" stroke="#38564F"/>
        <path d="M437.542 17.9568H327.575 C311.539 17.9568, 311.539 51.736, 295.504 51.736H229.899" stroke="#38564F"/>
        <path d="M-2.67245 71.4863H220.307" stroke="#38564F"/>
        <path d="M452.291 70.4862H229.899" stroke="#38564F"/>
        <path d="M13.2791 121.669H122.631 C138.667 121.669, 138.667 87.8903, 154.702 87.8903H220.307" stroke="#38564F"/>
        <path d="M452.291 121.669H327.575 C311.539 121.669, 311.539 87.8903, 295.504 87.8903H229.899" stroke="#38564F"/>

        {/* SVG Glow Filter Defs */}
        <defs>
          <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dotGlowBright" x="-80%" y="-80%" width="260%" height="260%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Layer 1: Sparser Base Green Particles (size 3px, gap 72px) — no glow */}
        <path d="M-2.67245 17.9568H122.631 C138.667 17.9568, 138.667 51.736, 154.702 51.736H220.307" stroke="#039855" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 71.9" strokeDashoffset="12" className={isHovered ? "svg-flow-left" : ""} opacity="0.5" />
        <path d="M437.542 17.9568H327.575 C311.539 17.9568, 311.539 51.736, 295.504 51.736H229.899" stroke="#38C172" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 71.9" strokeDashoffset="36" className={isHovered ? "svg-flow-right" : ""} opacity="0.65" />
        <path d="M-2.67245 71.4863H220.307" stroke="#039855" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 47.9" strokeDashoffset="0" className={isHovered ? "svg-flow-left" : ""} opacity="0.55" />
        <path d="M452.291 70.4862H229.899" stroke="#38C172" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 71.9" strokeDashoffset="24" className={isHovered ? "svg-flow-right" : ""} opacity="0.6" />
        <path d="M13.2791 121.669H122.631 C138.667 121.669, 138.667 87.8903, 154.702 87.8903H220.307" stroke="#039855" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 71.9" strokeDashoffset="48" className={isHovered ? "svg-flow-left" : ""} opacity="0.45" />
        <path d="M452.291 121.669H327.575 C311.539 121.669, 311.539 87.8903, 295.504 87.8903H229.899" stroke="#38C172" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 71.9" strokeDashoffset="18" className={isHovered ? "svg-flow-right" : ""} opacity="0.55" />

        {/* Layer 2: Neon Mint — group-level filter */}
        <g filter="url(#dotGlow)">
          <path d="M-2.67245 17.9568H122.631 C138.667 17.9568, 138.667 51.736, 154.702 51.736H220.307" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="60" className={isHovered ? "svg-flow-left" : ""} opacity={isHovered ? "1.0" : "0.8"} />
          <path d="M437.542 17.9568H327.575 C311.539 17.9568, 311.539 51.736, 295.504 51.736H229.899" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="108" className={isHovered ? "svg-flow-right" : ""} opacity={isHovered ? "1.0" : "0.85"} />
          <path d="M-2.67245 71.4863H220.307" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 71.9" strokeDashoffset="36" className={isHovered ? "svg-flow-left" : ""} opacity={isHovered ? "1.0" : "0.9"} />
          <path d="M452.291 70.4862H229.899" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="72" className={isHovered ? "svg-flow-right" : ""} opacity={isHovered ? "1.0" : "0.85"} />
          <path d="M13.2791 121.669H122.631 C138.667 121.669, 138.667 87.8903, 154.702 87.8903H220.307" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="96" className={isHovered ? "svg-flow-left" : ""} opacity={isHovered ? "1.0" : "0.75"} />
          <path d="M452.291 121.669H327.575 C311.539 121.669, 311.539 87.8903, 295.504 87.8903H229.899" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="48" className={isHovered ? "svg-flow-right" : ""} opacity={isHovered ? "1.0" : "0.85"} />
        </g>

        {/* Layer 3: Bright Neon — group-level filter */}
        <g filter="url(#dotGlowBright)">
          <path d="M-2.67245 17.9568H122.631 C138.667 17.9568, 138.667 51.736, 154.702 51.736H220.307" stroke="#9CFFA6" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="120" className={isHovered ? "svg-flow-left" : ""} opacity={isHovered ? "1.0" : "0.9"} />
          <path d="M437.542 17.9568H327.575 C311.539 17.9568, 311.539 51.736, 295.504 51.736H229.899" stroke="#9CFFA6" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="14" className={isHovered ? "svg-flow-right" : ""} opacity="0.95" />
          <path d="M-2.67245 71.4863H220.307" stroke="#9CFFA6" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="84" className={isHovered ? "svg-flow-left" : ""} opacity="1.0" />
          <path d="M452.291 70.4862H229.899" stroke="#9CFFA6" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="132" className={isHovered ? "svg-flow-right" : ""} opacity={isHovered ? "1.0" : "0.95"} />
          <path d="M13.2791 121.669H122.631 C138.667 121.669, 138.667 87.8903, 154.702 87.8903H220.307" stroke="#9CFFA6" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="30" className={isHovered ? "svg-flow-left" : ""} opacity="0.9" />
          <path d="M452.291 121.669H327.575 C311.539 121.669, 311.539 87.8903, 295.504 87.8903H229.899" stroke="#9CFFA6" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="102" className={isHovered ? "svg-flow-right" : ""} opacity="0.95" />
        </g>
        {/* Node 1: Lock icon — left bottom */}
        <g className={isHovered ? "svg-node-pulse svg-node-pulse-d1" : ""}>
          <circle cx="96.9623" cy="120.499" r="17.0126" fill="url(#paint0_radial_13075_473)" stroke="url(#paint1_linear_13075_473)" strokeWidth="0.8"/>
          <path d="M102.362 122.193C104.167 121.952 105.827 123.221 106.069 125.026C106.178 125.845 105.976 126.632 105.556 127.272L106.635 128.672C106.915 129.035 106.847 129.556 106.485 129.836C106.122 130.116 105.6 130.049 105.32 129.686L104.321 128.391C103.991 128.562 103.627 128.681 103.238 128.733C101.432 128.975 99.771 127.708 99.5287 125.902C99.2868 124.097 100.556 122.435 102.362 122.193ZM99.9467 112.616C100.861 112.616 101.597 112.617 102.192 112.665C102.796 112.714 103.327 112.818 103.818 113.068C104.598 113.466 105.233 114.101 105.63 114.881C105.88 115.372 105.984 115.903 106.034 116.507C106.082 117.101 106.082 117.837 106.082 118.752V120.493C106.082 120.952 105.71 121.323 105.251 121.323C104.793 121.323 104.42 120.952 104.42 120.493V118.752C104.42 117.81 104.42 117.154 104.378 116.643C104.337 116.141 104.261 115.853 104.15 115.635C103.912 115.167 103.531 114.787 103.064 114.549C102.846 114.438 102.557 114.361 102.056 114.32C101.545 114.279 100.888 114.278 99.9467 114.278H94.807C93.8651 114.278 93.2078 114.279 92.6967 114.32C92.1958 114.361 91.9077 114.438 91.6898 114.549C91.2224 114.787 90.8421 115.167 90.6039 115.635C90.4928 115.853 90.4163 116.141 90.3754 116.643C90.3336 117.154 90.3324 117.81 90.3324 118.752V122.233C90.3324 123.175 90.3336 123.833 90.3754 124.344C90.4163 124.845 90.4929 125.134 90.6039 125.352C90.8421 125.819 91.2225 126.199 91.6898 126.438C91.9077 126.548 92.1959 126.625 92.6967 126.666C93.2078 126.708 93.8651 126.708 94.807 126.708H96.9623C97.4209 126.708 97.7923 127.08 97.7924 127.539C97.7922 127.998 97.4209 128.369 96.9623 128.369H94.807C93.8926 128.369 93.1563 128.37 92.5619 128.321C91.9578 128.272 91.4261 128.167 90.9349 127.917C90.1552 127.519 89.5208 126.885 89.1234 126.105C88.8733 125.614 88.7685 125.083 88.7191 124.479C88.6706 123.885 88.6713 123.148 88.6713 122.233V118.752C88.6713 117.837 88.6706 117.101 88.7191 116.507C88.7685 115.903 88.8733 115.372 89.1234 114.881C89.5208 114.101 90.155 113.466 90.9349 113.068C91.4261 112.818 91.9578 112.714 92.5619 112.665C93.1563 112.616 93.8926 112.616 94.807 112.616H99.9467ZM102.582 123.841C101.686 123.961 101.056 124.785 101.176 125.682C101.297 126.578 102.121 127.208 103.017 127.088C103.913 126.968 104.543 126.143 104.423 125.247C104.303 124.351 103.479 123.721 102.582 123.841ZM96.0931 117.203C96.4063 117.163 96.6795 117.233 96.9027 117.316C97.112 117.395 97.3501 117.514 97.5922 117.635C97.904 117.79 98.2235 117.955 98.5004 118.113C98.8322 118.303 99.2016 118.537 99.5482 118.767C99.7761 118.917 100.001 119.064 100.175 119.207C100.337 119.34 100.51 119.512 100.632 119.749L100.682 119.854L100.737 120.008C100.845 120.372 100.827 120.783 100.682 121.131C100.56 121.424 100.36 121.626 100.175 121.778C100.001 121.921 99.7763 122.068 99.5482 122.219C99.2015 122.448 98.8323 122.683 98.5004 122.872C98.2234 123.03 97.9041 123.196 97.5922 123.351C97.35 123.471 97.1121 123.59 96.9027 123.669C96.6794 123.753 96.4064 123.823 96.0931 123.782C95.6677 123.727 95.2523 123.489 94.9906 123.149C94.7984 122.9 94.7222 122.628 94.682 122.394C94.6444 122.173 94.6267 121.908 94.6088 121.639C94.583 121.253 94.5639 120.848 94.5639 120.492C94.5639 120.136 94.583 119.732 94.6088 119.347C94.6268 119.078 94.6444 118.812 94.682 118.592C94.7222 118.357 94.7983 118.086 94.9906 117.836L95.0961 117.713C95.3566 117.439 95.7211 117.251 96.0931 117.203ZM96.3187 118.872C96.2988 118.988 96.2873 119.154 96.267 119.458C96.2424 119.826 96.226 120.189 96.226 120.492C96.226 120.796 96.2424 121.159 96.267 121.527C96.2771 121.679 96.2853 121.797 96.2933 121.891L96.3187 122.113H96.3197C96.4305 122.072 96.5796 121.999 96.8529 121.863C97.1508 121.715 97.4387 121.565 97.6771 121.429C97.9638 121.265 98.2991 121.053 98.6322 120.833C98.8891 120.663 99.0287 120.569 99.1215 120.493V120.492L98.9389 120.357C98.8602 120.303 98.7606 120.237 98.6322 120.152C98.2993 119.932 97.9636 119.72 97.6771 119.557C97.4388 119.421 97.1506 119.27 96.8529 119.122C96.5798 118.986 96.4305 118.914 96.3197 118.872L96.3187 118.871V118.872Z" fill="white"/>
        </g>
        {/* Node 2: Globe icon — left middle */}
        <g className={isHovered ? "svg-node-pulse svg-node-pulse-d2" : ""}>
          <circle cx="47.1222" cy="69.9384" r="17.0126" fill="url(#paint2_radial_13075_473)" stroke="url(#paint3_linear_13075_473)" strokeWidth="0.8"/>
          <path d="M54.1733 69.9384C54.1733 68.4629 53.7358 67.0206 52.9161 65.7938C52.0963 64.5669 50.9312 63.6107 49.568 63.0461C48.2048 62.4814 46.7048 62.3337 45.2577 62.6216C43.8106 62.9094 42.4813 63.6199 41.4379 64.6633C40.3946 65.7066 39.6841 67.0359 39.3963 68.483C39.1084 69.9301 39.2561 71.4301 39.8208 72.7933C40.3854 74.1565 41.3416 75.3216 42.5684 76.1414C43.7953 76.9611 45.2376 77.3986 46.7131 77.3986M39.7503 67.4517H53.676M39.7503 72.4252H46.2987" stroke="white" strokeWidth="1.49204" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M46.2987 62.4782C44.9022 64.716 44.1619 67.3007 44.1619 69.9384C44.1619 72.5761 44.9022 75.1609 46.2987 77.3986M47.1276 62.4782C48.4675 64.6251 49.2045 67.0933 49.2612 69.6234M53.5102 76.7355L55.0023 78.2275M49.1999 74.9119C49.1999 75.5714 49.4619 76.2039 49.9282 76.6703C50.3946 77.1366 51.0271 77.3986 51.6866 77.3986C52.3461 77.3986 52.9786 77.1366 53.445 76.6703C53.9114 76.2039 54.1734 75.5714 54.1734 74.9119C54.1734 74.2524 53.9114 73.6199 53.445 73.1535C52.9786 72.6872 52.3461 72.4252 51.6866 72.4252C51.0271 72.4252 50.3946 72.6872 49.9282 73.1535C49.4619 73.6199 49.1999 74.2524 49.1999 74.9119Z" stroke="white" strokeWidth="1.49204" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        {/* Node 3: AI/sparkle icon — right top */}
        <g className={isHovered ? "svg-node-pulse svg-node-pulse-d3" : ""}>
          <circle cx="358.508" cy="18.5458" r="17.0126" fill="url(#paint4_radial_13075_473)" stroke="url(#paint5_linear_13075_473)" strokeWidth="0.8"/>
          <path d="M358.366 9.79112C358.955 9.79114 359.531 9.85089 360.089 9.96397C360.492 10.0459 360.753 10.4392 360.672 10.8429C360.59 11.2467 360.195 11.5078 359.792 11.4259C359.332 11.3325 358.855 11.2833 358.366 11.2833C354.429 11.2834 351.237 14.4753 351.237 18.4122C351.237 22.3491 354.429 25.5401 358.366 25.5401C362.303 25.54 365.494 22.349 365.494 18.4122C365.494 17.7957 365.416 17.198 365.269 16.629C365.167 16.2302 365.408 15.8235 365.806 15.7208C366.205 15.6182 366.612 15.8582 366.715 16.2569C366.892 16.9464 366.986 17.6692 366.986 18.4122C366.986 23.173 363.127 27.0321 358.366 27.0323C353.605 27.0323 349.745 23.1731 349.745 18.4122C349.745 13.6512 353.605 9.79119 358.366 9.79112ZM357.508 13.1173C357.915 13.0491 358.3 13.3233 358.368 13.7296C358.436 14.1359 358.162 14.5208 357.756 14.589C357.487 14.634 357.228 14.7063 356.982 14.8038C355.558 15.368 354.553 16.7577 354.552 18.38C354.552 20.5033 356.274 22.2246 358.397 22.2247C360.02 22.2247 361.409 21.2195 361.973 19.795C362.071 19.5488 362.144 19.2898 362.189 19.0216C362.257 18.6157 362.642 18.3415 363.048 18.4093C363.454 18.4774 363.728 18.8624 363.66 19.2687C363.597 19.6416 363.497 20.0022 363.361 20.3448C362.579 22.3188 360.652 23.7169 358.397 23.7169C355.45 23.7167 353.06 21.3273 353.06 18.38C353.06 16.1251 354.459 14.1989 356.433 13.4171C356.776 13.2814 357.136 13.1799 358.366 16.2149C359.579 16.2151 360.562 17.1992 360.562 18.4122C360.562 19.6251 359.579 20.6083 358.366 20.6085C357.153 20.6084 356.169 19.6252 356.169 18.4122C356.169 17.1992 357.153 16.215 358.366 16.2149ZM358.366 17.7071C357.977 17.7072 357.661 18.0232 357.661 18.4122C357.661 18.8011 357.977 19.1162 358.366 19.1163C358.755 19.1161 359.07 18.8011 359.07 18.4122C359.07 18.0233 358.755 17.7073 358.366 17.7071ZM362.079 10.295C362.357 9.59465 363.386 9.59474 363.665 10.295L363.712 10.4552L363.768 10.6886C364.093 11.8368 365.034 12.7183 366.216 12.9601C367.13 13.1473 367.13 14.4525 366.216 14.6397C364.956 14.8976 363.969 15.8838 363.712 17.1446C363.524 18.0583 362.219 18.0584 362.032 17.1446C361.774 15.8838 360.788 14.8975 359.527 14.6397C358.614 14.4522 358.614 13.1476 359.527 12.9601L359.76 12.9034C360.909 12.5783 361.79 11.6374 362.032 10.4552L362.079 10.295ZM362.872 12.6026C362.545 13.0687 362.141 13.4736 361.674 13.7999C362.14 14.126 362.546 14.5305 362.872 14.9962C363.198 14.5307 363.603 14.1259 364.068 13.7999C363.602 13.4737 363.198 13.0684 362.872 12.6026Z" fill="white"/>
        </g>
        {/* Node 4: Share/data icon — right bottom */}
        <g className={isHovered ? "svg-node-pulse svg-node-pulse-d4" : ""}>
          <circle cx="365.778" cy="120.493" r="17.0126" fill="url(#paint6_radial_13075_473)" stroke="url(#paint7_linear_13075_473)" strokeWidth="0.8"/>
          <path d="M369.117 112.204C369.996 112.204 370.84 112.554 371.462 113.176C372.083 113.797 372.432 114.64 372.432 115.519V118.776C371.92 118.486 371.363 118.265 370.775 118.126V115.519C370.775 115.08 370.6 114.658 370.289 114.348C369.978 114.037 369.556 113.862 369.117 113.862H359.17C358.73 113.862 358.309 114.037 357.998 114.348C357.687 114.658 357.513 115.08 357.512 115.519V121.807L360.253 119.067C360.762 118.577 361.389 118.28 362.071 118.28C362.668 118.28 363.223 118.508 363.693 118.892L363.889 119.067L363.901 119.078L364.719 119.896C364.331 120.298 363.993 120.75 363.72 121.243L362.728 120.251H362.727C362.472 120.01 362.245 119.938 362.071 119.938C361.894 119.938 361.663 120.012 361.403 120.262L357.512 124.152V125.467C357.513 125.906 357.687 126.328 357.998 126.639C358.309 126.949 358.73 127.125 359.17 127.125H363.574C363.875 127.74 364.273 128.298 364.747 128.782H359.17C358.291 128.782 357.448 128.433 356.826 127.811C356.204 127.19 355.854 126.346 355.854 125.467V115.519C355.854 114.64 356.204 113.797 356.826 113.176C357.448 112.554 358.29 112.204 359.17 112.204H369.117ZM366.638 116.349C367.096 116.349 367.468 116.72 367.468 117.178C367.467 117.635 367.096 118.007 366.638 118.007H366.631C366.173 118.007 365.802 117.635 365.802 117.178C365.802 116.72 366.173 116.349 366.631 116.349H366.638Z" fill="white"/>
          <g clipPath="url(#clip0_13075_473)">
            <path d="M373.595 122.494L366.467 126.687" stroke="white" strokeWidth="1.10625" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M373.595 126.395L366.643 122.554" stroke="white" strokeWidth="1.10625" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M370.24 128.405L370.24 120.331" stroke="white" strokeWidth="1.10625" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="373.595" cy="122.554" r="1.10211" fill="white"/>
            <circle cx="370.24" cy="120.331" r="1.05005" fill="white"/>
            <circle cx="370.24" cy="128.405" r="1.24278" fill="white"/>
            <circle cx="374.226" cy="126.687" r="1.13208" transform="rotate(124.49 374.226 126.687)" fill="white"/>
            <circle cx="366.09" cy="126.888" r="1.11637" transform="rotate(61.0709 366.09 126.888)" fill="white"/>
            <circle cx="366.643" cy="122.409" r="1.10318" fill="white"/>
          </g>
        </g>
        {/* Node 5: Plugin icon — right middle */}
        <g className={isHovered ? "svg-node-pulse svg-node-pulse-d5" : ""}>
          <circle cx="397.413" cy="70.3529" r="17.0126" fill="url(#paint8_radial_13075_473)" stroke="url(#paint9_linear_13075_473)" strokeWidth="0.8"/>
          <path d="M392.019 75.3264H398.651" stroke="white" strokeWidth="1.49204" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M389.532 78.642H404.453Z" fill="white"/>
          <path d="M389.532 78.642H404.453" stroke="white" strokeWidth="1.49204" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M398.651 78.642C400.189 78.642 401.665 78.0307 402.753 76.9425C403.842 75.8544 404.453 74.3785 404.453 72.8396C404.453 71.3007 403.842 69.8249 402.753 68.7367C401.665 67.6486 400.189 67.0372 398.651 67.0372H397.822" stroke="white" strokeWidth="1.49204" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M394.506 72.0107H396.164" stroke="white" strokeWidth="1.49204" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M394.506 70.3529C394.066 70.3529 393.645 70.1782 393.334 69.8673C393.023 69.5564 392.848 69.1347 392.848 68.695V65.3794H397.822V68.695C397.822 69.1347 397.647 69.5564 397.336 69.8673C397.025 70.1782 396.603 70.3529 396.164 70.3529H394.506Z" stroke="white" strokeWidth="1.49204" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M396.993 65.3794V62.8927C396.993 62.6729 396.905 62.462 396.75 62.3066C396.594 62.1511 396.384 62.0638 396.164 62.0638H394.506C394.286 62.0638 394.075 62.1511 393.92 62.3066C393.764 62.462 393.677 62.6729 393.677 62.8927V65.3794" stroke="white" strokeWidth="1.49204" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        {/* Node 6: Scan/search icon — left top */}
        <g className={isHovered ? "svg-node-pulse svg-node-pulse-d6" : ""}>
          <circle cx="80.3269" cy="18.5459" r="17.0126" fill="url(#paint10_radial_13075_473)" stroke="url(#paint11_linear_13075_473)" strokeWidth="0.8"/>
          <path d="M86.7617 24.9811L83.833 22.0524" stroke="white" strokeWidth="1.66114" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M80.3259 23.392C83.0024 23.392 85.1721 21.2223 85.1721 18.5458C85.1721 15.8693 83.0024 13.6996 80.3259 13.6996C77.6494 13.6996 75.4797 15.8693 75.4797 18.5458C75.4797 21.2223 77.6494 23.392 80.3259 23.392Z" stroke="white" strokeWidth="1.66114" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M80.328 20.0892C81.1804 20.0892 81.8713 19.3982 81.8713 18.5459C81.8713 17.6935 81.1804 17.0026 80.328 17.0026C79.4757 17.0026 78.7847 17.6935 78.7847 18.5459C78.7847 19.3982 79.4757 20.0892 80.328 20.0892Z" stroke="white" strokeWidth="1.66114" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M74.4495 12.8078L74.4268 12.8275" stroke="white" strokeWidth="1.79045" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M83.4953 26.255C82.5182 26.6572 81.4477 26.879 80.3255 26.879C75.7233 26.879 71.9924 23.1481 71.9924 18.5458C71.9924 17.3082 72.2622 16.1336 72.7462 15.0776" stroke="white" strokeWidth="1.66114" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M87.92 21.9809C88.3945 20.9335 88.6587 19.7705 88.6587 18.5458C88.6587 13.9436 84.9278 10.2127 80.3255 10.2127C78.9871 10.2127 77.7223 10.5283 76.6016 11.089" stroke="white" strokeWidth="1.66114" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <g style={{ mixBlendMode: "screen" }} filter="url(#filter7_f_13075_473)">
          <rect x="158.363" y="51.1685" width="37.461" height="0.934692" fill="url(#paint12_linear_13075_473)"/>
          <circle cx="195.845" cy="51.6358" r="1.57545" fill="#ABFF8F"/>
        </g>
        <g style={{ mixBlendMode: "screen" }} filter="url(#filter8_f_13075_473)">
          <rect width="37.461" height="0.934692" transform="matrix(-1 0 0 1 292.696 51.1685)" fill="url(#paint13_linear_13075_473)"/>
          <circle cx="1.57545" cy="1.57545" r="1.57545" transform="matrix(-1 0 0 1 256.79 50.0603)" fill="#ABFF8F"/>
        </g>
        <g style={{ mixBlendMode: "screen" }} filter="url(#filter9_f_13075_473)">
          <rect x="158.363" y="71.1685" width="37.461" height="0.934692" fill="url(#paint14_linear_13075_473)"/>
          <circle cx="195.845" cy="71.6358" r="1.57545" fill="#ABFF8F"/>
        </g>
        <g style={{ mixBlendMode: "screen" }} filter="url(#filter10_f_13075_473)">
          <rect width="37.461" height="0.934692" transform="matrix(-1 0 0 1 292.696 70.1685)" fill="url(#paint15_linear_13075_473)"/>
          <circle cx="1.57545" cy="1.57545" r="1.57545" transform="matrix(-1 0 0 1 256.79 69.0603)" fill="#ABFF8F"/>
        </g>
        <g style={{ mixBlendMode: "screen" }} filter="url(#filter11_f_13075_473)">
          <rect x="158.363" y="87.1685" width="37.461" height="0.934692" fill="url(#paint16_linear_13075_473)"/>
          <circle cx="195.845" cy="87.6358" r="1.57545" fill="#ABFF8F"/>
        </g>
        <g style={{ mixBlendMode: "screen" }} filter="url(#filter12_f_13075_473)">
          <rect width="37.461" height="0.934692" transform="matrix(-1 0 0 1 292.696 87.1685)" fill="url(#paint17_linear_13075_473)"/>
          <circle cx="1.57545" cy="1.57545" r="1.57545" transform="matrix(-1 0 0 1 256.79 86.0603)" fill="#ABFF8F"/>
        </g>
        <defs>
          <radialGradient id="paint0_radial_13075_473" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(96.9623 120.499) rotate(90) scale(17.4126)">
            <stop stopColor="#3FAC46"/>
            <stop offset="1" stopColor="#19461C"/>
          </radialGradient>
          <linearGradient id="paint1_linear_13075_473" x1="96.9623" y1="103.086" x2="96.9623" y2="137.911" gradientUnits="userSpaceOnUse">
            <stop stopColor="#598047"/>
            <stop offset="1" stopColor="#2B5219"/>
          </linearGradient>
          <radialGradient id="paint2_radial_13075_473" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47.1222 69.9384) rotate(90) scale(17.4126)">
            <stop stopColor="#3FAC46"/>
            <stop offset="1" stopColor="#19461C"/>
          </radialGradient>
          <linearGradient id="paint3_linear_13075_473" x1="47.1222" y1="52.5258" x2="47.1222" y2="87.3511" gradientUnits="userSpaceOnUse">
            <stop stopColor="#598047"/>
            <stop offset="1" stopColor="#2B5219"/>
          </linearGradient>
          <radialGradient id="paint4_radial_13075_473" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(358.508 18.5458) rotate(90) scale(17.4126)">
            <stop stopColor="#3FAC46"/>
            <stop offset="1" stopColor="#19461C"/>
          </radialGradient>
          <linearGradient id="paint5_linear_13075_473" x1="358.508" y1="1.13318" x2="358.508" y2="35.9584" gradientUnits="userSpaceOnUse">
            <stop stopColor="#598047"/>
            <stop offset="1" stopColor="#2B5219"/>
          </linearGradient>
          <radialGradient id="paint6_radial_13075_473" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(365.778 120.493) rotate(90) scale(17.4126)">
            <stop stopColor="#3FAC46"/>
            <stop offset="1" stopColor="#19461C"/>
          </radialGradient>
          <linearGradient id="paint7_linear_13075_473" x1="365.778" y1="103.081" x2="365.778" y2="137.906" gradientUnits="userSpaceOnUse">
            <stop stopColor="#598047"/>
            <stop offset="1" stopColor="#2B5219"/>
          </linearGradient>
          <radialGradient id="paint8_radial_13075_473" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(397.413 70.3529) rotate(90) scale(17.4126)">
            <stop stopColor="#3FAC46"/>
            <stop offset="1" stopColor="#19461C"/>
          </radialGradient>
          <linearGradient id="paint9_linear_13075_473" x1="397.413" y1="52.9402" x2="397.413" y2="87.7655" gradientUnits="userSpaceOnUse">
            <stop stopColor="#598047"/>
            <stop offset="1" stopColor="#2B5219"/>
          </linearGradient>
          <radialGradient id="paint10_radial_13075_473" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80.3269 18.5459) rotate(90) scale(17.4126)">
            <stop stopColor="#3FAC46"/>
            <stop offset="1" stopColor="#19461C"/>
          </radialGradient>
          <linearGradient id="paint11_linear_13075_473" x1="80.3269" y1="1.1333" x2="80.3269" y2="35.9585" gradientUnits="userSpaceOnUse">
            <stop stopColor="#598047"/>
            <stop offset="1" stopColor="#2B5219"/>
          </linearGradient>
          <linearGradient id="paint12_linear_13075_473" x1="158.363" y1="51.6358" x2="195.824" y2="51.6358" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopColor="#AAFFB9"/>
          </linearGradient>
          <linearGradient id="paint13_linear_13075_473" x1="0" y1="0.467346" x2="37.461" y2="0.467346" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopColor="#AAFFB9"/>
          </linearGradient>
          <linearGradient id="paint14_linear_13075_473" x1="158.363" y1="71.6358" x2="195.824" y2="71.6358" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopColor="#AAFFB9"/>
          </linearGradient>
          <linearGradient id="paint15_linear_13075_473" x1="0" y1="0.467346" x2="37.461" y2="0.467346" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopColor="#AAFFB9"/>
          </linearGradient>
          <linearGradient id="paint16_linear_13075_473" x1="158.363" y1="87.6358" x2="195.824" y2="87.6358" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopColor="#AAFFB9"/>
          </linearGradient>
          <linearGradient id="paint17_linear_13075_473" x1="0" y1="0.467346" x2="37.461" y2="0.467346" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopColor="#AAFFB9"/>
          </linearGradient>
          <clipPath id="clip0_13075_473">
            <rect width="12.2917" height="12.2917" fill="white" transform="translate(364.048 118.019)"/>
          </clipPath>
        </defs>
      </svg>
      <OctenCenterHub isHovered={isHovered} />
      <div className="absolute inset-0 pointer-events-none rounded-[16px] z-20 shadow-[inset_-30px_0px_30px_0px_#000000,inset_20px_0px_30px_0px_#000000]" />
    </div>
  );
}

const scrollToAnchor = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

function QpsPlanCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href="#qps-plans"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full md:flex-[1_0_0] md:min-w-px relative rounded-[24px] bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] hover:-translate-y-[3px] hover:shadow-[0px_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out block overflow-hidden cursor-pointer select-text no-underline text-inherit"
    >
      <div className="flex flex-col items-center justify-center size-full p-[6px] pb-[24px] relative z-10 select-text">
        <QpsCardGraphic isHovered={isHovered} />
        <div className="content-stretch flex flex-col gap-[6px] items-center pt-[20px] relative shrink-0 text-center w-full select-text">
          <p className="font-['Fraunces',serif] font-bold text-[20px] sm:text-[22px] text-[#09090b] leading-[1.2] py-[2px] w-full text-center relative shrink-0 select-text">
            Subscribe to a <span className="font-bold select-text">QPS Plan</span>
          </p>
          <p className="font-['DM_Sans',sans-serif] font-normal text-[#515151] relative shrink-0 text-[14px] whitespace-nowrap select-text">
            Reserves your max search QPS
          </p>
        </div>
      </div>
    </a>
  );
}

function PayAsYouGoCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href="#pay-as-you-go"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full md:flex-[1_0_0] md:min-w-px relative rounded-[24px] bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] hover:-translate-y-[3px] hover:shadow-[0px_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out block overflow-hidden cursor-pointer select-text no-underline text-inherit"
    >
      <div className="flex flex-col items-center justify-center size-full p-[6px] pb-[24px] relative z-10 select-text">
        <PayAsYouGoGraphic isHovered={isHovered} />
        <div className="content-stretch flex flex-col gap-[6px] items-center pt-[20px] relative shrink-0 text-center w-full select-text">
          <p className="font-['Fraunces',serif] font-bold text-[20px] sm:text-[22px] text-[#09090b] leading-[1.2] py-[2px] w-full text-center relative shrink-0 select-text">
            Pay as you go
          </p>
          <p className="font-['DM_Sans',sans-serif] font-normal text-[#515151] relative shrink-0 text-[14px] whitespace-nowrap select-text">
            Covers actual API and token usage
          </p>
        </div>
      </div>
    </a>
  );
}

const STREAM_PARTICLES = [
  // Line 1 (y = 12.2px) - Pre-populated across the track
  { id: 1, lineY: 12.2, size: 3, dur: "1.8s", delay: "-0.0s", opacity: 0.95 },
  { id: 2, lineY: 12.2, size: 2.5, dur: "1.8s", delay: "-0.26s", opacity: 0.9 },
  { id: 3, lineY: 12.2, size: 3.5, dur: "1.8s", delay: "-0.52s", opacity: 1 },
  { id: 4, lineY: 12.2, size: 2.5, dur: "1.8s", delay: "-0.78s", opacity: 0.85 },
  { id: 5, lineY: 12.2, size: 3, dur: "1.8s", delay: "-1.04s", opacity: 0.95 },
  { id: 6, lineY: 12.2, size: 2, dur: "1.8s", delay: "-1.30s", opacity: 0.8 },
  { id: 7, lineY: 12.2, size: 3, dur: "1.8s", delay: "-1.56s", opacity: 1 },

  // Line 2 (y = 17.2px) - Pre-populated across the track
  { id: 8, lineY: 17.2, size: 2.5, dur: "1.8s", delay: "-0.13s", opacity: 0.9 },
  { id: 9, lineY: 17.2, size: 3.5, dur: "1.8s", delay: "-0.39s", opacity: 1 },
  { id: 10, lineY: 17.2, size: 2, dur: "1.8s", delay: "-0.65s", opacity: 0.8 },
  { id: 11, lineY: 17.2, size: 3, dur: "1.8s", delay: "-0.91s", opacity: 0.95 },
  { id: 12, lineY: 17.2, size: 2.5, dur: "1.8s", delay: "-1.17s", opacity: 0.9 },
  { id: 13, lineY: 17.2, size: 3.5, dur: "1.8s", delay: "-1.43s", opacity: 1 },
  { id: 14, lineY: 17.2, size: 2, dur: "1.8s", delay: "-1.69s", opacity: 0.85 },

  // Line 3 (y = 22.25px) - Pre-populated across the track
  { id: 15, lineY: 22.25, size: 3, dur: "1.8s", delay: "-0.07s", opacity: 0.95 },
  { id: 16, lineY: 22.25, size: 2.5, dur: "1.8s", delay: "-0.33s", opacity: 0.85 },
  { id: 17, lineY: 22.25, size: 3.5, dur: "1.8s", delay: "-0.59s", opacity: 1 },
  { id: 18, lineY: 22.25, size: 2, dur: "1.8s", delay: "-0.85s", opacity: 0.8 },
  { id: 19, lineY: 22.25, size: 3, dur: "1.8s", delay: "-1.11s", opacity: 0.95 },
  { id: 20, lineY: 22.25, size: 2.5, dur: "1.8s", delay: "-1.37s", opacity: 0.9 },
  { id: 21, lineY: 22.25, size: 3.5, dur: "1.8s", delay: "-1.63s", opacity: 1 },

  // Line 4 (y = 27.6px) - Pre-populated across the track
  { id: 22, lineY: 27.6, size: 2.5, dur: "1.8s", delay: "-0.20s", opacity: 0.9 },
  { id: 23, lineY: 27.6, size: 3, dur: "1.8s", delay: "-0.46s", opacity: 1 },
  { id: 24, lineY: 27.6, size: 2, dur: "1.8s", delay: "-0.72s", opacity: 0.8 },
  { id: 25, lineY: 27.6, size: 3.5, dur: "1.8s", delay: "-0.98s", opacity: 1 },
  { id: 26, lineY: 27.6, size: 2.5, dur: "1.8s", delay: "-1.24s", opacity: 0.85 },
  { id: 27, lineY: 27.6, size: 3, dur: "1.8s", delay: "-1.50s", opacity: 0.95 },
  { id: 28, lineY: 27.6, size: 2, dur: "1.8s", delay: "-1.76s", opacity: 0.8 },
];

function PlaceholderCardGraphic({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="h-[180px] relative rounded-[16px] shrink-0 w-full overflow-hidden bg-black border border-[#2a2a2a] flex items-center justify-center isolate select-none">
      {/* Background radial glow */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${isHovered ? "opacity-95" : "opacity-60"}`}
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(112, 254, 126, 0.22) 0%, rgba(3, 152, 85, 0.08) 45%, rgba(0, 0, 0, 0) 75%)"
        }}
      />
      {/* 20px Subtle Grid Texture (1px stroke, 0.1 opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />

      {/* 1. LEFT DATA BOX: Figma node 13519:1229 (left: 36.58px / calc(50%-138px-20px), top: 71px, size: 40px) */}
      <div className="absolute left-[36.58px] sm:left-[calc(50%-158px)] top-[71px] z-20 flex items-center justify-center size-[40px]">
        {/* Continuous Expanding Shadow Ripples (Only active on hover) */}
        <div className={`absolute size-[40px] rounded-[8px] pointer-events-none transition-opacity duration-300 ${isHovered ? "animate-shadow-ripple-1 opacity-100" : "opacity-0"}`} />
        <div className={`absolute size-[40px] rounded-[8px] pointer-events-none transition-opacity duration-300 ${isHovered ? "animate-shadow-ripple-2 opacity-100" : "opacity-0"}`} />
        <div className={`absolute size-[40px] rounded-[8px] pointer-events-none transition-opacity duration-300 ${isHovered ? "animate-shadow-ripple-3 opacity-100" : "opacity-0"}`} />

        {/* Inner Solid Box (No static shadow - shadow is 100% dynamic from ripples) */}
        <div className="size-[40px] rounded-[8px] bg-[#141212] border-2 border-[rgba(112,254,126,0.5)] flex flex-col items-center justify-center relative z-10">
          {/* Exact Figma Data Cylinder Icon */}
          <svg className="size-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7464 19.4399C21.7464 21.2597 17.3209 22.7348 11.8617 22.7348C6.4024 22.7348 1.97691 21.2587 1.97691 19.4399V14.8481C2.64311 15.282 3.42902 15.6261 4.24644 15.8979C6.28663 16.578 8.97833 16.9663 11.8617 16.9663C14.745 16.9663 17.4368 16.578 19.4759 15.8979C20.2943 15.6261 21.0803 15.282 21.7464 14.8481V19.4399ZM21.7464 11.6948C21.7457 13.5143 17.3204 14.9887 11.8617 14.9887C6.40286 14.9887 1.97766 13.5143 1.97691 11.6948V7.43893C2.64313 7.87287 3.42998 8.21692 4.24644 8.48776C6.28663 9.16881 8.97833 9.55514 11.8617 9.55514C14.745 9.55513 17.4368 9.16879 19.4759 8.48874C20.2943 8.21593 21.0803 7.87284 21.7464 7.43796V11.6948ZM11.8617 0.988738C15.9556 0.988756 19.4685 1.81838 20.9691 3.00046C21.4692 3.3948 21.7464 3.82806 21.7464 4.28268C21.7464 6.10243 17.3209 7.57856 11.8617 7.57858C6.4024 7.57858 1.97691 6.10244 1.97691 4.28268V4.27975C1.98209 2.46105 6.40551 0.988738 11.8617 0.988738Z" fill="url(#figmaDataGrad)"/>
            <defs>
              <linearGradient id="figmaDataGrad" x1="11.8617" y1="0.988738" x2="11.8617" y2="22.7348" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0.65"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* LEFT-TO-CENTER INGESTION STREAM (Width 85.5px from left: 79.05px / calc(50%-118px) to calc(50%-30px)) */}
      <div className="absolute left-[76.6px] sm:left-[calc(50%-118px)] top-[71px] w-[88px] h-[40px] pointer-events-none z-10">
        {/* Background 4 dashed tracks matching Figma top: 83.2px, 88.2px, 93.25px, 98.6px */}
        <svg className="w-full h-full" viewBox="0 0 88 40" fill="none">
          <line x1="0" y1="12.2" x2="88" y2="12.2" stroke="#163826" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="0" y1="17.2" x2="88" y2="17.2" stroke="#163826" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="0" y1="22.25" x2="88" y2="22.25" stroke="#163826" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="0" y1="27.6" x2="88" y2="27.6" stroke="#163826" strokeWidth="1.2" strokeDasharray="3 3" />
        </svg>

        {/* Streaming constant-speed linear data dots distributed on 4 lines (Animated on hover) */}
        {STREAM_PARTICLES.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-[#70FE7E] shadow-[0_0_6px_#70FE7E] animate-dot-stream"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: "0px",
              top: `${dot.lineY - dot.size / 2}px`,
              // @ts-expect-error Custom CSS properties
              "--stream-x": "88px",
              "--stream-dur": dot.dur,
              "--stream-delay": dot.delay,
              opacity: dot.opacity,
              animationPlayState: isHovered ? "running" : "paused",
            }}
          />
        ))}
      </div>

      {/* 2. CENTER OCTEN HUB: Figma node 13519:937 (left: calc(50%-0.5px), top: 59px, size: 60px) */}
      <OctenCenterHub isHovered={isHovered} />

      {/* CENTER-TO-RIGHT DUAL OPPOSITE CHANNELS (Figma Vector 12, 14, 15: top: 86.76px & 96.76px, width: 85-88px) */}
      <div className="absolute left-[calc(50%+30px)] right-[76.6px] sm:right-auto top-0 bottom-0 sm:w-[88px] pointer-events-none z-10">
        {/* Top Track: Vector 12 Base Track + Vector 14 Moving Gradient Light Beam (Left to Right / Octen -> Message) */}
        <div className="absolute left-0 right-0 sm:w-[88px] top-[86.76px] h-[2px] overflow-hidden">
          {/* Figma Vector 12 Base Track (#70FE7E opacity 0.2) */}
          <div className="absolute inset-0 bg-[#70FE7E] opacity-20 h-[2px]" />
          {/* Figma Vector 14 Moving Gradient Light Beam (34px wide, #43984B 0% -> #70FE7E 100%) */}
          <div 
            className="absolute top-0 left-0 w-[34px] h-[2px] rounded-full animate-laser-beam-right shadow-[0_0_8px_#70FE7E]"
            style={{
              background: "linear-gradient(90deg, rgba(67, 152, 75, 0) 0%, #70FE7E 100%)",
              animationPlayState: isHovered ? "running" : "paused",
            }}
          />
          <div 
            className="absolute top-0 left-0 w-[34px] h-[2px] rounded-full animate-laser-beam-right-delayed shadow-[0_0_8px_#70FE7E]"
            style={{
              background: "linear-gradient(90deg, rgba(67, 152, 75, 0) 0%, #70FE7E 100%)",
              animationPlayState: isHovered ? "running" : "paused",
            }}
          />
        </div>

        {/* Bottom Track: Vector 12 Base Track + Vector 15 Moving Gradient Light Beam (Right to Left / Message -> Octen) */}
        <div className="absolute left-0 right-0 sm:w-[88px] top-[96.76px] h-[2px] overflow-hidden">
          {/* Figma Vector 12 Base Track (#70FE7E opacity 0.2) */}
          <div className="absolute inset-0 bg-[#70FE7E] opacity-20 h-[2px]" />
          {/* Figma Vector 15 Moving Gradient Light Beam (34px wide, #70FE7E 0% -> #43984B 100%) */}
          <div 
            className="absolute top-0 left-0 w-[34px] h-[2px] rounded-full animate-laser-beam-left shadow-[0_0_8px_#70FE7E]"
            style={{
              background: "linear-gradient(90deg, #70FE7E 0%, rgba(67, 152, 75, 0) 100%)",
              animationPlayState: isHovered ? "running" : "paused",
            }}
          />
          <div 
            className="absolute top-0 left-0 w-[34px] h-[2px] rounded-full animate-laser-beam-left-delayed shadow-[0_0_8px_#70FE7E]"
            style={{
              background: "linear-gradient(90deg, #70FE7E 0%, rgba(67, 152, 75, 0) 100%)",
              animationPlayState: isHovered ? "running" : "paused",
            }}
          />
        </div>
      </div>

      {/* 3. RIGHT MESSAGE BOX: Figma node 13519:1231 (left: 312.42px / right: 36.58px / calc(50%+118px), top: 71px, size: 40px) */}
      <div className="absolute right-[36.58px] sm:right-auto sm:left-[calc(50%+118px)] top-[71px] z-20 flex items-center justify-center size-[40px]">
        {/* Continuous Expanding Shadow Ripples (Only active on hover) */}
        <div className={`absolute size-[40px] rounded-[8px] pointer-events-none transition-opacity duration-300 ${isHovered ? "animate-shadow-ripple-1 opacity-100" : "opacity-0"}`} />
        <div className={`absolute size-[40px] rounded-[8px] pointer-events-none transition-opacity duration-300 ${isHovered ? "animate-shadow-ripple-2 opacity-100" : "opacity-0"}`} />
        <div className={`absolute size-[40px] rounded-[8px] pointer-events-none transition-opacity duration-300 ${isHovered ? "animate-shadow-ripple-3 opacity-100" : "opacity-0"}`} />

        {/* Inner Solid Box (No static shadow - shadow is 100% dynamic from ripples) */}
        <div className="size-[40px] rounded-[8px] bg-[#141212] border-2 border-[rgba(112,254,126,0.5)] flex flex-col items-center justify-center relative z-10">
          {/* Exact Figma Fluent Person Chat Icon */}
          <svg className="size-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.497 16.9978C9.497 15.7078 9.872 14.5078 10.519 13.4968H4.75C4.15326 13.4968 3.58097 13.7338 3.15901 14.1558C2.73705 14.5777 2.5 15.15 2.5 15.7468V16.6668C2.5 17.2388 2.678 17.7968 3.01 18.2628C4.413 20.2308 6.627 21.2968 9.59 21.4728L10.112 19.7598C9.70666 18.8954 9.49668 17.9524 9.497 16.9978ZM10.498 1.49877C11.8243 1.49877 13.0964 2.02566 14.0342 2.96353C14.9721 3.9014 15.499 5.17343 15.499 6.49977C15.499 7.82612 14.9721 9.09815 14.0342 10.036C13.0964 10.9739 11.8243 11.5008 10.498 11.5008C9.17165 11.5008 7.89963 10.9739 6.96176 10.036C6.02389 9.09815 5.497 7.82612 5.497 6.49977C5.497 5.17343 6.02389 3.9014 6.96176 2.96353C7.89963 2.02566 9.17165 1.49877 10.498 1.49877ZM21.5 16.9978C21.5006 17.9555 21.2511 18.8968 20.7762 19.7286C20.3012 20.5603 19.6173 21.2535 18.7922 21.7398C17.967 22.226 17.0292 22.4883 16.0715 22.5008C15.1139 22.5132 14.1695 22.2754 13.332 21.8108L11.145 22.4758C11.0583 22.5022 10.966 22.5045 10.8781 22.4826C10.7902 22.4606 10.7098 22.4151 10.6457 22.351C10.5817 22.2869 10.5362 22.2066 10.5142 22.1187C10.4922 22.0307 10.4946 21.9385 10.521 21.8518L11.187 19.6648C10.7802 18.9304 10.5468 18.1126 10.5049 17.274C10.4629 16.4355 10.6134 15.5985 10.9449 14.8272C11.2764 14.0558 11.7801 13.3706 12.4173 12.8239C13.0545 12.2773 13.8084 11.8837 14.6212 11.6735C15.434 11.4632 16.2842 11.4417 17.1066 11.6108C17.929 11.7798 18.7017 12.1349 19.3657 12.6487C20.0297 13.1625 20.5672 13.8215 20.9372 14.5752C21.3071 15.3289 21.4996 16.1572 21.5 16.9968M13.999 15.4968C13.8664 15.4968 13.7392 15.5495 13.6454 15.6432C13.5517 15.737 13.499 15.8642 13.499 15.9968C13.499 16.1294 13.5517 16.2566 13.6454 16.3503C13.7392 16.4441 13.8664 16.4968 13.999 16.4968H17.999C18.1316 16.4968 18.2588 16.4441 18.3526 16.3503C18.4463 16.2566 18.499 16.1294 18.499 15.9968C18.499 15.8642 18.4463 15.737 18.3526 15.6432C18.2588 15.5495 18.1316 15.4968 17.999 15.4968H13.999ZM13.499 17.9968C13.499 18.1294 13.5517 18.2566 13.6454 18.3503C13.7392 18.4441 13.8664 18.4968 13.999 18.4968H15.999C16.1316 18.4968 16.2588 18.4441 16.3526 18.3503C16.4463 18.2566 16.499 18.1294 16.499 17.9968C16.499 17.8642 16.4463 17.737 16.3526 17.6432C16.2588 17.5495 16.1316 17.4968 15.999 17.4968H13.999C13.8664 17.4968 13.7392 17.5495 13.6454 17.6432C13.5517 17.737 13.499 17.8642 13.499 17.9968Z" fill="url(#figmaPersonGrad)"/>
            <defs>
              <linearGradient id="figmaPersonGrad" x1="12" y1="1.49877" x2="12" y2="22.5012" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0.65"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none rounded-[16px] z-20 shadow-[inset_-30px_0px_30px_0px_#000000,inset_20px_0px_30px_0px_#000000]" />
    </div>
  );
}

function PlaceholderCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href="#enterprise-plan"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full md:flex-[1_0_0] md:min-w-px relative rounded-[24px] bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] hover:-translate-y-[3px] hover:shadow-[0px_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out block overflow-hidden cursor-pointer select-text no-underline text-inherit"
    >
      <div className="flex flex-col items-center justify-center size-full p-[6px] pb-[24px] relative z-10 select-text">
        <PlaceholderCardGraphic isHovered={isHovered} />
        <div className="content-stretch flex flex-col gap-[6px] items-center pt-[20px] relative shrink-0 text-center w-full select-text">
          <p className="font-['Fraunces',serif] font-bold text-[20px] sm:text-[22px] text-[#09090b] leading-[1.2] py-[2px] w-full text-center relative shrink-0 select-text">
            Enterprise Plan
          </p>
          <p className="font-['DM_Sans',sans-serif] font-normal text-[#515151] relative shrink-0 text-[14px] whitespace-nowrap select-text">
            Adds custom data and dedicated support
          </p>
        </div>
      </div>
    </a>
  );
}

function HeroLightGlow() {
  return (
    <div 
      className="absolute w-[2002px] h-[323px] left-[calc(50%-1001px)] top-[-219.56px] pointer-events-none z-[2] overflow-visible"
      style={{ opacity: 0.6 }}
      data-name="light"
    >
      <div className="absolute w-[2001px] h-[323px] left-[0.46px] top-0 pointer-events-none">
        {/* Ellipse 3696: Deep Green Blur (200px) */}
        <div 
          className="absolute left-[0.02%] right-[0.03%] top-0 bottom-0 bg-[#2D985E] rounded-full pointer-events-none" 
          style={{ filter: "blur(200px)" }}
        />
        {/* Ellipse 3697: Bright Yellow Accent Blur (100px) */}
        <div 
          className="absolute left-[22.61%] right-[22.62%] top-[22.6%] bottom-[22.6%] bg-[#F4FE38] rounded-full pointer-events-none" 
          style={{ filter: "blur(100px)" }}
        />
      </div>
    </div>
  );
}

function PlusSeparator() {
  return (
    <div className="shrink-0 z-20 pointer-events-none flex items-center justify-center self-center h-[20px] md:h-[32px] w-full md:w-auto my-0.5 md:my-0">
      <div className="size-[20px] rounded-full bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center text-[#71717A] shadow-2xs">
        <svg className="size-[10px]" viewBox="0 0 12 12" fill="none">
          <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function SlashSeparator() {
  return (
    <div className="shrink-0 z-20 pointer-events-none flex items-center justify-center self-center h-[20px] md:h-[32px] w-full md:w-auto my-0.5 md:my-0">
      <div className="size-[20px] rounded-full bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center text-[#71717A] shadow-2xs">
        <svg className="size-[10px]" viewBox="0 0 12 12" fill="none">
          <path d="M8.5 2L3.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function HowOctenWorksSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pt-[60px] sm:pt-[84px] pb-[50px] sm:pb-[80px] px-4 sm:px-6 relative w-full isolate">
      {/* Title & Subtitle per user screenshot */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4 mb-[36px] sm:mb-[48px]">
        <h2 className="font-['Fraunces',serif] font-bold text-[32px] sm:text-[52px] leading-[1.1] text-[#09090b]">
          How Octen works
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#5d605b] text-center max-w-[800px]">
          Octen has two layers &mdash; pay-as-you-go API credits, and a QPS Plan that reserves search throughput. Every account starts on the free QPS Plan.
        </p>
      </div>

      {/* Entry Cards Container (3 Cards on Desktop, 1 Column on Mobile) */}
      <div className="content-stretch flex flex-col md:flex-row gap-[6px] sm:gap-[8px] md:gap-[10px] items-stretch justify-center relative shrink-0 w-full max-w-[1280px]">
        <PayAsYouGoCard />
        <PlusSeparator />
        <QpsPlanCard />
        <SlashSeparator />
        <PlaceholderCard />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
      <div 
        className="content-stretch flex flex-col items-center justify-center min-h-[440px] sm:min-h-[480px] pt-[84px] pb-[44px] px-4 sm:px-6 md:px-8 relative w-full overflow-hidden isolate bg-[#080B12]"
        style={{
          background: "linear-gradient(180deg, rgba(17, 70, 43, 0.6) 0%, rgba(8, 11, 18, 0) 100%), #080B12"
        }}
        data-name="hero"
      >
        {/* Dynamic WebGL Dither Shader Background Layer */}
        <div className="absolute inset-0 size-full pointer-events-none z-0 overflow-hidden opacity-35 mix-blend-screen">
          <DitherBackgroundCanvas fallbackSrc={imgDither1} />
        </div>

        <HeroLightGlow />
        <div className="relative z-10 w-full flex flex-col items-center" data-name="hero-content">
          <HeroHeader />
        </div>
      </div>

      <HowOctenWorksSection />
    </>
  );
}
