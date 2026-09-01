import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/HeroSection";
import QpsPricingGrid from "../src/components/QpsPricingGrid";
import EnterpriseSection from "../src/components/EnterpriseSection";
import ApiExplorer from "../src/components/ApiExplorer";
import FaqSection from "../src/components/FaqSection";
import CtaSection from "../src/components/CtaSection";
import FooterSection from "../src/components/FooterSection";

export default function OctenAiInfrastructurePricing() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full min-h-screen overflow-x-clip" data-name="Octen AI | Infrastructure Pricing">
      <Navbar />
      <main className="w-full flex flex-col items-center bg-white">
        <HeroSection />
        <div className="w-full bg-white flex flex-col items-center text-[#100f09]">
          <ApiExplorer />
          <QpsPricingGrid />
          <EnterpriseSection />
          <FaqSection />
        </div>
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
}