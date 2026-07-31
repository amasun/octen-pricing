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

function ZdrIcon({ color = "black" }: { color?: string }) {
  return (
    <div className="size-[20px] shrink-0 flex items-center justify-center">
      <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
        <path d="M15.0201 3.39575C15.3065 3.09712 15.7806 3.08635 16.0797 3.37231C16.3787 3.65863 16.3892 4.13362 16.1031 4.43286L4.68707 16.3606C4.40074 16.6598 3.92577 16.6702 3.62653 16.384C3.32736 16.0977 3.31687 15.6227 3.60309 15.3235L4.44489 14.4426C4.21608 14.0875 4.07776 13.6839 4.0777 13.2336V6.71216C4.07793 5.56067 4.97991 4.71296 5.99371 4.19849C7.04946 3.66287 8.45647 3.3538 9.96832 3.35376C11.48 3.3538 12.8862 3.66299 13.942 4.19849C14.0104 4.23319 14.077 4.27207 14.1441 4.30981L15.0201 3.39575ZM15.858 6.71216V13.2336C15.8578 14.3853 14.9559 15.2328 13.942 15.7473C12.8862 16.2828 11.48 16.592 9.96832 16.592C8.78536 16.592 7.66745 16.4007 6.73102 16.0618L7.8941 14.8469C8.50857 14.9994 9.21173 15.092 9.96832 15.092C11.2946 15.092 12.4586 14.8176 13.2632 14.4094C14.1093 13.9802 14.3578 13.523 14.358 13.2336V12.2502C14.2229 12.335 14.0836 12.4147 13.942 12.4866C12.8862 13.0221 11.48 13.3313 9.96832 13.3313C9.76404 13.3313 9.56171 13.3238 9.36188 13.3127L10.8199 11.7893C11.7904 11.7003 12.6361 11.4668 13.2632 11.1487C14.1094 10.7194 14.3579 10.2622 14.358 9.9729V8.9895C14.2228 9.07428 14.0836 9.15396 13.942 9.22583C13.6135 9.39245 12.508 9.53621 12.8619 9.65649L15.8492 6.53442C15.854 6.59271 15.858 6.65222 15.858 6.71216ZM5.5777 13.2336C5.5777 13.2416 5.57927 13.2499 5.57965 13.2581L6.21735 12.5911C6.14161 12.5566 6.06618 12.5233 5.99371 12.4866C5.85187 12.4146 5.71299 12.3342 5.5777 12.2493V13.2336ZM5.5777 9.9729C5.57781 10.2622 5.82667 10.7194 6.67242 11.1487C6.87187 11.2499 7.09376 11.3422 7.33453 11.4241L8.70367 9.99341C7.6812 9.87203 6.74767 9.60836 5.99371 9.22583C5.85187 9.15384 5.713 9.07345 5.5777 8.98853V9.9729ZM9.96832 4.85376C8.64188 4.8538 7.47706 5.12816 6.67242 5.53638C5.82686 5.96551 5.57796 6.42288 5.5777 6.71216C5.57781 7.00141 5.82671 7.45869 6.67242 7.88794C7.47706 8.29618 8.64183 8.57051 9.96832 8.57056C10.0016 8.57056 10.0349 8.56896 10.0679 8.5686L13.0601 5.44263C12.2683 5.08819 11.1874 4.85379 9.96832 4.85376Z" fill={color} />
      </svg>
    </div>
  );
}

