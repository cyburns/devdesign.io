import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

interface BrightTextProps {
  isNavOpen: boolean;
}

const BrightText = ({ isNavOpen }: BrightTextProps) => {
  return (
    <AnimatePresence mode="wait">
      {!isNavOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            stiffness: 100,
            damping: 10,
          }}
          className={cn(
            "z-10 inline-block relative text-left text-neutral-900"
          )}
          exit={{
            opacity: 0,
            x: -40,
            filter: "blur(8px)",
            display: "flex",
          }}
          key={1}
        >
          <motion.span
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.4,
            }}
            className="hero-gradient-text"
          >
            B
          </motion.span>
        </motion.div>
      )}
      {isNavOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            stiffness: 100,
            damping: 10,
          }}
          className={cn(
            "z-10 inline-block relative text-left text-neutral-900"
          )}
          exit={{
            opacity: 0,
            x: -40,
            filter: "blur(8px)",
            display: "flex",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.4,
            }}
            className="hero-gradient-text"
          >
            BRIGHT
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrightText;
