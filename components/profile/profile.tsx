"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  FIREBASE_AUTH,
  FIREBASE_STORAGE,
  FIREBASE_STORE,
} from "@/FirebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setLogout } from "@/store";

const Profile = () => {
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const storage = FIREBASE_STORAGE;
  const pickerRef = useRef<any>(null);
  const auth = getAuth();
  const dispatch = useDispatch();

  const handleLgout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      dispatch(setLogout());
    } catch (error) {
      console.log(error);
      toast.error("Error logging out. Please try again later.");
    }
  };

  // const uploadImageToFirebase = async (image: string) => {
  //   if (pickedImage) {
  //     const storageRef = ref(
  //       storage,
  //       `profile-pictures/${newAuthUser.user.uid}`
  //     );
  //     //@ts-ignore
  //     await uploadString(pickedImage, "data_url");
  //     const url = await getDownloadURL(storageRef);
  //     await setDoc(doc(database, "users", newAuthUser.user.uid), {
  //       profilePicture: url,
  //     });
  //   }
  // };

  const onCaptureImage = async (e: any) => {
    setIsImageLoading(true);

    try {
      const reader = new FileReader();
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }

      reader.onload = (readerEvent: any) => {
        setPickedImage(readerEvent.target.result);
        console.log("picked image ----->", readerEvent.target.result);
      };
    } catch (error) {
      console.error(error);
    } finally {
      setIsImageLoading(false);
    }
  };
  return (
    <div className="max-w-[50rem] w-full flex items-center justify-center">
      <div
        onClick={() => pickerRef.current.click()}
        className="bg-[#EFEFEF] dark:bg-[#161616] w-full m-1 px-3 py-4 rounded-lg placeholder:text-[#a5a5a6] hover:cursor-pointer"
      >
        <p className="text-[#acacad]">Add a profile picture</p>
      </div>
      <input
        ref={pickerRef}
        onChange={(e) => onCaptureImage(e)}
        type="file"
        accept=".png, .jpg, .jpeg"
        hidden
      />

      <button onClick={handleLgout}>Log out</button>
    </div>
  );
};

export default Profile;
