"use client";

import React, { useState, useRef } from "react";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useGetUserById from "@/hooks/userHooks/useGetUserById";
import Image from "next/image";
import UserPosts from "./user-posts";
import { defulatPfp } from "@/lib/data";
import useAuthStore from "@/store";
import { Verified } from "@mui/icons-material";
import { FIREBASE_STORAGE, FIREBASE_STORE } from "@/FirebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import useGetUsersPosts from "@/hooks/postHooks/useGetUsersPosts";
import ProfileSkeleton from "@/components/skeletons/profile-skeleton";
import PostSkeleton from "@/components/skeletons/post-skeleton";

const Profile = () => {
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const auth = getAuth();
  const storage = FIREBASE_STORAGE;
  const database = FIREBASE_STORE;
  const pickerRef = useRef<any>(null);
  const router = useRouter();
  const currentUser = auth.currentUser;
  const logoutUser = useAuthStore((state) => state.logout);

  const { isUsersPostsLoading, usersPosts } = useGetUsersPosts(
    currentUser?.uid
  ) as any;
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

  const onCaptureImage = async (e: any) => {
    setIsImageLoading(true);

    try {
      const reader = new FileReader();
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = async (readerEvent: any) => {
          setPickedImage(readerEvent.target.result);

          if (readerEvent.target.result) {
            await uploadImageToFirebase(readerEvent.target.result);
          }

          toast.success("Image uploaded successfully.");
        };
      }
    } catch (error) {
      console.error(error);
      toast.error("Error uploading image. Please try again later.");
    } finally {
      setIsImageLoading(false);
    }
  };

  const uploadImageToFirebase = async (imageData: string) => {
    try {
      if (imageData && auth.currentUser) {
        const storageRef = ref(
          storage,
          `profile-pictures/${auth.currentUser.uid}`
        );
        await uploadString(storageRef, imageData, "data_url");
        const url = await getDownloadURL(storageRef);
        const userDocRef = doc(database, "users", auth.currentUser.uid);

        await updateDoc(userDocRef, {
          profilePicture: url,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error uploading image. Please try again later.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `https://www.brightdev.dev/${userProfile.username}`
    );
  };

  return (
    <>
      {isUserLoading || isUsersPostsLoading || !userProfile ? (
        <div className="max-w-[40rem] w-full flex flex-col h-screen">
          <ProfileSkeleton />
          <PostSkeleton />
        </div>
      ) : (
        <div className="max-w-[40rem] w-full h-screen p-2 mt-10 sm:mt-1 mb-10">
          <div className="max-w-[40rem] w-full flex items-center justify-between pt-10">
            <div className="flex flex-col sm:flex-row">
              <Image
                onClick={() => pickerRef.current.click()}
                src={userProfile.profilePicture || defulatPfp}
                alt="profile picture"
                width={110}
                height={110}
                className="rounded-full hover:opacity-40 transition-all cursor-pointer"
              />
              <input
                ref={pickerRef}
                onChange={(e) => onCaptureImage(e)}
                type="file"
                accept=".png, .jpg, .jpeg"
                hidden
              />
              <div className="flex flex-col mt-4 sm:mt-0 sm:ml-5 justify-center">
                <h1 className="text-3xl text-black dark:text-white capitalize">
                  {userProfile.fullName}
                  {userProfile.isVerified && (
                    <span className="mt-[0.7rem] ml-2">
                      <Verified
                        className="text-[#0295f6] text-3xl"
                        sx={{ fontSize: "1.5rem" }}
                      />
                    </span>
                  )}
                </h1>
                <h2 className="text-xl text-[#a5a5a6] mt-1">
                  {userProfile.username}
                </h2>
                {usersPosts.length > 0 && usersPosts && (
                  <h3 className="text-black dark:text-white text-xl font-medium mt-1">
                    {userProfile.posts.length}{" "}
                    {userProfile.posts.length > 1 ? "posts" : "post"}
                  </h3>
                )}
              </div>
            </div>
            <button onClick={handleLgout}>
              <span className="text-[#a5a5a6] hover:underline">Log out</span>
            </button>
          </div>

          <div className="mt-4 w-full flex flex-row justify-around">
            <button
              onClick={() => pickerRef.current.click()}
              className="text-black dark:text-white text-base font-medium bg-[#EFEFEF] dark:bg-[#161616] w-full mx-1 rounded-lg p-2 hover:bg-opacity-40 dark:hover:bg-[#343434] transition"
            >
              Edit profile
            </button>
            <button
              onClick={handleCopy}
              className="text-black dark:text-white text-base font-medium bg-[#EFEFEF] dark:bg-[#161616] w-full mx-1 rounded-lg p-2 hover:bg-opacity-40 dark:hover:bg-[#343434] transition"
            >
              Share profile
            </button>
          </div>
          <div className="mt-10 w-full border-b-2 pb-2">
            <h2 className="text-black dark:text-white text-xl font-medium">
              Posts
            </h2>
          </div>
          {usersPosts.length > 0 && usersPosts ? (
            <UserPosts usersPosts={usersPosts} />
          ) : (
            <div className="mt-5 w-full flex flex-col items-center justify-center">
              <h1 className="text-black dark:text-white text-2xl font-medium">
                No posts yet
              </h1>
              <h2 className="text-[#a5a5a6] text-lg font-medium mt-1">
                When you create a post, it will appear here.
              </h2>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
