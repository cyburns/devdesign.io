"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { useRouter } from "next/navigation";
import {
  HomeRounded,
  AlternateEmailOutlined,
  SearchRounded,
  AddBoxOutlined,
  MapsUgcOutlined,
  CreditCardOutlined,
  ExploreOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import BrightLogo from "@/public/bright-app-icon-lg.png";
import MobileHeader from "./mobile-header";
import BrightText from "./bright-text";

const iconsArray = [
  <HomeRounded sx={{ fontSize: "2rem" }} key="icon1" />,
  <AlternateEmailOutlined sx={{ fontSize: "2rem" }} key="icon6" />,
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
  const [profilePath, setProfilePath] = useState<"Profile" | "Sign up">(
    "Profile"
  );

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      FIREBASE_AUTH,
      (user: User | null) => {
        if (!user) {
          setPathName("signup");
          setProfilePath("Sign up");
          return;
        }

        setIsUser(user);
        setPathName("profile");
        setProfilePath("Profile");
      }
    );

    return () => unsubscribe();
  }, []);

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-[999] ">
      <aside className="invisible sm:visible fixed h-screen bg-white dark:bg-black z-[999]">
        <nav
          className={`ml-5 border-r border-[#EFEFEF] dark:border-[#161616] h-screen transition-all duration-300 ${
            isNavOpen ? "w-[19rem]" : "w-[3.5rem]"
          }`}
          onMouseEnter={() => setIsNavOpen(true)}
          onMouseLeave={() => setIsNavOpen(false)}
        >
          <h1 className="text-[2.4rem] sm:text-[2.4rem] font-thin pt-8 mb-2">
            <BrightText isNavOpen={isNavOpen} />
          </h1>
          <ul className="flex flex-col justify-center">
            <div className="-ml-3 mr-3">
              {links.map((link, index) => (
                <Link href={link.link}>
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
                          className="text-black dark:text-white text-lg  font-thin"
                        >
                          {link.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </li>
                </Link>
              ))}

              <Link href={pathName}>
                <li className="flex items-center flex-row hover:bg-[#EFEFEF] hover:dark:bg-[#161616] hover:cursor-pointer p-3 rounded-lg group/item transition-all">
                  <span className="mr-3 text-black dark:text-white group-hover/item:scale-110 transition">
                    <AccountCircleOutlined sx={{ fontSize: "2rem" }} />
                  </span>
                  <AnimatePresence>
                    {isNavOpen && (
                      <motion.span
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={linkVariants}
                        transition={{ duration: 0.3 }}
                        className="text-black dark:text-white text-lg  font-thin"
                      >
                        {profilePath}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </li>
              </Link>
            </div>
          </ul>
        </nav>
      </aside>

      <MobileHeader
        isMobileMenuOpen={isMobileMenuOpen}
        links={links}
        iconsArray={iconsArray}
        toggleMobileMenu={toggleMobileMenu}
        BrightLogo={BrightLogo}
      />
    </div>
  );
}
