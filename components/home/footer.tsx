"use client";

import React, { useState, useEffect } from "react";
import { ContentCopy, CheckCircleOutlined } from "@mui/icons-material";
import Lottie from "react-lottie";
import ConfettiAnimation from "@/lib/confetti.json";
import { AnimatePresence, motion } from "framer-motion";

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText("brightdev.dev@gmail.com");
    setIsCopied(true);
  };

  const lottieOptions = {
    loop: isCopied,
    autoplay: isCopied,
    width: 500,
    height: 500,
    animationData: ConfettiAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <footer className="mb-24 px-4 text-center text-gray-500 flex justify-center items-center flex-col">
      <small className="mb-2 block text-xs text-[#a3a3a7] mt-24">
        &copy; 2030 BRIGHT. All rights reserved.
      </small>
      <p className="text-xs text-[#a3a3a7]">
        <span className="font-semibold text-[#a3a3a7]">
          About this website:
        </span>{" "}
        built with React &amp; Next.js (App Router &amp; Server Actions),
        TypeScript, Tailwind CSS, Framer Motion, React Email &amp; Resend,
        Vercel hosting.
      </p>

      <div className="relative">
        <div className={`absolute -bottom-5 right-0 `}>
          {isCopied && <Lottie options={lottieOptions} />}
        </div>

        <button
          onClick={handleCopy}
          className="mt-10  rounded-lg flex justify-center items-center flex-row z-50 "
        >
          <AnimatePresence mode="wait">
            {isCopied ? (
              <motion.span
                key="copied"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.1 }}
                className="flex flex-row py-2 transition"
              >
                <CheckCircleOutlined
                  className="text-green-500 dark:text-green-400 mr-2 mt-[0.12rem]"
                  sx={{ fontSize: "1.2rem" }}
                />
                <p className="hero-gradient-text font-medium transition">
                  Email copied
                </p>
              </motion.span>
            ) : (
              <motion.span
                key="notCopied"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.1 }}
                className="flex flex-row py-2 transition"
              >
                <ContentCopy
                  className="text-[#a3a3a7] mr-2 mt-[0.12rem]"
                  sx={{ fontSize: "1.2rem" }}
                />
                <p className="hero-gradient-text font-medium transition">
                  brightdev.dev@gmail.com
                </p>
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </footer>
  );
}
