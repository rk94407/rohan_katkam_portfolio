"use client";

import Particles from "@/components/animations/Particles";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero/hero-section";
import { ContactForm } from "@/components/sections/contact-form";

import logo from "@/public/src/assets/logo.svg";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "next-themes";
import ScrollToTopButton from "@/components/features/navigation/scroll-to-top-button";
import PillNav from "@/components/animations/PillNav";
import DomeGallery from "@/components/animations/DomeGallery";
import Carousel from "@/components/animations/Carousel";

export default function Page() {
  const { theme } = useTheme();
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Particles */}
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={
            theme === "dark"
              ? ["#ffffff", "#cccccc"] // bright particles on dark bg
              : ["#000000", "#444444"] // dark particles on light bg
          }
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
      <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 z-50 bg-transparent">
        {/* Logo + Nav */}
        <div className="flex-1 flex justify-center">
          <PillNav
            logo={logo}
            logoAlt="Company Logo"
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Contact", href: "#contact" },
            ]}
            // activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            // Light and Dark Mode Colors
            baseColor="#000000" // background stays transparent, controlled via Tailwind
            pillColor="var(--pill-color)"
            hoveredPillTextColor="var(--hovered-text-color)"
            pillTextColor="var(--pill-text-color)"
          />
        </div>

        {/* ✅ Theme Toggle Button */}
        <div className="ml-4 sm:flex items-center hidden">
          <ThemeToggle />
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex w-full items-center justify-center">
        <HeroSection />
      </section>

      {/* Projects Section */}
      <section
        className="flex items-center justify-center h-100px min-h-screen"
        id="projects"
      >
        <div style={{ position: "relative" }}>
          <Carousel
            // baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="flex items-center justify-center w-full py-16 min-h-screen text-2xl"
        id="skills"
      >
        <div style={{ width: "80vw", height: "80vh" }}>
          <DomeGallery
            fit={0.5}
            minRadius={300}
            segments={30}
            grayscale={false}
          />
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm id="contact" />

      {/* <Example /> */}

      {/* Footer */}
      <div className="flex w-full items-center justify-center">
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