function SlackIcon({ color = "black" }: { color?: string }) {
  return (
    <div className="size-[20px] shrink-0 flex items-center justify-center">
      <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
        <path d="M6.44755 11.6321C6.44635 11.9703 6.31142 12.2943 6.07222 12.5333C5.83302 12.7724 5.50896 12.9072 5.17077 12.9082C4.83235 12.9073 4.50803 12.7726 4.26867 12.5333C4.02931 12.2941 3.89437 11.9698 3.89334 11.6314C3.89334 10.9285 4.46779 10.354 5.17077 10.354H6.44755V11.6321ZM7.09145 11.6321C7.09145 10.9291 7.66591 10.3546 8.36888 10.3546C9.07185 10.3546 9.64566 10.9291 9.64566 11.6321V14.8302C9.6448 15.1686 9.51003 15.4929 9.27079 15.7323C9.03155 15.9716 8.7073 16.1066 8.36888 16.1076C8.03035 16.1068 7.70593 15.9719 7.46655 15.7325C7.22717 15.4931 7.09231 15.1687 7.09145 14.8302V11.6321ZM8.36888 6.44772C8.03046 6.44686 7.70614 6.31209 7.46678 6.07285C7.22742 5.83362 7.09248 5.50936 7.09145 5.17094C7.09145 4.46797 7.66591 3.89417 8.36888 3.89417C9.07185 3.89417 9.64566 4.46797 9.64566 5.17094V6.44837L8.36888 6.44772ZM8.36888 7.09163C9.07185 7.09163 9.64566 7.66543 9.64566 8.3684C9.6448 8.70682 9.51003 9.03115 9.27079 9.27051C9.03155 9.50987 8.7073 9.6448 8.36888 9.64583H5.17077C4.83224 9.64497 4.50782 9.51011 4.26844 9.27074C4.02906 9.03136 3.8942 8.70694 3.89334 8.3684C3.89334 7.66543 4.46779 7.09163 5.17077 7.09163H8.36888ZM13.5526 8.3684C13.5526 7.66543 14.127 7.09163 14.83 7.09163C15.533 7.09163 16.1074 7.66543 16.1074 8.3684C16.1066 8.70694 15.9717 9.03136 15.7323 9.27074C15.493 9.51011 15.1685 9.64497 14.83 9.64583H13.5526V8.3684ZM12.9093 8.3684C12.9085 8.70694 12.7736 9.03136 12.5342 9.27074C12.2949 9.51011 11.9704 9.64497 11.6319 9.64583C11.2934 9.64497 10.9689 9.51011 10.7296 9.27074C10.4902 9.03136 10.3553 8.70694 10.3545 8.3684V5.17094C10.3545 4.46797 10.9289 3.89417 11.6319 3.89417C12.3349 3.89417 12.9093 4.46797 12.9093 5.17094V8.3684ZM11.6319 13.5528C12.3349 13.5528 12.9093 14.1272 12.9093 14.8302C12.9085 15.1687 12.7736 15.4931 12.5342 15.7325C12.2949 15.9719 11.9704 16.1068 11.6319 16.1076C11.2934 16.1068 10.9689 15.9719 10.7296 15.7325C10.4902 15.4931 10.3553 15.1687 10.3545 14.8302V13.5528H11.6319ZM11.6319 12.9089C11.2935 12.908 10.9692 12.7732 10.7298 12.534C10.4904 12.2947 10.3555 11.9705 10.3545 11.6321C10.3545 10.9291 10.9289 10.3546 11.6319 10.3546H14.83C15.533 10.3546 16.1074 10.9291 16.1074 11.6321C16.1064 11.9705 15.9715 12.2947 15.7321 12.534C15.4928 12.7732 15.1684 12.908 14.83 12.9089H11.6319Z" fill={color} />
      </svg>
    </div>
  );
}

function FeatureIcon({ type, color }: { type: "branch" | "check" | "flash" | "zdr" | "slack"; color?: string }) {
  if (type === "branch") return <BranchIcon color={color} />;
  if (type === "flash") return <FlashIcon color={color} />;
  if (type === "zdr") return <ZdrIcon color={color} />;
  if (type === "slack") return <SlackIcon color={color} />;
  return <CheckIcon stroke={color || "#100F09"} />;
}

interface FeatureItem {
  text: React.ReactNode;
  icon: "branch" | "check" | "flash" | "zdr" | "slack";
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
        <div className="h-auto sm:h-[150px] p-[16px_16px] sm:p-[30px_24px] flex flex-col justify-between gap-[10px] sm:gap-[20px] border-b border-[rgba(26,26,25,0.12)] box-border shrink-0">
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
          <div className="flex flex-row items-end gap-[6px] sm:gap-[8px] min-h-[36px] sm:min-h-[44px]">
            {price === "Custom" ? (
              <div className="flex items-end">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[28px] sm:text-[38px] leading-[32px] sm:leading-[44px] text-[#100F09]">Custom</span>
              </div>
            ) : (
              <div className="flex items-start">
                <span className="font-['DM_Mono',monospace] font-medium text-[16px] sm:text-[20px] leading-[18px] sm:leading-[22px] text-[#100F09] pt-[2px] sm:pt-[4px] pr-[2px]">$</span>
                <span className="font-['DM_Sans',sans-serif] font-medium text-[28px] sm:text-[40px] leading-[32px] sm:leading-[44px] text-[#100F09]">{price}</span>
              </div>
            )}
            <div className="flex flex-row flex-wrap items-baseline justify-start gap-x-[6px] gap-y-0 -translate-y-[3px] pb-[2px] sm:pb-[4px] flex-1">
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
        <div className="h-auto sm:h-[260px] p-[16px_16px] sm:p-[30px_24px] flex flex-col justify-between gap-[16px] sm:gap-[30px] box-border shrink-0">
          {/* List */}
          <ul className="h-auto sm:h-[132px] flex flex-col gap-[10px] sm:gap-[16px] list-none p-0 m-0 w-full">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-[6px] text-[13px] sm:text-[14px] font-['DM_Sans',sans-serif] font-normal leading-[130%] sm:leading-[140%] text-[#100F09]">
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
        { text: "Zero Data Retention (ZDR)", icon: "zdr" },
        { text: "Dedicated Slack channel support", icon: "slack" },
        { text: "Guaranteed throughput and SLA", icon: "flash" }
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
