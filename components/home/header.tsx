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
  ExploreOutlined,
  GitHub,
  LinkedIn,
  Language,
  Groups,
  Assignment,
} from "@mui/icons-material";
import { cn } from "@/utils/cn";
import Image from "next/image";
import BrightLogo from "@/public/bright-app-icon-lg.png";

const iconsArray = [
  <HomeRounded sx={{ fontSize: "2rem" }} key="icon1" />,
  <SearchRounded sx={{ fontSize: "2rem" }} key="icon2" />,
  <ExploreOutlined sx={{ fontSize: "2rem" }} key="icon5" />,
  <AddBoxOutlined sx={{ fontSize: "2rem" }} key="icon3" />,
  <CreditCardOutlined sx={{ fontSize: "2rem" }} key="icon5" />,
  <MapsUgcOutlined sx={{ fontSize: "2rem" }} key="icon4" />,
];

export default function Header() {
  const [isUser, setIsUser] = useState<User | null>(null);
  const [pathName, setPathName] = useState<string>("signup");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);

  const router = useRouter();

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
    <div className="z-[999] ">
      <aside className="invisible sm:visible fixed h-screen bg-white dark:bg-black z-[999] ">
        <nav
          className={`ml-5 border-r border-[#EFEFEF] dark:border-[#161616] h-screen transition-all duration-300 ${
            isNavOpen ? "w-64" : "w-[3.5rem]"
          }`}
          onMouseEnter={() => setIsNavOpen(true)}
          onMouseLeave={() => setIsNavOpen(false)}
        >
          <h1 className="text-[2.4rem] sm:text-[2.4rem] font-thin pt-8 mb-2">
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
                          className="text-black dark:text-white text-lg  font-thin"
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

      <nav className="visible sm:invisible bg-black dark:bg-white">
        <header
          id="header"
          className={
            isMobileMenuOpen
              ? "active expanded-header bg-white dark:bg-black"
              : ""
          }
        >
          <div className="container">
            <nav className="nav">
              <ul className="nav-list nav-list-larger">
                {links.map((link, index) => (
                  <li
                    className="flex items-center flex-row hover:bg-[#EFEFEF] hover:dark:bg-[#161616] hover:cursor-pointer p-3 rounded-lg group/item transition-all nav-item text-black dark:text-white"
                    key={index}
                  >
                    <span className="mr-3 text-black dark:text-white group-hover/item:scale-110 transition">
                      {iconsArray[index]}
                    </span>

                    <Link
                      className="text-black dark:text-white text-lg font-thin"
                      href={link.link}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="nav-list nav-list-mobile flex">
                <li className="left nav-item">
                  <a href="/" className="nav-link nav-link-cb">
                    <Image src={BrightLogo} alt="logo" className=" mt-4" />
                  </a>
                </li>
                <li className="right nav-item">
                  <div
                    className="mobile-menu"
                    onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
                  >
                    <span className="line line-top bg-black dark:bg-white"></span>
                    <span className="line line-bottom bg-black dark:bg-white"></span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </nav>
    </div>
  );
}
