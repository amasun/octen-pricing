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
  const isClickScrollingRef = useRef(false);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeNavItem = NAV_ITEMS.find((item) => item.id === activeSection) || NAV_ITEMS[0];

  // Track scroll position to update active anchor pill during manual scrolling
  useEffect(() => {
    const handleScroll = () => {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
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
    <div className="bg-white content-stretch flex flex-col items-center pb-0 pt-[20px] sm:pt-[40px] relative shrink-0 w-full max-w-[1312px] px-4 box-border" id="api-pricing">
      
      {/* Section Header Title & Subtitle per user screenshot */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4 mb-[24px] sm:mb-[32px]">
        <h2 className="font-['Fraunces',serif] font-bold text-[28px] sm:text-[44px] leading-[1.15] sm:leading-[48px] text-[#09090b]">
          Pay-As-You-Go
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5d605b] text-center sm:whitespace-nowrap whitespace-normal max-w-full">
          Charges are deducted from your balance in real time, based on what you actually call.
        </p>
      </div>

      {/* Top Filter Bar + Right Subtitle (Sticky Floating with #4BA67D border-bottom) */}
      <div className="sticky top-[58px] z-30 w-full bg-white/80 backdrop-blur-[10px] py-[20px] border-b border-[#4BA67D] mb-[32px] transition-all duration-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 w-full max-w-[1288px] mx-auto box-border">
          {/* Left Filter Pills (width: 140px, height: 43px, background: #039855 / #F6F6F3) */}
          <div className="flex items-center gap-[8px] p-[2px] rounded-full h-[47px] box-border flex-wrap sm:flex-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-[140px] h-[43px] px-[16px] py-[10px] gap-[8px] rounded-full font-['DM_Sans',sans-serif] text-center transition-all duration-200 cursor-pointer select-none flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-[#039855] text-white font-bold text-[16px] leading-[22px] shadow-xs scale-[1.02]"
                      : "bg-[#F6F6F3] text-[#515151] hover:text-[#0A0A0A] hover:bg-[#EAEAE5] font-normal text-[14px] leading-[22px]"
                  }`}
                >
                  <span className="whitespace-nowrap">{item.title}</span>
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
          <div className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px_28px_16px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center justify-between gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#0A0A0A] tracking-tight">Web Search</span>
                <span className="h-[24px] px-[8px] bg-[#70FE7E] rounded-[6px] flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[13px] leading-[13px] text-[#100F09] whitespace-nowrap shrink-0">
                  80% Off
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px] min-h-[44px]">
                LLM-native web search. Ranked results with relevant highlights, and optional full content.
              </p>
              <div className="flex items-baseline gap-[8px] flex-wrap mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[34px] leading-none text-[#0A0A0A] tracking-tight">$1</span>
                <span className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-none text-[#9C9CA4] line-through">$5</span>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1k calls</span>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] flex flex-col gap-[8px]">
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Web Search API</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">1 call / request</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Broad Search API</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">1 call / sub-query</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Full Content (Add-on)</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">$1 / 1M tokens</span>
                </div>
              </div>
            </div>
            <div className="relative mt-auto pt-[16px] border-t border-[#E7E7E3]/60 text-[14px] text-[#57575E]">
              <div className="relative flex items-center justify-between min-h-[32px]">
                <span>Highlights included; Full Content billed separately</span>
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="absolute right-0 top-1/2 -translate-y-1/2 w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10 box-border">
                  Get started
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Image & Video Search */}
          <div className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px_28px_16px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#0A0A0A] tracking-tight">Image &amp; Video Search</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px] min-h-[44px]">
                Beyond text queries &mdash; images and videos retrieved from the live web.
              </p>
              <div className="flex items-baseline gap-[8px] flex-wrap mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[34px] leading-none text-[#0A0A0A] tracking-tight">$5</span>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1k calls</span>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] flex flex-col gap-[8px]">
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Image Search API</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">1 call / request</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Video Search API</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">1 call / request</span>
                </div>
              </div>
            </div>
            <div className="relative mt-auto pt-[16px] border-t border-[#E7E7E3]/60 text-[14px] text-[#57575E]">
              <div className="relative flex items-center justify-between min-h-[32px]">
                <span>All-inclusive API call pricing</span>
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="absolute right-0 top-1/2 -translate-y-1/2 w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10 box-border">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Extract (1 full-width horizontal card) */}
        <div id="extract" className="scroll-mt-[176px] group bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px_28px_16px] flex flex-col md:flex-row md:items-center justify-between gap-[24px] w-full transition-all duration-200 box-border">
          <div className="flex-1 min-w-[260px]">
            <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
              <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#0A0A0A] tracking-tight">Extract</span>
            </div>
            <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] m-0 max-w-[620px]">
              Turn any URL into clean markdown, with intent-focused highlights and page classification. Only successful parses are billed.
            </p>
          </div>
          <div className="relative flex flex-row items-center pr-[115px] shrink-0">
            <div className="flex items-baseline gap-[8px] flex-wrap">
              <span className="font-['DM_Sans',sans-serif] font-medium text-[34px] leading-none text-[#0A0A0A] tracking-tight">$1</span>
              <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1k successful URLs</span>
            </div>
            <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="absolute right-0 top-1/2 -translate-y-1/2 w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10 box-border">
              Get started
            </a>
          </div>
        </div>

        {/* Row 3: Embedding (2 cards: Embedding + VL Embedding) */}
        <div id="embeddings" className="scroll-mt-[176px] grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
          {/* Card 1: Embedding */}
          <div className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px_28px_16px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#0A0A0A] tracking-tight">Embedding</span>
                <span className="h-[24px] px-[8px] bg-[#E3FFE2] border border-[#6FD1A5] rounded-[6px] flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[12px] leading-[12px] text-[#1B9C62] whitespace-nowrap shrink-0">
                  SOTA on RTEB
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Turn text into vectors for semantic search, RAG, and recommendations.
              </p>
              <div className="flex items-baseline gap-[8px] flex-wrap mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.01 &ndash; $0.07</span>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1M tokens</span>
              </div>

            </div>
            <div className="relative mt-auto pt-[16px] border-t border-[#E7E7E3]/60 text-[14px] text-[#57575E]">
              <div className="relative flex items-center justify-between min-h-[32px]">
                <span>Smaller models cost less, larger models rank better.</span>
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="absolute right-0 top-1/2 -translate-y-1/2 w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10 box-border">
                  Get started
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: VL Embedding */}
          <div className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px_28px_16px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#0A0A0A] tracking-tight">VL Embedding</span>
                <span className="h-[24px] px-[8px] bg-[#E3FFE2] border border-[#6FD1A5] rounded-[6px] flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[12px] leading-[12px] text-[#1B9C62] whitespace-nowrap shrink-0">
                  SOTA on MMEB-v2
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                One embedding space across text, images, videos, and visual documents.
              </p>
              <div className="flex items-baseline gap-[8px] flex-wrap mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.05 &ndash; $0.25</span>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1M tokens</span>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] flex flex-col gap-[8px]">
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Text tokens</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">$0.05 &ndash; $0.10 / 1M tokens</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Visual tokens (image / video)</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">$0.12 &ndash; $0.25 / 1M tokens</span>
                </div>
              </div>

            </div>
            <div className="relative mt-auto pt-[16px] border-t border-[#E7E7E3]/60 text-[14px] text-[#57575E]">
              <div className="relative flex items-center justify-between min-h-[32px]">
                <span>Text and visual inputs are priced separately.</span>
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="absolute right-0 top-1/2 -translate-y-1/2 w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10 box-border">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Applications (3 cards: Answer & Multimodal Chat, Deep Research, Grounded Generation) */}
        <div id="applications" className="scroll-mt-[176px] grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full">
          {/* Card 1: Answer & Multimodal Chat */}
          <div className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px_28px_16px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#0A0A0A] tracking-tight">Answer &amp; Multimodal Chat</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Grounded answers with citations, assembled from dozens of sub-queries.
              </p>
              <div className="mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] text-[14px] tracking-tight px-[12px] py-[8px] bg-[#F6F6F3] rounded-[8px] text-[#0A0A0A] inline-block">
                  Search calls + model tokens
                </span>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] flex flex-col gap-[8px]">
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Answer</span>
                  <span className="text-[#57575E]">Broad Search + LLM</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Multimodal Chat</span>
                  <span className="text-[#57575E]">Multimodal Search + LLM</span>
                </div>
              </div>
            </div>
            <div className="relative mt-auto pt-[16px] border-t border-[#E7E7E3]/60 text-[14px] text-[#57575E]">
              <div className="relative flex items-center justify-between min-h-[32px]">
                <span>Search first, then generate</span>
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="absolute right-0 top-1/2 -translate-y-1/2 w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10 box-border">
                  Get started
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Deep Research */}
          <div className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px_28px_16px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#0A0A0A] tracking-tight">Deep Research</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Deep, source-backed research across thousands of web pages and documents.
              </p>
              <div className="flex items-baseline gap-[8px] flex-wrap mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.20 &ndash; $3.00</span>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ request</span>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] flex flex-col gap-[8px]">
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Lite</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">$0.20 / request</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Standard</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">$1.00 / request</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Pro</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">$2.50 / request</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Pro-visual</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">$3.00 / request</span>
                </div>
              </div>
            </div>
            <div className="relative mt-auto pt-[16px] border-t border-[#E7E7E3]/60 text-[14px] text-[#57575E]">
              <div className="relative flex items-center justify-between min-h-[32px]">
                <span>Pro-visual adds images and videos</span>
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="absolute right-0 top-1/2 -translate-y-1/2 w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10 box-border">
                  Get started
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Grounded Generation */}
          <div className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[16px] p-[28px_28px_16px] flex flex-col justify-between transition-all duration-200 box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#0A0A0A] tracking-tight">Grounded Generation</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Images and video generated from real-world references found by live web search.
              </p>
              <div className="flex items-baseline gap-[8px] flex-wrap mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.25 &ndash; $1.00</span>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ output</span>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] flex flex-col gap-[8px]">
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Image generation</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">$0.25 / image</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-[8px] text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Video generation</span>
                  <span className="text-[#57575E] text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3]">$1.00 / video</span>
                </div>
              </div>
            </div>
            <div className="relative mt-auto pt-[16px] border-t border-[#E7E7E3]/60 text-[14px] text-[#57575E]">
              <div className="relative flex items-center justify-between min-h-[32px]">
                <span>Grounded in Multimodal Search</span>
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="absolute right-0 top-1/2 -translate-y-1/2 w-[99px] h-[32px] px-[14px] py-[6px] gap-[4px] bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[20px] text-white select-none whitespace-nowrap cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10 box-border">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Model Gateway Footnote */}
        <div className="bg-[#F6F6F3] border border-[#E7E7E3] rounded-[16px] py-[20px] px-[24px] flex flex-col md:flex-row items-center justify-between gap-[16px] mt-[4px] w-full box-border">
          <div className="text-[14px]">
            <span className="font-semibold text-[#0A0A0A] mr-2">Model Gateway</span>
            <span className="text-[#57575E]">One API for top-tier models, with Octen Search integration built in. Powers the applications above.</span>
          </div>
          <a href="https://docs.octen.ai/overview/pricing#model-gateway" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[14px] text-[#14532D] border-b border-[#14532D]/30 hover:border-[#14532D] transition-colors whitespace-nowrap shrink-0">
            View model rates &rarr;
          </a>
        </div>

      </div>
    </div>
  );
}
