"use client";
import Particles from "@/components/animations/bg-particles";
// import TargetCursor from "@/components/animations/cursor-target";
import MagicBento from "@/components/animations/magic-bento";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import { ContactForm } from "@/components/sections/contact-form";
import PillNav from "@/components/features/navigation/pill-nav-bar";
import logo from "@/public/src/assets/logo.svg";

export default function Page() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Particles */}
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={["#000000", "#000000"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          sizeRandomness={1}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-center px-6 py-3 z-50 bg-transparent">
        <div className="flex-1 flex justify-center">
          <PillNav
            logo={logo}
            logoAlt="Company Logo"
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "#about" },
              // { label: "Services", href: "/services" },
              { label: "Projects", href: "#magic-bento" },
              { label: "Contact", href: "#contact" },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
        </div>
      </div>
      {/* Hero Section */}
      <div className="flex w-full items-center justify-center" id="about">
        <HeroSection />
      </div>

      <div
        className="flex items-center justify-center min-h-screen"
        id="magic-bento"
      >
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>

      {/* <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div id="contact" className="w-full max-w-sm md:max-w-6xl"> */}
      <ContactForm id="contact" />
      {/* </div>
      </div> */}
      {/* <div>
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

        <h1>Hover over the elements below</h1>
        <button className="cursor-target">Click me!</button>
        <div className="cursor-target">Hover target</div>
      </div> */}
      <div className="flex w-full items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
