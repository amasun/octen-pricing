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

function ChartIcon({ color = "#039855" }: { color?: string }) {
  return (
    <div className="size-[20px] shrink-0 flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.63715 3.06392C9.01725 2.73995 9.50034 2.56201 9.99977 2.56201C10.4992 2.56201 10.9823 2.73995 11.3624 3.06392L12.3063 3.86847C12.4186 3.96424 12.5583 4.02208 12.7054 4.03372L13.9413 4.13175C14.4391 4.17145 14.9065 4.38723 15.2597 4.74037C15.6128 5.09351 15.8286 5.56091 15.8683 6.05875L15.9663 7.29534C15.9781 7.44223 16.036 7.58165 16.1316 7.69376L16.9361 8.63766C17.2601 9.01776 17.438 9.50085 17.438 10.0003C17.438 10.4997 17.2601 10.9828 16.9361 11.3629L16.1316 12.3068C16.036 12.4189 15.9781 12.5583 15.9663 12.7052L15.8683 13.9411C15.8286 14.4389 15.6128 14.9064 15.2597 15.2595C14.9065 15.6126 14.4391 15.8284 13.9413 15.8681L12.7047 15.9661C12.5577 15.9781 12.4183 16.0362 12.3063 16.1321L11.3624 16.9359C10.9823 17.2599 10.4992 17.4379 9.99977 17.4379C9.50034 17.4379 9.01725 17.2599 8.63715 16.9359L7.69325 16.1321C7.58114 16.0365 7.44172 15.9786 7.29483 15.9668L6.05894 15.8681C5.5611 15.8284 5.0937 15.6126 4.74056 15.2595C4.38742 14.9064 4.17164 14.4389 4.13194 13.9411L4.03391 12.7052C4.02207 12.558 3.96398 12.4183 3.86796 12.3061L3.06411 11.3622C2.74033 10.9822 2.5625 10.4992 2.5625 9.99993C2.5625 9.50066 2.74033 9.01771 3.06411 8.63766L3.86796 7.69376C3.96373 7.58146 4.02157 7.44177 4.03321 7.29464L4.13194 6.05875C4.1718 5.56104 4.38765 5.0938 4.74077 4.7408C5.0939 4.3878 5.56122 4.17213 6.05894 4.13245L7.29483 4.03442C7.44196 4.02278 7.58165 3.96494 7.69395 3.86917L8.63715 3.06392ZM10.4542 4.12965C10.3275 4.02172 10.1665 3.96245 10.0001 3.96245C9.8337 3.96245 9.67271 4.02172 9.54603 4.12965L8.60214 4.9349C8.26543 5.22144 7.84691 5.39443 7.40616 5.42925L6.17028 5.52799C6.00441 5.54127 5.84869 5.61318 5.73103 5.73084C5.61337 5.8485 5.54146 6.00422 5.52818 6.17009L5.42944 7.40667C5.39428 7.84726 5.22104 8.26552 4.93439 8.60195L4.12914 9.54584C4.02121 9.67252 3.96194 9.83351 3.96194 9.99993C3.96194 10.1664 4.02121 10.3273 4.12914 10.454L4.93439 11.3979C5.22104 11.7343 5.39428 12.1526 5.42944 12.5932L5.52748 13.8298C5.54078 13.9958 5.61279 14.1516 5.7306 14.2692C5.8484 14.3869 6.00428 14.4588 6.17028 14.4719L7.40616 14.5706C7.84699 14.6056 8.26552 14.7789 8.60214 15.0657L9.54603 15.8709C9.67271 15.9788 9.8337 16.0381 10.0001 16.0381C10.1665 16.0381 10.3275 15.9788 10.4542 15.8709L11.3981 15.0657C11.7345 14.779 12.1528 14.6058 12.5934 14.5706L13.8293 14.4726C13.9954 14.4594 14.1513 14.3875 14.2692 14.2697C14.387 14.1519 14.4589 13.9959 14.4721 13.8298L14.5701 12.5932C14.6051 12.1528 14.7788 11.7347 15.0659 11.3979L15.8704 10.454C15.9783 10.3273 16.0376 10.1664 16.0376 9.99993C16.0376 9.83351 15.9783 9.67252 15.8704 9.54584L15.0652 8.60195C14.7788 8.26543 14.6058 7.84717 14.5708 7.40667L14.4721 6.17009C14.4588 6.00411 14.3868 5.8483 14.2689 5.73063C14.1511 5.61295 13.9953 5.54111 13.8293 5.52799L12.5934 5.42995C12.1527 5.39459 11.7344 5.22111 11.3981 4.9342L10.4542 4.12965ZM11.9807 7.02925L12.9708 8.01936L8.01955 12.9713L7.02874 11.9805L11.9807 7.02925ZM8.76179 8.7623C8.6649 8.86261 8.549 8.94263 8.42085 8.99768C8.29271 9.05272 8.15489 9.0817 8.01542 9.08291C7.87596 9.08412 7.73765 9.05755 7.60857 9.00473C7.47949 8.95192 7.36222 8.87393 7.2636 8.77531C7.16498 8.6767 7.08699 8.55942 7.03418 8.43034C6.98137 8.30126 6.9548 8.16296 6.95601 8.02349C6.95722 7.88403 6.98619 7.74621 7.04124 7.61806C7.09629 7.48992 7.1763 7.37402 7.27662 7.27713C7.47472 7.08581 7.74003 6.97994 8.01542 6.98233C8.29082 6.98473 8.55425 7.09519 8.74899 7.28993C8.94373 7.48467 9.05419 7.7481 9.05659 8.02349C9.05898 8.29889 8.95311 8.5642 8.76179 8.7623ZM11.2378 12.7234C11.3346 12.8237 11.4505 12.9038 11.5787 12.9588C11.7068 13.0139 11.8447 13.0428 11.9841 13.044C12.1236 13.0453 12.2619 13.0187 12.391 12.9659C12.5201 12.9131 12.6373 12.8351 12.7359 12.7365C12.8346 12.6378 12.9125 12.5206 12.9654 12.3915C13.0182 12.2624 13.0447 12.1241 13.0435 11.9846C13.0423 11.8452 13.0133 11.7073 12.9583 11.5792C12.9033 11.4511 12.8232 11.3352 12.7229 11.2383C11.065 11.4516 10.9546 11.7128 10.9508 11.9863C10.9469 12.2598 11.0499 12.524 11.2378 12.7227" fill={color || "#039855"}/>
      </svg>
    </div>
  );
}

