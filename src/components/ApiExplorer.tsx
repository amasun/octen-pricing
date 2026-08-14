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
      // Target threshold = 220px from viewport top for responsive tab switching
      const targetThreshold = 220;

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

      const yOffset = -140;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      clickTimerRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 700);
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[60px] sm:pb-[100px] pt-[20px] sm:pt-[40px] relative shrink-0 w-full max-w-[1312px] px-4 box-border" id="api-pricing">
      
      {/* Section Header Title & Subtitle per user screenshot */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4 mb-[24px] sm:mb-[32px]">
        <h2 className="font-['Fraunces',serif] font-bold text-[28px] sm:text-[44px] leading-[1.15] sm:leading-[48px] text-[#09090b]">
          Pay-As-You-Go
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5d605b] text-center sm:whitespace-nowrap whitespace-normal max-w-full">
          Charges are deducted from your balance in real time, based on what you actually call.
        </p>
      </div>

      {/* Top Filter Bar + Right Subtitle (Sticky Floating with Figma Exact Specs) */}
      <div className="sticky top-[76px] z-30 w-full bg-white/95 backdrop-blur-md pb-[20px] pt-3 border-b border-[#D1D1D1]/50 mb-[32px] transition-all duration-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 w-full max-w-[1288px] h-auto sm:h-[68px] mx-auto box-border">
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
        <div id="search" className="scroll-mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
          {/* Card 1: Web Search */}
          <div className="bg-white border border-[#E7E7E3] hover:border-[#D6D6D1] rounded-[16px] p-[28px_28px_0] flex flex-col justify-between transition-colors duration-200 overflow-hidden box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] text-[#0A0A0A] tracking-tight">Web Search</span>
                <span className="bg-[#DCFCE7] text-[#14532D] font-['DM_Sans',sans-serif] font-medium text-[12px] px-[9px] py-[4px] rounded-full">80% off</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                LLM-native web search. Ranked results with relevant highlights, and optional full content.
              </p>
              <div className="flex items-baseline gap-[8px] flex-wrap mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[34px] leading-none text-[#0A0A0A] tracking-tight">$1</span>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1k calls</span>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] flex flex-col gap-[9px]">
                <div className="flex flex-wrap gap-[8px] items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Web Search API</span>
                  <span className="text-[#9C9CA4]">one call per request</span>
                </div>
                <div className="flex flex-wrap gap-[8px] items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Broad Search API</span>
                  <span className="text-[#9C9CA4]">one call per sub-query</span>
                </div>
              </div>
            </div>
            <div className="mx-[-28px] mt-auto px-[28px] py-[14px] bg-[#F6F6F3] border-t border-[#E7E7E3] rounded-b-[16px] flex items-baseline justify-between gap-[14px] text-[14px] text-[#57575E]">
              <span>Full content add-on <b className="font-['DM_Sans',sans-serif] text-[#0A0A0A] font-medium">$1 / 1M tokens</b></span>
              <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-4 py-1.5 rounded-md transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                Get started
              </a>
            </div>
          </div>

          {/* Card 2: Image & Video Search */}
          <div className="bg-white border border-[#E7E7E3] hover:border-[#D6D6D1] rounded-[16px] p-[28px_28px_0] flex flex-col justify-between transition-colors duration-200 overflow-hidden box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] text-[#0A0A0A] tracking-tight">Image &amp; Video Search</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Beyond text queries &mdash; images and videos retrieved from the live web.
              </p>
              <div className="flex items-baseline gap-[8px] flex-wrap mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[34px] leading-none text-[#0A0A0A] tracking-tight">$5</span>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1k calls</span>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] flex flex-col gap-[9px]">
                <div className="flex flex-wrap gap-[8px] items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Image Search API</span>
                </div>
                <div className="flex flex-wrap gap-[8px] items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Video Search API</span>
                </div>
              </div>
            </div>
            <div className="mx-[-28px] mt-auto px-[28px] py-[14px] bg-[#F6F6F3] border-t border-[#E7E7E3] rounded-b-[16px] flex items-baseline justify-between gap-[14px] text-[14px] text-[#57575E]">
              <span>No add-ons</span>
              <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-4 py-1.5 rounded-md transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                Get started
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: Extract (1 full-width horizontal card) */}
        <div id="extract" className="scroll-mt-[100px] bg-white border border-[#E7E7E3] hover:border-[#D6D6D1] rounded-[16px] p-[28px] flex flex-col md:flex-row md:items-center justify-between gap-[24px] w-full transition-colors duration-200 box-border">
          <div className="flex-1 min-w-[260px]">
            <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
              <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] text-[#0A0A0A] tracking-tight">Extract</span>
            </div>
            <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] m-0 max-w-[620px]">
              Turn any URL into clean markdown, with intent-focused highlights and page classification. Only successful parses are billed.
            </p>
          </div>
          <div className="flex flex-row items-center gap-[24px] shrink-0">
            <div className="flex items-baseline gap-[8px] flex-wrap">
              <span className="font-['DM_Sans',sans-serif] font-medium text-[34px] leading-none text-[#0A0A0A] tracking-tight">$1</span>
              <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1k URLs</span>
            </div>
            <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-4 py-1.5 rounded-md transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
              Get started
            </a>
          </div>
        </div>

        {/* Row 3: Embedding (2 cards: Embedding + VL Embedding) */}
        <div id="embeddings" className="scroll-mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
          {/* Card 1: Embedding */}
          <div className="bg-white border border-[#E7E7E3] hover:border-[#D6D6D1] rounded-[16px] p-[28px_28px_0] flex flex-col justify-between transition-colors duration-200 overflow-hidden box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] text-[#0A0A0A] tracking-tight">Embedding</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Turn text into vectors for semantic search, RAG, and recommendations.
              </p>
              <div className="flex items-baseline gap-[8px] flex-wrap mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.01 &ndash; $0.07</span>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1M tokens</span>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] text-[14px] text-[#57575E]">
                Smaller models cost less, larger models rank better.
              </div>
            </div>
            <div className="mx-[-28px] mt-auto px-[28px] py-[14px] bg-[#F6F6F3] border-t border-[#E7E7E3] rounded-b-[16px] flex items-baseline justify-between gap-[14px] text-[14px] text-[#57575E]">
              <span>SOTA on RTEB</span>
              <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-4 py-1.5 rounded-md transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                Get started
              </a>
            </div>
          </div>

          {/* Card 2: VL Embedding */}
          <div className="bg-white border border-[#E7E7E3] hover:border-[#D6D6D1] rounded-[16px] p-[28px_28px_0] flex flex-col justify-between transition-colors duration-200 overflow-hidden box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] text-[#0A0A0A] tracking-tight">VL Embedding</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                One embedding space across text, images, videos, and visual documents.
              </p>
              <div className="flex flex-col gap-[6px] mb-[24px]">
                <div className="flex items-baseline gap-[8px] flex-wrap">
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.05 &ndash; $0.10</span>
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1M text tokens</span>
                </div>
                <div className="flex items-baseline gap-[8px] flex-wrap">
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.12 &ndash; $0.25</span>
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1M image or video tokens</span>
                </div>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] text-[14px] text-[#57575E]">
                Text and visual inputs are priced separately.
              </div>
            </div>
            <div className="mx-[-28px] mt-auto px-[28px] py-[14px] bg-[#F6F6F3] border-t border-[#E7E7E3] rounded-b-[16px] flex items-baseline justify-between gap-[14px] text-[14px] text-[#57575E]">
              <span>SOTA on MMEB-v2</span>
              <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-4 py-1.5 rounded-md transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                Get started
              </a>
            </div>
          </div>
        </div>

        {/* Row 4: Applications (3 cards: Answer & Multimodal Chat, Deep Research, Grounded Generation) */}
        <div id="applications" className="scroll-mt-[100px] grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full">
          {/* Card 1: Answer & Multimodal Chat */}
          <div className="bg-white border border-[#E7E7E3] hover:border-[#D6D6D1] rounded-[16px] p-[28px_28px_0] flex flex-col justify-between transition-colors duration-200 overflow-hidden box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] text-[#0A0A0A] tracking-tight">Answer &amp; Multimodal Chat</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Grounded answers with citations, assembled from dozens of sub-queries.
              </p>
              <div className="mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] text-[14px] tracking-tight px-[12px] py-[7px] bg-[#F6F6F3] rounded-[8px] text-[#0A0A0A] inline-block">
                  Search calls + model tokens
                </span>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] flex flex-col gap-[9px]">
                <div className="flex flex-wrap gap-[8px] items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Answer</span>
                  <span className="text-[#9C9CA4]">Broad Search + LLM</span>
                </div>
                <div className="flex flex-wrap gap-[8px] items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Multimodal Chat</span>
                  <span className="text-[#9C9CA4]">Multimodal Search + LLM</span>
                </div>
              </div>
            </div>
            <div className="mx-[-28px] mt-auto px-[28px] py-[14px] bg-[#F6F6F3] border-t border-[#E7E7E3] rounded-b-[16px] flex items-baseline justify-between gap-[14px] text-[14px] text-[#57575E]">
              <span>Search first, then generate</span>
              <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-4 py-1.5 rounded-md transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                Get started
              </a>
            </div>
          </div>

          {/* Card 2: Deep Research */}
          <div className="bg-white border border-[#E7E7E3] hover:border-[#D6D6D1] rounded-[16px] p-[28px_28px_0] flex flex-col justify-between transition-colors duration-200 overflow-hidden box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] text-[#0A0A0A] tracking-tight">Deep Research</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Deep, source-backed research across thousands of web pages and documents.
              </p>
              <div className="flex items-baseline gap-[8px] flex-wrap mb-[24px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.20 &ndash; $3.00</span>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ request</span>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] flex flex-col gap-[9px]">
                <div className="flex justify-between items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Lite</span>
                  <span className="font-['DM_Sans',sans-serif] text-[#0A0A0A]">$0.20</span>
                </div>
                <div className="flex justify-between items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Standard</span>
                  <span className="font-['DM_Sans',sans-serif] text-[#0A0A0A]">$1.00</span>
                </div>
                <div className="flex justify-between items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Pro</span>
                  <span className="font-['DM_Sans',sans-serif] text-[#0A0A0A]">$2.50</span>
                </div>
                <div className="flex justify-between items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Pro-visual</span>
                  <span className="font-['DM_Sans',sans-serif] text-[#0A0A0A]">$3.00</span>
                </div>
              </div>
            </div>
            <div className="mx-[-28px] mt-auto px-[28px] py-[14px] bg-[#F6F6F3] border-t border-[#E7E7E3] rounded-b-[16px] flex items-baseline justify-between gap-[14px] text-[14px] text-[#57575E]">
              <span>Pro-visual adds images and videos</span>
              <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-4 py-1.5 rounded-md transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                Get started
              </a>
            </div>
          </div>

          {/* Card 3: Grounded Generation */}
          <div className="bg-white border border-[#E7E7E3] hover:border-[#D6D6D1] rounded-[16px] p-[28px_28px_0] flex flex-col justify-between transition-colors duration-200 overflow-hidden box-border">
            <div>
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] text-[#0A0A0A] tracking-tight">Grounded Generation</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] mb-[24px]">
                Images and video generated from real-world references found by live web search.
              </p>
              <div className="flex flex-col gap-[6px] mb-[24px]">
                <div className="flex items-baseline gap-[8px] flex-wrap">
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[24px] leading-none text-[#0A0A0A] tracking-tight">$0.25</span>
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ output image</span>
                </div>
                <div className="flex items-baseline gap-[8px] flex-wrap">
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[24px] leading-none text-[#0A0A0A] tracking-tight">$1.00</span>
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ output video</span>
                </div>
              </div>
              <div className="border-t border-[#E7E7E3] pt-[16px] mb-[20px] flex flex-col gap-[9px]">
                <div className="flex flex-wrap gap-[8px] items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Image generation</span>
                </div>
                <div className="flex flex-wrap gap-[8px] items-baseline text-[14px]">
                  <span className="font-semibold text-[#0A0A0A]">Video generation</span>
                </div>
              </div>
            </div>
            <div className="mx-[-28px] mt-auto px-[28px] py-[14px] bg-[#F6F6F3] border-t border-[#E7E7E3] rounded-b-[16px] flex items-baseline justify-between gap-[14px] text-[14px] text-[#57575E]">
              <span>Grounded in Multimodal Search results</span>
              <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-4 py-1.5 rounded-md transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                Get started
              </a>
            </div>
          </div>
        </div>

        {/* Row 5: Model Gateway Footnote */}
        <div className="bg-[#F6F6F3] border border-[#E7E7E3] rounded-[16px] p-[18px_24px] flex flex-col md:flex-row items-center justify-between gap-[16px] mt-[4px] w-full box-border">
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
