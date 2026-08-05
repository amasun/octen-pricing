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
      <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
        <path d="M9.4823 2.85915C9.77332 2.75026 10.0913 2.73607 10.3909 2.81859L10.5177 2.85915L15.68 4.795C15.9417 4.89315 16.1702 5.06367 16.3387 5.28667C16.5073 5.50968 16.609 5.776 16.632 6.0546L16.6372 6.17628V10.1313C16.6372 11.3263 16.3145 12.4992 15.7033 13.526C15.092 14.5529 14.2149 15.3957 13.1645 15.9654L12.9683 16.0679L10.4948 17.3047C10.3586 17.3727 10.2099 17.4118 10.0579 17.4197C9.90585 17.4276 9.75384 17.404 9.61135 17.3504L9.50516 17.3047L7.03169 16.0679C5.96282 15.5335 5.05806 14.7203 4.41295 13.7144C3.76783 12.7084 3.40629 11.5469 3.36648 10.3526L3.36279 10.1313V6.17628C3.3628 5.89687 3.44216 5.62322 3.59165 5.38717C3.74114 5.15112 3.95461 4.96238 4.20719 4.84294L4.32003 4.795L9.4823 2.85915ZM10 4.24043L4.83773 6.17628V10.1313C4.83775 11.0568 5.08659 11.9653 5.5582 12.7617C6.02981 13.5581 6.70685 14.213 7.51842 14.6579L7.69173 14.7486L10 15.9027L12.3083 14.7486C13.1362 14.3347 13.8377 13.7058 14.3392 12.9277C14.8406 12.1496 15.1236 11.251 15.1586 10.326L15.1623 10.1313V6.17628L10 4.24043ZM9.36799 7.25224C9.46472 7.09073 9.61957 6.97233 9.80079 6.92131C9.982 6.87028 10.1759 6.89049 10.3427 6.9778C10.5095 7.06512 10.6366 7.21291 10.6979 7.3909C10.7592 7.5689 10.7502 7.76361 10.6726 7.93514L10.632 8.0111L9.82817 9.35329H11.4617C12.0118 9.35329 12.3621 9.92261 12.1401 10.4057L12.1003 10.4809L10.6327 12.9278C10.5369 13.091 10.3819 13.2112 10.1998 13.2633C10.0178 13.3154 9.82275 13.2955 9.655 13.2077C9.48724 13.12 9.35966 12.9711 9.29869 12.7918C9.23771 12.6126 9.248 12.4168 9.32743 12.2449L9.36799 12.1689L10.1718 10.8275H8.53834C8.41377 10.8275 8.29118 10.7963 8.18181 10.7367C8.07243 10.677 7.97975 10.5909 7.91225 10.4862C7.84475 10.3815 7.80458 10.2616 7.79543 10.1374C7.78628 10.0131 7.80844 9.88858 7.85987 9.77512L7.89969 9.69916L9.36799 7.25224Z" fill={color} />
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

function ChartIcon({ color = "black" }: { color?: string }) {
  return (
    <div className="size-[20px] shrink-0 flex items-center justify-center">
      <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </div>
  );
}

function ContractIcon({ color = "black" }: { color?: string }) {
  return (
    <div className="size-[20px] shrink-0 flex items-center justify-center">
      <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h4m5 4H6a2 2 0 01-2-2V4a2 2 0 012-2h7.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V20a2 2 0 01-2 2z" />
      </svg>
    </div>
  );
}

function FeatureIcon({ type, color }: { type: "branch" | "check" | "flash" | "zdr" | "slack" | "chart" | "contract"; color?: string }) {
  if (type === "branch") return <BranchIcon color={color} />;
  if (type === "flash") return <FlashIcon color={color} />;
  if (type === "zdr") return <ZdrIcon color={color} />;
  if (type === "slack") return <SlackIcon color={color} />;
  if (type === "chart") return <ChartIcon color={color} />;
  if (type === "contract") return <ContractIcon color={color} />;
  return <CheckIcon stroke={color || "#100F09"} />;
}

