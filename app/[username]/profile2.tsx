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
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "@/store";
import { useRouter } from "next/navigation";
import useGetUserById from "@/hooks/userHooks/useGetUserById";
import Image from "next/image";

const Profile = () => {
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const storage = FIREBASE_STORAGE;
  const pickerRef = useRef<any>(null);
  const auth = getAuth();
  const dispatch = useDispatch();
  const router = useRouter();

  const currentUser = auth.currentUser;
  const localStorageUser = localStorage.getItem("userInfo");
  const reduxUser = useSelector((state: any) => state.user);

  const { isUserLoading, userProfile } = useGetUserById(currentUser?.uid);

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

  if (isUserLoading) {
    return <div>Loading...</div>;
  }

  const defulatPfp =
    "https://firebasestorage.googleapis.com/v0/b/seatr-416422.appspot.com/o/profile-pictures%2FzZlxE2oUvKYpgOgATRFrBZuewGm1?alt=media&token=75c9c254-e4e5-4cd4-963b-53227ef5a8ee";

  return (
    <div className="max-w-[50rem] w-full flex items-center justify-between pt-10 bg-red-500">
      <div className="flex fle-row">
        <Image
          src={defulatPfp}
          alt="profile picture"
          width={100}
          height={100}
        />
        <div className="flex flex-col">
          <h1 className="text-3xl text-black dark:text-white">
            {/* @ts-ignore */}
            {userProfile.fullName}
          </h1>
          <h1 className="text-xl text-[#a5a5a6]">
            {/* @ts-ignore */}
            {userProfile.username}
          </h1>
        </div>
      </div>
      <button onClick={handleLgout}>Log out</button>
    </div>
  );
};

export default Profile;

// <div
// onClick={() => pickerRef.current.click()}
// className="bg-[#EFEFEF] dark:bg-[#161616] w-full m-1 px-3 py-4 rounded-lg placeholder:text-[#a5a5a6] hover:cursor-pointer"
// >
// <p className="text-[#acacad]">Add a profile picture</p>
// </div>
// <input
// ref={pickerRef}
// onChange={(e) => onCaptureImage(e)}
// type="file"
// accept=".png, .jpg, .jpeg"
// hidden
// />

// <button onClick={handleLgout}>Log out</button>
