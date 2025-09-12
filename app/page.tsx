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
import WorkExperience from "@/components/sections/experience";

import { motion, Easing } from "framer-motion";

// Variants for sections and children
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as Easing },
  },
};

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Particles */}
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={
            theme === "dark" ? ["#ffffff", "#cccccc"] : ["#000000", "#444444"]
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
        <div className="flex-1 flex justify-center">
          <PillNav
            logo={logo}
            logoAlt="Company Logo"
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Contact", href: "#contact" },
            ]}
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="var(--pill-color)"
            hoveredPillTextColor="var(--hovered-text-color)"
            pillTextColor="var(--pill-text-color)"
          />
        </div>
        <div className="ml-4 sm:flex items-center hidden">
          <ThemeToggle />
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex w-full items-center justify-center">
        <motion.div variants={childVariants}>
          <HeroSection />
        </motion.div>
      </section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="flex flex-col items-center justify-center w-full py-16 min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div variants={childVariants}>
          <WorkExperience />
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="flex flex-col items-center justify-center h-100px min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div variants={childVariants} style={{ position: "relative" }}>
          <Carousel
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover
            loop
            round={false}
          />
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="flex flex-col items-center justify-center w-full py-16 min-h-screen text-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div
          variants={childVariants}
          style={{ width: "80vw", height: "80vh" }}
        >
          <DomeGallery
            fit={0.5}
            minRadius={300}
            segments={35}
            grayscale={false}
            maxVerticalRotationDeg={10}
          />
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div variants={childVariants}>
          <ContactForm />
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.div
        className="flex w-full items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div variants={childVariants}>
          <Footer />
        </motion.div>
      </motion.div>

      <ScrollToTopButton />
    </div>
  );
}
