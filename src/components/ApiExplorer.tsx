import { useState } from "react";
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
            <h3 className="font-['Fraunces',serif] font-bold text-[22px] sm:text-[28px] text-[#100F09]">
              Search &amp; Extract APIs
            </h3>
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
            <h3 className="font-['Fraunces',serif] font-bold text-[22px] sm:text-[28px] text-[#100F09]">
              Embedding &amp; VL Embedding
            </h3>
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
                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center justify-between font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] tracking-[0.28px] w-full" data-name="section-title">
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

                <div className="bg-[#f0f4f6] min-h-[42px] px-[20px] py-[10px] flex items-center justify-between font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#131212] border-b border-[#e8e8e8] tracking-[0.28px] w-full" data-name="section-title">
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
            <h3 className="font-['Fraunces',serif] font-bold text-[22px] sm:text-[28px] text-[#100F09]">
              Applications &amp; Deep Research
            </h3>
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
          <h3 className="font-['Fraunces',serif] font-bold text-[22px] sm:text-[28px] text-[#100F09] flex items-center gap-3 flex-wrap">
            Unified LLM Model Gateway
            <span className="font-['DM_Sans',sans-serif] font-semibold text-[12px] px-2.5 py-0.5 rounded-full bg-[#70FE7E] text-[#100F09] translate-y-[2px]">
              Zero-Margin Pass-Through
            </span>
          </h3>
          <p className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#5d605b] leading-relaxed">
            Access 20+ leading AI models through a unified gateway with zero-margin pass-through billing.
          </p>
        </div>

        {/* Single-Row Seamless Infinite Marquee Ticker */}
        <div className="w-full overflow-hidden relative py-2 [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]">
          <div className="animate-model-marquee gap-4">
            {[
              { name: "Anthropic", models: "Claude 3.5 Sonnet / Opus 4.8", inPrice: "From $1.00 / 1M", outPrice: "From $5.00 / 1M" },
              { name: "OpenAI", models: "GPT-4o / GPT-5.5 / DALL-E", inPrice: "From $2.50 / 1M", outPrice: "From $15.00 / 1M" },
              { name: "Google Gemini", models: "Gemini 3.5 Flash / 3.1 Pro", inPrice: "From $0.25 / 1M", outPrice: "From $1.50 / 1M" },
              { name: "DeepSeek", models: "DeepSeek-V4 / R1 Series", inPrice: "From $0.14 / 1M", outPrice: "From $0.28 / 1M" },
              { name: "Moonshot Kimi", models: "Kimi k2.5 / Kimi k2.6", inPrice: "From $0.60 / 1M", outPrice: "From $3.00 / 1M" },
              { name: "Qwen", models: "Qwen 3.6 Plus / Max", inPrice: "From $0.50 / 1M", outPrice: "From $3.00 / 1M" },
              { name: "MiniMax", models: "MiniMax m2.5", inPrice: "From $0.30 / 1M", outPrice: "From $1.20 / 1M" },
              { name: "Anthropic", models: "Claude 3.5 Sonnet / Opus 4.8", inPrice: "From $1.00 / 1M", outPrice: "From $5.00 / 1M" },
              { name: "OpenAI", models: "GPT-4o / GPT-5.5 / DALL-E", inPrice: "From $2.50 / 1M", outPrice: "From $15.00 / 1M" },
              { name: "Google Gemini", models: "Gemini 3.5 Flash / 3.1 Pro", inPrice: "From $0.25 / 1M", outPrice: "From $1.50 / 1M" },
              { name: "DeepSeek", models: "DeepSeek-V4 / R1 Series", inPrice: "From $0.14 / 1M", outPrice: "From $0.28 / 1M" },
              { name: "Moonshot Kimi", models: "Kimi k2.5 / Kimi k2.6", inPrice: "From $0.60 / 1M", outPrice: "From $3.00 / 1M" },
              { name: "Qwen", models: "Qwen 3.6 Plus / Max", inPrice: "From $0.50 / 1M", outPrice: "From $3.00 / 1M" },
              { name: "MiniMax", models: "MiniMax m2.5", inPrice: "From $0.30 / 1M", outPrice: "From $1.20 / 1M" },
            ].map((brand, idx) => (
              <div 
                key={idx}
                className="w-[285px] shrink-0 bg-white hover:bg-[#f4f4f5] rounded-[16px] border border-[rgba(26,26,25,0.12)] transition-colors duration-200 p-5 flex flex-col justify-between box-border"
              >
                <div className="flex flex-col mb-3">
                  <span className="font-['Fraunces',serif] font-bold text-[18px] text-[#100F09]">
                    {brand.name}
                  </span>
                  <span className="font-['DM_Sans',sans-serif] text-[13px] text-[#7C7C79] mt-0.5 truncate">
                    {brand.models}
                  </span>
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
