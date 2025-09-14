import AboutSection from "@/components/about";
import Header from "@/components/common/header";
import ExperienceSection from "@/components/experience";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
