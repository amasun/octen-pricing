import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/HeroSection";
import QpsPricingGrid from "../src/components/QpsPricingGrid";
import ApiExplorer from "../src/components/ApiExplorer";
import FaqSection from "../src/components/FaqSection";
import FooterSection from "../src/components/FooterSection";

export default function OctenAiInfrastructurePricing() {
  return (
    <div className="bg-[#090909] content-stretch flex flex-col items-center relative size-full min-h-screen overflow-x-hidden" data-name="Octen AI | Infrastructure Pricing">
      <Navbar />
      <main className="w-full flex flex-col items-center pt-[70px]">
        <HeroSection />
        <div className="w-full bg-white flex flex-col items-center text-[#100f09]">
          <QpsPricingGrid />
          <ApiExplorer />
          <FaqSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}