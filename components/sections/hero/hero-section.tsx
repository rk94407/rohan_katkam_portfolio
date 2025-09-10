// import { Example } from "@/components/animations/Example";
import HeroBio from "./hero-bio";
import HeroImageCard from "./hero-image-card";
import HeroSubtitle from "./hero-subtitle";
import HeroTitle from "./hero-title";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 w-full max-w-6xl mx-auto px-4 py-8">
      <HeroTitle />
      <HeroSubtitle />
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-center w-full gap-6 min-h-screen"
      >
        <HeroBio />
        <HeroImageCard />
      </section>
      {/* <Example /> */}
    </div>
  );
}
