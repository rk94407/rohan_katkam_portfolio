"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";

const SmartFloatingResumeButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("about")?.offsetHeight || 0;
      const contactOffset = document.getElementById("contact")?.offsetTop || 0;
      const scrollY = window.scrollY + window.innerHeight / 2;

      // Show after Hero section, hide near contact/footer
      setShow(scrollY > heroHeight && scrollY < contactOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.open("/Rohan_Katkam.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          whileHover={{ scale: 1.05 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 text-black font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-base bg-white dark:bg-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ExternalLinkIcon /> Resume
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default SmartFloatingResumeButton;
