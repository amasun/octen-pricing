import { useState, useRef, useEffect } from "react";
import { Type, Image as LucideImageIcon, Video as LucideVideoIcon } from "lucide-react";
import imgBackgroundRectangle from "../../imports/Background Rectangle.png";
import svgAnthropic from "../../imports/anthropic.svg";
import svgOpenAI from "../../imports/open-a-i.svg";
import svgGemini from "../../imports/gemini.svg";
import svgDeepSeek from "../../imports/deepseek.svg";
import svgMoonshot from "../../imports/moonshot.svg";
import svgQwen from "../../imports/qwen.svg";
import imgMiniMax from "../../imports/minimax.png";

// Content-type pill icons for section headers — per Figma spec
const PILL_CLS = "inline-flex items-center gap-[4px] px-[6px] py-[4px] h-[22px] rounded-[4px] bg-white border border-[#C5CCD2]";
const LABEL_CLS = "font-['DM_Sans',sans-serif] font-medium text-[12px] leading-[12px] text-[#7C7C79]";
const ICON_COLOR = "#7C7C79";

function TextIcon() {
  return (
    <span title="Text" className={PILL_CLS}>
      <Type size={11} color={ICON_COLOR} strokeWidth={2} />
      <span className={LABEL_CLS}>Text</span>
    </span>
  );
}
function ImageIcon() {
  return (
    <span title="Image" className={PILL_CLS}>
      <LucideImageIcon size={11} color={ICON_COLOR} strokeWidth={2} />
      <span className={LABEL_CLS}>Image</span>
    </span>
  );
}
function VideoIcon() {
  return (
    <span title="Video" className={PILL_CLS}>
      <LucideVideoIcon size={11} color={ICON_COLOR} strokeWidth={2} />
      <span className={LABEL_CLS}>Video</span>
    </span>
  );
}

