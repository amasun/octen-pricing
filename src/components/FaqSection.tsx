import { useState } from "react";
import svgPaths from "./svgPaths";

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqData = [
    {
      q: "How is Octen billing calculated?",
      a: "Octen combines real-time Pay-As-You-Go API credit deductions with monthly QPS subscription plans for guaranteed search throughput and priority SLAs."
    },
    {
      q: "How do I claim my $5 free credit?",
      a: "New developer accounts automatically receive $5 in free balance upon registration—no credit card required to start testing API requests."
    },
    {
      q: "How do Prompt Cache Read and Write discounts work?",
      a: "Cached system prompt tokens receive up to 90% discount on cache reads for supported models, significantly lowering long-context search synthesis costs."
    },
    {
      q: "Can I upgrade or scale my QPS plan at any time?",
      a: "Yes! You can upgrade between Base, Startup, Pro, and Scale instantly via Platform Billing. For custom Enterprise limits, ZDR, or dedicated support, contact support@octen.ai."
    }
  ];

  return (
    <div className="bg-[#f3f3f2] content-stretch flex flex-col gap-[20px] items-center py-[36px] sm:py-[100px] relative shrink-0 w-full" id="faq-section">
      <div className="text-center flex flex-col gap-3 px-4 max-w-[800px]">
        <h2 className="font-['Fraunces',serif] font-bold text-[32px] sm:text-[40px] text-[#0f172a] leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="font-['DM_Sans',sans-serif] text-[15px] sm:text-[16px] text-[#64748b]">
          Everything you need to know about Pay-As-You-Go rates, QPS plans, and account billing.
        </p>
      </div>

      <div className="content-stretch flex flex-col gap-[16px] h-auto items-start max-w-[800px] relative shrink-0 w-full px-4 box-border" data-name="Container (FAQ Accordion)">
        {faqData.map((item, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div 
              key={idx}
              className={`relative rounded-[8px] shrink-0 w-full transition-colors duration-300 ${isOpen ? 'bg-white' : 'bg-[#eaebeb]'}`}
            >
              <div aria-hidden className="absolute border border-[rgba(26,26,25,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <button 
                onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full bg-transparent border-none cursor-pointer flex items-center justify-between pl-[24px] pr-[17px] py-[16px] text-left gap-4 select-none hover:bg-[rgba(26,26,25,0.02)] active:scale-[0.995] transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[#039855] focus-visible:outline-none rounded-[8px]"
              >
                <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.3] sm:leading-[32px] text-[#0f172a] text-[15px] sm:text-[16px]">
                  {item.q}
                </p>
                <div className="relative rounded-[99px] shrink-0 size-[32px] flex items-center justify-center transition-colors duration-300 bg-[#ebebeb]">
                  <svg 
                    className={`size-[20px] transition-transform duration-300 ease-in-out will-change-transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                    style={{ transformOrigin: 'center center' }}
                    viewBox="0 0 20 20" 
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d={svgPaths.p17eb400} stroke="#0E0E0E" strokeWidth="1.66667" />
                  </svg>
                </div>
              </button>

              <div 
                id={`faq-answer-${idx}`}
                role="region"
                aria-label={item.q}
                className={`grid transition-[grid-template-rows,opacity] duration-350 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-[20px] px-[24px] pt-[0px]">
                    <p className="[word-break:break-word] font-['DM_Sans',sans-serif] font-normal leading-[1.6] text-[#515151] text-[14px] sm:text-[15px] border-t border-[rgba(26,26,25,0.06)] pt-[14px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
