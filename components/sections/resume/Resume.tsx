"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";

const SmartFloatingResumeButton = () => {
  const [show, setShow] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("about")?.offsetHeight || 0;
      const contactOffset = document.getElementById("contact")?.offsetTop || 0;
      const scrollY = window.scrollY + window.innerHeight / 2;

      // show only when between hero & contact
      if (scrollY > heroHeight && scrollY < contactOffset) {
        setShow(true);

        // clear old timeout if scrolling continues
        if (scrollTimeout) clearTimeout(scrollTimeout);

        // hide after 1.5s of no scrolling
        const timeout = setTimeout(() => setShow(false), 1500);
        setScrollTimeout(timeout);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  const handleClick = () => {
    window.open("/Rohan_Katkam_FSD.pdf", "_blank", "noopener,noreferrer");
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
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-base text-white bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 cursor-pointer"
        >
          <ExternalLinkIcon /> Resume
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default SmartFloatingResumeButton;
