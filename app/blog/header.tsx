import React from "react";
import { AlternateEmailOutlined, EditNoteOutlined } from "@mui/icons-material";
import Link from "next/link";

const Header = () => {
  return (
    <section className="flex flex-col items-center px-4">
      <div className="mb-28 max-w-[50rem] sm:mb-0 flex flex-row  px-4 sm:px-0 pt-[12rem] sm:pt-10 justify-between w-full">
        <div className="flex flex-row items-center">
          <AlternateEmailOutlined sx={{ fontSize: "2.5rem" }} />
          <h1 className="text-[2rem] font-medium !leading-[1] ">
            <span className="font-semibold uppercase">
              <span className="hero-gradient-text px-2">BRIGHT</span>blog
            </span>
          </h1>
        </div>
        <div>
          <Link href="/blog/new" className="flex flex-row items-center">
            <EditNoteOutlined
              sx={{ fontSize: "3rem" }}
              className="text-black dark:text-white hover:opacity-30 transition"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
