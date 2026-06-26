import HeroSection from "@/components/sections/HeroSection";
import FeatureCards from "@/components/sections/FeatureCards";
import ResearchTimeline from "@/components/sections/ResearchTimeline";
import WaitlistCommunitySection from "@/components/sections/WaitlistCommunitySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <ResearchTimeline />
      <WaitlistCommunitySection />
    </>
  );
}