function ContractIcon({ color = "#039855" }: { color?: string }) {
  return (
    <div className="size-[20px] shrink-0 flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 16.3325C13.4974 16.3325 16.3325 13.4974 16.3325 10C16.3325 6.50265 13.4974 3.66748 10 3.66748C6.50265 3.66748 3.66748 6.50265 3.66748 10C3.66748 13.4974 6.50265 16.3325 10 16.3325Z" stroke={color || "#039855"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.18555 10L9.29639 12.1109L12.347 8.59521" stroke={color || "#039855"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function FeatureIcon({ type, color }: { type?: "branch" | "check" | "flash" | "zdr" | "slack" | "chart" | "contract" | "none"; color?: string }) {
  if (!type || type === "none") return null;
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
  icon?: "branch" | "check" | "flash" | "zdr" | "slack" | "chart" | "contract" | "none";
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
      className={`${cardWidthClass} ${
        isPopular ? "h-auto sm:h-[438px] sm:-mt-[28px]" : "h-auto sm:h-[410px]"
      } relative rounded-[16px] flex flex-col justify-between overflow-hidden box-border border transition-all duration-200 ${
        isPopular 
          ? "bg-[rgba(139,239,149,0.5)] border-[#6DCAA0] hover:border-[#4EAF82] hover:shadow-[0_4px_24px_rgba(111,209,165,0.25)] z-10" 
          : "bg-white border-[rgba(26,26,25,0.12)] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
      }`}
    >
      {/* Top Green Header Tag - Only for Most Popular card (28px height per Figma spec) */}
      {isPopular && (
        <div className="h-[28px] py-0 px-1.5 text-center flex items-center justify-center gap-[10px] shrink-0 overflow-hidden">
          <p className="font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[13px] whitespace-nowrap truncate text-[#276533] uppercase tracking-wider">
            Recommended Plan
          </p>
        </div>
      )}

      {/* Inner White Card Body (306px wide, 410px height, 12px rounded per Figma spec) */}
      <div className={`bg-white rounded-[12px] h-auto sm:h-[410px] flex flex-col justify-between p-0 m-0 overflow-hidden box-border`}>
        {/* Title Block (30px 20px padding, 150px height per Figma spec) */}
        <div className="h-auto sm:h-[150px] p-[20px_16px] sm:p-[30px_20px] flex flex-col justify-between gap-[10px] sm:gap-[20px] border-b border-[rgba(26,26,25,0.12)] box-border shrink-0">
          <div className="flex items-center gap-[10px] h-[24px]">
            <h3 className="font-['Fraunces',serif] font-semibold text-[24px] leading-[24px] text-[#100F09]">
              {title}
            </h3>
            {discountBadge && (
              <span className="h-[24px] px-[8px] bg-[#70FE7E] rounded-[6px] flex items-center justify-center font-['JetBrains_Mono',monospace] font-medium text-[13px] leading-[13px] text-[#100F09] whitespace-nowrap shrink-0">
                {discountBadge}
              </span>
            )}
          </div>

          {/* Price Frequency (Top-aligned $ sign with original / month baseline) */}
          <div className="flex flex-row items-baseline gap-[6px] min-h-[44px]">
            {price === "Custom" ? (
              <div className="flex items-center h-full">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[28px] sm:text-[40px] leading-[44px] text-[#100F09]">Custom</span>
              </div>
            ) : (
              <div className="flex flex-row flex-wrap items-baseline gap-x-[6px] gap-y-0">
                <div className="flex items-baseline">
                  <span className="font-['DM_Mono',monospace] font-medium text-[18px] sm:text-[20px] leading-none text-[#100F09] pr-[2px] select-none self-start pt-[6px] sm:pt-[4px]">$</span>
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[32px] sm:text-[40px] leading-[44px] text-[#100F09]">{price}</span>
                </div>
                {originalPrice && (
                  <span className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#9C9CA4] line-through whitespace-nowrap">
                    {originalPrice}
                  </span>
                )}
                <span className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#57575E] whitespace-nowrap">
                  {period}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Button Text Block (30px 20px padding, 260px height per Figma spec) */}
        <div className="h-auto sm:h-[260px] p-[20px_16px] sm:p-[30px_20px] flex flex-col justify-between gap-[16px] sm:gap-[30px] box-border shrink-0">
          {/* List (116px height, 12px gap per Figma spec) */}
          <ul className="h-auto sm:h-[116px] flex flex-col gap-[12px] list-none p-0 m-0 w-full">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-[4px] text-[14px] font-['DM_Sans',sans-serif] font-normal leading-[140%] text-[#100F09]">
                <FeatureIcon type={feat.icon} />
                <span className={`flex-1 ${feat.icon && feat.icon !== "none" ? "ml-1" : ""}`}>{feat.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA Link / Button (40px height, 17px px, Inter 600 per Figma spec) */}
          <a
            href={buttonHref || "https://octen.ai/platform/billing"}
            target={buttonHref?.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`w-full h-[40px] px-[17px] rounded-[9999px] flex items-center justify-center font-['Inter',sans-serif] font-semibold text-[16px] leading-[24px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] active:scale-[0.97] transition-all duration-200 ease-out select-none focus-visible:ring-2 focus-visible:ring-[#039855] focus-visible:outline-none box-border ${
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
    <div className="w-full relative rounded-[16px] overflow-hidden bg-white border border-[#D1D1D1] hover:border-[#B5B5B0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200 box-border p-6 sm:p-8 sm:pr-6 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 isolate">
      {/* Ambient Glow Layer: Original Figma spec for PC desktop (md:), bottom edge alignment for mobile */}
      <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 bottom-0 md:bottom-auto md:left-[-150px] md:top-[185.73px] w-full md:w-[918.47px] h-[60px] md:h-[78.27px] pointer-events-none z-0 opacity-60 overflow-visible">
        {/* Vector 10: #70FE7E glow */}
        <div className="absolute w-[80%] md:w-[738.01px] h-[50px] md:h-[68.27px] left-[10%] md:left-[84.54px] bottom-[-20px] md:bottom-[19px] bg-[#70FE7E] blur-[45px] md:blur-[50px] pointer-events-none rounded-full" />
        {/* Vector 11: #DDFE70 glow */}
        <div className="absolute w-[80%] md:w-[738.01px] h-[50px] md:h-[68.27px] right-[10%] md:right-auto md:left-[164.71px] bottom-[-20px] md:bottom-[29px] bg-[#DDFE70] blur-[45px] md:blur-[50px] pointer-events-none rounded-full md:-scale-x-100" />
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

      {/* Center: Features Grid (Column-first flow: 3 in Col 1, 3 in Col 2) */}
      <ul className="relative z-10 grid grid-cols-1 sm:grid-flow-col sm:grid-rows-3 sm:grid-cols-2 gap-x-8 gap-y-3 list-none p-0 m-0 flex-1 max-w-[620px]">
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
          className="w-full md:w-auto min-w-[180px] h-[44px] px-6 rounded-full bg-[#100F09] text-white font-['DM_Sans',sans-serif] font-semibold text-[16px] flex items-center justify-center btn-dark-hover hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] active:scale-[0.97] transition-all duration-200 ease-out select-none focus-visible:ring-2 focus-visible:ring-[#039855] focus-visible:outline-none box-border"
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
      subtitle: "Evaluation",
      price: "0",
      features: [
        { text: <>Up to <strong className="font-bold">20 QPS</strong> Limit</>, icon: "branch" },
        { text: "Starts at 10 QPS. Add credits to unlock Base (up to 20 QPS)", icon: "none" }
      ],
      buttonText: "Start Free"
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
      buttonText: "Get started"
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
      buttonText: "Get started"
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
      buttonText: "Get started"
    },
    {
      title: "Enterprise",
      subtitle: "Custom scale & enterprise SLA",
      price: "Custom",
      period: "Tailored Plan",
      features: [
        { text: "Custom data", icon: "check" },
        { text: <><strong className="font-bold">1M+ QPS</strong></>, icon: "branch" },
        { text: "Zero Data Retention (ZDR)", icon: "zdr" },
        { text: "Custom SLA", icon: "check" },
        { text: "Dedicated Slack channel support", icon: "slack" },
        { text: "Volume discounts", icon: "chart" }
      ],
      buttonText: "Contact Sales",
      buttonHref: "mailto:support@octen.ai?subject=Octen%20Enterprise%20QPS%20Plan%20Inquiry"
    }
  ];

  return (
    <div className="content-stretch flex flex-col items-center gap-[24px] sm:gap-[36px] pb-[60px] sm:pb-[100px] mt-[60px] sm:mt-[120px] pt-0 relative shrink-0 w-full max-w-[1312px] px-4 box-border scroll-mt-[90px]" id="qps-plans">
      {/* Title Header */}
      <div className="text-center flex flex-col items-center gap-2 sm:gap-3 shrink-0 px-4">
        <h2 className="font-['Fraunces',serif] font-bold text-[28px] sm:text-[44px] leading-[1.15] sm:leading-[48px] text-[#09090b]">
          QPS Plan
        </h2>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-[22px] sm:leading-[26px] text-[#5d605b] max-w-[680px]">
          Pay as you go for usage. Add QPS when you need reserved search throughput.
        </p>
      </div>

      {/* Unified Parent Container for Row 1, Row 2, and Row 3 with gap=16 */}
      <div className="flex flex-col gap-[16px] w-full">
        {/* Row 1: First 4 merged cards (Free, Startup, Pro, Scale) in a 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] xl:gap-[16px] w-full pt-0 sm:pt-[28px] items-end">
          {plans.slice(0, 4).map((p, idx) => (
            <PlanCardItem key={idx} {...p} cardWidthClass="w-full" />
          ))}
        </div>

        {/* Row 2: 5th Enterprise Custom Card occupying its own row */}
        <div className="w-full">
          <EnterpriseCard plan={plans[4]} />
        </div>

        {/* Row 3: Merged Single Information Card matching exact updated copy */}
        <div className="w-full p-[20px] bg-[#F6F6F3] rounded-[16px] border border-[#E7E7E3] flex flex-col gap-[8px] font-['DM_Sans',sans-serif] box-border">
          {/* Top Row: Info Icon + Title */}
          <div className="flex flex-row items-center gap-[6px] w-full">
            <svg className="size-[16px] shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99995 10.6671V8.00039M7.99995 5.33372H8.00661M2.56661 5.74706C2.46931 5.30874 2.48425 4.85295 2.61005 4.42195C2.73585 3.99095 2.96844 3.59869 3.28626 3.28154C3.60407 2.96439 3.99682 2.73262 4.42808 2.60772C4.85935 2.48282 5.31517 2.46883 5.75328 2.56706C5.99442 2.18992 6.32661 1.87956 6.71925 1.66458C7.11188 1.4496 7.55231 1.33691 7.99995 1.33691C8.44758 1.33691 8.88801 1.4496 9.28064 1.66458C9.67328 1.87956 10.0055 2.18992 10.2466 2.56706C10.6854 2.46841 11.142 2.48233 11.5739 2.60753C12.0059 2.73274 12.3992 2.96515 12.7172 3.28316C13.0352 3.60117 13.2676 3.99444 13.3928 4.42639C13.518 4.85834 13.5319 5.31495 13.4333 5.75372C13.8104 5.99486 14.1208 6.32706 14.3358 6.71969C14.5507 7.11232 14.6634 7.55276 14.6634 8.00039C14.6634 8.44803 14.5507 8.88846 14.3358 9.28109C14.1208 9.67372 13.8104 10.0059 13.4333 10.2471C13.5315 10.6852 13.5175 11.141 13.3926 11.5723C13.2677 12.0035 13.0359 12.3963 12.7188 12.7141C12.4016 13.0319 12.0094 13.2645 11.5784 13.3903C11.1474 13.5161 10.6916 13.531 10.2533 13.4337C10.0125 13.8123 9.68 14.124 9.2867 14.3399C8.89339 14.5559 8.45196 14.6691 8.00328 14.6691C7.55459 14.6691 7.11316 14.5559 6.71986 14.3399C6.32656 14.124 5.9941 13.8123 5.75328 13.4337C5.31517 13.5319 4.85935 13.518 4.42808 13.3931C3.99682 13.2682 3.60407 13.0364 3.28626 12.7192C2.96844 12.4021 2.73585 12.0098 2.61005 11.5788C2.48425 11.1478 2.46931 10.692 2.56661 10.2537C2.18658 10.0132 1.87355 9.68051 1.65664 9.28653C1.43973 8.89256 1.32599 8.45013 1.32599 8.00039C1.32599 7.55065 1.43973 7.10822 1.65664 6.71425C1.87355 6.32028 2.18658 5.98756 2.56661 5.74706Z" stroke="#039855" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="text-[14px] leading-[21px] font-normal text-[#100F09]">
              Applies to <strong className="font-semibold text-[#0A0A0A]">Broad Search</strong> and <strong className="font-semibold text-[#0A0A0A]">Web Search</strong>.
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pl-[22px] w-full">
            <p className="text-[14px] leading-[23px] text-[#57575E] m-0">
              Extract, Embedding, Deep Research, and other APIs have their own rate limits, which a QPS Plan does not change &mdash; see{" "}
              <a href="https://docs.octen.ai/resources/rate-limits" target="_blank" rel="noopener noreferrer" className="text-[#039855] font-medium underline hover:text-[#027a44] transition-colors duration-150">
                rate limits
              </a>
              .
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
