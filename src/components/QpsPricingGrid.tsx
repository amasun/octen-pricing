import svgPaths from "./svgPaths";

function BranchIcon({ color = "black" }: { color?: string }) {
  return (
    <div className="size-[20px] shrink-0 flex items-center justify-center">
      <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p2ba1d80} fill={color} />
      </svg>
    </div>
  );
}

function CheckIcon({ stroke = "#100F09" }: { stroke?: string }) {
  return (
    <div className="size-[20px] shrink-0 flex items-center justify-center">
      <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
        <path d="M6.25 10.75L8.5 13L13.75 7" stroke={stroke} strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function FlashIcon({ color = "black" }: { color?: string }) {
  return (
    <div className="size-[20px] shrink-0 flex items-center justify-center">
      <svg className="size-[14px]" fill="none" viewBox="0 0 12.1 14.6">
        <path d={svgPaths.p3b4547f0} fill={color} />
      </svg>
    </div>
  );
}

function FeatureIcon({ type, color }: { type: "branch" | "check" | "flash"; color?: string }) {
  if (type === "branch") return <BranchIcon color={color} />;
  if (type === "flash") return <FlashIcon color={color} />;
  return <CheckIcon stroke={color || "#100F09"} />;
}

interface FeatureItem {
  text: React.ReactNode;
  icon: "branch" | "check" | "flash";
}

function PlanCardItem({
  title,
  subtitle,
  price,
  originalPrice,
  period = "/ month",
  features,
  buttonText,
  buttonHref,
  discountBadge,
  isPopular = false,
  cardWidthClass = "w-full"
}: {
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  period?: string;
  features: FeatureItem[];
  buttonText: string;
  buttonHref?: string;
  discountBadge?: string;
  isPopular?: boolean;
  cardWidthClass?: string;
}) {
  return (
    <div 
      className={`${cardWidthClass} h-auto sm:h-[446px] relative rounded-[16px] flex flex-col justify-between overflow-hidden hover:-translate-y-[4px] transition-all duration-300 ease-out cursor-pointer box-border border ${
        isPopular 
          ? "bg-[rgba(139,239,149,0.5)] border-[#6DCAA0] hover:shadow-[0_16px_36px_rgba(112,254,126,0.25)]" 
          : "bg-[#EAEAEA] border-[rgba(26,26,25,0.12)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
      }`}
    >
      {/* Top Subtitle Tag */}
      <div className="h-[28px] sm:h-[34px] py-[4px] sm:py-[6px] px-0 text-center flex items-center justify-center gap-[10px] shrink-0">
        <p className={`font-['DM_Sans',sans-serif] font-normal text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] whitespace-nowrap ${
          isPopular ? "text-[#276533]" : "text-[#4B4B39]"
        }`}>
          {subtitle}
        </p>
      </div>

      {/* Inner White Card Body */}
      <div className="bg-white rounded-[12px] h-auto sm:h-[410px] flex flex-col justify-between p-0 m-0 overflow-hidden box-border">
        {/* Title Block */}
        <div className="h-auto sm:h-[150px] p-[16px_16px] sm:p-[30px_20px] flex flex-col justify-between gap-[10px] sm:gap-[20px] border-b border-[rgba(26,26,25,0.12)] box-border shrink-0">
          <div className="flex items-center justify-between w-full h-[24px]">
            <h3 className="font-['Fraunces',serif] font-semibold text-[20px] sm:text-[24px] leading-[24px] text-[#100F09]">
              {title}
            </h3>
            {discountBadge && (
              <span className="w-[64px] sm:w-[71px] h-[22px] sm:h-[24px] px-[6px] sm:px-[8px] bg-[#70FE7E] rounded-[6px] flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[12px] sm:text-[13px] leading-[13px] text-[#100F09] shrink-0">
                {discountBadge}
              </span>
            )}
          </div>

          {/* Price Frequency */}
          <div className="h-[36px] sm:h-[44px] flex flex-row items-center gap-[6px] sm:gap-[8px]">
            {price === "Custom" ? (
              <div className="flex items-center h-full">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[28px] sm:text-[38px] leading-[32px] sm:leading-[44px] text-[#100F09]">Custom</span>
              </div>
            ) : (
              <div className="flex items-start">
                <span className="font-['DM_Mono',monospace] font-medium text-[16px] sm:text-[20px] leading-[18px] sm:leading-[22px] text-[#100F09] pt-[2px] sm:pt-[4px] pr-[3px]">$</span>
                <span className="font-['DM_Sans',sans-serif] font-bold text-[28px] sm:text-[38px] leading-[32px] sm:leading-[44px] text-[#100F09]">{price}</span>
              </div>
            )}
            <div className="flex flex-row flex-wrap items-baseline justify-start gap-x-[6px] gap-y-0 pt-[16px] sm:pt-[24px] flex-1">
              {originalPrice && (
                <span className="font-['DM_Sans',sans-serif] font-normal text-[12px] sm:text-[14px] leading-[13px] sm:leading-[15px] text-[#7C7C79] line-through whitespace-nowrap">
                  {originalPrice}
                </span>
              )}
              <span className="font-['DM_Sans',sans-serif] font-normal text-[12px] sm:text-[14px] leading-[13px] sm:leading-[15px] text-[#7C7C79] whitespace-nowrap">
                {period}
              </span>
            </div>
          </div>
        </div>

        {/* Button Text Block */}
        <div className="h-auto sm:h-[260px] p-[16px_16px] sm:p-[30px_20px] flex flex-col justify-between gap-[16px] sm:gap-[30px] box-border shrink-0">
          {/* List */}
          <ul className="h-auto sm:h-[132px] flex flex-col gap-[10px] sm:gap-[16px] list-none p-0 m-0 w-full">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-[4px] text-[13px] sm:text-[14px] font-['DM_Sans',sans-serif] font-normal leading-[20px] text-[#100F09]">
                <FeatureIcon type={feat.icon} />
                <span className="flex-1">{feat.text}</span>
              </li>
            ))}
          </ul>

          {/* Link / Button */}
          <a
            href={buttonHref || "https://octen.ai/platform/billing"}
            target={buttonHref?.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`w-full h-[36px] sm:h-[40px] px-[16px] sm:px-[17px] rounded-[99px] flex items-center justify-center font-['DM_Sans',sans-serif] font-semibold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] hover:-translate-y-[1px] active:scale-[0.96] transition-all duration-200 ease-out select-none focus-visible:ring-2 focus-visible:ring-[#039855] focus-visible:outline-none box-border ${
              isPopular || (title !== "Base" && title !== "Free")
                ? "bg-[#100F09] text-white btn-dark-hover"
                : "bg-[#000000]/5 text-[#0F172A] border border-[rgba(26,26,25,0.12)] btn-light-hover"
            }`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function QpsPricingGrid() {
  const plans: Array<{
    title: string;
    subtitle: string;
    price: string;
    originalPrice?: string;
    period?: string;
    discountBadge?: string;
    isPopular?: boolean;
    buttonText: string;
    buttonHref?: string;
    features: FeatureItem[];
  }> = [
    {
      title: "Free",
      subtitle: "Evaluation & developer testing",
      price: "0",
      features: [
        { text: <>Up to <strong className="font-bold">10 QPS</strong> Limit</>, icon: "branch" },
        { text: "Default tier for new accounts", icon: "check" },
        { text: "Standard community support", icon: "check" }
      ],
      buttonText: "Get Started"
    },
    {
      title: "Base",
      subtitle: "Personal projects & light API use",
      price: "0",
      features: [
        { text: <>Up to <strong className="font-bold">20 QPS</strong> Limit</>, icon: "branch" },
        { text: "Auto-unlocks when adding credits", icon: "check" },
        { text: "Standard community support", icon: "check" }
      ],
      buttonText: "Top Up Balance"
    },
    {
      title: "Startup",
      subtitle: "Early-stage teams in production",
      price: "2,099",
      originalPrice: "$2,999",
      discountBadge: "30% Off",
      isPopular: true,
      features: [
        { text: <>Up to <strong className="font-bold">50 QPS</strong> Limit</>, icon: "branch" },
        { text: "Dedicated priority queue", icon: "check" },
        { text: "Guaranteed throughput and SLA", icon: "flash" }
      ],
      buttonText: "Subscribe"
    },
    {
      title: "Pro",
      subtitle: "Scaling production AI applications",
      price: "13,999",
      features: [
        { text: <>Up to <strong className="font-bold">200 QPS</strong> Limit</>, icon: "branch" },
        { text: "Dedicated priority queue", icon: "check" },
        { text: "Guaranteed throughput and SLA", icon: "flash" }
      ],
      buttonText: "Subscribe"
    },
    {
      title: "Scale",
      subtitle: "High-throughput & mission-critical",
      price: "33,999",
      features: [
        { text: <>Up to <strong className="font-bold">500 QPS</strong> Limit</>, icon: "branch" },
        { text: "Dedicated priority queue", icon: "check" },
        { text: "Guaranteed throughput and SLA", icon: "flash" }
      ],
      buttonText: "Subscribe"
    },
    {
      title: "Enterprise",
      subtitle: "Custom scale & enterprise SLA",
      price: "Custom",
      period: "Tailored Plan",
      features: [
        { text: <>Higher <strong className="font-bold">500+ QPS</strong> Limits</>, icon: "branch" },
        { text: "Zero Data Retention (ZDR)", icon: "check" },
        { text: "Dedicated Slack channel support", icon: "check" },
        { text: "Custom SLA & Account Manager", icon: "flash" }
      ],
      buttonText: "Contact Sales",
      buttonHref: "mailto:support@octen.ai?subject=Octen%20Enterprise%20QPS%20Plan%20Inquiry"
    }
  ];

  return (
    <div id="qps-plans" className="content-stretch flex flex-col gap-[24px] sm:gap-[36px] items-center pb-[60px] sm:pb-[120px] pt-[40px] sm:pt-[60px] px-4 relative shrink-0 w-full max-w-[1320px] box-border">
      {/* Title Header */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4">
        <h2 className="font-['Fraunces',serif] font-bold text-[28px] sm:text-[44px] leading-[1.15] sm:leading-[48px] text-[#09090b]">
          QPS Plan
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5d605b] max-w-[680px]">
          Guaranteed QPS limit and throughput SLA
        </p>
      </div>

      {/* 3x2 Double Row Grid (3 Cards per row on desktop, 6 cards total) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] xl:gap-[24px] w-full justify-items-center">
        {plans.map((p, idx) => (
          <PlanCardItem key={idx} {...p} cardWidthClass="w-full" />
        ))}
      </div>
    </div>
  );
}
