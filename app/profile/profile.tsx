"use client";

import React, { useState, useRef, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "@/store";
import { useRouter } from "next/navigation";
import useGetUserById from "@/hooks/userHooks/useGetUserById";
import Image from "next/image";

const Profile = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const router = useRouter();

  const localStorageUser = localStorage.getItem("userInfo");
  const reduxUser = useSelector((state: any) => state.user);
  const currentUser = auth.currentUser;

  const { isUserLoading, userProfile } = useGetUserById(
    currentUser?.uid
  ) as any;

  useEffect(() => {
    if (!currentUser) return;

    if (!currentUser) {
      router.push("/signup");
    }
  }, [localStorageUser, currentUser, reduxUser]);

  const handleLgout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user-auth");
      localStorage.removeItem("user-data");

      dispatch(setLogout());
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Error logging out. Please try again later.");
    }
  };

  if (isUserLoading) {
    return <div>Loading...</div>;
  }

  const defulatPfp =
    "https://firebasestorage.googleapis.com/v0/b/seatr-416422.appspot.com/o/profile-pictures%2FzZlxE2oUvKYpgOgATRFrBZuewGm1?alt=media&token=75c9c254-e4e5-4cd4-963b-53227ef5a8ee";

  return (
    <div className="max-w-[50rem] w-full h-screen">
      <div className="max-w-[50rem] w-full flex items-center justify-between pt-10">
        <div className="flex flex-row">
          <Image
            src={userProfile.profilePicture || defulatPfp}
            alt="profile picture"
            width={75}
            height={75}
          />
          <div className="flex flex-col ml-5 justify-center">
            <h1 className="text-3xl text-black dark:text-white capitalize">
              {userProfile.fullName}
            </h1>
            <h1 className="text-xl text-[#a5a5a6]">{userProfile.username}</h1>
          </div>
        </div>
        <button onClick={handleLgout}>
          <span className="text-[#a5a5a6] hover:underline">Log out</span>
        </button>
      </div>
      <div className="mt-10 w-full border-b-2 pb-2">
        <h2 className="text-black dark:text-white text-xl font-medium">
          Posts
        </h2>
      </div>
    </div>
  );
};

export default Profile;
