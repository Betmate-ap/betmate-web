import LandingNav from "./LandingNav";
import HeroSection from "./hero/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import CtaBanner from "./sections/CtaBanner";
import LandingFooter from "./sections/LandingFooter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNav />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaBanner />
      <LandingFooter />
    </div>
  );
}
