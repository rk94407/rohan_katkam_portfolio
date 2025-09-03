import ScrambledText from "@/components/animations/scramble-text";
import { useEffect, useState } from "react";

const ResponsiveScrambledText = () => {
  const [radius, setRadius] = useState(100);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadius(50); // smaller radius for mobile
      } else {
        setRadius(100); // default for desktop
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left w-full md:w-1/2">
      <ScrambledText
        className="scrambled-text-demo text-black dark:text-white text-justify px-4 md:px-0"
        radius={radius}
        duration={1.2}
        speed={0.5}
        scrambleChars={".: "}
        style={{ lineHeight: "1.6" }}
      >
        <p className="text-center md:text-left text-base sm:text-lg md:text-xl lg:text-2xl">
          I am Rohan Katkam, Full Stack Developer with 1.5+ years of experience
          designing and delivering scalable web applications using modern
          JavaScript frameworks. Skilled in building end-to-end solutions with
          React.js, Node.js, and cloud technologies. Adept at Agile
          methodologies, with proven ability to lead cross-functional teams and
          integrate AI-driven features that enhance user engagement by up to
          30%.
        </p>
      </ScrambledText>
    </div>
  );
};

export default ResponsiveScrambledText;
