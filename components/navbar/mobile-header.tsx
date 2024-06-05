import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const MobileHeader = ({
  isMobileMenuOpen,
  links,
  iconsArrayTwo,
  toggleMobileMenu,
  BrightLogo,
  pathName,
  profilePath,
}: any) => {
  return (
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
              {links.map((link: any, index: number) => (
                <Link
                  key={index}
                  href={link.link}
                  onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
                  className="text-black dark:text-white text-lg font-thin"
                >
                  <li className="flex items-center flex-row hover:bg-[#EFEFEF] hover:dark:bg-[#161616] hover:cursor-pointer rounded-lg group/item transition-all nav-item text-black dark:text-white">
                    <span className="mr-3 text-black dark:text-white group-hover/item:scale-110 transition">
                      {iconsArrayTwo[index]}
                    </span>

                    {link.name}
                  </li>
                </Link>
              ))}
              <Link
                href={pathName}
                onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
                className="text-black dark:text-white text-lg font-thin"
              >
                <li className="flex items-center flex-row hover:bg-[#EFEFEF] hover:dark:bg-[#161616] hover:cursor-pointer rounded-lg group/item transition-all nav-item text-black dark:text-white">
                  <span className="mr-3 text-black dark:text-white group-hover/item:scale-110 transition">
                    <CgProfile className="text-[2rem]" />
                  </span>
                  {profilePath}
                </li>
              </Link>
            </ul>
            <ul className="nav-list nav-list-mobile flex">
              <li className="left nav-item">
                <Link href="/" className="nav-link nav-link-cb">
                  <Image src={BrightLogo} alt="logo" className=" mt-4" />
                </Link>
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
  );
};

export default MobileHeader;