interface FeatureItem {
  text: React.ReactNode;
  icon: "branch" | "check" | "flash" | "zdr" | "slack" | "chart" | "contract";
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
      <div className="h-[28px] sm:h-[34px] py-[4px] sm:py-[6px] px-1.5 text-center flex items-center justify-center gap-[10px] shrink-0 overflow-hidden">
        <p className={`font-['DM_Sans',sans-serif] font-medium text-[12px] sm:text-[13px] leading-[20px] whitespace-nowrap truncate ${
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
              <div className="flex items-center h-full">
                <span className="font-['DM_Sans',sans-serif] font-bold text-[28px] sm:text-[38px] leading-[32px] sm:leading-[44px] text-[#100F09]">Custom</span>
              </div>
            ) : (
              <>
                <div className="flex items-start">
                  <span className="font-['DM_Mono',monospace] font-medium text-[16px] sm:text-[20px] leading-[18px] sm:leading-[22px] text-[#100F09] pt-[2px] sm:pt-[4px] pr-[2px]">$</span>
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[28px] sm:text-[40px] leading-[32px] sm:leading-[44px] text-[#100F09]">{price}</span>
                </div>
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
              </>
            )}
          </div>
        </div>

        {/* Button Text Block */}
        <div className="h-auto sm:h-[260px] p-[16px_16px] sm:p-[30px_24px] flex flex-col justify-between gap-[16px] sm:gap-[30px] box-border shrink-0">
          {/* List */}
          <ul className="h-auto sm:h-[132px] flex flex-col gap-[12px] list-none p-0 m-0 w-full">
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

function EnterpriseCard({ plan }: { plan: { title: string; subtitle: string; price: string; period?: string; features: FeatureItem[]; buttonText: string; buttonHref?: string; } }) {
  return (
    <div className="w-full relative rounded-[16px] overflow-hidden bg-white border border-[#D1D1D1] hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out cursor-pointer box-border p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 isolate">
      {/* Bottom Ambient Glow Layer per Figma spec (X: -150px, Y: 185.73px) */}
      <div className="absolute left-[-150px] top-[185.73px] w-[918.47px] h-[78.27px] pointer-events-none z-0 opacity-60 overflow-visible">
        {/* Vector 10: #70FE7E glow */}
        <div className="absolute w-[738.01px] h-[68.27px] left-[84.54px] bottom-[19px] bg-[#70FE7E] blur-[50px] pointer-events-none rounded-full" />
        {/* Vector 11: #DDFE70 glow */}
        <div className="absolute w-[738.01px] h-[68.27px] left-[164.71px] bottom-[29px] bg-[#DDFE70] blur-[50px] pointer-events-none rounded-full -scale-x-100" />
      </div>

      {/* Left: Crown Icon + Title & Custom Price (Custom left-aligned with Enterprise text) */}
      <div className="relative z-10 flex items-start justify-center sm:justify-start gap-2 shrink-0 min-w-[200px]">
        <svg className="size-[22px] shrink-0 mt-[1px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.42 3C17.7725 3.00011 18.1188 3.09341 18.4236 3.27042C18.7285 3.44744 18.9811 3.70189 19.156 4.008L22.49 9.84C22.7076 10.2209 22.7939 10.6627 22.7358 11.0974C22.6776 11.5322 22.4781 11.9358 22.168 12.246L12.885 21.529C12.7689 21.6451 12.6311 21.7372 12.4794 21.8001C12.3278 21.8629 12.1652 21.8952 12.001 21.8952C11.8368 21.8952 11.6743 21.8629 11.5226 21.8001C11.3709 21.7372 11.2331 21.6451 11.117 21.529L1.834 12.246C1.52392 11.9358 1.32443 11.5322 1.26624 11.0974C1.20806 10.6627 1.29441 10.2209 1.512 9.84L4.845 4.007C5.0199 3.70123 5.27246 3.44707 5.57712 3.27024C5.88174 3.09341 6.22774 3.00019 6.58 3H17.42ZM16.707 9.293C16.5195 9.10553 16.2652 9.00021 16 9.00021C15.7348 9.00021 15.4805 9.10553 15.293 9.293L12 12.586L8.706 9.293C8.61476 9.19749 8.50441 9.12131 8.38241 9.0689C8.2604 9.01649 8.12918 8.9889 7.9964 8.98775C7.86362 8.9866 7.73195 9.0119 7.60905 9.06218C7.48615 9.11246 7.3745 9.18671 7.28061 9.28061C7.18671 9.3745 7.11246 9.48615 7.06218 9.60905C7.0119 9.73194 6.9866 9.86362 6.98775 9.9964C6.98891 10.1292 7.01649 10.2604 7.0689 10.3824C7.12131 10.5044 7.19749 10.6148 7.293 10.707L11.116 14.53C11.2321 14.6461 11.3699 14.7382 11.5216 14.8011C11.6733 14.8639 11.8358 14.8962 12 14.8962C12.1642 14.8962 12.3268 14.8639 12.4784 14.8011C12.6301 14.7382 12.7679 14.6461 12.884 14.53L16.707 10.707C16.8945 10.5195 16.9998 10.2652 16.9998 10C16.9998 9.73484 16.8945 9.48053 16.707 9.293Z" fill="url(#paint0_linear_enterprise_gold)"/>
          <defs>
            <linearGradient id="paint0_linear_enterprise_gold" x1="21.8665" y1="3.6622" x2="7.15156" y2="21.2212" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFE7B1"/>
              <stop offset="0.641295" stopColor="#C6A55A"/>
              <stop offset="1" stopColor="#BB9A4C"/>
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col gap-1.5 text-center sm:text-left">
          <h3 className="font-['Fraunces',serif] font-semibold text-[24px] leading-none text-[#100F09]">
            {plan.title}
          </h3>
          <div className="flex items-baseline justify-center sm:justify-start gap-2 pt-0.5">
            <span className="font-['DM_Sans',sans-serif] font-bold text-[32px] leading-none text-[#100F09]">Custom</span>
          </div>
        </div>
      </div>

      {/* Center: Features Grid (Column-first flow: 3 in Col 1, 2 in Col 2) */}
      <ul className="relative z-10 grid grid-cols-1 sm:grid-flow-col sm:grid-rows-3 sm:grid-cols-2 gap-x-8 gap-y-3 list-none p-0 m-0 flex-1 max-w-[600px]">
        {plan.features.map((feat, i) => (
          <li key={i} className="flex items-center gap-2.5 text-[14px] font-['DM_Sans',sans-serif] text-[#100F09]">
            <FeatureIcon type={feat.icon} color="#039855" />
            <span>{feat.text}</span>
          </li>
        ))}
      </ul>

      {/* Right: Contact Sales CTA */}
      <div className="relative z-10 shrink-0 w-full md:w-auto">
        <a
          href={plan.buttonHref || "mailto:support@octen.ai?subject=Octen%20Enterprise%20QPS%20Plan%20Inquiry"}
          className="w-full md:w-auto min-w-[180px] h-[44px] px-6 rounded-full bg-[#100F09] text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] flex items-center justify-center btn-dark-hover hover:-translate-y-[1px] active:scale-[0.96] transition-all duration-200 ease-out select-none focus-visible:ring-2 focus-visible:ring-[#039855] focus-visible:outline-none box-border"
        >
          {plan.buttonText}
        </a>
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
      subtitle: "Evaluation & Testing",
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
      subtitle: "Personal Projects",
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
      subtitle: "Early Production",
      price: "2,099",
      originalPrice: "$2,999",
      discountBadge: "30% Off",
      isPopular: true,
      features: [
        { text: <>Up to <strong className="font-bold">50 QPS</strong> Limit</>, icon: "branch" },
        { text: "Dedicated priority queue", icon: "check" },
        { text: "Guaranteed throughput and SLA", icon: "flash" },
        { text: "Standard email support", icon: "check" }
      ],
      buttonText: "Subscribe"
    },
    {
      title: "Pro",
      subtitle: "Scaling Production",
      price: "13,999",
      features: [
        { text: <>Up to <strong className="font-bold">200 QPS</strong> Limit</>, icon: "branch" },
        { text: "Dedicated priority queue", icon: "check" },
        { text: "Guaranteed throughput and SLA", icon: "flash" },
        { text: "Standard email support", icon: "check" }
      ],
      buttonText: "Subscribe"
    },
    {
      title: "Scale",
      subtitle: "High Throughput",
      price: "33,999",
      features: [
        { text: <>Up to <strong className="font-bold">500 QPS</strong> Limit</>, icon: "branch" },
        { text: "Dedicated priority queue", icon: "check" },
        { text: "Guaranteed throughput and SLA", icon: "flash" },
        { text: "Standard email support", icon: "check" }
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
        { text: "Guaranteed throughput and SLA", icon: "flash" },
        { text: "Custom data tracking", icon: "chart" },
        { text: "Custom MSA and DPA", icon: "contract" }
      ],
      buttonText: "Contact Sales",
      buttonHref: "mailto:support@octen.ai?subject=Octen%20Enterprise%20QPS%20Plan%20Inquiry"
    }
  ];

  return (
    <div id="qps-plans" className="content-stretch flex flex-col gap-[24px] sm:gap-[36px] items-center pb-[60px] sm:pb-[120px] pt-[40px] sm:pt-[60px] px-4 relative shrink-0 w-full max-w-[1312px] box-border">
      {/* Title Header */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4">
        <h2 className="font-['Fraunces',serif] font-bold text-[28px] sm:text-[44px] leading-[1.15] sm:leading-[48px] text-[#09090b]">
          QPS Plan
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#5d605b] max-w-[680px]">
          Guaranteed QPS limit and throughput SLA
        </p>
      </div>

      {/* Cards Wrapper with 16px vertical gap between Row 1 and Enterprise Card */}
      <div className="flex flex-col gap-[16px] w-full">
        {/* Row 1: First 5 cards (Free, Base, Startup, Pro, Scale) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[12px] xl:gap-[16px] w-full">
          {plans.slice(0, 5).map((p, idx) => (
            <PlanCardItem key={idx} {...p} cardWidthClass="w-full" />
          ))}
        </div>

        {/* Row 2: 6th Enterprise Custom Card occupying its own row */}
        <div className="w-full">
          <EnterpriseCard plan={plans[5]} />
        </div>
      </div>
    </div>
  );
}
