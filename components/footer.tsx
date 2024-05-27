"use client";

import React, { useState, useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";
import { ContentCopy, CheckCircleOutlined } from "@mui/icons-material";
import Lottie from "react-lottie";
import ConfettiAnimation from "@/lib/confetti.json";
import { AnimatePresence, motion } from "framer-motion";

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);

  const { ref } = useSectionInView("Contact");

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
    <footer
      id="contact"
      ref={ref}
      className="mb-24 px-4 text-center text-gray-500 flex justify-center items-center flex-col mt-[4rem] sm:mt-[-15rem]"
    >
      <div className="h-[30rem] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-center flex flex-col max-w-[50rem]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]" />
        <h1 className="mb-8 text-[3rem] sm:text-[5rem] font-medium !leading-[1] text-black dark:text-white max-w-[50rem] text-center">
          <span className="font-semibold uppercase text-center">
            let&apos;s <span className="hero-gradient-text px-2">create</span>{" "}
            great things.
          </span>
        </h1>

        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2.5px] hover:scale-105 transition shadow-xl">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f37a1d_0%,#932cba_50%,#f37a1d_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-black px-10 py-1 text-lg font-medium text-black dark:text-white backdrop-blur-3xl">
            <a href={"https://calendly.com/cyrusburns/30min"}>Contact</a>
          </span>
        </button>
      </div>

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
