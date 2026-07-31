import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Type, Image as LucideImageIcon, Video as LucideVideoIcon } from "lucide-react";
import imgBackgroundRectangle from "../../imports/Background Rectangle.png";

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
  const [activeTab, setActiveTab] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const pendingTab = useRef(0);

  // Entrance: fires after React re-renders with new tab content
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.38, ease: "power3.out", clearProps: "transform,opacity" }
    );
  }, [activeTab]);

  const handleTabClick = (idx: number) => {
    if (idx === activeTab) return;
    pendingTab.current = idx;
    const el = panelRef.current;
    if (!el) { setActiveTab(idx); return; }
    // Exit current panel, then switch
    gsap.to(el, {
      opacity: 0,
      y: -10,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => setActiveTab(pendingTab.current),
    });
  };

  const tabs = [
    "Search & Extract APIs",
    "Model Gateway",
    "Embedding & VL Embedding",
    "Applications & Research",
  ];

  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[40px] sm:pb-[60px] pt-[50px] sm:pt-[110px] relative shrink-0 w-full max-w-[1320px] px-4 box-border" id="api-pricing">
      {/* Title Header */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4 mb-[24px] sm:mb-[36px]">
        <h2 className="font-['Fraunces',serif] font-bold text-[28px] sm:text-[44px] leading-[1.15] sm:leading-[48px] text-[#09090b]">
          Pay-As-You-Go
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5d605b] sm:whitespace-nowrap whitespace-normal text-center max-w-[90vw] sm:max-w-none">
          Transparent real-time deduction based on actual API calls, token consumption, and multi-model gateway usage.
        </p>
      </div>

      {/* Tab Nav Buttons */}
      <div 
        role="tablist" 
        aria-label="Pay As You Go Pricing Categories" 
        className="grid grid-cols-2 sm:flex sm:flex-row gap-[8px] sm:gap-[16px] items-center justify-center relative shrink-0 w-full sm:w-auto px-2 sm:px-0"
      >
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            id={`tab-${idx}`}
            role="tab"
            aria-selected={activeTab === idx}
            aria-controls={`tabpanel-${idx}`}
            onClick={() => handleTabClick(idx)}
            className={`w-full sm:w-auto min-h-[42px] sm:min-h-[44px] px-[8px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-[9999px] font-['DM_Sans',sans-serif] font-medium text-[12px] sm:text-[16px] leading-[1.25] sm:leading-normal text-center flex items-center justify-center border-none cursor-pointer select-none transition-colors duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-[#039855] focus-visible:outline-none ${
              activeTab === idx
                ? "bg-[#039855] text-white shadow-none"
                : "bg-[#f3f3f2] text-[#5d605b] hover:bg-[#e4e4e3] hover:text-[#09090b]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tables Container */}
      <div
        ref={panelRef}
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="content-stretch flex flex-col gap-[12px] items-start pt-[40px] relative shrink-0 w-full"
      >
        {/* TAB 1: Search & Extract APIs */}
        {activeTab === 0 && (
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
                <div className="bg-[#f0f4f6] min-h-[42px] flex items-center justify-between px-[20px] py-[10px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
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
                <div className="bg-[#f0f4f6] min-h-[42px] flex items-center justify-between px-[20px] py-[10px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
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
                <div className="bg-[#f0f4f6] min-h-[42px] flex items-center justify-between px-[20px] py-[10px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
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
                  <div className="w-[420px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[14px] text-[#515151]">
                    Billed strictly per successful webpage parse and structured output
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Model Gateway */}
        {activeTab === 1 && (
          <div className="w-full overflow-x-auto [webkit-overflow-scrolling:touch] rounded-[12px]">
            <div className="min-w-[1240px] w-full bg-gradient-to-l from-[#b9f8a3] to-[#51f174] border-2 border-[#46db98] relative rounded-[12px] shrink-0 flex flex-col overflow-hidden" data-name="Table">
              {/* Top-Right Shimmer Accent Overlay */}
              <img
                src={imgBackgroundRectangle}
                alt=""
                className="absolute h-[64.2px] right-[-50px] top-0 w-[754px] pointer-events-none object-cover mix-blend-multiply"
                data-name="Background Rectangle"
              />
              {/* Header Container */}
              <div className="flex items-center px-[20px] py-[14px] font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#09090b] uppercase tracking-wider relative z-10 w-full" data-name="Header Container">
                <div className="w-[300px] shrink-0 whitespace-nowrap">Model Identifier</div>
                <div className="w-[220px] shrink-0 whitespace-nowrap">Input (USD / 1M)</div>
                <div className="w-[220px] shrink-0 whitespace-nowrap">Output (USD / 1M)</div>
                <div className="w-[220px] shrink-0 whitespace-nowrap">Cache Read / IMG In</div>
                <div className="w-[240px] shrink-0 whitespace-nowrap">Cache Write / IMG Out</div>
              </div>

              {/* Content Container (White rounded box) */}
              <div className="bg-white rounded-[10px] overflow-hidden flex flex-col relative z-10 w-full min-w-full" data-name="Content Container">
                {/* Section: LLM */}
                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center justify-between font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] tracking-[0.28px] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">LLM Gateway Token Rates</span>
                  <span className="flex items-center gap-[4px] shrink-0"><TextIcon /></span>
                </div>
                {[
                  { m: "anthropic/claude-opus-4.8",     inp: "$5.00",                          out: "$25.00",                         cr: "$0.50",         cw: "$6.25 (5m) / $10 (1h)" },
                  { m: "anthropic/claude-opus-4.6",     inp: "$5.00",                          out: "$25.00",                         cr: "$0.50",         cw: "$6.25 (5m) / $10 (1h)" },
                  { m: "anthropic/claude-sonnet-4.6",   inp: "$3.00",                          out: "$15.00",                         cr: "$0.30",         cw: "$3.75 (5m) / $6 (1h)"  },
                  { m: "anthropic/claude-haiku-4.5",    inp: "$1.00",                          out: "$5.00",                          cr: "$0.10",         cw: "$1.25 (5m) / $2 (1h)"  },
                  { m: "google/gemini-3.5-flash",       inp: "$1.50",                          out: "$9.00",                          cr: "$0.15",         cw: "-"                      },
                  { m: "google/gemini-3.1-pro-preview", inp: "$2 (≤200k) / $4 (>200k)",       out: "$12 (≤200k) / $18 (>200k)",      cr: "$0.20 / $0.40", cw: "-"                      },
                  { m: "google/gemini-3.1-flash-lite",  inp: "$0.25",                          out: "$1.50",                          cr: "$0.025",        cw: "-"                      },
                  { m: "google/gemini-3-flash-preview", inp: "$0.50",                          out: "$3.00",                          cr: "$0.05",         cw: "-"                      },
                  { m: "openai/gpt-5.5-pro",            inp: "$30.00",                         out: "$180.00",                        cr: "-",             cw: "-"                      },
                  { m: "openai/gpt-5.5",                inp: "$5.00",                          out: "$30.00",                         cr: "$0.50",         cw: "-"                      },
                  { m: "openai/gpt-5.4",                inp: "$2.50",                          out: "$15.00",                         cr: "$0.25",         cw: "-"                      },
                  { m: "moonshotai/kimi-k2.6",          inp: "$0.95",                          out: "$4.00",                          cr: "$0.16",         cw: "-"                      },
                  { m: "moonshotai/kimi-k2.5",          inp: "$0.60",                          out: "$3.00",                          cr: "$0.10",         cw: "-"                      },
                  { m: "minimax/minimax-m2.5",          inp: "$0.30",                          out: "$1.20",                          cr: "-",             cw: "-"                      },
                  { m: "qwen/qwen3.6-plus",             inp: "$0.5 (≤256k) / $2 (>256k)",     out: "$3 (≤256k) / $6 (>256k)",        cr: "$0.05",         cw: "$0.625 (5m)"            },
                  { m: "deepseek/deepseek-v4-pro",      inp: "$1.74",                          out: "$3.48",                          cr: "$0.145",        cw: "-"                      },
                  { m: "deepseek/deepseek-v4-flash",    inp: "$0.14",                          out: "$0.28",                          cr: "$0.028",        cw: "-"                      },
                ].map((row, i) => (
                  <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out text-[14px] w-full">
                    <div className="w-[300px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['JetBrains_Mono',monospace] text-[14px]">{row.m}</div>
                    <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.inp}</div>
                    <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.out}</div>
                    <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.cr}</div>
                    <div className="w-[240px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.cw}</div>
                  </div>
                ))}

                {/* Section: Image Generation */}
                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center justify-between font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] tracking-[0.28px] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Image Generation Token Rates</span>
                  <span className="flex items-center gap-[4px] shrink-0"><TextIcon /><ImageIcon /></span>
                </div>
                {[
                  { m: "openai/gpt-image-2",            inp: "$5.00 (Text In)",  out: "-",                cr: "$8.00",  cw: "$30.00"  },
                  { m: "openai/gpt-image-1-mini",       inp: "$2.00 (Text In)",  out: "-",                cr: "$2.50",  cw: "$8.00"   },
                  { m: "google/gemini-3-pro-image",     inp: "$2.00 (Text In)",  out: "$12.00 (Text Out)",cr: "$2.00",  cw: "$120.00" },
                  { m: "google/gemini-3.1-flash-image", inp: "$0.50 (Text In)",  out: "$3.00 (Text Out)", cr: "$0.50",  cw: "$60.00"  },
                ].map((row, i) => (
                  <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] last:border-b-0 hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out text-[14px] w-full">
                    <div className="w-[300px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['JetBrains_Mono',monospace] text-[14px]">{row.m}</div>
                    <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.inp}</div>
                    <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.out}</div>
                    <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.cr}</div>
                    <div className="w-[240px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.cw}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Embedding & VL Embedding */}
        {activeTab === 2 && (
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
                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center justify-between font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Text Embedding Models</span>
                  <span className="flex items-center gap-[4px] shrink-0"><TextIcon /></span>
                </div>
                {[
                  { m: "octen-embedding-8b", in: "$0.07", img: "-", fit: "Highest accuracy for enterprise semantic search" },
                  { m: "octen-embedding-4b", in: "$0.04", img: "-", fit: "Optimal balance of performance and cost" },
                  { m: "octen-embedding-0.6b", in: "$0.01", img: "-", fit: "Ultra-low cost high-volume embedding pipeline" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] text-[14px] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full">
                    <div className="w-[260px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['JetBrains_Mono',monospace] text-[14px]">{row.m}</div>
                    <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.in}</div>
                    <div className="w-[260px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.img}</div>
                    <div className="w-[340px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.fit}</div>
                  </div>
                ))}

                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center justify-between font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Multimodal VL Embedding Models</span>
                  <span className="flex items-center gap-[4px] shrink-0"><TextIcon /><ImageIcon /></span>
                </div>
                {[
                  { m: "octen-vl-embedding-8b", in: "$0.07", img: "$0.20", fit: "Multimodal visual & text joint embedding" },
                  { m: "octen-vl-embedding-2b", in: "$0.03", img: "$0.08", fit: "Fast visual document & layout embedding" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center px-[20px] py-[12px] border-b border-[#e8e8e8] last:border-b-0 text-[14px] hover:bg-[#f4f4f5] transition-colors duration-150 ease-in-out w-full">
                    <div className="w-[260px] shrink-0 whitespace-nowrap font-bold text-[#515151] font-['JetBrains_Mono',monospace] text-[14px]">{row.m}</div>
                    <div className="w-[220px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.in}</div>
                    <div className="w-[260px] shrink-0 whitespace-nowrap font-['JetBrains_Mono',monospace] text-[#131212] text-[14px]">{row.img}</div>
                    <div className="w-[340px] shrink-0 whitespace-nowrap font-['DM_Sans',sans-serif] font-normal text-[#515151] text-[14px]">{row.fit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Applications & Research */}
        {activeTab === 3 && (
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
                <div className="w-[280px] shrink-0 whitespace-nowrap">Application Service / Tier</div>
                <div className="w-[200px] shrink-0 whitespace-nowrap">Billing Unit</div>
                <div className="w-[200px] shrink-0 whitespace-nowrap">Price Rate (USD)</div>
                <div className="w-[400px] shrink-0 whitespace-nowrap">Use Case / Description</div>
              </div>

              {/* Content Container (White rounded box) */}
              <div className="bg-white rounded-[10px] overflow-hidden flex flex-col relative z-10 w-full min-w-full" data-name="Content Container">
                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center justify-between font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
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

                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center justify-between font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
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

                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center justify-between font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] w-full" data-name="section-title">
                  <span className="whitespace-nowrap">Answer & Multimodal Chat</span>
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
        )}

        {/* Footer Doc Link */}
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full pt-4">
          <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[16px] text-[#515151] text-center">
            For more information, visit our{" "}
            <a
              href="https://docs.octen.ai/overview/pricing#api-pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#039855] font-bold underline hover:text-[#027a44] transition-colors"
            >
              API Pricing Documentation
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
