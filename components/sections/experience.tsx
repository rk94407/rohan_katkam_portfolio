// components/WorkExperience.tsx
"use client";

import { experiences } from "@/lib/workExperience";
import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <div className="relative max-w-4xl mx-auto p-4 sm:p-8">
      {/* Title */}
      <div className="flex flex-col items-center">
        <motion.h1
          className="
            text-3xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            xl:text-6xl
            font-bold  
            text-center 
            mb-12
            sm:mb-16
          "
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          My Work Experience
        </motion.h1>
      </div>

      {/* Timeline */}
      <div className="relative">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex justify-center">
            {/* Timeline vertical line (hidden on mobile) */}
            <motion.div
              className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 w-px sm:w-0.5 bg-gradient-to-b from-gray-400 to-gray-400"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              style={{ zIndex: 0 }}
            />

            {/* Timeline entry */}
            <motion.div
              className="relative mb-10 sm:mb-16 last:mb-0 flex flex-col items-center sm:flex-row sm:justify-center text-center sm:text-left"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {exp.dotColor === "📚" ? (
                <div className="flex flex-col items-center">
                  {/* Mobile line above the book */}
                  <div className="block sm:hidden w-px h-4 bg-gray-400 mb-1" />

                  <span className="text-3xl sm:text-4xl">{exp.dotColor}</span>

                  {/* Book description (no bullets) */}
                  <div className="text-gray-600 text-xs sm:text-sm leading-relaxed dark:text-gray-300 space-y-2 text-center sm:text-left max-w-md">
                    {exp.description.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>

                  {/* Mobile line below the book */}
                  <div className="block sm:hidden w-px h-4 bg-gray-400 mb-5" />
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row w-full max-w-3xl items-center text-center sm:text-left hover:scale-[1.05] transition-transform duration-300 relative z-10">
                  {/* Left side */}
                  <div className="w-full sm:w-1/2 sm:pr-8 sm:text-right mb-1 sm:mb-0">
                    <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-1 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm dark:text-gray-300 mb-2">
                      {exp.period}
                    </p>
                    {/* Mobile connector line from period to dot */}
                    <div className="block sm:hidden w-px h-4 bg-gray-400 mx-auto" />
                  </div>

                  {/* Center dot */}
                  <motion.div
                    className="relative z-20 flex flex-col items-center justify-center mb-3 sm:mb-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: 0.3,
                    }}
                    viewport={{ once: false }}
                  >
                    <motion.div
                      className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${exp.dotColor} border-2 sm:border-4 border-white shadow-md sm:shadow-lg`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
                    />
                    {/* Mobile connector line from dot to role */}
                    <div className="block sm:hidden w-px h-4 bg-gray-400" />
                  </motion.div>

                  {/* Right side */}
                  <div className="w-full sm:w-1/2 sm:pl-8 mb-5 mt-5">
                    <h4 className="text-base sm:text-xl font-semibold text-gray-800 mb-4 dark:text-white">
                      {exp.role}
                    </h4>
                    <ul className="text-gray-600 text-xs sm:text-sm leading-relaxed dark:text-gray-300 mb-4 list-disc list-inside space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
