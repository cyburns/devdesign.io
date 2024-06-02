"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { useRouter } from "next/navigation";
import {
  HomeRounded,
  SearchRounded,
  AddBoxOutlined,
  MapsUgcOutlined,
  CreditCardOutlined,
  InsightsOutlined,
} from "@mui/icons-material";
import { cn } from "@/utils/cn";

const iconsArray = [
  <HomeRounded sx={{ fontSize: "2rem" }} key="icon1" />,
  <SearchRounded sx={{ fontSize: "2rem" }} key="icon2" />,
  <InsightsOutlined sx={{ fontSize: "2rem" }} key="icon5" />,
  <AddBoxOutlined sx={{ fontSize: "2rem" }} key="icon3" />,
  <CreditCardOutlined sx={{ fontSize: "2rem" }} key="icon5" />,
  <MapsUgcOutlined sx={{ fontSize: "2rem" }} key="icon4" />,
];

export default function Header() {
  const [isUser, setIsUser] = useState<User | null>(null);
  const [pathName, setPathName] = useState<string>("signup");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const router = useRouter();

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      FIREBASE_AUTH,
      (user: User | null) => {
        setIsUser(user);
        setPathName("profile");
      }
    );

    return () => unsubscribe();
  }, []);

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const currentWord = "BRIGHT";

  return (
    <header className="z-[999] fixed h-screen bg-white dark:bg-black">
      <aside>
        <nav
          className={`ml-5 border-r border-[#EFEFEF] dark:border-[#161616] h-screen transition-all duration-300 ${
            isNavOpen ? "w-64" : "w-[3.5rem]"
          }`}
          onMouseEnter={() => setIsNavOpen(true)}
          onMouseLeave={() => setIsNavOpen(false)}
        >
          <h1 className="text-[1rem] sm:text-[2.4rem] font-thin pt-8 mb-2">
            <span className="hero-gradient-text">
              {!isNavOpen && "B"}
              <AnimatePresence>
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
                      duration: 0.4,
                      stiffness: 100,
                      damping: 10,
                    }}
                    className={cn(
                      "z-10 inline-block relative text-left text-neutral-900"
                    )}
                    key={currentWord}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="hero-gradient-text"
                    >
                      {currentWord}
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
          </h1>
          <ul className="flex flex-col justify-center">
            <div className="-ml-3 mr-3">
              {links.map((link, index) => (
                <li
                  className="flex items-center flex-row hover:bg-[#EFEFEF] hover:dark:bg-[#161616] hover:cursor-pointer p-3 rounded-lg group/item transition-all"
                  key={index}
                >
                  <span className="mr-3 text-black dark:text-white group-hover/item:scale-110 transition">
                    {iconsArray[index]}
                  </span>
                  <AnimatePresence>
                    {isNavOpen && (
                      <motion.span
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={linkVariants}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          className="text-black dark:text-white text-lg mt-5 font-thin"
                          href={link.link}
                        >
                          {link.name}
                        </Link>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </aside>
    </header>
  );
}
