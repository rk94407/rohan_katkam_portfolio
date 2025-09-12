"use client";

import { motion } from "framer-motion";
import TextType from "@/components/animations/TextType";

export default function HeroSubtitle() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <TextType
        text={["Full Stack Developer", "Software Engineer", "UI/UX Designer"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="text-6xl lg:text-9xl font-bold text-center text-black bg-amber-200 px-4 py-12 rounded-lg border-4 border-black dark:border-4 dark:border-white"
      />
    </motion.div>
  );
}