"use client";

import React from "react";
import { motion } from "framer-motion";

const ResponsiveScrambledText = () => {
  return (
    <motion.div
      className="flex flex-col items-center md:items-start md:text-left w-full md:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl px-4 md:px-0 select-none"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <p
        className="text-black dark:text-white"
        style={{ textAlign: "justify", lineHeight: "1.6" }}
      >
        I am Rohan Katkam, Full Stack Developer with 1.5+ years of experience
        designing and delivering scalable web applications using modern
        JavaScript frameworks. Skilled in building end-to-end solutions with
        React.js, Node.js, and cloud technologies. Adept at Agile methodologies,
        with proven ability to lead cross-functional teams and integrate
        AI-driven features that enhance user engagement by up to 30%.
      </p>
    </motion.div>
  );
};

export default ResponsiveScrambledText;
