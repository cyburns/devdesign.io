"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import BrightLogo from "@/public/bright-app-icon-lg.png";
import MobileHeader from "./mobile-header";
import BrightText from "./bright-text";
import useGetUserById from "@/hooks/userHooks/useGetUserById";
import { GoHomeFill } from "react-icons/go";
import { FiAtSign } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoCompassOutline } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";
import { IoPricetagsOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const iconsArrayTwo = [
  <GoHomeFill key="icon1" className="text-[2rem]" />,
  <FiAtSign key="icon6" className="text-[2rem]" />,
  <IoIosSearch key="icon2" className="text-[2rem]" />,
  <IoCompassOutline key="icon5" className="text-[2rem]" />,
  <GoPlusCircle key="icon3" className="text-[2rem]" />,
  <IoPricetagsOutline key="icon5" className="text-[2rem]" />,
  <LuMessageCircle key="icon4" className="text-[2rem]" />,
];

export default function Header() {
  const [isUser, setIsUser] = useState<User | null>(null);
  const [pathName, setPathName] = useState<string>("signup");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const [profilePath, setProfilePath] = useState<"Profile" | "Signup">(
    "Profile"
  );

  const auth = getAuth();
  const currentUserId = auth.currentUser?.uid;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      FIREBASE_AUTH,
      (user: User | null) => {
        if (!user) {
          setPathName("signup");
          setProfilePath("Signup");
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const { userProfile, isUserLoading } = useGetUserById(currentUserId) as any;

  useEffect(() => {
    if (isUserLoading || !userProfile) return;

    setPathName(`/${userProfile.username}`);
    setProfilePath("Profile");
  }, [isUser, isUserLoading]);

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
                <Link key={index} href={link.link}>
                  <li
                    className="flex items-center flex-row hover:bg-[#EFEFEF] hover:dark:bg-[#161616] hover:cursor-pointer p-3 rounded-lg group/item transition-all"
                    key={index}
                  >
                    <span className="mr-3 text-black dark:text-white ">
                      {iconsArrayTwo[index]}
                    </span>
                    <AnimatePresence>
                      {isNavOpen && (
                        <motion.span
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={linkVariants}
                          transition={{ duration: 0.3 }}
                          className="text-black dark:text-white text-lg  font-thin "
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
                  <span className="mr-3 text-black dark:text-white ">
                    <CgProfile className="text-[2rem]" />
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
        iconsArrayTwo={iconsArrayTwo}
        toggleMobileMenu={toggleMobileMenu}
        BrightLogo={BrightLogo}
        pathName={pathName}
        profilePath={profilePath}
      />
    </div>
  );
}
