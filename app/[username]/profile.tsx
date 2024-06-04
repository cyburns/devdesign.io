"use client";

import React from "react";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useGetUserById from "@/hooks/userHooks/useGetUserById";
import Image from "next/image";
import UserPosts from "./user-posts";
import { defulatPfp } from "@/lib/data";
import useAuthStore from "@/store";

const Profile = () => {
  const auth = getAuth();
  const logoutUser = useAuthStore((state) => state.logout);
  const router = useRouter();

  const currentUser = auth.currentUser;

  const { isUserLoading, userProfile } = useGetUserById(
    currentUser?.uid
  ) as any;

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

  if (isUserLoading) {
    return <div>Loading...</div>;
  }

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

      <UserPosts />
    </div>
  );
};

export default Profile;
