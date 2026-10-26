"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      sessionStorage.getItem("urbanity-loaded") ||
      window.location.search.includes("nopreload")
    ) {
      return;
    }

    const startTimer = setTimeout(() => {
      setIsLoading(true);
    }, 0);

    const endTimer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("urbanity-loaded", "true");
    }, 1400);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none">
          {/* Split Background Layers */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#131313] z-10"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#131313] z-10"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Logo & Content Container */}
          <div className="relative z-30 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)", transition: { duration: 0.4 } }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-24 h-24 sm:w-28 sm:h-28"
            >
              <Image
                src="/logo.png"
                alt="Urbanity Salon Logo"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(201,168,76,0.35)]"
                priority
              />
            </motion.div>

            {/* Subtle Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.4 } }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-center"
            >
              <span className="font-display text-[15px] sm:text-[18px] tracking-[0.35em] uppercase text-[#e5e2e1] block font-light">
                URBANITY SALON
              </span>
              <span className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#e6c364] block mt-1 font-medium">
                HAIR ATELIER &amp; PRIVÉ
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
