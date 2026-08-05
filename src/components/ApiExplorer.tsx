import { useState, useRef } from "react";
import { Type, Image as LucideImageIcon, Video as LucideVideoIcon } from "lucide-react";
import imgBackgroundRectangle from "../../imports/Background Rectangle.png";
import TableDitherAccent from "./TableDitherAccent";

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

const TABS = [
  {
    id: 0,
    title: "Search & Extract APIs",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M23.0564 23.0572L18.9342 18.9351" stroke="currentColor" strokeWidth="2.338" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.9986 20.8215C17.7657 20.8215 20.8195 17.7677 20.8195 14.0006C20.8195 10.2335 17.7657 7.17969 13.9986 7.17969C10.2316 7.17969 7.17773 10.2335 7.17773 14.0006C7.17773 17.7677 10.2316 20.8215 13.9986 20.8215Z" stroke="currentColor" strokeWidth="2.338" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.0012 16.1725C15.2009 16.1725 16.1733 15.1999 16.1733 14.0002C16.1733 12.8006 15.2009 11.8281 14.0012 11.8281C12.8015 11.8281 11.829 12.8006 11.829 14.0002C11.829 15.1999 12.8015 16.1725 14.0012 16.1725Z" stroke="currentColor" strokeWidth="2.338" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.72756 5.92383L5.69568 5.95152" stroke="currentColor" strokeWidth="2.52" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.4594 24.8505C17.0842 25.4166 15.5777 25.7288 13.9981 25.7288C7.52062 25.7288 2.26953 20.4777 2.26953 14.0002C2.26953 12.2582 2.64928 10.6049 3.33052 9.11865" stroke="currentColor" strokeWidth="2.338" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24.687 18.8349C25.3548 17.3607 25.7267 15.7238 25.7267 14.0001C25.7267 7.52258 20.4756 2.27148 13.9981 2.27148C12.1143 2.27148 10.3342 2.71562 8.75684 3.50488" stroke="currentColor" strokeWidth="2.338" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 1,
    title: "Embedding & VL Embedding",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M21.7465 10.1934L5.50974 19.7447" stroke="currentColor" strokeWidth="2.52" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.7465 19.0796L5.9117 10.3296" stroke="currentColor" strokeWidth="2.52" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.1039 23.6592L14.1039 5.26777" stroke="currentColor" strokeWidth="2.52" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="21.7474" cy="10.3294" r="2.51055" fill="currentColor"/>
        <circle cx="14.1045" cy="5.26747" r="2.39198" fill="currentColor"/>
        <circle cx="14.1043" cy="23.6591" r="2.83101" fill="currentColor"/>
        <circle cx="23.185" cy="19.7448" r="2.57883" transform="rotate(124.49 23.185 19.7448)" fill="currentColor"/>
        <circle cx="4.65072" cy="20.2034" r="2.54304" transform="rotate(61.0709 4.65072 20.2034)" fill="currentColor"/>
        <circle cx="5.91174" cy="10.3318" r="2.513" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Applications & Deep Research",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M19.3863 14.2935C22.4702 14.2937 24.9516 16.8127 24.9517 19.897C24.9517 22.9813 22.4703 25.5003 19.3863 25.5005C16.3022 25.5004 13.8199 22.9814 13.8199 19.897C13.82 16.8127 16.3022 14.2936 19.3863 14.2935ZM5.81888 15.5337C6.75942 14.1223 8.84409 14.1224 9.7847 15.5337L9.87455 15.6792L13.3326 21.7212C14.2393 23.3054 13.1171 25.3186 11.2603 25.3188H4.3433C2.48646 25.3186 1.36328 23.3054 2.27006 21.7212L5.72904 15.6792L5.81888 15.5337ZM19.3863 16.7935C17.7033 16.7936 16.32 18.1729 16.3199 19.897C16.3199 21.6212 17.7032 23.0004 19.3863 23.0005C21.0692 23.0003 22.4517 21.6211 22.4517 19.897C22.4516 18.173 21.0691 16.7937 19.3863 16.7935ZM4.52299 22.8188H11.0796L7.80131 17.0894L4.52299 22.8188ZM19.3863 1.81201C19.5965 1.81228 19.7763 1.96386 19.816 2.17041C20.4587 5.5179 21.4951 6.56548 24.8111 7.21436C25.0195 7.25523 25.1724 7.43654 25.1724 7.64893C25.1723 7.86131 25.0195 8.04264 24.8111 8.0835C21.4951 8.73236 20.4588 9.77995 19.816 13.1274L19.7945 13.2026C19.7307 13.3699 19.5702 13.4856 19.3863 13.4858L19.3081 13.479C19.1325 13.447 18.9903 13.3081 18.9556 13.1274C18.353 9.98929 17.4045 8.87242 14.5562 8.21045L13.9605 8.0835C13.752 8.0427 13.5992 7.86134 13.5992 7.64893C13.5992 7.43651 13.752 7.25515 13.9605 7.21436C17.2764 6.56545 18.3128 5.51793 18.9556 2.17041C18.9953 1.96367 19.1758 1.81201 19.3863 1.81201ZM9.97123 2.78076C11.5698 2.78098 12.847 4.08537 12.8472 5.67139V10.0474C12.847 11.6334 11.5698 12.9378 9.97123 12.938H5.63334C4.03469 12.9378 2.75655 11.6334 2.75638 10.0474V5.67139C2.75662 4.08538 4.03474 2.78098 5.63334 2.78076H9.97123ZM5.63334 5.28076C5.43577 5.28099 5.25661 5.44569 5.25638 5.67139V10.0474C5.25654 10.2731 5.43574 10.4378 5.63334 10.438H9.97123C10.1688 10.4378 10.347 10.2731 10.3472 10.0474V5.67139C10.347 5.4457 10.1688 5.28099 9.97123 5.28076H5.63334ZM19.3619 7.58643C19.3405 7.60795 19.317 7.62781 19.2954 7.64893C19.317 7.67004 19.3405 7.68991 19.3619 7.71143C19.3699 7.71957 19.3773 7.72865 19.3853 7.73682C19.3936 7.72835 19.4023 7.71986 19.4107 7.71143C19.4318 7.69013 19.4538 7.66983 19.4751 7.64893C19.4539 7.62806 19.4317 7.60768 19.4107 7.58643C19.4022 7.57782 19.3937 7.5687 19.3853 7.56006C19.3771 7.56843 19.3701 7.57808 19.3619 7.58643Z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function ApiExplorer() {
  const [activeTab, setActiveTab] = useState(0);

  const table1Ref = useRef<HTMLDivElement | null>(null);
  const table2Ref = useRef<HTMLDivElement | null>(null);
  const table3Ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[40px] sm:pb-[60px] pt-[60px] relative shrink-0 w-full max-w-[1312px] px-4 box-border" id="api-pricing">
      {/* Title Header */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4 mb-[28px] sm:mb-[36px]">
        <h2 className="font-['Fraunces',serif] font-bold text-[28px] sm:text-[44px] leading-[1.15] sm:leading-[48px] text-[#09090b]">
          Pay-As-You-Go
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5d605b] text-center sm:whitespace-nowrap whitespace-normal max-w-full">
          Transparent real-time deduction based on actual API calls, token consumption, and multi-model gateway usage.
        </p>
      </div>

      {/* Modern High-End Tabs Switcher per Figma Spec */}
      <div className="flex items-center justify-center w-full max-w-[880px] mb-[32px] sm:mb-[44px] px-2">
        <div className="bg-[#EEEEEE] p-[2px] rounded-[16px] border border-[#EEEEEE] flex flex-col sm:flex-row items-stretch sm:items-center gap-[6px] w-full min-h-[49px] box-border shadow-[inset_0px_1px_2px_rgba(0,0,0,0.03)]">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-[8px] px-[16px] py-[10px] h-[43px] font-['DM_Sans',sans-serif] font-bold text-[15px] leading-[22px] transition-all duration-200 select-none cursor-pointer ${
                  isActive
                    ? "bg-white text-[#09090B] rounded-[14px] shadow-sm"
                    : "bg-transparent text-[#515151] rounded-[12px] hover:text-[#09090B]"
                }`}
              >
                <span className={`transition-colors flex items-center justify-center ${isActive ? "text-[#039855]" : "text-[#515151]"}`}>
                  {tab.icon}
                </span>
                <span className="whitespace-nowrap">{tab.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels Container */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full min-h-[380px]">
        
        {/* TAB PANEL 0: Search & Extract APIs */}
        {activeTab === 0 && (
          <div className="w-full flex flex-col gap-[12px] animate-fadeIn transition-opacity duration-200">
            <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#5d605b] leading-relaxed">
              Real-time web search, full content extraction, image/video multimodal retrieval, and structured webpage parsing.
            </p>
            <div className="w-full overflow-x-auto [webkit-overflow-scrolling:touch] rounded-[12px]">
              <div ref={table1Ref} className="min-w-[1005px] w-full bg-gradient-to-l from-[#b9f8a3] to-[#51f174] border-2 border-[#46db98] relative rounded-[12px] shrink-0 flex flex-col overflow-hidden" data-name="Table">
                {/* Dynamic WebGL Top-Right Dither Accent Overlay */}
                <TableDitherAccent tableRef={table1Ref} fallbackImg={imgBackgroundRectangle} />
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
                      <span className="font-['JetBrains_Mono',monospace] font-bold text-[14px] text-[#131212] whitespace-nowrap">
                        <span className="line-through text-[#515151] font-normal mr-1">$5</span> $1 / 1k calls
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
                      <span className="font-['JetBrains_Mono',monospace] font-bold text-[14px] text-[#131212] whitespace-nowrap">
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
                      <span className="font-['JetBrains_Mono',monospace] font-bold text-[14px] text-[#131212] whitespace-nowrap">
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
                      <span className="font-['JetBrains_Mono',monospace] font-bold text-[14px] text-[#131212] whitespace-nowrap">
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
        )}

        {/* TAB PANEL 1: Embedding & VL Embedding */}
        {activeTab === 1 && (
          <div className="w-full flex flex-col gap-[12px] animate-fadeIn transition-opacity duration-200">
            <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#5d605b] leading-relaxed">
              High-performance dense text embedding models and cross-modal visual language embedding for RAG &amp; search indexing.
            </p>
            <div className="w-full overflow-x-auto [webkit-overflow-scrolling:touch] rounded-[12px]">
              <div ref={table2Ref} className="min-w-[1120px] w-full bg-gradient-to-l from-[#b9f8a3] to-[#51f174] border-2 border-[#46db98] relative rounded-[12px] shrink-0 flex flex-col overflow-hidden" data-name="Table">
                {/* Dynamic WebGL Top-Right Dither Accent Overlay */}
                <TableDitherAccent tableRef={table2Ref} fallbackImg={imgBackgroundRectangle} />
                {/* Header Container */}
                <div className="flex items-center px-[20px] py-[14px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#09090b] uppercase tracking-wider relative z-10 w-full" data-name="Header Container">
                  <div className="w-[260px] shrink-0 whitespace-nowrap">Model Name</div>
                  <div className="w-[220px] shrink-0 whitespace-nowrap">Text Input (USD / 1M)</div>
                  <div className="w-[260px] shrink-0 whitespace-nowrap">Image / Video Input (USD / 1M)</div>
                  <div className="w-[340px] shrink-0 whitespace-nowrap">Description</div>
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
                      <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] font-bold text-[#131212] text-[14px]">{row.inp}</div>
                      <div className="w-[260px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] font-bold text-[#131212] text-[14px]">{row.out}</div>
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
                      <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] font-bold text-[#131212] text-[14px]">{row.inp}</div>
                      <div className="w-[260px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] font-bold text-[#131212] text-[14px]">{row.out}</div>
                      <div className="w-[340px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] text-[#515151] text-[14px]">{row.fit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB PANEL 2: Applications & Deep Research */}
        {activeTab === 2 && (
          <div className="w-full flex flex-col gap-[12px] animate-fadeIn transition-opacity duration-200">
            <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#5d605b] leading-relaxed">
              Deep research agent workflows, search-grounded generation, and multimodal chat APIs.
            </p>
            <div className="w-full overflow-x-auto [webkit-overflow-scrolling:touch] rounded-[12px]">
              <div ref={table3Ref} className="min-w-[1080px] w-full bg-gradient-to-l from-[#b9f8a3] to-[#51f174] border-2 border-[#46db98] relative rounded-[12px] shrink-0 flex flex-col overflow-hidden" data-name="Table">
                {/* Dynamic WebGL Top-Right Dither Accent Overlay */}
                <TableDitherAccent tableRef={table3Ref} fallbackImg={imgBackgroundRectangle} />
                {/* Header Container */}
                <div className="flex items-center px-[20px] py-[14px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#09090b] uppercase tracking-wider relative z-10 w-full" data-name="Header Container">
                  <div className="w-[280px] shrink-0 whitespace-nowrap">Tier / Application</div>
                  <div className="w-[200px] shrink-0 whitespace-nowrap">Price(USD)</div>
                  <div className="w-[200px] shrink-0 whitespace-nowrap">Billing Unit</div>
                  <div className="w-[400px] shrink-0 whitespace-nowrap">Description</div>
                </div>

                {/* Content Container (White rounded box) */}
                <div className="bg-white rounded-[10px] overflow-hidden flex flex-col relative z-10 w-full min-w-full" data-name="Content Container">
                  <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center gap-[16px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                    <span className="whitespace-nowrap">Deep Research Agent</span>
                    <span className="flex items-center gap-[4px] shrink-0"><TextIcon /></span>
                  </div>
                  {[
                    { tier: "Lite Tier", rate: "$0.20", unit: "Per Request", desc: "Quick multi-source fact aggregation & synthesis" },
                    { tier: "Standard Tier", rate: "$1.00", unit: "Per Request", desc: "Deep domain topic research & structured reporting" },
                    { tier: "Pro Tier", rate: "$2.50", unit: "Per Request", desc: "Exhaustive enterprise-grade research with multi-step validation" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] text-[14px] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full">
                      <div className="w-[280px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['DM_Sans',sans-serif] text-[14px]">{row.tier}</div>
                      <div className="w-[200px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] font-bold text-[#131212] text-[14px]">{row.rate}</div>
                      <div className="w-[200px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.unit}</div>
                      <div className="w-[400px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.desc}</div>
                    </div>
                  ))}

                  <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center gap-[16px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                    <span className="whitespace-nowrap">Grounded Generation</span>
                    <span className="flex items-center gap-[4px] shrink-0"><ImageIcon /><VideoIcon /></span>
                  </div>
                  {[
                    { tier: "Image Generation", rate: "$0.25", unit: "Per Output Image", desc: "Search-backed image generation grounded in real-time web context" },
                    { tier: "Video Generation", rate: "$1.00", unit: "Per Output Video", desc: "Search-backed video generation grounded in real-time web context" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full">
                      <div className="w-[280px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['DM_Sans',sans-serif] text-[14px]">{row.tier}</div>
                      <div className="w-[200px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] font-bold text-[#131212] text-[14px]">{row.rate}</div>
                      <div className="w-[200px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.unit}</div>
                      <div className="w-[400px] shrink-0 whitespace-nowrap font-[#515151] text-[#515151] text-[14px]">{row.desc}</div>
                    </div>
                  ))}

                  <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center gap-[16px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                    <span className="whitespace-nowrap">Answer &amp; Multimodal Chat</span>
                    <span className="flex items-center gap-[4px] shrink-0"><TextIcon /><ImageIcon /><VideoIcon /></span>
                  </div>
                  {[
                    { tier: "Answer & Multimodal Chat", rate: "Search + Model rates", unit: "Search + Token Usage", desc: "Standard Search API fees + selected model gateway token usage fees" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] last:border-b-0 hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full">
                      <div className="w-[280px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['DM_Sans',sans-serif] text-[14px]">{row.tier}</div>
                      <div className="w-[200px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] font-bold text-[#131212] text-[14px]">{row.rate}</div>
                      <div className="w-[200px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.unit}</div>
                      <div className="w-[400px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note regarding LLM generation & Gateway pricing */}
            <div className="w-full pt-1 text-right">
              <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#515151] text-right">
                Access 20+ leading AI models through a unified gateway, click to view{" "}
                <a
                  href="https://docs.octen.ai/overview/pricing#model-gateway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#039855] font-bold underline hover:text-[#027a44] transition-colors cursor-pointer"
                >
                  the price of Model Gateway
                </a>
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
