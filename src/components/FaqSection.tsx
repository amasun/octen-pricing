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
      a: "Yes! You can instantly upgrade from Base to Startup, Pro, or Scale via the Platform Billing dashboard. Pro-rated adjustments take effect immediately on your QPS quota."
    },
    {
      q: "What are the key benefits of the Enterprise plan?",
      a: "The Enterprise plan provides custom throughput scaling (500+ QPS), Zero Data Retention (ZDR) for data privacy, dedicated Slack channel support, and custom SLAs with an assigned account manager."
    },
    {
      q: "What payment methods are supported?",
      a: "We support major credit & debit cards (Visa, MasterCard, American Express, JCB), Apple Pay, and Link by Stripe."
    }
  ];

  return (
    <div className="bg-[#f3f3f2] content-stretch flex flex-col gap-[28px] sm:gap-[36px] items-center py-[48px] sm:py-[90px] relative shrink-0 w-full" id="faq-section">
      {/* Section Header */}
      <div className="text-center flex flex-col gap-3 px-4 max-w-[800px]">
        <h2 className="font-['Fraunces',serif] font-bold text-[32px] sm:text-[40px] text-[#0f172a] leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#64748b]">
          If you have any questions about using Octen, feel free to email us at{" "}
          <a
            href="mailto:support@octen.ai"
            className="text-[#039855] font-medium underline hover:text-[#027a44] transition-colors"
          >
            support@octen.ai
          </a>
          .
        </p>
      </div>

      {/* 2 Columns Grid Layout matching exact 1312px container width with 16px uniform gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1312px] w-full px-4 box-border items-start" data-name="Container (FAQ 1312px 2-Col Grid)">
        {faqData.map((item, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div 
              key={idx}
              className={`relative rounded-[12px] w-full transition-colors duration-300 box-border flex flex-col border border-[rgba(26,26,25,0.12)] ${
                isOpen ? 'bg-white' : 'bg-[#eaebeb] hover:bg-white/80'
              }`}
            >
              {/* Card Toggle Button Header with Symmetrical Padding */}
              <button 
                onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full bg-transparent border-none cursor-pointer flex items-center justify-between p-[14px_20px] sm:p-[16px_20px] text-left gap-3 select-none focus-visible:ring-2 focus-visible:ring-[#039855] focus-visible:outline-none rounded-[12px]"
              >
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <p className="font-['DM_Sans',sans-serif] font-bold text-[#0f172a] text-[16px] leading-[1.35] m-0">
                    {item.q}
                  </p>
                </div>

                <div className="relative rounded-full shrink-0 size-[26px] flex items-center justify-center transition-colors duration-300 bg-[#ebebeb]">
                  <svg 
                    className={`size-[16px] transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                    style={{ transformOrigin: 'center center' }}
                    viewBox="0 0 20 20" 
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d={svgPaths.p17eb400} stroke="#0E0E0E" strokeWidth="1.66667" />
                  </svg>
                </div>
              </button>

              {/* Smooth Grid Accordion Expansion */}
              <div 
                id={`faq-answer-${idx}`}
                role="region"
                aria-label={item.q}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-[20px] pb-[20px] pt-0">
                    <p className="font-['DM_Sans',sans-serif] font-normal leading-[1.6] text-[#515151] text-[14px] sm:text-[16px] border-t border-[rgba(26,26,25,0.08)] pt-[12px]">
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
