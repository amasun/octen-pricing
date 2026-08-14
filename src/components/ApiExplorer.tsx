import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { id: "search", title: "Search" },
  { id: "extract", title: "Extract" },
  { id: "embeddings", title: "Embeddings" },
  { id: "generate", title: "Generate" },
];

export default function ApiExplorer() {
  const [activeSection, setActiveSection] = useState("search");
  const isClickScrollingRef = useRef(false);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll position to update active anchor pill during manual scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrollingRef.current) return;

      // Bottom-of-page check: if user scrolled to bottom, highlight last tab
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
        return;
      }

      // Check sections from last to first using true absolute document Y position
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const section = document.getElementById(item.id);
        if (section) {
          const absoluteSectionTop = section.getBoundingClientRect().top + window.pageYOffset;
          // 145px threshold matches sticky navbar (68px) + tabs bar (49px) + breathing room
          if (window.scrollY >= absoluteSectionTop - 145) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Immediately set active tab
      setActiveSection(id);
      isClickScrollingRef.current = true;

      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

      // Y-offset accounts for top floating navbar (68px) + tabs bar (49px) + 23px breathing space
      const yOffset = -140;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      // Unlock scroll listener after smooth scroll finishes
      clickTimerRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 700);
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[40px] sm:pb-[60px] pt-[60px] relative shrink-0 w-full max-w-[1312px] px-4 box-border" id="api-pricing">
      {/* Title Header */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4 mb-[28px] sm:mb-[36px]">
        <h2 className="font-['Fraunces',serif] font-bold text-[28px] sm:text-[44px] leading-[1.15] sm:leading-[48px] text-[#09090b]">
          Pay-As-You-Go
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5d605b] text-center sm:whitespace-nowrap whitespace-normal max-w-full">
          Charges are deducted from your balance in real time, based on what you actually call.
        </p>
      </div>

      {/* Anchor Navigation Bar styled with stacked sticky offset (top-[76px]) */}
      <div className="sticky top-[76px] z-30 flex items-center justify-center w-full max-w-[880px] mb-[32px] sm:mb-[44px] px-2">
        <div className="bg-[#F6F6F3] p-[3px] rounded-[99px] border border-[#EEEEEE] flex flex-col sm:flex-row items-stretch sm:items-center gap-[6px] w-full min-h-[49px] box-border shadow-[inset_0px_1px_2px_rgba(0,0,0,0.03)] relative">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex-1 flex items-center justify-center px-[16px] py-[10px] h-[43px] font-['DM_Sans',sans-serif] text-[16px] leading-[22px] transition-all duration-200 select-none cursor-pointer rounded-[99px] ${
                  isActive
                    ? "bg-white text-[#09090B] font-bold shadow-sm"
                    : "bg-transparent text-[#515151] font-normal hover:text-[#09090B]"
                }`}
              >
                <span className="whitespace-nowrap">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Flattened Continuous Sections Container */}
      <div className="content-stretch flex flex-col items-start gap-[56px] sm:gap-[72px] relative shrink-0 w-full">
        
        {/* MODULE 1: Search */}
        <section id="search" className="scroll-mt-[100px] w-full flex flex-col gap-[20px]">
          <div className="flex flex-col gap-1 border-b border-[#E7E7E3] pb-[12px]">
            <h3 className="font-['Fraunces',serif] font-semibold text-[24px] sm:text-[28px] text-[#0A0A0A] m-0">Search</h3>
            <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[16px] text-[#57575E] m-0">Real-time retrieval from the live web.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
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
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-3.5 py-1.5 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                  Get started &rarr;
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
                  Beyond text queries — images and videos retrieved from the live web.
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
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-3.5 py-1.5 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                  Get started &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MODULE 2: Extract */}
        <section id="extract" className="scroll-mt-[100px] w-full flex flex-col gap-[20px]">
          <div className="flex flex-col gap-1 border-b border-[#E7E7E3] pb-[12px]">
            <h3 className="font-['Fraunces',serif] font-semibold text-[24px] sm:text-[28px] text-[#0A0A0A] m-0">Extract</h3>
            <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[16px] text-[#57575E] m-0">Clean content from any URL.</p>
          </div>

          <div className="bg-white border border-[#E7E7E3] hover:border-[#D6D6D1] rounded-[16px] p-[28px] flex flex-col md:flex-row md:items-end justify-between gap-[24px] w-full transition-colors duration-200 box-border">
            <div className="flex-1 min-w-[260px]">
              <div className="flex items-center gap-[10px] flex-wrap mb-[8px]">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] text-[#0A0A0A] tracking-tight">Extract</span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[22px] text-[#57575E] m-0 max-w-[620px]">
                Turn any URL into clean markdown, with intent-focused highlights and page classification. Only successful parses are billed.
              </p>
            </div>
            <div className="flex flex-col items-end gap-[12px] shrink-0">
              <div className="flex items-baseline gap-[8px] flex-wrap">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[34px] leading-none text-[#0A0A0A] tracking-tight">$1</span>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#57575E]">/ 1k URLs</span>
              </div>
              <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-3.5 py-1.5 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                Get started &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* MODULE 3: Embeddings */}
        <section id="embeddings" className="scroll-mt-[100px] w-full flex flex-col gap-[20px]">
          <div className="flex flex-col gap-1 border-b border-[#E7E7E3] pb-[12px]">
            <h3 className="font-['Fraunces',serif] font-semibold text-[24px] sm:text-[28px] text-[#0A0A0A] m-0">Embeddings</h3>
            <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[16px] text-[#57575E] m-0">Top-ranked embedding models for text and multimodal retrieval.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
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
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-3.5 py-1.5 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                  Get started &rarr;
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
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-3.5 py-1.5 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                  Get started &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MODULE 4: Generate */}
        <section id="generate" className="scroll-mt-[100px] w-full flex flex-col gap-[20px]">
          <div className="flex flex-col gap-1 border-b border-[#E7E7E3] pb-[12px]">
            <h3 className="font-['Fraunces',serif] font-semibold text-[24px] sm:text-[28px] text-[#0A0A0A] m-0">Generate</h3>
            <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[16px] text-[#57575E] m-0">Complete workflows built on the APIs above. Billed per outcome.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full">
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
                  <span className="font-['DM_Sans',sans-serif] text-[16px] tracking-tight px-[12px] py-[7px] bg-[#F6F6F3] rounded-[8px] text-[#0A0A0A] inline-block">
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
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-3.5 py-1.5 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                  Get started &rarr;
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
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-3.5 py-1.5 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                  Get started &rarr;
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
                <a href="https://octen.ai/platform/billing" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white bg-[#100F09] hover:bg-[#2A2A28] active:scale-[0.97] px-3.5 py-1.5 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-1 shrink-0 shadow-xs cursor-pointer select-none whitespace-nowrap">
                  Get started &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Model Gateway Footnote */}
          <div className="bg-[#F6F6F3] border border-[#E7E7E3] rounded-[16px] p-[18px_24px] flex flex-col md:flex-row items-center justify-between gap-[16px] mt-[8px] w-full box-border">
            <div className="text-[14px]">
              <span className="font-semibold text-[#0A0A0A] mr-2">Model Gateway</span>
              <span className="text-[#57575E]">One API for top-tier models, with Octen Search integration built in. Powers the applications above.</span>
            </div>
            <a href="https://docs.octen.ai/overview/pricing#model-gateway" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans',sans-serif] font-medium text-[14px] text-[#14532D] border-b border-[#14532D]/30 hover:border-[#14532D] transition-colors whitespace-nowrap shrink-0">
              View model rates &rarr;
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
