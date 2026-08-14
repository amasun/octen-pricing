export default function CtaSection() {
  return (
    <section className="w-full bg-[#06090e] flex justify-center items-center px-4 box-border">
      <div className="w-full max-w-[1280px] py-[100px] border-b border-[rgba(219,219,219,0.30)] flex flex-col items-center gap-[36px] text-center box-border">
        {/* Title & Subtitle */}
        <div className="flex flex-col items-center gap-[16px] sm:gap-[20px] max-w-[900px]">
          <h2 className="font-['Fraunces',serif] font-normal text-[28px] sm:text-[40px] md:text-[44px] leading-[1.2] sm:leading-[48px] text-white tracking-tight m-0 whitespace-nowrap">
            Start building with{" "}
            <span className="font-['Fraunces',serif] italic font-normal">
              Octen
            </span>
          </h2>
          <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-white/80 m-0 max-w-[672px]">
            For custom QPS plans, higher rate limits, or billing questions, talk to us.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-[16px] w-full flex-wrap sm:flex-nowrap">
          {/* Start Building Button */}
          <a
            href="https://octen.ai/platform/billing"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[48px] px-[20px] py-[12px] bg-transparent border border-[#60ff70] hover:bg-[#60ff70]/10 active:scale-[0.98] rounded-[8px] flex items-center justify-center gap-[6px] font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-none text-[#70fe7e] transition-all duration-200 select-none cursor-pointer box-border"
          >
            <span>Start Building</span>
            <svg
              className="w-[16px] h-[16px] shrink-0 fill-current text-[#70fe7e]"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66669 11.3333L11.3334 4.66663M11.3334 4.66663H5.33335M11.3334 4.66663V10.6666"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Contact Sales Button */}
          <a
            href="mailto:support@octen.ai?subject=Octen%20Custom%20QPS%20%26%20Pricing%20Inquiry"
            className="h-[48px] px-[21px] py-[13px] bg-transparent border border-white/50 hover:bg-white/10 hover:border-white active:scale-[0.98] rounded-[8px] flex items-center justify-center font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[24px] text-white transition-all duration-200 select-none cursor-pointer box-border"
          >
            Contact sales
          </a>
        </div>

        {/* Launch Pricing Note */}
        <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] sm:text-[14px] text-white/50 m-0 pt-2">
          * Launch pricing &mdash; discounted rates, subject to change
        </p>
      </div>
    </section>
  );
}
