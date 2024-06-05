"use client";

import React, { useEffect, useState } from "react";
import { AlternateEmailOutlined } from "@mui/icons-material";
import Link from "next/link";
import { IoCreateOutline } from "react-icons/io5";
import { getAuth } from "firebase/auth";

const Header = () => {
  const [path, setPath] = useState("signup");

  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      setPath("/blog/new");
    }
  }, [currentUser, auth]);

  return (
    <section className="flex flex-col items-center pt-5">
      <div className="max-w-[50rem] sm:mb-0 flex flex-row  px-4 sm:px-0 pt-[7rem] sm:pt-10 justify-between w-full">
        <div className="flex flex-row items-center">
          <AlternateEmailOutlined sx={{ fontSize: "2.5rem" }} />
          <h1 className="text-[1.5rem] sm:text-[2rem] font-medium !leading-[1] ">
            <span className="font-semibold uppercase">
              <span className="hero-gradient-text px-2 p-3">BRIGHT</span>blog
            </span>
          </h1>
        </div>
        <div>
          <Link href={path} className="flex flex-row items-center">
            <IoCreateOutline className="text-black dark:text-white text-4xl hover:opacity-30 transition" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
