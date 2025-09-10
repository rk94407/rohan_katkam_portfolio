// import ScrambledText from "@/components/animations/ScrambleText";
// import TextPressure from "@/components/animations/TextPressure";
// import { useEffect, useState } from "react";

const ResponsiveScrambledText = () => {
  return (
    <div className="flex flex-col items-center md:items-start md:text-left w-full md:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl px-4 md:px-0">
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
    </div>
  );
};

export default ResponsiveScrambledText;