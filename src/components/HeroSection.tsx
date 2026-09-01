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
      {/* Subtitle Group Frame 13350:3131 matching 1:1 Figma spec (gap-[10px]) */}
      <div className="flex flex-col items-center gap-[10px] w-full max-w-[720px]">
        <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] sm:text-[17px] md:text-[18px] leading-[1.3] relative shrink-0 text-center text-white/90 whitespace-normal px-2 m-0">
          Usage-based pricing for the search infrastructure behind your agents.
        </p>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[1.3] text-white text-center m-0 select-text">
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

function QpsCardGraphic({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="h-[180px] relative rounded-[16px] shrink-0 w-full overflow-hidden bg-black border border-[#2a2a2a]">
      <div className="absolute inset-0 size-full pointer-events-none opacity-85">
        <CurvedLightTrailsCanvas isAnimating={isHovered} fallbackSrc={imgShader2} />
      </div>
      <div className="-translate-x-1/2 absolute left-1/2 overflow-clip rounded-[14px] shadow-[0px_0px_40px_0px_rgba(112,254,126,0.61)] size-[60px] top-[59px] bg-black flex items-center justify-center z-10">
        <svg className="size-[32px]" fill="none" viewBox="0 0 32 26">
          <path d={svgPaths.p78eff80} fill="#70FE7E" />
        </svg>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_4px_0px_rgba(155,231,181,0.25),inset_0px_-3px_8px_0px_#70fe7e]" />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[16px] z-20 shadow-[inset_-30px_0px_30px_0px_#000000,inset_20px_0px_30px_0px_#000000]" />
    </div>
  );
}