export default function ApiExplorer() {

  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[40px] sm:pb-[60px] pt-[50px] sm:pt-[110px] relative shrink-0 w-full max-w-[1320px] px-4 box-border" id="api-pricing">
      {/* Title Header */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4 mb-[36px] sm:mb-[52px]">
        <h2 className="font-['Fraunces',serif] font-bold text-[28px] sm:text-[44px] leading-[1.15] sm:leading-[48px] text-[#09090b]">
          Pay-As-You-Go
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5d605b] text-center sm:whitespace-nowrap whitespace-normal max-w-full">
          Transparent real-time deduction based on actual API calls, token consumption, and multi-model gateway usage.
        </p>
      </div>

      {/* Stacked API Sections Container */}
      <div className="content-stretch flex flex-col gap-[40px] sm:gap-[56px] items-start relative shrink-0 w-full">
        
        {/* SECTION 1: Search & Extract APIs */}
        <div className="w-full flex flex-col gap-[16px]">
          <div className="flex flex-col gap-1 items-start">
            <div className="flex flex-row items-start gap-[12px] group cursor-default">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] mt-[4px] sm:mt-[7px] transition-transform duration-200 group-hover:scale-125 origin-center">
                <path d="M23.0564 23.0572L18.9342 18.9351" stroke="#100F09" strokeWidth="2.338" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.9986 20.8215C17.7657 20.8215 20.8195 17.7677 20.8195 14.0006C20.8195 10.2335 17.7657 7.17969 13.9986 7.17969C10.2316 7.17969 7.17773 10.2335 7.17773 14.0006C7.17773 17.7677 10.2316 20.8215 13.9986 20.8215Z" stroke="#100F09" strokeWidth="2.338" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.0012 16.1725C15.2009 16.1725 16.1733 15.1999 16.1733 14.0002C16.1733 12.8006 15.2009 11.8281 14.0012 11.8281C12.8015 11.8281 11.829 12.8006 11.829 14.0002C11.829 15.1999 12.8015 16.1725 14.0012 16.1725Z" stroke="#100F09" strokeWidth="2.338" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.72756 5.92383L5.69568 5.95152" stroke="#100F09" strokeWidth="2.52" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.4594 24.8505C17.0842 25.4166 15.5777 25.7288 13.9981 25.7288C7.52062 25.7288 2.26953 20.4777 2.26953 14.0002C2.26953 12.2582 2.64928 10.6049 3.33052 9.11865" stroke="#100F09" strokeWidth="2.338" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24.687 18.8349C25.3548 17.3607 25.7267 15.7238 25.7267 14.0001C25.7267 7.52258 20.4756 2.27148 13.9981 2.27148C12.1143 2.27148 10.3342 2.71562 8.75684 3.50488" stroke="#100F09" strokeWidth="2.338" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="title-metallic-hover font-['Fraunces',serif] font-bold text-[22px] sm:text-[28px] leading-[32px] sm:leading-[42px] text-[#100F09]">
                Search &amp; Extract APIs
              </h3>
            </div>
            <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#5d605b] leading-relaxed">
              Real-time web search, full content extraction, image/video multimodal retrieval, and structured webpage parsing.
            </p>
          </div>

          <div className="w-full overflow-x-auto [webkit-overflow-scrolling:touch] rounded-[12px]">
            <div className="min-w-[1005px] w-full bg-gradient-to-l from-[#b9f8a3] to-[#51f174] border-2 border-[#46db98] relative rounded-[12px] shrink-0 flex flex-col overflow-hidden" data-name="Table">
              {/* Top-Right Shimmer Accent Overlay */}
              <img
                src={imgBackgroundRectangle}
                alt=""
                className="absolute h-[64.2px] right-[-50px] top-0 w-[754px] pointer-events-none object-cover mix-blend-multiply"
                data-name="Background Rectangle"
              />
              {/* Header Container */}
              <div className="flex items-center px-[20px] py-[14px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#09090b] uppercase tracking-wider relative z-10 w-full" data-name="Header Container">
                <div className="w-[280px] shrink-0 whitespace-nowrap">Resource</div>
                <div className="w-[265px] shrink-0 whitespace-nowrap">Price(USD)</div>
                <div className="w-[420px] shrink-0 whitespace-nowrap">Description</div>
              </div>

              {/* Content Container (White rounded box) */}
              <div className="bg-white rounded-[10px] overflow-hidden flex flex-col relative z-10 w-full min-w-full" data-name="Content Container">
                {/* Section 1: Broad Search & Web Search */}
                <div className="bg-[#f0f4f6] min-h-[42px] flex items-center gap-[16px] px-[20px] py-[10px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Broad Search &amp; Web Search</span>
                  <span className="flex items-center gap-[4px] shrink-0"><TextIcon /></span>
                </div>
                {/* Search API Call */}
                <div className="flex items-center min-h-[50px] px-[20px] py-[12px] border-b border-[#e8e8e8] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full" data-name="Search API Call Details Container">
                  <div className="w-[280px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#515151]">
                    Search API Call
                  </div>
                  <div className="w-[265px] shrink-0 flex items-center gap-[10px]">
                    <span className="font-['JetBrains_Mono',monospace] font-normal text-[14px] text-[#131212] whitespace-nowrap">
                      <span className="line-through text-[#515151] mr-1">$5</span> $1 / 1k calls
                    </span>
                    <span className="h-[24px] px-[8px] bg-[#70FE7E] rounded-[6px] flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[13px] leading-[13px] text-[#100F09] whitespace-nowrap shrink-0">
                      80% Off
                    </span>
                  </div>
                  <div className="w-[420px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[14px] text-[#515151]">
                    Single Broad Search may invoke multiple search calls
                  </div>
                </div>
                {/* Full Content Extraction */}
                <div className="flex items-center min-h-[50px] px-[20px] py-[12px] border-b border-[#e8e8e8] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full" data-name="Full Content Extraction Container">
                  <div className="w-[280px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#515151]">
                    Full Content Extraction
                  </div>
                  <div className="w-[265px] shrink-0">
                    <span className="font-['JetBrains_Mono',monospace] font-normal text-[14px] text-[#131212] whitespace-nowrap">
                      $0.001 / 1k tokens
                    </span>
                  </div>
                  <div className="w-[420px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[14px] text-[#515151]">
                    Includes complete HTML to markdown parsing &amp; structural extraction
                  </div>
                </div>

                {/* Section 2: Image Search & Video Search */}
                <div className="bg-[#f0f4f6] min-h-[42px] flex items-center gap-[16px] px-[20px] py-[10px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Image Search &amp; Video Search</span>
                  <span className="flex items-center gap-[4px] shrink-0"><ImageIcon /><VideoIcon /></span>
                </div>
                <div className="flex items-center min-h-[50px] px-[20px] py-[12px] border-b border-[#e8e8e8] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full" data-name="Image Search Container">
                  <div className="w-[280px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#515151]">
                    API Call
                  </div>
                  <div className="w-[265px] shrink-0">
                    <span className="font-['JetBrains_Mono',monospace] font-normal text-[14px] text-[#131212] whitespace-nowrap">
                      $5 / 1k calls
                    </span>
                  </div>
                  <div className="w-[420px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[14px] text-[#515151]">
                    Multimodal indexing and retrieval for visual search agents
                  </div>
                </div>

                {/* Section 3: Web Extract */}
                <div className="bg-[#f0f4f6] min-h-[42px] flex items-center gap-[16px] px-[20px] py-[10px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Web Extract</span>
                  <span className="flex items-center gap-[4px] shrink-0"><TextIcon /></span>
                </div>
                <div className="flex items-center min-h-[50px] px-[20px] py-[12px] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full" data-name="Web Extract Container">
                  <div className="w-[280px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#515151]">
                    API Call
                  </div>
                  <div className="w-[265px] shrink-0">
                    <span className="font-['JetBrains_Mono',monospace] font-normal text-[14px] text-[#131212] whitespace-nowrap">
                      $1 / 1k successful URLs
                    </span>
                  </div>
                  <div className="w-[420px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151]">
                    Billed strictly per successful webpage parse and structured output
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Embedding & VL Embedding */}
        <div className="w-full flex flex-col gap-[16px]">
          <div className="flex flex-col gap-1 items-start">
            <div className="flex flex-row items-start gap-[12px] group cursor-default">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] mt-[4px] sm:mt-[7px] transition-transform duration-200 group-hover:scale-125 origin-center">
                <path d="M21.7465 10.1934L5.50974 19.7447" stroke="#100F09" strokeWidth="2.52" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.7465 19.0796L5.9117 10.3296" stroke="#100F09" strokeWidth="2.52" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.1039 23.6592L14.1039 5.26777" stroke="#100F09" strokeWidth="2.52" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="21.7474" cy="10.3294" r="2.51055" fill="#100F09"/>
                <circle cx="14.1045" cy="5.26747" r="2.39198" fill="#100F09"/>
                <circle cx="14.1043" cy="23.6591" r="2.83101" fill="#100F09"/>
                <circle cx="23.185" cy="19.7448" r="2.57883" transform="rotate(124.49 23.185 19.7448)" fill="#100F09"/>
                <circle cx="4.65072" cy="20.2034" r="2.54304" transform="rotate(61.0709 4.65072 20.2034)" fill="#100F09"/>
                <circle cx="5.91174" cy="10.3318" r="2.513" fill="#100F09"/>
              </svg>
              <h3 className="title-metallic-hover font-['Fraunces',serif] font-bold text-[22px] sm:text-[28px] leading-[32px] sm:leading-[42px] text-[#100F09]">
                Embedding &amp; VL Embedding
              </h3>
            </div>
            <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#5d605b] leading-relaxed">
              High-performance dense text embedding models and cross-modal visual language embedding for RAG &amp; search indexing.
            </p>
          </div>

          <div className="w-full overflow-x-auto [webkit-overflow-scrolling:touch] rounded-[12px]">
            <div className="min-w-[1120px] w-full bg-gradient-to-l from-[#b9f8a3] to-[#51f174] border-2 border-[#46db98] relative rounded-[12px] shrink-0 flex flex-col overflow-hidden" data-name="Table">
              {/* Top-Right Shimmer Accent Overlay */}
              <img
                src={imgBackgroundRectangle}
                alt=""
                className="absolute h-[64.2px] right-[-50px] top-0 w-[754px] pointer-events-none object-cover mix-blend-multiply"
                data-name="Background Rectangle"
              />
              {/* Header Container */}
              <div className="flex items-center px-[20px] py-[14px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#09090b] uppercase tracking-wider relative z-10 w-full" data-name="Header Container">
                <div className="w-[260px] shrink-0 whitespace-nowrap">Model Name</div>
                <div className="w-[220px] shrink-0 whitespace-nowrap">Text Input (USD / 1M)</div>
                <div className="w-[260px] shrink-0 whitespace-nowrap">Image / Video Input (USD / 1M)</div>
                <div className="w-[340px] shrink-0 whitespace-nowrap">Best Architectural Fit</div>
              </div>

              {/* Content Container (White rounded box) */}
              <div className="bg-white rounded-[10px] overflow-hidden flex flex-col relative z-10 w-full min-w-full" data-name="Content Container">
                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center gap-[16px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] tracking-[0.28px] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Text Embedding</span>
                  <span className="flex items-center gap-[4px] shrink-0"><TextIcon /></span>
                </div>
                {[
                  { m: "octen/bge-m3-large",        inp: "$0.02", out: "-", fit: "Multilingual dense retrieval & multi-vector reranking" },
                  { m: "octen/text-embedding-v3",    inp: "$0.01", out: "-", fit: "Standard semantic vector search & document indexing" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out text-[14px] w-full">
                    <div className="w-[260px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['JetBrains_Mono',monospace] text-[14px]">{row.m}</div>
                    <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.inp}</div>
                    <div className="w-[260px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.out}</div>
                    <div className="w-[340px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] text-[#515151] text-[14px]">{row.fit}</div>
                  </div>
                ))}

                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center gap-[16px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] tracking-[0.28px] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Visual Language Embedding</span>
                  <span className="flex items-center gap-[4px] shrink-0"><ImageIcon /><VideoIcon /></span>
                </div>
                {[
                  { m: "octen/vlm-clip-large-3",    inp: "$0.05", out: "$0.10 / 1k images", fit: "Cross-modal image-to-text & visual RAG indexing" },
                  { m: "octen/vlm-video-embed-v2",  inp: "$0.08", out: "$0.25 / 1k frames", fit: "Temporal video scene search & frame-level indexing" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] last:border-b-0 hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out text-[14px] w-full">
                    <div className="w-[260px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['JetBrains_Mono',monospace] text-[14px]">{row.m}</div>
                    <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.inp}</div>
                    <div className="w-[260px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.out}</div>
                    <div className="w-[340px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] text-[#515151] text-[14px]">{row.fit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Applications & Deep Research */}
        <div className="w-full flex flex-col gap-[16px]">
          <div className="flex flex-col gap-1 items-start">
            <div className="flex flex-row items-start gap-[12px] group cursor-default">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] mt-[4px] sm:mt-[7px] transition-transform duration-200 group-hover:scale-125 origin-center">
                <path d="M19.3863 14.2935C22.4702 14.2937 24.9516 16.8127 24.9517 19.897C24.9517 22.9813 22.4703 25.5003 19.3863 25.5005C16.3022 25.5004 13.8199 22.9814 13.8199 19.897C13.82 16.8127 16.3022 14.2936 19.3863 14.2935ZM5.81888 15.5337C6.75942 14.1223 8.84409 14.1224 9.7847 15.5337L9.87455 15.6792L13.3326 21.7212C14.2393 23.3054 13.1171 25.3186 11.2603 25.3188H4.3433C2.48646 25.3186 1.36328 23.3054 2.27006 21.7212L5.72904 15.6792L5.81888 15.5337ZM19.3863 16.7935C17.7033 16.7936 16.32 18.1729 16.3199 19.897C16.3199 21.6212 17.7032 23.0004 19.3863 23.0005C21.0692 23.0003 22.4517 21.6211 22.4517 19.897C22.4516 18.173 21.0691 16.7937 19.3863 16.7935ZM4.52299 22.8188H11.0796L7.80131 17.0894L4.52299 22.8188ZM19.3863 1.81201C19.5965 1.81228 19.7763 1.96386 19.816 2.17041C20.4587 5.5179 21.4951 6.56548 24.8111 7.21436C25.0195 7.25523 25.1724 7.43654 25.1724 7.64893C25.1723 7.86131 25.0195 8.04264 24.8111 8.0835C21.4951 8.73236 20.4588 9.77995 19.816 13.1274L19.7945 13.2026C19.7307 13.3699 19.5702 13.4856 19.3863 13.4858L19.3081 13.479C19.1325 13.447 18.9903 13.3081 18.9556 13.1274C18.353 9.98929 17.4045 8.87242 14.5562 8.21045L13.9605 8.0835C13.752 8.0427 13.5992 7.86134 13.5992 7.64893C13.5992 7.43651 13.752 7.25515 13.9605 7.21436C17.2764 6.56545 18.3128 5.51793 18.9556 2.17041C18.9953 1.96367 19.1758 1.81201 19.3863 1.81201ZM9.97123 2.78076C11.5698 2.78098 12.847 4.08537 12.8472 5.67139V10.0474C12.847 11.6334 11.5698 12.9378 9.97123 12.938H5.63334C4.03469 12.9378 2.75655 11.6334 2.75638 10.0474V5.67139C2.75662 4.08538 4.03474 2.78098 5.63334 2.78076H9.97123ZM5.63334 5.28076C5.43577 5.28099 5.25661 5.44569 5.25638 5.67139V10.0474C5.25654 10.2731 5.43574 10.4378 5.63334 10.438H9.97123C10.1688 10.4378 10.347 10.2731 10.3472 10.0474V5.67139C10.347 5.4457 10.1688 5.28099 9.97123 5.28076H5.63334ZM19.3619 7.58643C19.3405 7.60795 19.317 7.62781 19.2954 7.64893C19.317 7.67004 19.3405 7.68991 19.3619 7.71143C19.3699 7.71957 19.3773 7.72865 19.3853 7.73682C19.3936 7.72835 19.4023 7.71986 19.4107 7.71143C19.4318 7.69013 19.4538 7.66983 19.4751 7.64893C19.4539 7.62806 19.4317 7.60768 19.4107 7.58643C19.4022 7.57782 19.3937 7.5687 19.3853 7.56006C19.3771 7.56843 19.3701 7.57808 19.3619 7.58643Z" fill="#100F09"/>
              </svg>
              <h3 className="title-metallic-hover font-['Fraunces',serif] font-bold text-[22px] sm:text-[28px] leading-[32px] sm:leading-[42px] text-[#100F09]">
                Applications &amp; Deep Research
              </h3>
            </div>
            <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#5d605b] leading-relaxed">
              Deep research agent workflows, search-grounded generation, and multimodal chat APIs.
            </p>
          </div>

          <div className="w-full overflow-x-auto [webkit-overflow-scrolling:touch] rounded-[12px]">
            <div className="min-w-[1080px] w-full bg-gradient-to-l from-[#b9f8a3] to-[#51f174] border-2 border-[#46db98] relative rounded-[12px] shrink-0 flex flex-col overflow-hidden" data-name="Table">
              {/* Top-Right Shimmer Accent Overlay */}
              <img
                src={imgBackgroundRectangle}
                alt=""
                className="absolute h-[64.2px] right-[-50px] top-0 w-[754px] pointer-events-none object-cover mix-blend-multiply"
                data-name="Background Rectangle"
              />
              {/* Header Container */}
              <div className="flex items-center px-[20px] py-[14px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#09090b] uppercase tracking-wider relative z-10 w-full" data-name="Header Container">
                <div className="w-[280px] shrink-0 whitespace-nowrap">Tier / Application</div>
                <div className="w-[200px] shrink-0 whitespace-nowrap">Billing Unit</div>
                <div className="w-[200px] shrink-0 whitespace-nowrap">Rate (USD)</div>
                <div className="w-[400px] shrink-0 whitespace-nowrap">Description</div>
              </div>

              {/* Content Container (White rounded box) */}
              <div className="bg-white rounded-[10px] overflow-hidden flex flex-col relative z-10 w-full min-w-full" data-name="Content Container">
                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center gap-[16px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Deep Research Agent</span>
                  <span className="flex items-center gap-[4px] shrink-0"><TextIcon /></span>
                </div>
                {[
                  { tier: "Lite Tier", unit: "Per Request", rate: "$0.20", desc: "Quick multi-source fact aggregation & synthesis" },
                  { tier: "Standard Tier", unit: "Per Request", rate: "$1.00", desc: "Deep domain topic research & structured reporting" },
                  { tier: "Pro Tier", unit: "Per Request", rate: "$2.50", desc: "Exhaustive enterprise-grade research with multi-step validation" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] text-[14px] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full">
                    <div className="w-[280px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['DM_Sans',sans-serif] text-[14px]">{row.tier}</div>
                    <div className="w-[200px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.unit}</div>
                    <div className="w-[200px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.rate}</div>
                    <div className="w-[400px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.desc}</div>
                  </div>
                ))}

                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center gap-[16px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Grounded Generation</span>
                  <span className="flex items-center gap-[4px] shrink-0"><ImageIcon /><VideoIcon /></span>
                </div>
                {[
                  { tier: "Image Generation", unit: "Per Output Image", rate: "$0.25", desc: "Search-backed image generation grounded in real-time web context" },
                  { tier: "Video Generation", unit: "Per Output Video", rate: "$1.00", desc: "Search-backed video generation grounded in real-time web context" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full">
                    <div className="w-[280px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['DM_Sans',sans-serif] text-[14px]">{row.tier}</div>
                    <div className="w-[200px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.unit}</div>
                    <div className="w-[200px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.rate}</div>
                    <div className="w-[400px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.desc}</div>
                  </div>
                ))}

                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center gap-[16px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Answer &amp; Multimodal Chat</span>
                  <span className="flex items-center gap-[4px] shrink-0"><TextIcon /><ImageIcon /><VideoIcon /></span>
                </div>
                {[
                  { tier: "Answer & Multimodal Chat", unit: "Search + Token Usage", rate: "Search + LLM rates", desc: "Standard Search API fees + selected LLM gateway token usage fees" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] last:border-b-0 hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full">
                    <div className="w-[280px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['DM_Sans',sans-serif] text-[14px]">{row.tier}</div>
                    <div className="w-[200px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.unit}</div>
                    <div className="w-[200px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.rate}</div>
                    <div className="w-[400px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Model Gateway Standalone Section (Arranged below Pay-As-You-Go Categories) */}
      <div className="w-full mt-10 sm:mt-14 flex flex-col gap-6" id="model-gateway">
        {/* Model Gateway Title & Description Header */}
        <div className="flex flex-col gap-1 items-start">
          <div className="flex flex-row items-start gap-[12px] group cursor-default">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] mt-[4px] sm:mt-[7px] transition-transform duration-200 group-hover:scale-125 origin-center">
              <path d="M24.5 14V9.32171C24.4993 8.91462 24.391 8.51495 24.1861 8.16318C23.9813 7.81141 23.6871 7.52002 23.3333 7.31854L15.1667 2.64254C14.8112 2.44 14.4091 2.3335 14 2.3335C13.5909 2.3335 13.1888 2.44 12.8333 2.64254L4.66667 7.31854C3.9445 7.7327 3.5 8.49687 3.5 9.32287V18.6772C3.5 19.5044 3.9445 20.2674 4.66667 20.6804L12.8333 25.3564C13.5567 25.7694 14.4433 25.7694 15.1667 25.3564M14 25.6667V14M14 14L24.185 8.12004M14 14L3.815 8.12004" stroke="#100F09" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.5714 17.2109C23.8401 16.9073 25.9254 18.4999 26.2296 20.7686C26.3578 21.7255 26.1466 22.6491 25.6915 23.4209L26.8419 24.9131C27.2628 25.4598 27.1608 26.2447 26.6144 26.666C26.0676 27.0874 25.2819 26.9853 24.8605 26.4385L23.8263 25.0967C23.4681 25.2581 23.0813 25.3719 22.672 25.4268C20.4032 25.7308 18.3171 24.1389 18.0128 21.8701C17.7088 19.6011 19.3024 17.515 21.5714 17.2109ZM21.9034 19.6885C21.0029 19.8091 20.3697 20.6375 20.4904 21.5381C20.6113 22.4384 21.4396 23.0698 22.34 22.9492C23.2402 22.8284 23.8715 22.0009 23.7511 21.1006C23.6303 20.2005 22.8036 19.5683 21.9034 19.6885Z" fill="#100F09"/>
            </svg>
            <div className="flex flex-col sm:flex-row sm:items-center gap-[6px] sm:gap-[12px]">
              <h3 className="font-['Fraunces',serif] font-bold text-[22px] sm:text-[28px] leading-[32px] sm:leading-[42px] text-[#100F09]">
                <span className="title-metallic-hover">Unified LLM Model Gateway</span>
              </h3>
              <span className="font-['DM_Sans',sans-serif] font-semibold text-[12px] px-2.5 py-0.5 rounded-full bg-[#70FE7E] text-[#100F09] self-start sm:self-auto sm:translate-y-[2px] shrink-0">
                Zero-Margin Pass-Through
              </span>
            </div>
          </div>
          <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#5d605b] leading-relaxed">
            For scenarios requiring LLM generation, access 20+ leading AI models through a unified gateway with zero-margin pass-through billing.
          </p>
        </div>

        {/* Single-Row Interactive Infinite Marquee Ticker with Touch/Mouse Drag Support */}
        <ModelGatewayMarquee />
      </div>

      {/* Footer Doc Link */}
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full pt-8">
        <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[16px] text-[#515151] text-center">
          For more information, visit our{" "}
          <a
            href="https://docs.octen.ai/overview/pricing#api-pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#039855] font-bold underline hover:text-[#027a44] transition-colors cursor-pointer"
          >
            API Pricing Documentation
          </a>
          .
        </p>
      </div>
    </div>
  );
}

function ModelGatewayMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const [isGrabbed, setIsGrabbed] = useState(false);
  const isHovered = useRef(false);

  const brands = [
    { name: "Anthropic", models: "Claude 3.5 Sonnet / Opus 4.8", inPrice: "From $1.00 / 1M", outPrice: "From $5.00 / 1M" },
    { name: "OpenAI", models: "GPT-4o / GPT-5.5 / DALL-E", inPrice: "From $2.50 / 1M", outPrice: "From $15.00 / 1M" },
    { name: "Google Gemini", models: "Gemini 3.5 Flash / 3.1 Pro", inPrice: "From $0.25 / 1M", outPrice: "From $1.50 / 1M" },
    { name: "DeepSeek", models: "DeepSeek-V4 / R1 Series", inPrice: "From $0.14 / 1M", outPrice: "From $0.28 / 1M" },
    { name: "Moonshot Kimi", models: "Kimi k2.5 / Kimi k2.6", inPrice: "From $0.60 / 1M", outPrice: "From $3.00 / 1M" },
    { name: "Qwen", models: "Qwen 3.6 Plus / Max", inPrice: "From $0.50 / 1M", outPrice: "From $3.00 / 1M" },
    { name: "MiniMax", models: "MiniMax m2.5", inPrice: "From $0.30 / 1M", outPrice: "From $1.20 / 1M" },
  ];

  // Quadruple brands array for seamless infinite drag & wrap
  const displayBrands = [...brands, ...brands, ...brands, ...brands];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.45; // Slower elegant scrolling speed

    const step = () => {
      if (!isDragging.current && !isHovered.current && el) {
        el.scrollLeft += speed;
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    setIsGrabbed(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    startScrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    let newScrollLeft = startScrollLeft.current - walk;
    const halfWidth = containerRef.current.scrollWidth / 2;

    if (newScrollLeft >= halfWidth) newScrollLeft -= halfWidth;
    if (newScrollLeft <= 0) newScrollLeft += halfWidth;

    containerRef.current.scrollLeft = newScrollLeft;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
    setIsGrabbed(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    startScrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    let newScrollLeft = startScrollLeft.current - walk;
    const halfWidth = containerRef.current.scrollWidth / 2;

    if (newScrollLeft >= halfWidth) newScrollLeft -= halfWidth;
    if (newScrollLeft <= 0) newScrollLeft += halfWidth;

    containerRef.current.scrollLeft = newScrollLeft;
  };

  const brandLogos: Record<string, string> = {
    "Anthropic": svgAnthropic,
    "OpenAI": svgOpenAI,
    "Google Gemini": svgGemini,
    "DeepSeek": svgDeepSeek,
    "Moonshot Kimi": svgMoonshot,
    "Qwen": svgQwen,
    "MiniMax": imgMiniMax,
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={() => {
        handleMouseUpOrLeave();
        isHovered.current = false;
      }}
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUpOrLeave}
      className={`w-screen relative left-1/2 -translate-x-1/2 sm:w-[calc(100vw-40px)] overflow-x-auto no-scrollbar py-2 select-none [mask-image:none] sm:[mask-image:linear-gradient(to_right,transparent_0%,black_68px,black_calc(100%-68px),transparent_100%)] ${
        isGrabbed ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex flex-row gap-4 w-max">
        {displayBrands.map((brand, idx) => (
          <div
            key={idx}
            className="w-[285px] shrink-0 bg-white hover:bg-[#f4f4f5] rounded-[16px] border border-[rgba(26,26,25,0.12)] transition-colors duration-200 p-5 flex flex-col justify-between box-border pointer-events-auto"
          >
            <div className="flex items-start justify-between mb-3 gap-2">
              <div className="flex flex-col min-w-0">
                <span className="font-['Fraunces',serif] font-bold text-[18px] text-[#100F09] truncate">
                  {brand.name}
                </span>
                <span className="font-['DM_Sans',sans-serif] text-[13px] text-[#7C7C79] mt-0.5 truncate">
                  {brand.models}
                </span>
              </div>
              <div className="shrink-0 mt-0.5 flex items-center justify-center">
                <img
                  src={brandLogos[brand.name]}
                  alt={brand.name}
                  className="w-[20px] h-[20px] object-contain shrink-0"
                />
              </div>
            </div>
            <div className="pt-3 border-t border-[rgba(26,26,25,0.12)] flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#7C7C79]">Input Rate</span>
                <span className="font-['JetBrains_Mono',monospace] font-normal text-[14px] leading-[23px] text-[#131212]">
                  {brand.inPrice}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#7C7C79]">Output Rate</span>
                <span className="font-['JetBrains_Mono',monospace] font-normal text-[14px] leading-[23px] text-[#131212]">
                  {brand.outPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
