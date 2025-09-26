"use client";

import { useEffect, useState, ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollToTopButtonProps {
  /** Scroll threshold in pixels to show the button */
  threshold?: number;
  /** Background color of the button (overrides default light/dark) */
  bgColor?: string;
  /** Text/icon color (overrides default light/dark) */
  textColor?: string;
  /** Hover scale effect */
  hoverScale?: number;
  /** Position from bottom */
  bottom?: string;
  /** Position from right */
  right?: string;
  /** Additional custom classes */
  className?: string;
  /** Icon component to use inside the button */
  icon?: ReactNode;
}

export default function ScrollToTopButton({
  threshold = 300,
  bgColor,
  textColor,
  hoverScale = 1.1,
  bottom = "bottom-6",
  right = "right-6",
  className = "",
  icon,
}: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Default light/dark colors if props are not provided
  const defaultBg = bgColor ?? "bg-black dark:bg-white";
  const defaultText = textColor ?? "text-white dark:text-black";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scrollToTop"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`fixed ${bottom} ${right} z-50 p-3 rounded-full shadow-lg 
                      ${defaultBg} ${defaultText} transition transform 
                      hover:scale-[${hoverScale}] ${className} cursor-pointer`}
          aria-label="Scroll to top"
        >
          {icon ?? <ArrowUp className="w-6 h-6" />}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
