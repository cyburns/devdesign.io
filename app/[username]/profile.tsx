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

  if (isUserLoading || !userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[50rem] w-full h-screen">
      <div className="max-w-[50rem] w-full flex items-center justify-between pt-10">
        <div className="flex flex-row">
          <Image
            onClick={() => pickerRef.current.click()}
            src={userProfile.profilePicture || defulatPfp}
            alt="profile picture"
            width={75}
            height={75}
            className="rounded-full hover:opacity-40 transition-all cursor-pointer"
          />
          <input
            ref={pickerRef}
            onChange={(e) => onCaptureImage(e)}
            type="file"
            accept=".png, .jpg, .jpeg"
            hidden
          />
          <div className="flex flex-col ml-5 justify-center">
            <h1 className="text-3xl text-black dark:text-white capitalize">
              {userProfile.fullName}
            </h1>
            <h1 className="text-xl text-[#a5a5a6]">{userProfile.username}</h1>
          </div>
          {userProfile.isVerified && (
            <div className="mt-[0.6rem] ml-2">
              <Verified
                className="text-[#0295f6] text-3xl"
                sx={{ fontSize: "1rem" }}
              />
            </div>
          )}
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
