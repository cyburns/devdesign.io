"use client";

import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import useGetUserById from "@/hooks/userHooks/useGetUserById";
import Image from "next/image";
import { defulatPfp } from "@/lib/data";
import { Skeleton } from "@mui/material";
import { IoCreateOutline } from "react-icons/io5";
import Link from "next/link";

export default function ProfileHeader() {
  const [path, setPath] = useState("signup");

  const auth = getAuth();
  const currentUser = auth.currentUser;

  const { isUserLoading, userProfile } = useGetUserById(
    currentUser?.uid
  ) as any;

  useEffect(() => {
    if (currentUser) {
      setPath("/blog/new");
    }
  }, [currentUser, auth]);

  if (!currentUser) return null;

  if (isUserLoading || !userProfile)
    return (
      <div className="fixed top-5 right-5 flex items-center justify-center transition-all dark:bg-gray-950">
        <Link href={path} className="flex flex-row">
          <IoCreateOutline className="text-[#a3a3a7] text-2xl mr-1" />
          <h1 className="text-[#a3a3a7] mr-7">Write</h1>
        </Link>
        <Skeleton variant="circular" sx={{ width: "3rem", height: "3rem" }} />
      </div>
    );

  return (
    <button className="fixed top-5 right-[1rem] flex items-center justify-center transition-all ">
      <Link
        href={"/blog/new"}
        className="flex flex-row hover:text-black dark:hover:text-white"
      >
        <IoCreateOutline className="text-[#a3a3a7] text-2xl mr-1 " />
        <h1 className="text-[#a3a3a7] mr-7">Write</h1>
      </Link>
      <Link href={`${userProfile.username}`} className="gradient-sm">
        <Image
          src={userProfile.profilePicture || defulatPfp}
          alt="profile picture"
          width={30}
          height={30}
          className="rounded-full cursor-pointer image-sm"
        />
      </Link>
    </button>
  );
}
