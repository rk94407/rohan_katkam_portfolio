"use client";

import React from "react";
import { motion } from "framer-motion";

const ResponsiveScrambledText = () => {
  return (
    <motion.div
      className="
        flex flex-col items-center text-center 
        lg:items-start lg:text-left 
        w-full lg:w-1/2 
        text-base sm:text-lg md:text-xl lg:text-2xl 
        px-4 md:px-0 select-none
      "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <p
        className="text-black dark:text-white text-center lg:text-justify"
        style={{ lineHeight: "1.6" }}
      >
        I am Rohan Katkam, a <strong>Full Stack Developer</strong> with{" "}
        <strong>1.5+ years</strong> of experience building scalable web
        applications. I specialize in React.js, Node.js, and cloud technologies,
        delivering end-to-end solutions that drive results. Experienced in Agile
        development and leading cross-functional teams, I also integrate
        AI-driven features to boost user engagement by up to 30%.
      </p>
    </motion.div>
  );
};

export default ResponsiveScrambledText;
