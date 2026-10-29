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
        I am Rohan Katkam, a <strong>Full-Stack Software Engineer</strong> with
        nearly <strong>5 years</strong> of experience designing, building, and
        integrating API-based applications with React, TypeScript, Java (Spring
        Boot), Python, and Node.js. I work with REST APIs, microservices,
        real-time WebSockets, and CI/CD with Docker and Kubernetes on AWS, and I
        integrate AI with LLMs, RAG, and LangChain. I collaborate closely with
        product, UX, QA, and DevOps teams in agile environments.
      </p>
    </motion.div>
  );
};

export default ResponsiveScrambledText;
