import { useState, useEffect, useRef } from "react";

// --- 4 Major Category Icons from Figma Node 13418:141867 ---
// 1. Search (tabler:world-search)
function SearchCategoryIcon({ className = "w-[18px] h-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.4999 14C24.4999 11.9233 23.8841 9.89326 22.7303 8.16655C21.5766 6.43983 19.9367 5.09402 18.0181 4.2993C16.0994 3.50458 13.9882 3.29664 11.9514 3.70179C9.91463 4.10693 8.04371 5.10696 6.57526 6.57541C5.10681 8.04387 4.10678 9.91479 3.70164 11.9516C3.29649 13.9884 3.50443 16.0996 4.29915 18.0182C5.09387 19.9368 6.43968 21.5767 8.1664 22.7305C9.89311 23.8842 11.9232 24.5 13.9999 24.5M4.19988 10.5H23.7999M4.19988 17.5H13.4165"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4166 3.50003C11.4512 6.64958 10.4092 10.2875 10.4092 14C10.4092 17.7125 11.4512 21.3505 13.4166 24.5M14.5833 3.50003C16.4692 6.52177 17.5065 9.99563 17.5863 13.5567M23.5666 23.5667L25.6666 25.6667M17.4999 21C17.4999 21.9283 17.8687 22.8185 18.5251 23.4749C19.1814 24.1313 20.0717 24.5 20.9999 24.5C21.9282 24.5 22.8184 24.1313 23.4748 23.4749C24.1312 22.8185 24.4999 21.9283 24.4999 21C24.4999 20.0718 24.1312 19.1815 23.4748 18.5252C22.8184 17.8688 21.9282 17.5 20.9999 17.5C20.0717 17.5 19.1814 17.8688 18.5251 18.5252C17.8687 19.1815 17.4999 20.0718 17.4999 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 2. Extract (tabler:grid-dots network extraction)
function ExtractCategoryIcon({ className = "w-[18px] h-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.9996 19.484C14.7114 19.484 15.3949 19.767 15.898 20.2701C16.4006 20.7731 16.6841 21.4554 16.6842 22.1666C16.6841 22.8781 16.4009 23.561 15.898 24.0641C15.3949 24.5672 14.7114 24.8502 13.9996 24.8502C13.288 24.8501 12.6052 24.5671 12.1021 24.0641C11.9021 23.864 11.7384 23.6347 11.6119 23.3873H8.22031C8.09382 23.6346 7.93011 23.864 7.73008 24.0641C7.22706 24.5669 6.54503 24.8501 5.83359 24.8502C5.12195 24.8501 4.43923 24.5671 3.93613 24.0641C3.43307 23.561 3.1501 22.8782 3.15 22.1666C3.15012 21.4552 3.43329 20.7731 3.93613 20.2701C4.43924 19.767 5.12191 19.484 5.83359 19.484C6.54519 19.4841 7.22703 19.7671 7.73008 20.2701C8.0447 20.5848 8.27293 20.9693 8.4 21.3873H11.4322C11.5593 20.9693 11.7878 20.5847 12.1021 20.2701C12.6052 19.7671 13.288 19.4841 13.9996 19.484ZM22.1666 11.316C22.8781 11.3161 23.561 11.5992 24.0641 12.1021C24.5671 12.6052 24.8501 13.288 24.8502 13.9996C24.8502 14.7114 24.5672 15.3949 24.0641 15.898C23.8375 16.1246 23.5724 16.3026 23.2867 16.4342V19.732C23.5727 19.8636 23.8373 20.0433 24.0641 20.2701C24.5668 20.7731 24.8501 21.4552 24.8502 22.1666C24.8501 22.8782 24.5671 23.561 24.0641 24.0641C23.561 24.5671 22.8782 24.8501 22.1666 24.8502C21.4552 24.8501 20.7731 24.5668 20.2701 24.0641C19.7671 23.561 19.4841 22.8782 19.484 22.1666C19.4841 21.455 19.7671 20.7732 20.2701 20.2701C20.5592 19.9811 20.9079 19.7672 21.2867 19.6354V16.5318C20.9081 16.4 20.559 16.1867 20.2701 15.898C19.767 15.3949 19.484 14.7114 19.484 13.9996C19.4841 13.288 19.7671 12.6052 20.2701 12.1021C20.7731 11.5995 21.4553 11.3161 22.1666 11.316ZM5.83359 11.316C6.54493 11.3161 7.22708 11.5994 7.73008 12.1021C8.23314 12.6052 8.51611 13.288 8.51621 13.9996C8.51621 14.7114 8.23323 15.3949 7.73008 15.898C7.22709 16.4007 6.54488 16.6841 5.83359 16.6842C5.1221 16.6841 4.4392 16.4009 3.93613 15.898C3.43298 15.3949 3.15 14.7114 3.15 13.9996C3.1501 13.288 3.43307 12.6052 3.93613 12.1021C4.43921 11.5992 5.12206 11.3161 5.83359 11.316ZM13.9996 3.15C14.7114 3.15 15.3949 3.43298 15.898 3.93613C16.4009 4.4392 16.6841 5.1221 16.6842 5.83359C16.6841 6.54488 16.4007 7.22709 15.898 7.73008C15.6395 7.98867 15.3326 8.18812 14.9996 8.32187V11.5104C15.3327 11.6441 15.6394 11.8435 15.898 12.1021C16.401 12.6052 16.6841 13.288 16.6842 13.9996C16.6842 14.7114 16.4012 15.3949 15.898 15.898C15.3949 16.4012 14.7114 16.6842 13.9996 16.6842C13.288 16.6841 12.6052 16.401 12.1021 15.898C11.599 15.3949 11.316 14.7114 11.316 13.9996C11.3161 13.288 11.5991 12.6052 12.1021 12.1021C12.3606 11.8437 12.6668 11.6441 12.9996 11.5104V8.3209C12.667 8.18715 12.3605 7.98841 12.1021 7.73008C11.8136 7.44139 11.6003 7.09273 11.4684 6.71445H8.36387C8.23201 7.09274 8.0188 7.44135 7.73008 7.73008C7.22703 8.23312 6.54519 8.51609 5.83359 8.51621C5.1219 8.51616 4.43924 8.23319 3.93613 7.73008C3.43323 7.22705 3.15012 6.54508 3.15 5.83359C3.15005 5.1219 3.43302 4.43924 3.93613 3.93613C4.43924 3.43302 5.1219 3.15005 5.83359 3.15C6.54508 3.15012 7.22705 3.43323 7.73008 3.93613C7.95713 4.16319 8.13655 4.42809 8.26816 4.71445H11.565C11.6966 4.42823 11.8753 4.16308 12.1021 3.93613C12.6052 3.43307 13.288 3.1501 13.9996 3.15ZM22.1666 3.15C22.8782 3.1501 23.561 3.43307 24.0641 3.93613C24.5671 4.43923 24.8501 5.12195 24.8502 5.83359C24.8501 6.54503 24.5669 7.22706 24.0641 7.73008C23.561 8.23314 22.8782 8.51611 22.1666 8.51621C21.4551 8.51609 20.7732 8.23306 20.2701 7.73008C19.7671 7.22703 19.4841 6.54519 19.484 5.83359C19.484 5.12191 19.767 4.43924 20.2701 3.93613C20.7731 3.43329 21.4552 3.15012 22.1666 3.15Z" />
    </svg>
  );
}

// 3. Embedding (Dimensional 6-node constellation from Figma)
function EmbeddingCategoryIcon({ className = "w-[18px] h-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(4.4, 3.1)">
        <path d="M17.2369 7.31804L1.00016 16.8694" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.2369 16.2041L1.40211 7.45408" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.59428 20.7835L9.59428 2.39207" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="17.2378" cy="7.45402" r="2.4" fill="currentColor"/>
        <circle cx="9.5949" cy="2.39198" r="2.4" fill="currentColor"/>
        <circle cx="9.5949" cy="20.7835" r="2.4" fill="currentColor"/>
        <circle cx="1.00016" cy="16.8694" r="2.4" fill="currentColor"/>
        <circle cx="17.2369" cy="16.2041" r="2.4" fill="currentColor"/>
        <circle cx="1.40211" cy="7.45408" r="2.4" fill="currentColor"/>
      </g>
    </svg>
  );
}

// 3.5 VL Embedding (Multimodal cross-modal embedding from Figma)
function VlEmbeddingCategoryIcon({ className = "w-[18px] h-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.1337 2.33334C20.3712 2.33343 21.5584 2.82544 22.4335 3.70053C23.3084 4.57567 23.8007 5.76281 23.8007 7.00034V11.5843C23.0789 11.1758 22.2952 10.8648 21.4667 10.6683V7.00034C21.4667 6.38165 21.2214 5.7875 20.7841 5.34995C20.3465 4.91244 19.7524 4.66741 19.1337 4.66733H5.13367C4.51483 4.66733 3.92086 4.91236 3.48328 5.34995C3.04569 5.78753 2.80066 6.3815 2.80066 7.00034V15.8499L6.64246 12.0091L6.65808 11.9925C7.37446 11.3033 8.25705 10.8862 9.21667 10.8861C10.0565 10.8862 10.8379 11.2055 11.4999 11.7474L11.7762 11.9925L11.7919 12.0091L12.9432 13.1605C12.3966 13.7258 11.9228 14.3618 11.5389 15.055L10.1581 13.6742L10.0223 13.554C9.71137 13.2984 9.43433 13.2192 9.21667 13.2191C8.96797 13.2192 8.64215 13.3222 8.27625 13.6742L2.80066 19.1497V21.0003C2.80075 21.6191 3.04577 22.2132 3.48328 22.6507C3.92083 23.0881 4.51498 23.3333 5.13367 23.3333H11.3319C11.7559 24.199 12.3151 24.986 12.9823 25.6673H5.13367C3.89614 25.6673 2.709 25.1751 1.83386 24.3001C0.95877 23.425 0.466761 22.2379 0.466675 21.0003V7.00034C0.466675 5.76266 0.958693 4.5757 1.83386 3.70053C2.70903 2.82536 3.89599 2.33334 5.13367 2.33334H19.1337ZM15.6454 8.16733C16.2894 8.16753 16.8122 8.68929 16.8124 9.33334C16.8122 9.9774 16.2894 10.5001 15.6454 10.5003H15.6337C14.9894 10.5003 14.4669 9.97753 14.4667 9.33334C14.4669 8.68916 14.9894 8.16733 15.6337 8.16733H15.6454Z"
        fill="currentColor"
      />
      <path
        d="M25.4358 16.816L15.4037 22.7175"
        stroke="currentColor"
        strokeWidth="1.55702"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.4358 22.3064L15.6521 16.9001"
        stroke="currentColor"
        strokeWidth="1.55702"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7136 25.1358L20.7136 13.7725"
        stroke="currentColor"
        strokeWidth="1.55702"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25.4363" cy="16.9001" r="1.55118" fill="currentColor" />
      <circle cx="20.714" cy="13.7724" r="1.47792" fill="currentColor" />
      <circle cx="20.7139" cy="25.1359" r="1.74918" fill="currentColor" />
      <circle cx="26.3246" cy="22.7174" r="1.59337" transform="rotate(124.49 26.3246 22.7174)" fill="currentColor" />
      <circle cx="14.8729" cy="23.0006" r="1.57125" transform="rotate(61.0709 14.8729 23.0006)" fill="currentColor" />
      <circle cx="15.6521" cy="17.2514" r="1.55269" fill="currentColor" />
    </svg>
  );
}

// 4. Applications (Composite geometric workflow from Figma)
function ApplicationsCategoryIcon({ className = "w-[18px] h-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(2.5, 2.3)">
        <path d="M17.1854 12.7314C20.1292 12.7317 22.5007 15.1368 22.5009 18.085C22.5009 21.0333 20.1293 23.4382 17.1854 23.4385C14.2414 23.4385 11.869 21.0334 11.869 18.085C11.8692 15.1366 14.2414 12.7314 17.1854 12.7314ZM3.74502 13.9922C4.56824 12.5542 6.63368 12.5543 7.45693 13.9922L10.9149 20.0342C11.7279 21.4549 10.7204 23.2565 9.05947 23.2568H2.14248C0.481297 23.2567 -0.526113 21.455 0.28701 20.0342L3.74502 13.9922ZM17.1854 14.7314C15.3623 14.7314 13.8692 16.2248 13.869 18.085C13.869 19.9452 15.3622 21.4385 17.1854 21.4385C19.0085 21.4382 20.5009 19.9451 20.5009 18.085C20.5007 16.225 19.0084 14.7317 17.1854 14.7314ZM5.7206 14.9854C5.66544 14.8895 5.53545 14.8894 5.48037 14.9854L2.02236 21.0273C2.00399 21.0595 1.99959 21.0852 1.9999 21.1064C2.00032 21.1307 2.00744 21.1584 2.02236 21.1846C2.03733 21.2107 2.05647 21.2295 2.07412 21.2402C2.08907 21.2493 2.10953 21.2568 2.14248 21.2568H9.05947C9.09236 21.2568 9.11291 21.2493 9.12783 21.2402C9.14548 21.2295 9.16462 21.2107 9.17959 21.1846C9.19448 21.1584 9.20163 21.1306 9.20205 21.1064C9.20236 21.0853 9.19789 21.0594 9.17959 21.0273L5.7206 14.9854ZM17.1854 0C17.3956 0.000400738 17.5755 0.151936 17.6151 0.358398C18.2579 3.70585 19.2943 4.75347 22.6103 5.40234C22.8185 5.44332 22.9715 5.62462 22.9716 5.83691C22.9715 6.04921 22.8185 6.23053 22.6103 6.27148C19.2943 6.92035 18.2579 7.96794 17.6151 11.3154L17.5937 11.3906C17.5299 11.5578 17.3692 11.6735 17.1854 11.6738L17.1073 11.667C16.9317 11.635 16.7895 11.4961 16.7548 11.3154C16.1522 8.17737 15.2034 7.06041 12.3554 6.39844L11.7597 6.27148C11.5512 6.23069 11.3984 6.04933 11.3983 5.83691C11.3984 5.6245 11.5512 5.44314 11.7597 5.40234C15.0754 4.75343 16.112 3.70587 16.7548 0.358398C16.7945 0.151662 16.9749 0 17.1854 0ZM7.77041 1.21875C9.22886 1.21897 10.3962 2.40939 10.3964 3.85938V8.23535C10.3962 9.68537 9.22892 10.8758 7.77041 10.876H3.43252C1.97385 10.8759 0.805727 9.68545 0.805565 8.23535V3.85938C0.805798 2.40931 1.9739 1.21882 3.43252 1.21875H7.77041ZM3.43252 3.21875C3.09475 3.21883 2.8058 3.49753 2.80556 3.85938V8.23535C2.80572 8.59724 3.09472 8.8759 3.43252 8.87598H7.77041C8.10808 8.87575 8.39623 8.59714 8.39639 8.23535V3.85938C8.39615 3.49764 8.10805 3.21897 7.77041 3.21875H3.43252ZM17.161 5.77441C17.1398 5.79589 17.1161 5.81585 17.0946 5.83691C17.1161 5.85797 17.1398 5.87794 17.161 5.89941C17.169 5.90753 17.1765 5.91668 17.1845 5.9248C17.1927 5.91638 17.2015 5.90781 17.2099 5.89941C17.2309 5.87816 17.2531 5.85778 17.2743 5.83691C17.2531 5.81609 17.2309 5.79562 17.2099 5.77441C17.2014 5.76586 17.1929 5.75665 17.1845 5.74805C17.1763 5.75638 17.1692 5.7661 17.161 5.77441Z" />
      </g>
    </svg>
  );
}

const NAV_ITEMS: Array<{
  id: string;
  title: string;
  subtitle: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  {
    id: "search",
    title: "Search",
    subtitle: "Real-time retrieval from the live web.",
    icon: SearchCategoryIcon,
  },
  {
    id: "extract",
    title: "Extract",
    subtitle: "Clean structured content from any URL.",
    icon: ExtractCategoryIcon,
  },
  {
    id: "embeddings",
    title: "Embedding",
    subtitle: "Top-ranked embedding models for text and multimodal retrieval.",
    icon: EmbeddingCategoryIcon,
  },
  {
    id: "applications",
    title: "Application",
    subtitle: (
      <span>
        Complete workflows built on the APIs above. Billed per outcome via{" "}
        <span className="inline-flex items-center px-[6px] py-[1.5px] rounded-[4px] bg-[#F6F6F3] text-[#100F09] font-medium border border-[#E7E7E3] text-[12px] font-['JetBrains_Mono',monospace] align-middle">
          Search API + Model Gateway
        </span>
        .
      </span>
    ),
    icon: ApplicationsCategoryIcon,
  },
];

// --- Sub-components for Reusable Cards ---

function WebSearchCard({ plan = "planA" }: { plan?: "planA" | "planB" }) {
  const hoverBorder = plan === "planB" ? "hover:border-[#4CAF50]/70" : "hover:border-[#B5B5B0]";
  return (
    <a
      href="https://octen.ai/platform/web-search"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative bg-white border border-[#E7E7E3] ${hoverBorder} hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-[16px] p-[20px] sm:p-[24px] flex flex-col justify-between transition-all duration-200 box-border h-full cursor-pointer select-none text-left`}
    >
      <div className="absolute top-[12px] right-[12px] w-[28px] h-[28px] rounded-full bg-[#100F09] flex items-center justify-center transition-all duration-200 shrink-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10">
        <svg className="w-[12px] h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-[8px] flex-wrap mb-[8px] pr-[28px]">
          <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#0A0A0A] tracking-tight">Web Search API</span>
          <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-bold text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#70FE7E] text-[#100F09] border border-[#70FE7E]">
            80% Off
          </span>
        </div>
        <p className="font-['DM_Sans',sans-serif] text-[12px] leading-[18px] text-[#8B8B8B] mb-[14px]">
          LLM-native search with ranked results, highlights, and optional full content.
        </p>
        <div className="flex items-baseline gap-[6px] sm:gap-[8px] mb-[18px] flex-wrap">
          <span className="font-['DM_Sans',sans-serif] font-medium text-[30px] sm:text-[34px] leading-none text-[#0A0A0A] tracking-tight">$1</span>
          <span className="font-['DM_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] leading-none text-[#9C9CA4] line-through">$5</span>
          <span className="font-['DM_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#57575E]">/ 1k calls</span>
        </div>
        <div className="border-t border-[#E7E7E3] pt-[14px] flex flex-col gap-[6px]">
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Web Search API</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">1 call / request</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Broad Search API</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">1 call / sub-query</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Full Content</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.5 / 1k results (<span className="text-[#039855] font-medium">10 free results / call</span>)</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function ImageVideoSearchCard({ plan = "planA" }: { plan?: "planA" | "planB" }) {
  const hoverBorder = plan === "planB" ? "hover:border-[#4CAF50]/70" : "hover:border-[#B5B5B0]";
  return (
    <a
      href="https://octen.ai/platform/image-search"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative bg-white border border-[#E7E7E3] ${hoverBorder} hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-[16px] p-[20px] sm:p-[24px] flex flex-col justify-between transition-all duration-200 box-border h-full cursor-pointer select-none text-left`}
    >
      <div className="absolute top-[12px] right-[12px] w-[28px] h-[28px] rounded-full bg-[#100F09] flex items-center justify-center transition-all duration-200 shrink-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10">
        <svg className="w-[12px] h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-[8px] flex-wrap mb-[8px] pr-[28px]">
          <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#0A0A0A] tracking-tight">Image &amp; Video Search</span>
          <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62]">
            Early Access
          </span>
        </div>
        <p className="font-['DM_Sans',sans-serif] text-[12px] leading-[18px] text-[#8B8B8B] mb-[14px]">
          Open-web image search by text or reference image, and video retrieval across the web.
        </p>
        <div className="flex items-baseline gap-[6px] sm:gap-[8px] mb-[18px] flex-wrap">
          <span className="font-['DM_Sans',sans-serif] font-medium text-[30px] sm:text-[34px] leading-none text-[#0A0A0A] tracking-tight">$5</span>
          <span className="font-['DM_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#57575E]">/ 1k calls</span>
        </div>
        <div className="border-t border-[#E7E7E3] pt-[14px] flex flex-col gap-[6px]">
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Image Search API</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">1 call / request</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Video Search API</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">1 call / request</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function ExtractCard() {
  return (
    <a
      href="https://octen.ai/platform/extract"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-[16px] p-[20px] sm:p-[24px] flex flex-col md:flex-row md:items-center justify-between gap-[20px] w-full transition-all duration-200 box-border cursor-pointer select-none text-left"
    >
      <div className="absolute top-[12px] right-[12px] w-[28px] h-[28px] rounded-full bg-[#100F09] flex items-center justify-center transition-all duration-200 shrink-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10">
        <svg className="w-[12px] h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <div className="flex-1 min-w-[240px]">
        <div className="flex items-center gap-[8px] flex-wrap mb-[6px] pr-[28px]">
          <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#0A0A0A] tracking-tight">Extract API</span>
        </div>
        <p className="font-['DM_Sans',sans-serif] text-[12px] leading-[18px] text-[#8B8B8B] m-0 max-w-[620px]">
          Clean Markdown, intent-focused highlights, and page classification from any URL.
        </p>
        <span className="inline-block mt-2 font-semibold text-[#039855] text-[13px]">
          Failed URLs are always free
        </span>
      </div>
      <div className="flex items-baseline gap-[6px] shrink-0">
        <span className="font-['DM_Sans',sans-serif] font-medium text-[30px] sm:text-[34px] leading-none text-[#0A0A0A] tracking-tight">$1</span>
        <span className="font-['DM_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#57575E]">/ 1k URLs</span>
      </div>
    </a>
  );
}

function EmbeddingCard() {
  return (
    <a
      href="https://octen.ai/platform/embedding"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-[16px] p-[20px] sm:p-[24px] flex flex-col justify-between transition-all duration-200 box-border h-full cursor-pointer select-none text-left"
    >
      <div className="absolute top-[12px] right-[12px] w-[28px] h-[28px] rounded-full bg-[#100F09] flex items-center justify-center transition-all duration-200 shrink-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10">
        <svg className="w-[12px] h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-[8px] flex-wrap mb-[8px] pr-[28px]">
          <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#0A0A0A] tracking-tight">Embedding API</span>
          <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#FFF6DE] border border-[#EFC768] text-[#B4690E]">
            SOTA on RTEB
          </span>
        </div>
        <p className="font-['DM_Sans',sans-serif] text-[12px] leading-[18px] text-[#8B8B8B] mb-[14px]">
          Text embeddings for retrieval, similarity, and ranking.
        </p>
        <div className="flex items-baseline gap-[4px] sm:gap-[6px] mb-[18px] flex-wrap">
          <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] sm:text-[22px] leading-none text-[#0A0A0A] tracking-tight">$0.01 &ndash; $0.07</span>
          <span className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[13px] text-[#57575E]">/ 1M tokens</span>
        </div>
        <div className="border-t border-[#E7E7E3] pt-[14px] flex flex-col gap-[6px]">
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0 font-['JetBrains_Mono',monospace]">embedding-8b</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.07 / 1M</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0 font-['JetBrains_Mono',monospace]">embedding-4b</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.04 / 1M</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0 font-['JetBrains_Mono',monospace]">embedding-0.6b</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.01 / 1M</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function VlEmbeddingCard() {
  return (
    <a
      href="https://octen.ai/platform/embedding"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-[16px] p-[20px] sm:p-[24px] flex flex-col justify-between transition-all duration-200 box-border h-full cursor-pointer select-none text-left"
    >
      <div className="absolute top-[12px] right-[12px] w-[28px] h-[28px] rounded-full bg-[#100F09] flex items-center justify-center transition-all duration-200 shrink-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10">
        <svg className="w-[12px] h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-[8px] flex-wrap mb-[8px] pr-[28px]">
          <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#0A0A0A] tracking-tight">VL Embedding API</span>
          <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#FFF6DE] border border-[#EFC768] text-[#B4690E]">
            SOTA on MMEB-v2
          </span>
        </div>
        <p className="font-['DM_Sans',sans-serif] text-[12px] leading-[18px] text-[#8B8B8B] mb-[14px]">
          One vector space across text, images, video, and documents.
        </p>
        <div className="flex items-baseline gap-[4px] sm:gap-[6px] mb-[18px] flex-wrap">
          <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] sm:text-[22px] leading-none text-[#0A0A0A] tracking-tight">$0.05 &ndash; $0.25</span>
          <span className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[13px] text-[#57575E]">/ 1M tokens</span>
        </div>
        <div className="border-t border-[#E7E7E3] pt-[14px] flex flex-col gap-[6px]">
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0 font-['JetBrains_Mono',monospace]">vl-embedding</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.05 / $0.12</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0 font-['JetBrains_Mono',monospace]">vl-embedding-large</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">$0.10 / $0.25</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function AnswerCard() {
  return (
    <a
      href="https://octen.ai/platform/answer"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-[16px] p-[18px] sm:p-[20px] flex flex-col justify-between transition-all duration-200 box-border h-full cursor-pointer select-none text-left"
    >
      <div className="absolute top-[12px] right-[12px] w-[26px] h-[26px] rounded-full bg-[#100F09] flex items-center justify-center transition-all duration-200 shrink-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10">
        <svg className="w-[11px] h-[11px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-[6px] mb-[8px] pr-[24px]">
          <span className="font-['DM_Sans',sans-serif] font-bold text-[17px] sm:text-[18px] text-[#0A0A0A] tracking-tight whitespace-nowrap">Answer</span>
        </div>
        <p className="font-['DM_Sans',sans-serif] text-[12px] leading-[18px] text-[#8B8B8B] mb-[14px]">
          Grounded answer synthesis with inline citations from live web.
        </p>
        <div className="mb-[18px]">
          <span className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[13px] tracking-tight px-[10px] py-[5px] bg-[#F6F6F3] rounded-[6px] text-[#100F09] font-medium inline-block border border-[#E7E7E3]/60">
            Search fees + Model rates
          </span>
        </div>
        <div className="border-t border-[#E7E7E3] pt-[14px] flex flex-col gap-[6px]">
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Search API</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">Broad search queries</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Model Gateway</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">Model rates</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function MultimodalChatCard() {
  return (
    <a
      href="https://octen.ai/platform/multimodal-chat"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-[16px] p-[18px] sm:p-[20px] flex flex-col justify-between transition-all duration-200 box-border h-full cursor-pointer select-none text-left"
    >
      <div className="absolute top-[12px] right-[12px] w-[26px] h-[26px] rounded-full bg-[#100F09] flex items-center justify-center transition-all duration-200 shrink-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10">
        <svg className="w-[11px] h-[11px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-[6px] mb-[8px] pr-[24px] flex-nowrap min-w-0">
          <span className="font-['DM_Sans',sans-serif] font-bold text-[16px] sm:text-[17px] xl:text-[18px] text-[#0A0A0A] tracking-tight whitespace-nowrap shrink-0">
            Multimodal Chat
          </span>
          <span className="h-[19px] px-[5px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[10.5px] leading-none tracking-tight shrink-0 box-border bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62] whitespace-nowrap">
            Early Access
          </span>
        </div>
        <p className="font-['DM_Sans',sans-serif] text-[12px] leading-[18px] text-[#8B8B8B] mb-[14px]">
          Analyze, search, and chat across text, images, videos, and complex documents.
        </p>
        <div className="mb-[18px]">
          <span className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[13px] tracking-tight px-[10px] py-[5px] bg-[#F6F6F3] rounded-[6px] text-[#100F09] font-medium inline-block border border-[#E7E7E3]/60">
            Search fees + Model rates
          </span>
        </div>
        <div className="border-t border-[#E7E7E3] pt-[14px] flex flex-col gap-[6px]">
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Search API</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">Visual search</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[#0A0A0A] truncate min-w-0">Model Gateway</span>
            <span className="text-[#57575E] text-[11px] sm:text-[12px] bg-[#F6F6F3] px-[6px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap">Model rates</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function DeepResearchCard() {
  return (
    <a
      href="https://octen.ai/platform/deep-research"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-[16px] p-[18px] sm:p-[20px] flex flex-col justify-between transition-all duration-200 box-border h-full cursor-pointer select-none text-left"
    >
      <div className="absolute top-[12px] right-[12px] w-[26px] h-[26px] rounded-full bg-[#100F09] flex items-center justify-center transition-all duration-200 shrink-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10">
        <svg className="w-[11px] h-[11px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-[6px] mb-[8px] pr-[24px]">
          <span className="font-['DM_Sans',sans-serif] font-bold text-[17px] sm:text-[18px] text-[#0A0A0A] tracking-tight whitespace-nowrap">Deep Research</span>
        </div>
        <p className="font-['DM_Sans',sans-serif] text-[12px] leading-[18px] text-[#8B8B8B] mb-[14px]">
          Source-backed research across thousands of pages and documents.
        </p>
        <div className="flex items-baseline gap-[4px] sm:gap-[6px] mb-[18px] flex-wrap">
          <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] sm:text-[22px] leading-none text-[#0A0A0A] tracking-tight">
            $0.20 &ndash; $3.00
          </span>
          <span className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[13px] text-[#57575E]">/ request</span>
        </div>
        <div className="border-t border-[#E7E7E3] pt-[14px] flex flex-col gap-[6px]">
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-['JetBrains_Mono',monospace] text-[#57575E] truncate min-w-0">Lite</span>
            <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap tabular-nums">$0.20</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-['JetBrains_Mono',monospace] text-[#57575E] truncate min-w-0">Standard</span>
            <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap tabular-nums">$1.00</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-['JetBrains_Mono',monospace] text-[#57575E] truncate min-w-0">Pro</span>
            <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap tabular-nums">$2.50</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-['JetBrains_Mono',monospace] text-[#57575E] truncate min-w-0">Pro-visual</span>
            <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap tabular-nums">$3.00</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function GroundedGenCard() {
  return (
    <a
      href="https://octen.ai/platform/grounded-generation"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white border border-[#E7E7E3] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-[16px] p-[18px] sm:p-[20px] flex flex-col justify-between transition-all duration-200 box-border h-full cursor-pointer select-none text-left"
    >
      <div className="absolute top-[12px] right-[12px] w-[26px] h-[26px] rounded-full bg-[#100F09] flex items-center justify-center transition-all duration-200 shrink-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10">
        <svg className="w-[11px] h-[11px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-[6px] mb-[8px] pr-[24px] flex-nowrap min-w-0">
          <span className="font-['DM_Sans',sans-serif] font-bold text-[16px] sm:text-[17px] xl:text-[18px] text-[#0A0A0A] tracking-tight whitespace-nowrap shrink-0">
            Grounded Generation
          </span>
          <span className="h-[19px] px-[5px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[10.5px] leading-none tracking-tight shrink-0 box-border bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62] whitespace-nowrap">
            Early Access
          </span>
        </div>
        <p className="font-['DM_Sans',sans-serif] text-[12px] leading-[18px] text-[#8B8B8B] mb-[14px]">
          Images and videos grounded in real-world references from live search.
        </p>
        <div className="flex items-baseline gap-[4px] sm:gap-[6px] mb-[18px] flex-wrap">
          <span className="font-['DM_Sans',sans-serif] font-medium text-[20px] sm:text-[22px] leading-none text-[#0A0A0A] tracking-tight">
            $0.25 &ndash; $1.00
          </span>
          <span className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[13px] text-[#57575E]">/ output</span>
        </div>
        <div className="border-t border-[#E7E7E3] pt-[14px] flex flex-col gap-[6px]">
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-['JetBrains_Mono',monospace] text-[#57575E] truncate min-w-0">Image</span>
            <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap tabular-nums">$0.25</span>
          </div>
          <div className="flex items-center justify-between gap-[8px] text-[13px] sm:text-[14px] min-w-0">
            <span className="font-['JetBrains_Mono',monospace] text-[#57575E] truncate min-w-0">Video</span>
            <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] text-[12px] sm:text-[13px] bg-[#F6F6F3] px-[8px] py-[2px] rounded-[4px] border border-[#E7E7E3] shrink-0 whitespace-nowrap tabular-nums">$1.00</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function ModelGatewayBox({ 
  bgClass = "bg-[#F6F6F3]", 
  borderClass = "border-[#E7E7E3]"
}: { 
  bgClass?: string; 
  borderClass?: string;
}) {
  return (
    <div className={`${bgClass} border ${borderClass} rounded-[16px] p-[20px] flex flex-col gap-[14px] w-full box-border`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[12px] w-full">
        <div className="flex items-center gap-[8px] flex-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] shrink-0 text-[#100F09]">
            <path d="M11 18H3V16H11V18ZM23 15H21V18H17V16H19V13H21V11H11V8H13V9H23V15ZM3 16H1V8H3V16ZM17 16H15V15H13V16H11V13H17V16ZM9 14H5V10H9V14ZM11 8H3V6H11V8Z" fill="currentColor"/>
          </svg>
          <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] text-[#0A0A0A] tracking-tight">Model Gateway</span>
          <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center gap-[4px] font-['JetBrains_Mono',monospace] font-bold text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#70FE7E] text-[#100F09] border border-[#70FE7E]">
            <svg className="w-[12px] h-[12px] shrink-0 text-[#100F09]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6984 11.6984C10.5849 12.8119 9.07472 13.4375 7.5 13.4375C5.92528 13.4375 4.41505 12.8119 3.30155 11.6984C2.18806 10.5849 1.5625 9.07472 1.5625 7.5C1.5625 5.92528 2.18806 4.41505 3.30155 3.30155C4.41505 2.18806 5.92528 1.5625 7.5 1.5625C9.07472 1.5625 10.5849 2.18806 11.6984 3.30155C12.8119 4.41505 13.4375 5.92528 13.4375 7.5C13.4375 9.07472 12.8119 10.5849 11.6984 11.6984Z" stroke="currentColor" strokeWidth="1.39286" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.625 9.02062C5.66487 9.48059 5.88364 9.90654 6.23426 10.2069C6.58488 10.5073 7.03937 10.6581 7.5 10.6269C9.0125 10.6269 9.375 9.75812 9.375 9.02062C9.375 8.28312 8.75 7.50188 7.5 7.50188C6.25 7.50188 5.625 7.00812 5.625 6.00187C5.63666 5.77038 5.69501 5.54364 5.79656 5.33529C5.89811 5.12693 6.04076 4.94127 6.21591 4.78947C6.39107 4.63766 6.59512 4.52286 6.81579 4.45195C7.03647 4.38105 7.2692 4.35551 7.5 4.37687C7.96095 4.35703 8.41201 4.51432 8.76067 4.81649C9.10932 5.11866 9.32913 5.54279 9.375 6.00187M7.5 11.5625V10.75M7.5 3.4375V4.37438" stroke="currentColor" strokeWidth="1.39286" strokeLinecap="round" strokeLinejoin="round" />
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
              View rebate details
            </a>
          </div>
        </div>
      </div>

      <div className="font-['DM_Sans',sans-serif] text-[14px] leading-[21px] text-[#57575E] flex flex-col gap-[2px]">
        <p className="m-0">
          One API for top-tier LLM and multimodal models, with Octen Search built in &mdash; powering Answer, Multimodal Chat, Deep Research, and Grounded Generation.
        </p>
        <p className="m-0">
          Get <strong className="font-bold text-[#0A0A0A]">15% of your Model Gateway spend back</strong>, credited automatically to your balance each month across all models.
        </p>
      </div>
    </div>
  );
}

// Reusable Top-to-Bottom Duotone Color Mesh Gradient Hover Glow for Plan B Shells
type ShellGlowVariant = "emerald" | "cyan" | "purple" | "amber";

function ShellHoverGlow({ variant = "emerald" }: { variant?: ShellGlowVariant }) {
  if (variant === "cyan") {
    return (
      <div className="absolute inset-0 pointer-events-none rounded-[16px] overflow-hidden opacity-0 group-hover/shell:opacity-100 transition-opacity duration-500 ease-out z-0">
        {/* Top: Electric Cyan */}
        <div className="absolute -top-[40%] left-[10%] right-[10%] h-[90%] bg-[radial-gradient(ellipse_at_top,_#38BDF8_0%,_#06B6D4_40%,_transparent_75%)] blur-[36px] opacity-90" />
        {/* Mid-Left: Sky Blue */}
        <div className="absolute -top-[15%] -left-[10%] w-[55%] h-[80%] bg-[radial-gradient(circle,_#7DD3FC_0%,_#38BDF8_50%,_transparent_70%)] blur-[40px] opacity-75" />
        {/* Bottom Shift: Royal Indigo / Azure Blue */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[65%] h-[85%] bg-[radial-gradient(circle,_#818CF8_0%,_#6366F1_50%,_transparent_70%)] blur-[40px] opacity-80" />
        {/* Continuous Duotone Linear Gradient: Cyan -> Azure -> Indigo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/50 via-[#60A5FA]/25 to-[#818CF8]/40" />
      </div>
    );
  }

  if (variant === "purple") {
    return (
      <div className="absolute inset-0 pointer-events-none rounded-[16px] overflow-hidden opacity-0 group-hover/shell:opacity-100 transition-opacity duration-500 ease-out z-0">
        {/* Top: Cosmic Violet */}
        <div className="absolute -top-[40%] left-[10%] right-[10%] h-[90%] bg-[radial-gradient(ellipse_at_top,_#C084FC_0%,_#9333EA_40%,_transparent_75%)] blur-[36px] opacity-90" />
        {/* Mid-Left: Soft Lavender */}
        <div className="absolute -top-[15%] -left-[10%] w-[55%] h-[80%] bg-[radial-gradient(circle,_#E9D5FF_0%,_#C084FC_50%,_transparent_70%)] blur-[40px] opacity-75" />
        {/* Bottom Shift: Rose Violet / Sunset Magenta */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[65%] h-[85%] bg-[radial-gradient(circle,_#F472B6_0%,_#FB7185_50%,_transparent_70%)] blur-[40px] opacity-80" />
        {/* Continuous Duotone Linear Gradient: Violet -> Orchid -> Rose Pink */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#C084FC]/50 via-[#E879F9]/25 to-[#FB7185]/40" />
      </div>
    );
  }

  if (variant === "amber") {
    return (
      <div className="absolute inset-0 pointer-events-none rounded-[16px] overflow-hidden opacity-0 group-hover/shell:opacity-100 transition-opacity duration-500 ease-out z-0">
        {/* Top: Warm Golden Amber */}
        <div className="absolute -top-[40%] left-[10%] right-[10%] h-[90%] bg-[radial-gradient(ellipse_at_top,_#FBBF24_0%,_#F59E0B_40%,_transparent_75%)] blur-[36px] opacity-90" />
        {/* Mid-Left: Sunlit Gold */}
        <div className="absolute -top-[15%] -left-[10%] w-[55%] h-[80%] bg-[radial-gradient(circle,_#FDE68A_0%,_#FBBF24_50%,_transparent_70%)] blur-[40px] opacity-75" />
        {/* Bottom Shift: Tangerine Coral / Flame Orange */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[65%] h-[85%] bg-[radial-gradient(circle,_#FB923C_0%,_#EA580C_50%,_transparent_70%)] blur-[40px] opacity-80" />
        {/* Continuous Duotone Linear Gradient: Amber -> Tangerine -> Coral Peach */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBBF24]/50 via-[#FB923C]/25 to-[#EA580C]/40" />
      </div>
    );
  }

  // Default: Emerald Green -> Spring Aqua Teal
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[16px] overflow-hidden opacity-0 group-hover/shell:opacity-100 transition-opacity duration-500 ease-out z-0">
      {/* Top: Emerald Neon */}
      <div className="absolute -top-[40%] left-[10%] right-[10%] h-[90%] bg-[radial-gradient(ellipse_at_top,_#70FE7E_0%,_#00E599_40%,_transparent_75%)] blur-[36px] opacity-90" />
      {/* Mid-Left: Fresh Lime */}
      <div className="absolute -top-[15%] -left-[10%] w-[55%] h-[80%] bg-[radial-gradient(circle,_#86EFAC_0%,_#70FE7E_50%,_transparent_70%)] blur-[40px] opacity-75" />
      {/* Bottom Shift: Spring Mint / Aqua Teal */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[65%] h-[85%] bg-[radial-gradient(circle,_#2DD4BF_0%,_#059669_50%,_transparent_70%)] blur-[40px] opacity-80" />
      {/* Continuous Duotone Linear Gradient: Emerald -> Mint -> Aqua Teal */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#70FE7E]/50 via-[#34D399]/25 to-[#2DD4BF]/40" />
    </div>
  );
}

// --- PLAN C: Unified Rate Matrix Table Component (Without outer header banner) ---

function PlanCTable() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tableContainerRef.current) {
        const rect = tableContainerRef.current.getBoundingClientRect();
        // Top navbar sticky position is at 58px. When the table container top passes 58px, it is stuck
        setIsHeaderSticky(rect.top <= 58);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col gap-[16px]">
      {/* ========================================================================= */}
      {/* MOBILE VIEW (block md:hidden): Native-styled responsive rate matrix cards */}
      {/* ========================================================================= */}
      <div className="block md:hidden w-full flex flex-col gap-[16px]">
        {/* Category 1: Search */}
        <div className="bg-white rounded-[16px] border border-[#E2E2DE] overflow-hidden shadow-xs">
          <div className="bg-[#F8F8F5] px-[16px] py-[12px] border-b border-[#E2E2DE] flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <SearchCategoryIcon className="w-[16px] h-[16px] text-[#100F09]" />
              <span className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#100F09]">Search</span>
            </div>
            <span className="text-[14px] text-[#8B8B8B]">Real-time live web</span>
          </div>

          <div className="divide-y divide-[#EAEAE5] flex flex-col">
            {/* Item 1: Web Search API */}
            <div className="p-[16px] flex flex-col gap-[10px]">
              <div className="flex items-start justify-between gap-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-[6px] flex-wrap">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Web Search API</span>
                    <span className="h-[18px] px-[5px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-bold text-[11px] bg-[#70FE7E] text-[#100F09] border border-[#70FE7E]">
                      80% Off
                    </span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">
                    LLM-native search with ranked results, highlights, and optional full content
                  </span>
                </div>
                <a
                  href="https://octen.ai/platform/web-search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#100F09] active:bg-[#2A2A28] text-white text-[13px] font-medium rounded-full shrink-0 whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]"
                >
                  Get started
                </a>
              </div>
              <div className="flex flex-col gap-1 bg-[#F8F8F5] p-[10px] rounded-[10px] border border-[#EAEAE5]">
                <div className="flex items-baseline gap-[6px] flex-wrap">
                  <span className="font-bold text-[18px] text-[#0A0A0A]">$1</span>
                  <span className="text-[14px] text-[#9C9CA4] line-through">$5</span>
                  <span className="text-[14px] text-[#8B8B8B]">/ 1k calls</span>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-[#57575E]">
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09]">$0.5</span>
                  <span className="text-[#8B8B8B]">/ 1k results</span>
                  <span className="text-[#8B8B8B]">(full content)</span>
                </div>
              </div>
              <div className="text-[13px] text-[#039855] font-medium leading-[20px]">
                10 full-content results free per call
              </div>
            </div>

            {/* Item 2: Broad Search API */}
            <div className="p-[16px] flex flex-col gap-[10px]">
              <div className="flex items-start justify-between gap-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-[6px] flex-wrap">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Broad Search API</span>
                    <span className="h-[18px] px-[5px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-bold text-[11px] bg-[#70FE7E] text-[#100F09] border border-[#70FE7E]">
                      80% Off
                    </span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">
                    Auto-expands one query into many parallel sub-queries
                  </span>
                </div>
                <a
                  href="https://octen.ai/platform/broad-search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#100F09] active:bg-[#2A2A28] text-white text-[13px] font-medium rounded-full shrink-0 whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]"
                >
                  Get started
                </a>
              </div>
              <div className="flex flex-col gap-1 bg-[#F8F8F5] p-[10px] rounded-[10px] border border-[#EAEAE5]">
                <div className="flex items-baseline gap-[6px] flex-wrap">
                  <span className="font-bold text-[18px] text-[#0A0A0A]">$1</span>
                  <span className="text-[14px] text-[#9C9CA4] line-through">$5</span>
                  <span className="text-[14px] text-[#8B8B8B]">/ 1k sub-queries</span>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-[#57575E]">
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09]">$0.5</span>
                  <span className="text-[#8B8B8B]">/ 1k results</span>
                  <span className="text-[#8B8B8B]">(full content)</span>
                </div>
              </div>
              <div className="text-[13px] text-[#039855] font-medium leading-[20px]">
                10 full-content results free per sub-query
              </div>
            </div>

            {/* Item 3: Image Search API */}
            <div className="p-[16px] flex flex-col gap-[10px]">
              <div className="flex items-start justify-between gap-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-[6px] flex-wrap">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Image Search API</span>
                    <span className="h-[18px] px-[5px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62]">
                      Early Access
                    </span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">
                    Open-web image search by text or reference image
                  </span>
                </div>
                <a
                  href="https://octen.ai/platform/image-search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#100F09] active:bg-[#2A2A28] text-white text-[13px] font-medium rounded-full shrink-0 whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]"
                >
                  Get started
                </a>
              </div>
              <div className="flex items-baseline gap-[6px] bg-[#F8F8F5] p-[10px] rounded-[10px] border border-[#EAEAE5]">
                <span className="font-bold text-[18px] text-[#0A0A0A]">$5</span>
                <span className="text-[14px] text-[#8B8B8B]">/ 1k calls</span>
              </div>
            </div>

            {/* Item 4: Video Search API */}
            <div className="p-[16px] flex flex-col gap-[10px]">
              <div className="flex items-start justify-between gap-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-[6px] flex-wrap">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Video Search API</span>
                    <span className="h-[18px] px-[5px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62]">
                      Early Access
                    </span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">
                    Video retrieval across the open web
                  </span>
                </div>
                <a
                  href="https://octen.ai/platform/video-search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#100F09] active:bg-[#2A2A28] text-white text-[13px] font-medium rounded-full shrink-0 whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]"
                >
                  Get started
                </a>
              </div>
              <div className="flex items-baseline gap-[6px] bg-[#F8F8F5] p-[10px] rounded-[10px] border border-[#EAEAE5]">
                <span className="font-bold text-[18px] text-[#0A0A0A]">$5</span>
                <span className="text-[14px] text-[#8B8B8B]">/ 1k calls</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category 2: Extract */}
        <div className="bg-white rounded-[16px] border border-[#E2E2DE] overflow-hidden shadow-xs">
          <div className="bg-[#F8F8F5] px-[16px] py-[12px] border-b border-[#E2E2DE] flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <ExtractCategoryIcon className="w-[16px] h-[16px] text-[#100F09]" />
              <span className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#100F09]">Extract</span>
            </div>
            <span className="text-[14px] text-[#8B8B8B]">Clean structured URL content</span>
          </div>

          <div className="p-[16px] flex flex-col gap-[10px]">
            <div className="flex items-start justify-between gap-[10px]">
              <div className="flex flex-col gap-[2px]">
                <span className="font-bold text-[16px] text-[#0A0A0A]">Extract API</span>
                <span className="text-[12px] text-[#8B8B8B] leading-[18px]">
                  Clean Markdown, intent-focused highlights, and page classification
                </span>
              </div>
              <a
                href="https://octen.ai/platform/extract"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#100F09] active:bg-[#2A2A28] text-white text-[13px] font-medium rounded-full shrink-0 whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]"
              >
                Get started
              </a>
            </div>
            <div className="flex items-baseline gap-[6px] bg-[#F8F8F5] p-[10px] rounded-[10px] border border-[#EAEAE5]">
              <span className="font-bold text-[18px] text-[#0A0A0A]">$1</span>
              <span className="text-[14px] text-[#8B8B8B]">/ 1k URLs</span>
            </div>
            <div className="text-[13px] text-[#039855] font-medium leading-[20px]">
              Failed URLs are always free
            </div>
          </div>
        </div>

        {/* Category 3: Embedding */}
        <div className="bg-white rounded-[16px] border border-[#E2E2DE] overflow-hidden shadow-xs">
          <div className="bg-[#F8F8F5] px-[16px] py-[12px] border-b border-[#E2E2DE] flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <EmbeddingCategoryIcon className="w-[16px] h-[16px] text-[#100F09]" />
              <span className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#100F09]">Embedding</span>
            </div>
            <span className="text-[14px] text-[#8B8B8B]">Text &amp; multimodal</span>
          </div>

          <div className="divide-y divide-[#EAEAE5] flex flex-col">
            {/* Embedding API */}
            <div className="p-[16px] flex flex-col gap-[10px]">
              <div className="flex items-start justify-between gap-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-[6px] flex-wrap">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Embedding API</span>
                    <span className="h-[18px] px-[5px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] bg-[#FFF6DE] border border-[#EFC768] text-[#B4690E]">
                      SOTA on RTEB
                    </span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">
                    Text embeddings for retrieval, similarity, and ranking
                  </span>
                </div>
                <a
                  href="https://octen.ai/platform/embedding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#100F09] active:bg-[#2A2A28] text-white text-[13px] font-medium rounded-full shrink-0 whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]"
                >
                  Get started
                </a>
              </div>
              <div className="flex items-baseline gap-[6px] bg-[#F8F8F5] p-[10px] rounded-[10px] border border-[#EAEAE5]">
                <span className="font-bold text-[18px] text-[#0A0A0A]">$0.01 – $0.07</span>
                <span className="text-[14px] text-[#8B8B8B]">/ 1M tokens</span>
              </div>
              <div className="bg-[#F8F8F5] p-[12px] rounded-[10px] border border-[#EAEAE5] flex flex-col gap-[8px] text-[13px]">
                <div className="flex items-baseline justify-between w-full">
                  <span className="font-['JetBrains_Mono',monospace] text-[#57575E]">embedding-0.6b</span>
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums">$0.01</span>
                </div>
                <div className="flex items-baseline justify-between w-full">
                  <span className="font-['JetBrains_Mono',monospace] text-[#57575E]">embedding-4b</span>
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums">$0.04</span>
                </div>
                <div className="flex items-baseline justify-between w-full">
                  <span className="font-['JetBrains_Mono',monospace] text-[#57575E]">embedding-8b</span>
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums">$0.07</span>
                </div>
              </div>
            </div>

            {/* VL Embedding API */}
            <div className="p-[16px] flex flex-col gap-[10px]">
              <div className="flex items-start justify-between gap-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-[6px] flex-wrap">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">VL Embedding API</span>
                    <span className="h-[18px] px-[5px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] bg-[#FFF6DE] border border-[#EFC768] text-[#B4690E]">
                      SOTA on MMEB-v2
                    </span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">
                    One vector space across text, images, video, and documents
                  </span>
                </div>
                <a
                  href="https://octen.ai/platform/embedding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#100F09] active:bg-[#2A2A28] text-white text-[13px] font-medium rounded-full shrink-0 whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]"
                >
                  Get started
                </a>
              </div>
              <div className="flex flex-col gap-1 bg-[#F8F8F5] p-[10px] rounded-[10px] border border-[#EAEAE5] text-[14px]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[#8B8B8B] min-w-[44px]">Text:</span>
                  <span className="font-bold text-[#0A0A0A] tabular-nums">$0.05 – $0.10</span>
                  <span className="text-[#8B8B8B] text-[13px]">/ 1M tokens</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[#8B8B8B] min-w-[44px]">Visual:</span>
                  <span className="font-bold text-[#0A0A0A] tabular-nums">$0.12 – $0.25</span>
                  <span className="text-[#8B8B8B] text-[13px]">/ 1M tokens</span>
                </div>
              </div>
              <div className="bg-[#F8F8F5] p-[12px] rounded-[10px] border border-[#EAEAE5] flex flex-col gap-[8px] text-[13px]">
                <div className="flex items-baseline justify-between w-full">
                  <span className="font-['JetBrains_Mono',monospace] text-[#57575E]">vl-embedding</span>
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums">$0.05 / $0.12</span>
                </div>
                <div className="flex items-baseline justify-between w-full">
                  <span className="font-['JetBrains_Mono',monospace] text-[#57575E]">vl-embedding-large</span>
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums">$0.10 / $0.25</span>
                </div>
                <div className="flex justify-end w-full">
                  <span className="text-[11px] text-[#9C9CA4] font-['DM_Sans',sans-serif] text-right">text / visual</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category 4: Application */}
        <div className="bg-white rounded-[16px] border border-[#E2E2DE] overflow-hidden shadow-xs">
          <div className="bg-[#F8F8F5] px-[16px] py-[12px] border-b border-[#E2E2DE] flex items-center justify-between gap-2">
            <div className="flex items-center gap-[8px]">
              <ApplicationsCategoryIcon className="w-[16px] h-[16px] text-[#100F09]" />
              <span className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#100F09]">Application</span>
            </div>
            <span className="inline-flex items-center px-[6px] py-[1px] rounded bg-white/50 text-[#100F09] font-medium border border-[#DCDCD6] text-[11px] font-['JetBrains_Mono',monospace]">
              Search API + Model Gateway
            </span>
          </div>

          <div className="divide-y divide-[#EAEAE5] flex flex-col">
            {/* Answer */}
            <div className="p-[16px] flex flex-col gap-[10px]">
              <div className="flex items-start justify-between gap-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">Answer</span>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">
                    Grounded answer synthesis with inline citations from live web
                  </span>
                </div>
                <a
                  href="https://octen.ai/platform/answer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#100F09] active:bg-[#2A2A28] text-white text-[13px] font-medium rounded-full shrink-0 whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]"
                >
                  Get started
                </a>
              </div>
              <div className="bg-[#F8F8F5] p-[10px] rounded-[10px] border border-[#EAEAE5]">
                <span className="font-medium text-[14px] text-[#0A0A0A]">Search fees + Model rates</span>
              </div>
            </div>

            {/* Multimodal Chat */}
            <div className="p-[16px] flex flex-col gap-[10px]">
              <div className="flex items-start justify-between gap-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-[6px] flex-wrap">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Multimodal Chat</span>
                    <span className="h-[18px] px-[5px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62]">
                      Early Access
                    </span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">
                    Analyze, search, and chat across text, images, videos, and complex documents
                  </span>
                </div>
                <a
                  href="https://octen.ai/platform/multimodal-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#100F09] active:bg-[#2A2A28] text-white text-[13px] font-medium rounded-full shrink-0 whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]"
                >
                  Get started
                </a>
              </div>
              <div className="bg-[#F8F8F5] p-[10px] rounded-[10px] border border-[#EAEAE5]">
                <span className="font-medium text-[14px] text-[#0A0A0A]">Search fees + Model rates</span>
              </div>
            </div>

            {/* Deep Research */}
            <div className="p-[16px] flex flex-col gap-[10px]">
              <div className="flex items-start justify-between gap-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">Deep Research</span>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">
                    Source-backed research across thousands of pages and documents
                  </span>
                </div>
                <a
                  href="https://octen.ai/platform/deep-research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#100F09] active:bg-[#2A2A28] text-white text-[13px] font-medium rounded-full shrink-0 whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]"
                >
                  Get started
                </a>
              </div>
              <div className="flex items-baseline gap-[6px] bg-[#F8F8F5] p-[10px] rounded-[10px] border border-[#EAEAE5]">
                <span className="font-bold text-[18px] text-[#0A0A0A]">$0.20 – $3.00</span>
                <span className="text-[14px] text-[#8B8B8B]">/ request</span>
              </div>
              <div className="bg-[#F8F8F5] p-[12px] rounded-[10px] border border-[#EAEAE5] flex flex-col gap-[8px] text-[13px]">
                <div className="flex items-baseline justify-between w-full">
                  <span className="font-['JetBrains_Mono',monospace] text-[#57575E]">Lite</span>
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums">$0.20</span>
                </div>
                <div className="flex items-baseline justify-between w-full">
                  <span className="font-['JetBrains_Mono',monospace] text-[#57575E]">Standard</span>
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums">$1.00</span>
                </div>
                <div className="flex items-baseline justify-between w-full">
                  <span className="font-['JetBrains_Mono',monospace] text-[#57575E]">Pro</span>
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums">$2.50</span>
                </div>
                <div className="flex items-baseline justify-between w-full">
                  <span className="font-['JetBrains_Mono',monospace] text-[#57575E]">Pro-visual</span>
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums">$3.00</span>
                </div>
              </div>
            </div>

            {/* Grounded Generation */}
            <div className="p-[16px] flex flex-col gap-[10px]">
              <div className="flex items-start justify-between gap-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-[6px] flex-wrap">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Grounded Generation</span>
                    <span className="h-[18px] px-[5px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62]">
                      Early Access
                    </span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">
                    Images and videos grounded in real-world references from live search
                  </span>
                </div>
                <a
                  href="https://octen.ai/platform/grounded-generation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#100F09] active:bg-[#2A2A28] text-white text-[13px] font-medium rounded-full shrink-0 whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]"
                >
                  Get started
                </a>
              </div>
              <div className="flex items-baseline gap-[6px] bg-[#F8F8F5] p-[10px] rounded-[10px] border border-[#EAEAE5]">
                <span className="font-bold text-[18px] text-[#0A0A0A]">$0.25 – $1.00</span>
                <span className="text-[14px] text-[#8B8B8B]">/ output</span>
              </div>
              <div className="bg-[#F8F8F5] p-[12px] rounded-[10px] border border-[#EAEAE5] flex flex-col gap-[8px] text-[13px]">
                <div className="flex items-baseline justify-between w-full">
                  <span className="font-['JetBrains_Mono',monospace] text-[#57575E]">Image</span>
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums">$0.25</span>
                </div>
                <div className="flex items-baseline justify-between w-full">
                  <span className="font-['JetBrains_Mono',monospace] text-[#57575E]">Video</span>
                  <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums">$1.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW (hidden md:block): 4-column Unified Rate Matrix Table        */}
      {/* ========================================================================= */}
      <div className="hidden md:block w-full bg-white rounded-[16px] sm:rounded-[20px] border border-[#E2E2DE] relative" ref={tableContainerRef}>
        <table className="w-full text-left border-separate border-spacing-0">
          <thead className="sticky top-[58px] z-30">
            <tr className="text-[#8B8B8B] font-['DM_Sans',sans-serif] text-[13px] font-bold tracking-wider uppercase select-none">
              <th
                className={`sticky top-[58px] z-30 py-3.5 px-6 font-semibold bg-white border-b border-[#E2E2DE] ${
                  isHeaderSticky ? "rounded-tl-none" : "rounded-tl-[15px] sm:rounded-tl-[19px]"
                }`}
                style={{ width: "28%" }}
              >
                Endpoint
              </th>
              <th className="sticky top-[58px] z-30 py-3.5 px-6 font-semibold bg-white border-b border-[#E2E2DE]" style={{ width: "28%" }}>
                Unit price (USD)
              </th>
              <th className="sticky top-[58px] z-30 py-3.5 px-6 font-semibold bg-white border-b border-[#E2E2DE]" style={{ width: "32%" }}>
                PRICING DETAILS
              </th>
              <th
                className={`sticky top-[58px] z-30 py-3.5 px-6 font-semibold text-right bg-white border-b border-[#E2E2DE] ${
                  isHeaderSticky ? "rounded-tr-none" : "rounded-tr-[15px] sm:rounded-tr-[19px]"
                }`}
                style={{ width: "12%" }}
              >
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAEAE5] text-[#100F09] font-['DM_Sans',sans-serif] text-[14px]">
            {/* --- Category: Search --- */}
            <tr className="bg-[#F8F8F5] select-none">
              <td colSpan={4} className="sticky top-[106px] z-20 py-3 px-6 bg-[#F8F8F5] border-b border-[#E2E2DE]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <SearchCategoryIcon className="w-[16px] h-[16px] text-[#100F09]" />
                    <span className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#100F09] tracking-tight">Search</span>
                  </div>
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#8B8B8B] hidden sm:inline">Real-time retrieval from live web</span>
                </div>
              </td>
            </tr>

            {/* Web Search API */}
            <tr className="hover:bg-[#F8F8F5] transition-colors group/row">
              <td className="py-4 px-6">
                <div className="flex flex-col gap-0.5">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">Web Search API</span>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">LLM-native search with ranked results, highlights, and optional full content</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 flex-nowrap whitespace-nowrap">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">$1</span>
                    <span className="text-[14px] text-[#9C9CA4] line-through">$5</span>
                    <span className="text-[14px] text-[#8B8B8B]">/ 1k calls</span>
                    <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-bold text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#70FE7E] text-[#100F09] border border-[#70FE7E]">80% Off</span>
                  </div>
                  <div className="flex items-center gap-1 text-[13px] text-[#57575E]">
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09]">$0.5</span>
                    <span className="text-[#8B8B8B]">/ 1k results</span>
                    <span className="text-[#8B8B8B] text-[12px]">(full content)</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="text-[14px] text-[#039855] font-medium leading-[20px]">
                  10 full-content results free per call
                </div>
              </td>
              <td className="py-4 px-6 text-right">
                <a href="https://octen.ai/platform/web-search" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#100F09] hover:bg-[#2A2A28] active:scale-95 text-white text-[13px] font-medium rounded-full transition-all whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]">Get started</a>
              </td>
            </tr>

            {/* Broad Search API */}
            <tr className="hover:bg-[#F8F8F5] transition-colors group/row">
              <td className="py-4 px-6">
                <div className="flex flex-col gap-0.5">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">Broad Search API</span>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">Auto-expands one query into many parallel sub-queries</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 flex-nowrap whitespace-nowrap">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">$1</span>
                    <span className="text-[14px] text-[#9C9CA4] line-through">$5</span>
                    <span className="text-[14px] text-[#8B8B8B]">/ 1k sub-queries</span>
                    <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-bold text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#70FE7E] text-[#100F09] border border-[#70FE7E]">80% Off</span>
                  </div>
                  <div className="flex items-center gap-1 text-[13px] text-[#57575E]">
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09]">$0.5</span>
                    <span className="text-[#8B8B8B]">/ 1k results</span>
                    <span className="text-[#8B8B8B] text-[12px]">(full content)</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="text-[14px] text-[#039855] font-medium leading-[20px]">
                  10 full-content results free per sub-query
                </div>
              </td>
              <td className="py-4 px-6 text-right">
                <a href="https://octen.ai/platform/broad-search" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#100F09] hover:bg-[#2A2A28] active:scale-95 text-white text-[13px] font-medium rounded-full transition-all whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]">Get started</a>
              </td>
            </tr>

            {/* Image Search API */}
            <tr className="hover:bg-[#F8F8F5] transition-colors group/row">
              <td className="py-4 px-6">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Image Search API</span>
                    <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62]">Early Access</span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">Open-web image search by text or reference image</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-1 flex-nowrap whitespace-nowrap">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">$5</span>
                  <span className="text-[14px] text-[#8B8B8B]">/ 1k calls</span>
                </div>
              </td>
              <td className="py-4 px-6 text-[14px] text-[#9C9CA4]">—</td>
              <td className="py-4 px-6 text-right">
                <a href="https://octen.ai/platform/image-search" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#100F09] hover:bg-[#2A2A28] active:scale-95 text-white text-[13px] font-medium rounded-full transition-all whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]">Get started</a>
              </td>
            </tr>

            {/* Video Search API */}
            <tr className="hover:bg-[#F8F8F5] transition-colors group/row">
              <td className="py-4 px-6">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Video Search API</span>
                    <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62]">Early Access</span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">Video retrieval across the open web</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-1 flex-nowrap whitespace-nowrap">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">$5</span>
                  <span className="text-[14px] text-[#8B8B8B]">/ 1k calls</span>
                </div>
              </td>
              <td className="py-4 px-6 text-[14px] text-[#9C9CA4]">—</td>
              <td className="py-4 px-6 text-right">
                <a href="https://octen.ai/platform/video-search" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#100F09] hover:bg-[#2A2A28] active:scale-95 text-white text-[13px] font-medium rounded-full transition-all whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]">Get started</a>
              </td>
            </tr>

            {/* --- Category: Extract --- */}
            <tr className="bg-[#F8F8F5] select-none">
              <td colSpan={4} className="sticky top-[106px] z-20 py-3 px-6 bg-[#F8F8F5] border-y border-[#E2E2DE]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ExtractCategoryIcon className="w-[16px] h-[16px] text-[#100F09]" />
                    <span className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#100F09] tracking-tight">Extract</span>
                  </div>
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#8B8B8B] hidden sm:inline">Clean structured content from any URL</span>
                </div>
              </td>
            </tr>

            {/* Extract API */}
            <tr className="hover:bg-[#F8F8F5] transition-colors group/row">
              <td className="py-4 px-6">
                <div className="flex flex-col gap-0.5">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">Extract API</span>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">Clean Markdown, intent-focused highlights, and page classification</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-1 flex-nowrap whitespace-nowrap">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">$1</span>
                  <span className="text-[14px] text-[#8B8B8B]">/ 1k URLs</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="text-[14px] text-[#039855] font-medium leading-[20px]">Failed URLs are always free</div>
              </td>
              <td className="py-4 px-6 text-right">
                <a href="https://octen.ai/platform/extract" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#100F09] hover:bg-[#2A2A28] active:scale-95 text-white text-[13px] font-medium rounded-full transition-all whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]">Get started</a>
              </td>
            </tr>

            {/* --- Category: Embedding --- */}
            <tr className="bg-[#F8F8F5] select-none">
              <td colSpan={4} className="sticky top-[106px] z-20 py-3 px-6 bg-[#F8F8F5] border-y border-[#E2E2DE]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <EmbeddingCategoryIcon className="w-[16px] h-[16px] text-[#100F09]" />
                    <span className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#100F09] tracking-tight">Embedding</span>
                  </div>
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#8B8B8B] hidden sm:inline">Top-ranked embedding models for text and multimodal retrieval</span>
                </div>
              </td>
            </tr>

            {/* Embedding API */}
            <tr className="hover:bg-[#F8F8F5] transition-colors group/row">
              <td className="py-4 px-6">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Embedding API</span>
                    <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#FFF6DE] border border-[#EFC768] text-[#B4690E]">SOTA on RTEB</span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">Text embeddings for retrieval, similarity, and ranking</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-1 flex-nowrap whitespace-nowrap">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">$0.01 – $0.07</span>
                  <span className="text-[14px] text-[#8B8B8B]">/ 1M tokens</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="w-full max-w-[290px] flex flex-col gap-1.5 text-[13px] sm:text-[14px]">
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-['JetBrains_Mono',monospace] text-[#57575E] whitespace-nowrap">embedding-0.6b</span>
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums whitespace-nowrap">$0.01</span>
                  </div>
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-['JetBrains_Mono',monospace] text-[#57575E] whitespace-nowrap">embedding-4b</span>
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums whitespace-nowrap">$0.04</span>
                  </div>
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-['JetBrains_Mono',monospace] text-[#57575E] whitespace-nowrap">embedding-8b</span>
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums whitespace-nowrap">$0.07</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-right">
                <a href="https://octen.ai/platform/embedding" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#100F09] hover:bg-[#2A2A28] active:scale-95 text-white text-[13px] font-medium rounded-full transition-all whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]">Get started</a>
              </td>
            </tr>

            {/* VL Embedding API */}
            <tr className="hover:bg-[#F8F8F5] transition-colors group/row">
              <td className="py-4 px-6">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">VL Embedding API</span>
                    <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#FFF6DE] border border-[#EFC768] text-[#B4690E]">SOTA on MMEB-v2</span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">One vector space across text, images, video, and documents</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex flex-col gap-1 text-[14px]">
                  <div className="flex items-baseline gap-1.5 flex-nowrap whitespace-nowrap">
                    <span className="text-[#8B8B8B] min-w-[44px]">Text:</span>
                    <span className="font-bold text-[16px] text-[#0A0A0A] tabular-nums">$0.05 – $0.10</span>
                    <span className="text-[#8B8B8B]">/ 1M tokens</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 flex-nowrap whitespace-nowrap">
                    <span className="text-[#8B8B8B] min-w-[44px]">Visual:</span>
                    <span className="font-bold text-[16px] text-[#0A0A0A] tabular-nums">$0.12 – $0.25</span>
                    <span className="text-[#8B8B8B]">/ 1M tokens</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="w-full max-w-[290px] flex flex-col gap-1.5 text-[13px] sm:text-[14px]">
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-['JetBrains_Mono',monospace] text-[#57575E] whitespace-nowrap">vl-embedding</span>
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums whitespace-nowrap">$0.05 / $0.12</span>
                  </div>
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-['JetBrains_Mono',monospace] text-[#57575E] whitespace-nowrap">vl-embedding-large</span>
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums whitespace-nowrap">$0.10 / $0.25</span>
                  </div>
                  <div className="flex justify-end w-full">
                    <span className="text-[11px] text-[#9C9CA4] font-['DM_Sans',sans-serif] text-right whitespace-nowrap">text / visual</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-right">
                <a href="https://octen.ai/platform/embedding" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#100F09] hover:bg-[#2A2A28] active:scale-95 text-white text-[13px] font-medium rounded-full transition-all whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]">Get started</a>
              </td>
            </tr>

            {/* --- Category: Application --- */}
            <tr className="bg-[#F8F8F5] select-none">
              <td colSpan={4} className="sticky top-[106px] z-20 py-3 px-6 bg-[#F8F8F5] border-y border-[#E2E2DE]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ApplicationsCategoryIcon className="w-[16px] h-[16px] text-[#100F09]" />
                    <span className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#100F09] tracking-tight">Application</span>
                  </div>
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#8B8B8B] hidden sm:inline-flex items-center gap-[4px]">
                    <span>Complete workflows built on the APIs above. Billed per outcome via</span>
                    <span className="inline-flex items-center px-[6px] py-[1px] rounded bg-white/50 text-[#100F09] font-medium border border-[#DCDCD6] text-[12px] font-['JetBrains_Mono',monospace]">Search API + Model Gateway</span>
                  </span>
                </div>
              </td>
            </tr>

            {/* Answer */}
            <tr className="hover:bg-[#F8F8F5] transition-colors group/row">
              <td className="py-4 px-6">
                <div className="flex flex-col gap-0.5">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">Answer</span>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">Grounded answer synthesis with inline citations from live web</span>
                </div>
              </td>
              <td className="py-4 px-6"><div className="text-[14px] text-[#0A0A0A] font-medium whitespace-nowrap">Search fees + Model rates</div></td>
              <td className="py-4 px-6 text-[14px] text-[#9C9CA4]">—</td>
              <td className="py-4 px-6 text-right">
                <a href="https://octen.ai/platform/answer" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#100F09] hover:bg-[#2A2A28] active:scale-95 text-white text-[13px] font-medium rounded-full transition-all whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]">Get started</a>
              </td>
            </tr>

            {/* Multimodal Chat */}
            <tr className="hover:bg-[#F8F8F5] transition-colors group/row">
              <td className="py-4 px-6">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Multimodal Chat</span>
                    <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62]">Early Access</span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">Analyze, search, and chat across text, images, videos, and complex documents</span>
                </div>
              </td>
              <td className="py-4 px-6"><div className="text-[14px] text-[#0A0A0A] font-medium whitespace-nowrap">Search fees + Model rates</div></td>
              <td className="py-4 px-6 text-[14px] text-[#9C9CA4]">—</td>
              <td className="py-4 px-6 text-right">
                <a href="https://octen.ai/platform/multimodal-chat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#100F09] hover:bg-[#2A2A28] active:scale-95 text-white text-[13px] font-medium rounded-full transition-all whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]">Get started</a>
              </td>
            </tr>

            {/* Deep Research */}
            <tr className="hover:bg-[#F8F8F5] transition-colors group/row">
              <td className="py-4 px-6">
                <div className="flex flex-col gap-0.5">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">Deep Research</span>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">Source-backed research across thousands of pages and documents</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-1 flex-nowrap whitespace-nowrap">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">$0.20 – $3.00</span>
                  <span className="text-[14px] text-[#8B8B8B]">/ request</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="w-full max-w-[280px] flex flex-col gap-1.5 text-[13px] sm:text-[14px]">
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-['JetBrains_Mono',monospace] text-[#57575E] whitespace-nowrap">Lite</span>
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums whitespace-nowrap">$0.20</span>
                  </div>
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-['JetBrains_Mono',monospace] text-[#57575E] whitespace-nowrap">Standard</span>
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums whitespace-nowrap">$1.00</span>
                  </div>
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-['JetBrains_Mono',monospace] text-[#57575E] whitespace-nowrap">Pro</span>
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums whitespace-nowrap">$2.50</span>
                  </div>
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-['JetBrains_Mono',monospace] text-[#57575E] whitespace-nowrap">Pro-visual</span>
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums whitespace-nowrap">$3.00</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-right">
                <a href="https://octen.ai/platform/deep-research" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#100F09] hover:bg-[#2A2A28] active:scale-95 text-white text-[13px] font-medium rounded-full transition-all whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]">Get started</a>
              </td>
            </tr>

            {/* Grounded Generation */}
            <tr className="hover:bg-[#F8F8F5] transition-colors group/row">
              <td className="py-4 px-6 rounded-bl-[15px] sm:rounded-bl-[19px]">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[16px] text-[#0A0A0A]">Grounded Generation</span>
                    <span className="h-[20px] px-[6px] rounded inline-flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[11px] leading-none tracking-tight shrink-0 box-border bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62]">Early Access</span>
                  </div>
                  <span className="text-[12px] text-[#8B8B8B] leading-[18px]">Images and videos grounded in real-world references from live search</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-1 flex-nowrap whitespace-nowrap">
                  <span className="font-bold text-[16px] text-[#0A0A0A]">$0.25 – $1.00</span>
                  <span className="text-[14px] text-[#8B8B8B]">/ output</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="w-full max-w-[280px] flex flex-col gap-1.5 text-[13px] sm:text-[14px]">
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-['JetBrains_Mono',monospace] text-[#57575E] whitespace-nowrap">Image</span>
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums whitespace-nowrap">$0.25</span>
                  </div>
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-['JetBrains_Mono',monospace] text-[#57575E] whitespace-nowrap">Video</span>
                    <span className="font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums whitespace-nowrap">$1.00</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-right rounded-br-[15px] sm:rounded-br-[19px]">
                <a href="https://octen.ai/platform/grounded-generation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#100F09] hover:bg-[#2A2A28] active:scale-95 text-white text-[13px] font-medium rounded-full transition-all whitespace-nowrap shadow-xs font-['DM_Sans',sans-serif]">Get started</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ModelGatewayBox />
    </div>
  );
}

export default function ApiExplorer() {
  const [layoutPlan, setLayoutPlan] = useState<"planA" | "planB" | "planC">("planC");
  const [isWidgetCollapsed, setIsWidgetCollapsed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("search");

  useEffect(() => {
    if (layoutPlan !== "planA") return;

    const handleScroll = () => {
      if (stickyBarRef.current) {
        const rect = stickyBarRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 60);
      }

      if (isClickScrollingRef.current) return;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
        return;
      }

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
  }, [layoutPlan]);

  const scrollToSection = (id: string, updateHash = true) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      if (updateHash && typeof window !== "undefined" && window.history.replaceState) {
        window.history.replaceState(null, "", `#${id}`);
      }
      isClickScrollingRef.current = true;
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

      const yOffset = -165;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      clickTimerRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 700);
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-0 pt-[20px] sm:pt-[40px] relative shrink-0 w-full max-w-[1312px] px-4 box-border scroll-mt-[90px]" id="pay-as-you-go">

      {/* Floating Layout Plan Switcher Widget on the Left Margin */}
      <div className="fixed left-3 sm:left-6 bottom-6 sm:bottom-auto sm:top-[200px] z-50 pointer-events-auto select-none">
        {isWidgetCollapsed ? (
          <button
            onClick={() => setIsWidgetCollapsed(false)}
            className="flex items-center gap-2 bg-[#100F09] hover:bg-[#201F1B] text-white px-3 py-2 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-[#2A2A28] cursor-pointer transition-all duration-200 hover:scale-105"
            title="Expand variant switcher"
          >
            <span className="size-2 rounded-full bg-[#70FE7E] animate-pulse" />
            <span className="font-['DM_Sans',sans-serif] font-bold text-[12px] text-white">
              {layoutPlan === "planA" ? "Plan A" : layoutPlan === "planB" ? "Plan B" : "Plan C"}
            </span>
            <svg className="size-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <div className="bg-[#100F09]/95 backdrop-blur-md border border-[#2A2A28] rounded-[16px] p-[12px] shadow-[0_12px_36px_rgba(0,0,0,0.4)] flex flex-col gap-[8px] w-[140px] sm:w-[155px] transition-all duration-200">
            {/* Header with Title and Collapse Button */}
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
              <div className="flex items-center gap-[6px]">
                <span className="size-2 rounded-full bg-[#70FE7E] animate-pulse" />
                <span className="font-['DM_Sans',sans-serif] font-bold text-[12px] text-white tracking-tight">
                  Layout
                </span>
              </div>
              <button
                onClick={() => setIsWidgetCollapsed(true)}
                className="text-white/40 hover:text-white text-[11px] p-0.5 rounded transition-colors cursor-pointer"
                title="Collapse"
              >
                ✕
              </button>
            </div>

            {/* Vertical List of Plans */}
            <div className="flex flex-col gap-[6px]">
              <button
                onClick={() => setLayoutPlan("planA")}
                className={`w-full py-[8px] px-[12px] rounded-[10px] font-['DM_Sans',sans-serif] text-[13px] font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  layoutPlan === "planA"
                    ? "bg-[#70FE7E] text-[#100F09] font-bold shadow-xs scale-[1.02]"
                    : "bg-[#1D1D1B] text-white/80 hover:text-white hover:bg-[#282825]"
                }`}
              >
                <span>Plan A</span>
                {layoutPlan === "planA" && (
                  <svg className="size-3.5 shrink-0 text-[#100F09]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setLayoutPlan("planB")}
                className={`w-full py-[8px] px-[12px] rounded-[10px] font-['DM_Sans',sans-serif] text-[13px] font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  layoutPlan === "planB"
                    ? "bg-[#70FE7E] text-[#100F09] font-bold shadow-xs scale-[1.02]"
                    : "bg-[#1D1D1B] text-white/80 hover:text-white hover:bg-[#282825]"
                }`}
              >
                <span>Plan B</span>
                {layoutPlan === "planB" && (
                  <svg className="size-3.5 shrink-0 text-[#100F09]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setLayoutPlan("planC")}
                className={`w-full py-[8px] px-[12px] rounded-[10px] font-['DM_Sans',sans-serif] text-[13px] font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  layoutPlan === "planC"
                    ? "bg-[#70FE7E] text-[#100F09] font-bold shadow-xs scale-[1.02]"
                    : "bg-[#1D1D1B] text-white/80 hover:text-white hover:bg-[#282825]"
                }`}
              >
                <span>Plan C</span>
                {layoutPlan === "planC" && (
                  <svg className="size-3.5 shrink-0 text-[#100F09]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Section Header Title & Subtitle */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4 mb-[24px] sm:mb-[32px]">
        <h2 className="font-['Fraunces',serif] font-bold text-[28px] sm:text-[44px] leading-[1.15] sm:leading-[48px] text-[#09090b]">
          Pay-As-You-Go
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5d605b] text-center sm:whitespace-nowrap whitespace-normal max-w-full">
          Charges are deducted from your balance in real time, based on what you actually call.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* PLAN A: Original Layout with Top Sticky Tabs Bar & Plain Bento Grid Cards */}
      {/* ========================================================================= */}
      {layoutPlan === "planA" && (
        <div className="w-full flex flex-col items-center">
          {/* Top Sticky Filter Bar */}
          <div
            ref={stickyBarRef}
            className={`sticky top-[58px] z-30 w-full bg-white/80 backdrop-blur-[10px] py-[20px] border-b mb-[32px] transition-all duration-200 ${
              isSticky ? "border-[#4BA67D] shadow-[0_4px_16px_rgba(0,0,0,0.03)]" : "border-[#D1D1D1]"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 w-full max-w-[1288px] mx-auto box-border">
              <div className="w-full sm:w-auto flex items-center gap-[2px] sm:gap-[6px] p-[3px] bg-[#F6F6F3] border border-[#E7E7E3] rounded-full box-border select-none">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`h-[36px] sm:h-[40px] px-[12px] sm:px-[18px] rounded-full flex items-center gap-[6px] font-['DM_Sans',sans-serif] font-medium text-[13px] sm:text-[14px] leading-[20px] transition-all duration-200 cursor-pointer select-none ${
                        isActive
                          ? "bg-[#06090A] text-white shadow-sm"
                          : "text-[#57575E] hover:text-[#06090A] hover:bg-white/50"
                      }`}
                    >
                      <item.icon className="w-[14px] h-[14px] shrink-0" />
                      <span>{item.title}</span>
                    </button>
                  );
                })}
              </div>

              <div className="font-['DM_Sans',sans-serif] font-normal text-[12px] leading-[18px] text-[#8B8B8B] hidden md:block">
                {activeNavItem.subtitle}
              </div>
            </div>
          </div>

          {/* Plain Bento Cards Grid */}
          <div className="content-stretch flex flex-col gap-[24px] w-full">
            {/* Row 1: Search */}
            <div id="search" className="scroll-mt-[176px] grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
              <WebSearchCard />
              <ImageVideoSearchCard />
            </div>

            {/* Row 2: Extract */}
            <div id="extract" className="scroll-mt-[176px] w-full">
              <ExtractCard />
            </div>

            {/* Row 3: Embedding */}
            <div id="embeddings" className="scroll-mt-[176px] grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
              <EmbeddingCard />
              <VlEmbeddingCard />
            </div>

            {/* Row 4: Applications */}
            <div id="applications" className="scroll-mt-[176px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full">
              <AnswerCard />
              <MultimodalChatCard />
              <DeepResearchCard />
              <GroundedGenCard />
            </div>
          </div>

          <div className="w-full mt-[12px]">
            <ModelGatewayBox />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PLAN B: Outer Shells Layout matching Figma 13416:7312 Spec                 */}
      {/* ========================================================================= */}
      {layoutPlan === "planB" && (
        <div className="content-stretch flex flex-col gap-[20px] w-full">
          {/* Section 1 Outer Shell: Search (Emerald Green -> Aqua Teal) */}
          <div
            id="search"
            className="group/shell relative scroll-mt-[176px] rounded-[16px] border border-[#E2E2DE] hover:border-[#1FBC2E]/70 bg-[#F4F4F4] overflow-hidden flex flex-col w-full transition-all duration-300"
          >
            {/* Top-to-Bottom Emerald to Teal Duotone Mesh Gradient */}
            <ShellHoverGlow variant="emerald" />

            {/* Shell Header */}
            <div className="relative z-10 w-full px-[16px] py-[10px] flex items-center justify-between gap-4 select-none">
              <div className="flex items-center gap-[8px]">
                <SearchCategoryIcon className="w-[18px] h-[18px] text-[#100F09]" />
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[30px] tracking-[-0.5px] text-[#100F09]">
                  Search
                </span>
              </div>
              <span className="font-['DM_Sans',sans-serif] text-[14px] leading-[21px] font-normal text-[#57575E] hidden sm:block text-right">
                Real-time retrieval from the live web.
              </span>
            </div>

            {/* Embedded Cards Grid (8px padding & 12px gap per Figma 13416:7312 spec) */}
            <div className="relative z-10 px-[8px] pb-[8px] grid grid-cols-1 md:grid-cols-2 gap-[12px] w-full box-border">
              <WebSearchCard plan="planB" />
              <ImageVideoSearchCard plan="planB" />
            </div>
          </div>

          {/* Section 2 Outer Shell: Extract (Electric Cyan -> Royal Indigo) */}
          <div
            id="extract"
            className="group/shell relative scroll-mt-[176px] rounded-[16px] border border-[#E2E2DE] hover:border-[#38BDF8]/70 bg-[#F4F4F4] overflow-hidden flex flex-col w-full transition-all duration-300"
          >
            {/* Top-to-Bottom Cyan to Indigo Duotone Mesh Gradient */}
            <ShellHoverGlow variant="cyan" />

            {/* Shell Header */}
            <div className="relative z-10 w-full px-[16px] py-[10px] flex items-center justify-between gap-4 select-none">
              <div className="flex items-center gap-[8px]">
                <ExtractCategoryIcon className="w-[18px] h-[18px] text-[#100F09]" />
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[30px] tracking-[-0.5px] text-[#100F09]">
                  Extract
                </span>
              </div>
              <span className="font-['DM_Sans',sans-serif] text-[14px] leading-[21px] font-normal text-[#57575E] hidden sm:block text-right">
                Clean content from any URL.
              </span>
            </div>

            {/* Embedded Card (8px padding per Figma spec) */}
            <div className="relative z-10 px-[8px] pb-[8px] w-full box-border">
              <ExtractCard />
            </div>
          </div>

          {/* Section 3 Outer Shell: Embedding (Cosmic Purple -> Rose Pink) */}
          <div
            id="embeddings"
            className="group/shell relative scroll-mt-[176px] rounded-[16px] border border-[#E2E2DE] hover:border-[#C084FC]/70 bg-[#F4F4F4] overflow-hidden flex flex-col w-full transition-all duration-300"
          >
            {/* Top-to-Bottom Purple to Rose Duotone Mesh Gradient */}
            <ShellHoverGlow variant="purple" />

            {/* Shell Header */}
            <div className="relative z-10 w-full px-[16px] py-[10px] flex items-center justify-between gap-4 select-none">
              <div className="flex items-center gap-[8px]">
                <EmbeddingCategoryIcon className="w-[18px] h-[18px] text-[#100F09]" />
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[30px] tracking-[-0.5px] text-[#100F09]">
                  Embedding
                </span>
              </div>
              <span className="font-['DM_Sans',sans-serif] text-[14px] leading-[21px] font-normal text-[#57575E] hidden sm:block text-right">
                Top-ranked embedding models for text and multimodal retrieval.
              </span>
            </div>

            {/* Embedded Cards Grid (8px padding & 12px gap per Figma spec) */}
            <div className="relative z-10 px-[8px] pb-[8px] grid grid-cols-1 md:grid-cols-2 gap-[12px] w-full box-border">
              <EmbeddingCard />
              <VlEmbeddingCard />
            </div>
          </div>

          {/* Section 4 Outer Shell: Applications (Amber Gold -> Sunset Coral) */}
          <div
            id="applications"
            className="group/shell relative scroll-mt-[176px] rounded-[16px] border border-[#E2E2DE] hover:border-[#F59E0B]/70 bg-[#F4F4F4] overflow-hidden flex flex-col w-full transition-all duration-300"
          >
            {/* Top-to-Bottom Amber to Coral Duotone Mesh Gradient */}
            <ShellHoverGlow variant="amber" />

            {/* Shell Header */}
            <div className="relative z-10 w-full px-[16px] py-[10px] flex items-center justify-between gap-4 select-none">
              <div className="flex items-center gap-[8px]">
                <ApplicationsCategoryIcon className="w-[18px] h-[18px] text-[#100F09]" />
                <span className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[30px] tracking-[-0.5px] text-[#100F09]">
                  Applications
                </span>
              </div>
              <span className="font-['DM_Sans',sans-serif] text-[14px] leading-[21px] font-normal text-[#57575E] hidden sm:inline-flex items-center gap-[4px] text-right">
                <span>Complete workflows built on the APIs above. Billed per outcome via</span>
                <span className="inline-flex items-center px-[6px] py-[1px] rounded bg-white/50 text-[#100F09] font-medium border border-[#DCDCD6] text-[12px] font-['JetBrains_Mono',monospace]">
                  Search API + Model Gateway
                </span>
                <span>.</span>
              </span>
            </div>

            {/* Embedded Cards & Model Gateway Container */}
            <div className="relative z-10 px-[8px] pb-[8px] flex flex-col gap-[12px] w-full box-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] w-full box-border">
                <AnswerCard />
                <MultimodalChatCard />
                <DeepResearchCard />
                <GroundedGenCard />
              </div>
              <ModelGatewayBox bgClass="bg-[#F4F4F4]" borderClass="border-[#E2E2DE]" />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PLAN C: Unified Rate Matrix Table (Aligned Grid & Unified Headers)        */}
      {/* ========================================================================= */}
      {layoutPlan === "planC" && <PlanCTable />}

    </div>
  );
}
