"use client";

import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useGetUserById from "@/hooks/userHooks/useGetUserById";
import Image from "next/image";
import { defulatPfp } from "@/lib/data";
import useAuthStore from "@/store";
import { Skeleton } from "@mui/material";
import { IoCreateOutline } from "react-icons/io5";
import Link from "next/link";

export default function ProfileHeader() {
  const auth = getAuth();
  const logoutUser = useAuthStore((state) => state.logout);
  const router = useRouter();

  const currentUser = auth.currentUser;

  if (!currentUser) return null;

  const { isUserLoading, userProfile } = useGetUserById(
    currentUser?.uid
  ) as any;

  useEffect(() => {});

  const handleLgout = async () => {
    try {
      await signOut(auth);
      logoutUser();
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Error logging out. Please try again later.");
    }
  };

  if (isUserLoading || !userProfile)
    return (
      <div className="fixed top-5 right-5 flex items-center justify-center transition-all dark:bg-gray-950">
        <Link href={"/blog/new"} className="flex flex-row">
          <IoCreateOutline className="text-[#a3a3a7] text-2xl mr-1" />
          <h1 className="text-[#a3a3a7] mr-7">Write</h1>
        </Link>
        <Skeleton variant="circular" sx={{ width: "3rem", height: "3rem" }} />
      </div>
    );

  return (
    <button className="fixed top-5 right-[1rem] flex items-center justify-center transition-all dark:bg-gray-950 ">
      <Link href={"/blog/new"} className="flex flex-row">
        <IoCreateOutline className="text-[#a3a3a7] text-2xl mr-1" />
        <h1 className="text-[#a3a3a7] mr-7">Write</h1>
      </Link>
      <Link href={`${userProfile.username}`}>
        <Image
          src={userProfile.profilePicture || defulatPfp}
          alt="profile picture"
          width={40}
          height={40}
        />
      </Link>
    </button>
  );
}
