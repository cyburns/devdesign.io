import React from "react";
import Image from "next/image";
import Link from "next/link";

const MobileHeader = ({
  isMobileMenuOpen,
  links,
  iconsArray,
  toggleMobileMenu,
  BrightLogo,
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
  );
};

export default MobileHeader;
