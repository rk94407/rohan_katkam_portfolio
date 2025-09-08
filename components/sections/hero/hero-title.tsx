"use client";

import { useEffect, useState } from "react";
import SplitText from "@/components/animations/splitting-text";

export default function HeroTitle() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // Reset animation when user scrolls back to top
        setKey((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <SplitText
        key={key} // <-- re-mounts component to trigger animation again
        text="Rohan Katkam"
        className="text-6xl lg:text-9xl font-bold text-center text-black dark:text-white"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </div>
  );
}
