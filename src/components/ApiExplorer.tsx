import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { 
    id: "search", 
    title: "Search", 
    subtitle: "Real-time retrieval from the live web." 
  },
  { 
    id: "extract", 
    title: "Extract", 
    subtitle: "Clean content from any URL." 
  },
  { 
    id: "embeddings", 
    title: "Embedding", 
    subtitle: "Top-ranked embedding models for text and multimodal retrieval." 
  },
  { 
    id: "applications", 
    title: "Applications", 
    subtitle: "Complete workflows built on the APIs above. Billed per outcome." 
  },
];

export default function ApiExplorer() {
  const [activeSection, setActiveSection] = useState("search");
  const [isSticky, setIsSticky] = useState(false);
  const isClickScrollingRef = useRef(false);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stickyBarRef = useRef<HTMLDivElement>(null);

  const activeNavItem = NAV_ITEMS.find((item) => item.id === activeSection) || NAV_ITEMS[0];

  // Track scroll position to update active anchor pill during manual scrolling
  useEffect(() => {
    const handleScroll = () => {
      // Check if top filter bar is currently pinned/sticky floating at top-[58px]
      if (stickyBarRef.current) {
        const rect = stickyBarRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 60);
      }

      if (isClickScrollingRef.current) return;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
        return;
      }

      // Check sections from last to first
      // Target threshold = 340px from viewport top for early & responsive tab switching
      // Prevents content from being covered by floating navbar (76px) + sticky tabs bar (68px)
      const targetThreshold = 340;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= targetThreshold) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial hash check on page load for deep linking (e.g. /pricing#embeddings)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (NAV_ITEMS.some((item) => item.id === hashId)) {
        setTimeout(() => {
          scrollToSection(hashId, false);
        }, 150);
      }
    }
  }, []);

  const scrollToSection = (id: string, updateHash = true) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      if (updateHash && typeof window !== "undefined" && window.history.replaceState) {
        window.history.replaceState(null, "", `#${id}`);
      }
      isClickScrollingRef.current = true;
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

      // Y-offset accounts for floating top navbar (76px) + sticky tabs bar (68px) + breathing room
      const yOffset = -165;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      clickTimerRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 700);
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-0 pt-[20px] sm:pt-[40px] relative shrink-0 w-full max-w-[1312px] px-4 box-border" id="pay-as-you-go">
      
      {/* Section Header Title & Subtitle per user screenshot */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4 mb-[24px] sm:mb-[32px]">
        <h2 className="font-['Fraunces',serif] font-bold text-[28px] sm:text-[44px] leading-[1.15] sm:leading-[48px] text-[#09090b]">
          Pay-As-You-Go
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5d605b] text-center sm:whitespace-nowrap whitespace-normal max-w-full">
          Charges are deducted from your balance in real time, based on what you actually call.
        </p>
      </div>

      {/* Top Filter Bar + Right Subtitle (Sticky Floating with default #D1D1D1 border, turns green #4BA67D when pinned/sticky) */}
      <div
        ref={stickyBarRef}
        className={`sticky top-[58px] z-30 w-full bg-white/80 backdrop-blur-[10px] py-[20px] border-b mb-[32px] transition-all duration-200 ${
          isSticky ? "border-[#4BA67D] shadow-[0_4px_16px_rgba(0,0,0,0.03)]" : "border-[#D1D1D1]"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 w-full max-w-[1288px] mx-auto box-border">
          {/* Left Filter Pills (Unified Segmented Capsule Bar on mobile & desktop, no scrollbars) */}
          <div className="w-full sm:w-auto flex items-center gap-[2px] sm:gap-[6px] p-[3px] bg-[#F6F6F3] border border-[#E7E7E3] rounded-full box-border select-none">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex-1 sm:w-[130px] h-[36px] sm:h-[40px] px-[4px] sm:px-[14px] py-[6px] rounded-full font-['DM_Sans',sans-serif] text-center transition-all duration-200 cursor-pointer select-none flex items-center justify-center min-w-0 ${
                    isActive
                      ? "bg-[#039855] text-white font-bold text-[12px] sm:text-[15px] leading-tight shadow-xs scale-[1.01]"
                      : "bg-transparent text-[#515151] hover:text-[#0A0A0A] hover:bg-[#EAEAE5] font-normal text-[12px] sm:text-[14px] leading-tight"
                  }`}
                >
                  <span className="truncate whitespace-nowrap">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Subtitle (font-size: 16px, line-height: 22px, color: #57575E) */}
          <p key={activeNavItem.id} className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-[22px] text-[#57575E] m-0 text-left sm:text-right pb-[2px] transition-all duration-300">
            {activeNavItem.subtitle}
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="content-stretch flex flex-col gap-[20px] w-full">

        {/* Row 1: Search (2 cards: Web Search + Image & Video Search) */}
        <div id="search" className="scroll-mt-[176px] grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
          {/* Card 1: Web Search */}
          <div className="group bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[6px] sm:gap-[10px] flex-nowrap mb-[8px] min-w-0">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#0A0A0A] tracking-tight truncate min-w-0">Web Search</span>
                <span className="h-[22px] sm:h-[24px] px-[6px] sm:px-[8px] bg-[#70FE7E] rounded-[6px] flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[12px] sm:text-[13px] leading-[13px] text-[#100F09] whitespace-nowrap shrink-0 tracking-tight">
                  80% Off
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px] min-h-[44px]">
                LLM-native web search. Ranked results with relevant highlights, and optional full content.
              </p>
              <div className="flex items-center justify-between gap-[12px] mb-[24px]">
                <div className="flex items-baseline gap-[6px] sm:gap-[8px] flex-nowrap whitespace-nowrap">
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[34px] leading-none text-[#0A0A0A] tracking-tight">$1</span>
                  <span className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-none text-[#9C9CA4] line-through">$5</span>
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1k calls</span>
                </div>
                <a
                  href="https://octen.ai/platform/web-search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto shrink-0 box-border"
                >
                  Get started
                </a>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Web Search API</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">1 call / request</span>
                </div>
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Broad Search API</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">1 call / sub-query</span>
                </div>
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Full Content (Add-on)</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.5 / 1k results (<span className="text-[#039855] font-medium">10 free / call</span>)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Image & Video Search */}
          <div className="group bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#0A0A0A] tracking-tight">Image &amp; Video Search</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px] min-h-[44px]">
                Beyond text queries &mdash; images and videos retrieved from the live web.
              </p>
              <div className="flex items-center justify-between gap-[12px] mb-[24px]">
                <div className="flex items-baseline gap-[6px] sm:gap-[8px] flex-nowrap whitespace-nowrap">
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[34px] leading-none text-[#0A0A0A] tracking-tight">$5</span>
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1k calls</span>
                </div>
                <a
                  href="https://octen.ai/platform/image-search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto shrink-0 box-border"
                >
                  Get started
                </a>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Image Search API</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">1 call / request</span>
                </div>
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Video Search API</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">1 call / request</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Extract (1 full-width horizontal card) */}
        <div id="extract" className="scroll-mt-[176px] group bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px] flex flex-col md:flex-row md:items-center justify-between gap-[24px] w-full transition-all duration-200 box-border">
          <div className="flex-1 min-w-[260px]">
            <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
              <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#0A0A0A] tracking-tight">Extract</span>
            </div>
            <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] m-0 max-w-[620px]">
              Turn any URL into clean markdown, with intent-focused highlights and page classification.
            </p>
          </div>
          <div className="relative flex flex-row items-center shrink-0">
            {/* Price shifts left on hover to make room for Get started button */}
            <div className="flex items-baseline gap-[8px] flex-wrap transition-transform duration-200 ease-out group-hover:-translate-x-[115px]">
              <span className="font-['DM_Sans',sans-serif] font-medium text-[34px] leading-none text-[#0A0A0A] tracking-tight">$1</span>
              <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1k URLs</span>
            </div>
            {/* Get started button inside card right side */}
            <a
              href="https://octen.ai/platform/extract"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-0 w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto box-border"
            >
              Get started
            </a>
          </div>
        </div>

        {/* Row 3: Embedding (2 cards: Embedding + VL Embedding) */}
        <div id="embeddings" className="scroll-mt-[176px] grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
          {/* Card 1: Embedding */}
          <div className="group bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[6px] sm:gap-[10px] flex-nowrap mb-[8px] min-w-0">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#0A0A0A] tracking-tight truncate min-w-0">Embedding</span>
                <span className="h-[22px] sm:h-[24px] px-[6px] sm:px-[8px] bg-[#E3FFE2] border border-[#6FD1A5] rounded-[6px] flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] sm:text-[12px] leading-[12px] text-[#1B9C62] whitespace-nowrap shrink-0 tracking-tight">
                  SOTA on RTEB
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Turn text into vectors for semantic search, RAG, and recommendations.
              </p>
              <div className="flex items-center justify-between gap-[12px] mb-[24px]">
                <div className="flex items-baseline gap-[4px] sm:gap-[8px] flex-nowrap whitespace-nowrap">
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] sm:text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.01 &ndash; $0.07</span>
                  <span className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[14px] text-[#57575E]">/ 1M tokens</span>
                </div>
                <a
                  href="https://octen.ai/platform/embedding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto shrink-0 box-border"
                >
                  Get started
                </a>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">octen-embedding-8b</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.07 / 1M tokens</span>
                </div>
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">octen-embedding-4b</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.04 / 1M tokens</span>
                </div>
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">octen-embedding-0.6b</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.01 / 1M tokens</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: VL Embedding */}
          <div className="group bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[6px] sm:gap-[10px] flex-nowrap mb-[8px] min-w-0">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#0A0A0A] tracking-tight truncate min-w-0">VL Embedding</span>
                <span className="h-[22px] sm:h-[24px] px-[6px] sm:px-[8px] bg-[#E3FFE2] border border-[#6FD1A5] rounded-[6px] flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] sm:text-[12px] leading-[12px] text-[#1B9C62] whitespace-nowrap shrink-0 tracking-tight">
                  SOTA on MMEB-v2
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                One embedding space across text, images, videos, and visual documents.
              </p>
              <div className="flex items-center justify-between gap-[12px] mb-[24px]">
                <div className="flex items-baseline gap-[4px] sm:gap-[8px] flex-nowrap whitespace-nowrap">
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] sm:text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.05 &ndash; $0.25</span>
                  <span className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[14px] text-[#57575E]">/ 1M tokens</span>
                </div>
                <a
                  href="https://octen.ai/platform/embedding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto shrink-0 box-border"
                >
                  Get started
                </a>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Text tokens</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.05 &ndash; $0.10 / 1M tokens</span>
                </div>
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Visual tokens (image / video)</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.12 &ndash; $0.25 / 1M tokens</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Applications (3 cards: Answer & Multimodal Chat, Deep Research, Grounded Generation) */}
        <div id="applications" className="scroll-mt-[176px] grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full">
          {/* Card 1: Answer & Multimodal Chat */}
          <div className="group bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[6px] sm:gap-[8px] flex-nowrap mb-[8px] min-w-0">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[16px] sm:text-[17px] lg:text-[19px] xl:text-[20px] text-[#0A0A0A] tracking-tight truncate sm:overflow-visible sm:whitespace-nowrap shrink min-w-0">Answer &amp; Multimodal Chat</span>
                <span className="h-[22px] sm:h-[24px] px-[5px] sm:px-[8px] bg-[#E3FFE2] border border-[#6FD1A5] rounded-[6px] flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] sm:text-[12px] leading-[12px] text-[#1B9C62] whitespace-nowrap shrink-0 tracking-tight">
                  Early Access
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Grounded answers with citations, assembled from dozens of sub-queries.
              </p>
              <div className="flex items-center justify-between gap-[12px] mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[14px] tracking-tight px-[8px] sm:px-[12px] py-[8px] bg-[#F6F6F3] rounded-[8px] text-[#0A0A0A] inline-block whitespace-nowrap">
                  Search calls + model tokens
                </span>
                <a
                  href="https://octen.ai/platform/answer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto shrink-0 box-border"
                >
                  Get started
                </a>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Answer</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] shrink-0 whitespace-nowrap">Broad Search + LLM</span>
                </div>
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Multimodal Chat</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] shrink-0 whitespace-nowrap">Multimodal Search + LLM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Deep Research */}
          <div className="group bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#0A0A0A] tracking-tight">Deep Research</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Deep, source-backed research across thousands of web pages and documents.
              </p>
              <div className="flex items-center justify-between gap-[12px] mb-[24px]">
                <div className="flex items-baseline gap-[4px] sm:gap-[8px] flex-nowrap whitespace-nowrap">
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] sm:text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.20 &ndash; $3.00</span>
                  <span className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[14px] text-[#57575E]">/ request</span>
                </div>
                <a
                  href="https://octen.ai/platform/billing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto shrink-0 box-border"
                >
                  Get started
                </a>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Lite</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.20 / request</span>
                </div>
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Standard</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$1.00 / request</span>
                </div>
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Pro</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$2.50 / request</span>
                </div>
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Pro-visual</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$3.00 / request</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Grounded Generation */}
          <div className="group bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[6px] sm:gap-[8px] flex-nowrap mb-[8px] min-w-0">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#0A0A0A] tracking-tight truncate min-w-0">Grounded Generation</span>
                <span className="h-[22px] sm:h-[24px] px-[6px] sm:px-[8px] bg-[#E3FFE2] border border-[#6FD1A5] rounded-[6px] flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] sm:text-[12px] leading-[12px] text-[#1B9C62] whitespace-nowrap shrink-0 tracking-tight">
                  Early Access
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Images and video generated from real-world references found by live web search.
              </p>
              <div className="flex items-center justify-between gap-[12px] mb-[24px]">
                <div className="flex items-baseline gap-[4px] sm:gap-[8px] flex-nowrap whitespace-nowrap">
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] sm:text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.25 &ndash; $1.00</span>
                  <span className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[14px] text-[#57575E]">/ output</span>
                </div>
                <a
                  href="https://octen.ai/platform/grounded-generation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto shrink-0 box-border"
                >
                  Get started
                </a>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Image generation</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.25 / image</span>
                </div>
                <div className="flex items-center justify-between gap-[8px] text-[14px] min-w-0">
                  <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Video generation</span>
                  <span className="text-[#57575E] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[6px] sm:px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$1.00 / video</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Model Gateway Footnote & Rebate (1:1 Figma spec node 13352:105079) */}
        <div className="bg-[#F6F6F3] border border-[#E7E7E3] rounded-[16px] p-[20px] sm:p-[24px] flex flex-col gap-[14px] mt-[4px] w-full box-border">
          {/* Top Header Row: Title + 15% Rebate Tag with Gift Icon + Dual Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[12px] w-full">
            <div className="flex items-center gap-[10px] flex-wrap">
              <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] text-[#0A0A0A] tracking-tight">Model Gateway</span>
              <span className="h-[24px] px-[8px] bg-[#70FE7E] rounded-[6px] flex items-center justify-center gap-[4px] font-['JetBrains_Mono',monospace] font-medium text-[13px] leading-[13px] text-[#100F09] whitespace-nowrap shrink-0">
                <svg className="w-[15px] h-[15px] shrink-0 text-[#100F09]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.6984 11.6984C10.5849 12.8119 9.07472 13.4375 7.5 13.4375C5.92528 13.4375 4.41505 12.8119 3.30155 11.6984C2.18806 10.5849 1.5625 9.07472 1.5625 7.5C1.5625 5.92528 2.18806 4.41505 3.30155 3.30155C4.41505 2.18806 5.92528 1.5625 7.5 1.5625C9.07472 1.5625 10.5849 2.18806 11.6984 3.30155C12.8119 4.41505 13.4375 5.92528 13.4375 7.5C13.4375 9.07472 12.8119 10.5849 11.6984 11.6984Z" stroke="currentColor" strokeWidth="1.39286" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.625 9.02062C5.66487 9.48059 5.88364 9.90654 6.23426 10.2069C6.58488 10.5073 7.03937 10.6581 7.5 10.6269C9.0125 10.6269 9.375 9.75812 9.375 9.02062C9.375 8.28312 8.75 7.50188 7.5 7.50188C6.25 7.50188 5.625 7.00812 5.625 6.00187C5.63666 5.77038 5.69501 5.54364 5.79656 5.33529C5.89811 5.12693 6.04076 4.94127 6.21591 4.78947C6.39107 4.63766 6.59512 4.52286 6.81579 4.45195C7.03647 4.38105 7.2692 4.35551 7.5 4.37687C7.96095 4.35703 8.41201 4.51432 8.76067 4.81649C9.10932 5.11866 9.32913 5.54279 9.375 6.00187M7.5 11.5625V10.75M7.5 3.4375V4.37438" stroke="currentColor" strokeWidth="1.39286" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>15% Rebate Back</span>
              </span>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] shrink-0">
              <div className="flex items-center justify-center gap-[10px]">
                <a
                  href="https://docs.octen.ai/overview/pricing#model-gateway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[100%] text-[#039855] underline hover:text-[#027a44] transition-colors whitespace-nowrap"
                >
                  View model rates
                </a>
              </div>
              <div className="border-l border-[#039855] pl-[20px] flex items-center justify-center gap-[10px] box-border">
                <a
                  href="https://docs.octen.ai/overview/model-gateway-rebate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[100%] text-[#039855] underline hover:text-[#027a44] transition-colors whitespace-nowrap"
                >
                  View Rebate
                </a>
              </div>
            </div>
          </div>

          {/* Paragraph Text Content per Figma spec */}
          <div className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] flex flex-col gap-[2px]">
            <p className="m-0">
              One API for top-tier LLM &amp; multimodal models, with Octen Search built in. Powers the model reasoning, synthesis, and generation across Answer, Deep Research, and Grounded Generation.
            </p>
            <p className="m-0">
              Get <strong className="font-bold text-[#0A0A0A]">15% of your Model Gateway spend back</strong>, credited automatically to your balance each month across all models.
            </p>
          </div>
        </div>

        {/* Launch Pricing Disclaimer Note at bottom of Pay-As-You-Go section (reduced distance by half) */}
        <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] sm:text-[14px] text-[#57575E] text-center sm:text-right m-0 -mt-[10px] pt-0 w-full">
          * Launch pricing &mdash; discounted rates, subject to change
        </p>

      </div>
    </div>
  );
}