function PayAsYouGoGraphic({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="h-[180px] relative rounded-[16px] shrink-0 w-full bg-black border border-[#2a2a2a] flex items-center justify-center" style={{overflow: 'clip'}}>
      <svg className="w-full h-auto max-h-[140px] pointer-events-none" overflow="visible" width="451" height="140" viewBox="0 0 451 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base Static Circuit Paths */}
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

        {/* Layer 2: Neon Mint — group-level filter (1 filter pass instead of 6) */}
        <g filter="url(#dotGlow)">
          <path d="M-2.67245 17.9568H122.631 C138.667 17.9568, 138.667 51.736, 154.702 51.736H220.307" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="60" className={isHovered ? "svg-flow-left" : ""} opacity={isHovered ? "1.0" : "0.8"} />
          <path d="M437.542 17.9568H327.575 C311.539 17.9568, 311.539 51.736, 295.504 51.736H229.899" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="108" className={isHovered ? "svg-flow-right" : ""} opacity={isHovered ? "1.0" : "0.85"} />
          <path d="M-2.67245 71.4863H220.307" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 71.9" strokeDashoffset="36" className={isHovered ? "svg-flow-left" : ""} opacity={isHovered ? "1.0" : "0.9"} />
          <path d="M452.291 70.4862H229.899" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="72" className={isHovered ? "svg-flow-right" : ""} opacity={isHovered ? "1.0" : "0.85"} />
          <path d="M13.2791 121.669H122.631 C138.667 121.669, 138.667 87.8903, 154.702 87.8903H220.307" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="96" className={isHovered ? "svg-flow-left" : ""} opacity={isHovered ? "1.0" : "0.75"} />
          <path d="M452.291 121.669H327.575 C311.539 121.669, 311.539 87.8903, 295.504 87.8903H229.899" stroke="#70FE7E" strokeWidth="3.0" strokeLinecap="round" strokeDasharray="0.1 143.9" strokeDashoffset="48" className={isHovered ? "svg-flow-right" : ""} opacity={isHovered ? "1.0" : "0.85"} />
        </g>

        {/* Layer 3: Bright Neon — group-level filter (1 filter pass instead of 6) */}
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
        <g filter="url(#filter6_dii_13075_473)">
          <path d="M195.5 54C195.5 46.268 201.768 40 209.5 40H241.5C249.232 40 255.5 46.268 255.5 54V86C255.5 93.732 249.232 100 241.5 100H209.5C201.768 100 195.5 93.732 195.5 86V54Z" fill="black"/>
          <g clipPath="url(#clip1_13075_473)">
            <path d="M240.338 74.4915C240.954 74.4916 241.454 75.0064 241.454 75.6409V77.4836C241.454 78.1181 240.954 78.633 240.338 78.6331H238.883C238.586 78.6331 238.303 78.7547 238.094 78.97L237.762 79.3127C237.554 79.5295 237.436 79.8208 237.436 80.1252V81.6252C237.436 82.2597 236.936 82.7746 236.321 82.7747H234.533C233.917 82.7745 233.419 82.2596 233.419 81.6252V79.7825C233.419 79.1481 233.918 78.6332 234.533 78.6331H236.321C236.618 78.633 236.9 78.5121 237.109 78.2971C237.318 78.0803 237.436 77.7881 237.436 77.4836V75.6409C237.436 75.0065 237.935 74.4916 238.55 74.4915H240.338ZM212.553 74.4895C213.169 74.4897 213.667 75.0047 213.668 75.6389V77.3958H213.671C213.671 77.7003 213.789 77.9924 213.998 78.2092C214.259 78.4801 214.615 78.6311 214.986 78.6311H216.49C217.105 78.6311 217.605 79.147 217.605 79.7815V81.6243C217.605 82.2586 217.105 82.7737 216.49 82.7737H214.703C214.087 82.7737 213.588 82.2586 213.587 81.6243V80.0725C213.587 79.69 213.44 79.3249 213.177 79.054C212.916 78.7832 212.561 78.6312 212.19 78.6311H210.767C210.152 78.6311 209.652 78.1162 209.652 77.4817V75.6389C209.652 75.0045 210.152 74.4911 210.767 74.4895H212.553ZM223.099 78.6321C223.715 78.6321 224.214 79.1467 224.214 79.7815V81.6223C224.214 82.2571 223.715 82.7717 223.099 82.7717H221.313C220.697 82.7717 220.198 82.2571 220.198 81.6223V79.7815C220.198 79.1467 220.697 78.6321 221.313 78.6321H223.099ZM229.71 78.6321C230.325 78.6323 230.824 79.1468 230.824 79.7815V81.6223C230.824 82.257 230.325 82.7715 229.71 82.7717H227.923C227.308 82.7717 226.808 82.2571 226.808 81.6223V79.7815C226.808 79.1467 227.308 78.6321 227.923 78.6321H229.71ZM230.848 57.2239C231.464 57.2239 231.963 57.739 231.963 58.3733V59.8225C231.963 60.1715 232.098 60.5067 232.336 60.7522L232.504 60.926C232.743 61.1715 233.068 61.3098 233.405 61.3098H234.767C235.382 61.31 235.881 61.8251 235.881 62.4592V73.7805L235.885 73.7834C235.885 74.4179 235.385 74.9328 234.77 74.9329H218.803C218.188 74.9328 217.688 74.4179 217.688 73.7834V72.2053C217.688 71.8992 217.571 71.6071 217.362 71.3918L217.358 71.387C217.064 71.0841 216.665 70.9144 216.251 70.9143H214.902C214.287 70.9143 213.787 70.3992 213.787 69.7649V58.3733C213.787 57.739 214.287 57.2239 214.902 57.2239H230.848ZM218.833 61.2766C218.217 61.2767 217.717 61.7917 217.717 62.426V69.4006C217.717 69.8294 217.882 70.2394 218.175 70.5422C218.386 70.7575 218.669 70.8792 218.964 70.8792H230.837C231.453 70.8791 231.953 70.3641 231.953 69.7297V62.5901C231.953 62.2412 231.818 61.9068 231.58 61.6614H231.582C231.342 61.4159 231.016 61.2766 230.679 61.2766H218.833ZM222.561 64.303C223.177 64.303 223.676 64.8176 223.676 65.4524V67.0627C223.676 67.6974 223.177 68.2122 222.561 68.2122H221C220.384 68.2122 219.885 67.6974 219.884 67.0627V65.4524C219.884 64.8176 220.384 64.303 221 64.303H222.561ZM228.6 64.303C229.216 64.3031 229.714 64.8177 229.714 65.4524V67.0627C229.714 67.6973 229.216 68.212 228.6 68.2122H227.038C226.422 68.212 225.924 67.6973 225.923 67.0627V65.4524C225.923 64.8177 226.422 64.3032 227.038 64.303H228.6Z" fill="#70FE7E"/>
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
          <filter id="filter0_d_13075_473" x="123.351" y="65.8131" width="11.6286" height="11.6286" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.996078 0 0 0 0 0.494118 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13075_473"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13075_473" result="shape"/>
          </filter>
          <filter id="filter1_d_13075_473" x="306.054" y="98.9656" width="11.6286" height="11.6286" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.996078 0 0 0 0 0.494118 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13075_473"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13075_473" result="shape"/>
          </filter>
          <filter id="filter2_d_13075_473" x="329.156" y="64.6719" width="11.6286" height="11.6286" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.996078 0 0 0 0 0.494118 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13075_473"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13075_473" result="shape"/>
          </filter>
          <filter id="filter3_d_13075_473" x="305.086" y="32.0054" width="11.6286" height="11.6286" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.996078 0 0 0 0 0.494118 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13075_473"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13075_473" result="shape"/>
          </filter>
          <filter id="filter4_d_13075_473" x="139.044" y="85.7172" width="11.6286" height="11.6286" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.996078 0 0 0 0 0.494118 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13075_473"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13075_473" result="shape"/>
          </filter>
          <filter id="filter5_d_13075_473" x="130.301" y="20.8367" width="11.6286" height="11.6286" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.996078 0 0 0 0 0.494118 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13075_473"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13075_473" result="shape"/>
          </filter>
          <filter id="filter6_dii_13075_473" x="155.5" y="0" width="140" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="20"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.996078 0 0 0 0 0.494118 0 0 0 0.61 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13075_473"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13075_473" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-3"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.996078 0 0 0 0 0.494118 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_13075_473"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.609437 0 0 0 0 0.905449 0 0 0 0 0.708107 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect2_innerShadow_13075_473" result="effect3_innerShadow_13075_473"/>
          </filter>
          <filter id="filter7_f_13075_473" x="157.363" y="48.2153" width="41.8454" height="6.72687" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_13075_473"/>
          </filter>
          <filter id="filter8_f_13075_473" x="251.851" y="48.2153" width="41.8454" height="6.72687" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_13075_473"/>
          </filter>
          <filter id="filter9_f_13075_473" x="157.363" y="68.2153" width="41.8454" height="6.72687" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_13075_473"/>
          </filter>
          <filter id="filter10_f_13075_473" x="251.851" y="67.2153" width="41.8454" height="6.72687" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_13075_473"/>
          </filter>
          <filter id="filter11_f_13075_473" x="157.363" y="84.2153" width="41.8454" height="6.72687" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_13075_473"/>
          </filter>
          <filter id="filter12_f_13075_473" x="251.851" y="84.2153" width="41.8454" height="6.72687" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_13075_473"/>
          </filter>
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
          <clipPath id="clip1_13075_473">
            <rect width="31.9384" height="31.9384" fill="white" transform="translate(209.531 54.0308)"/>
          </clipPath>
        </defs>
      </svg>
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

function PlaceholderCardGraphic({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="h-[180px] relative rounded-[16px] shrink-0 w-full overflow-hidden bg-black border border-[#2a2a2a] flex items-center justify-center isolate">
      {/* Background radial glow */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${isHovered ? "opacity-90" : "opacity-50"}`}
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(112, 254, 126, 0.15) 0%, rgba(0, 0, 0, 0) 70%)"
        }}
      />

      {/* Cyber Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />

      {/* Center Dynamic Placeholder Hologram Icon */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2">
        <div className={`size-[54px] rounded-[16px] bg-[#101318] border border-[#2D3748] flex items-center justify-center shadow-[0_0_24px_rgba(112,254,126,0.18)] transition-all duration-300 ${isHovered ? "scale-105 border-[#70FE7E]/50 shadow-[0_0_32px_rgba(112,254,126,0.35)]" : ""}`}>
          <svg className="size-[26px] text-[#70FE7E]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block size-[6px] rounded-full bg-[#70FE7E] animate-pulse" />
          <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#70FE7E] font-medium tracking-wide">
            ENTERPRISE LAYER
          </span>
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
        <PlusSeparator />
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
