"use client";

import React, { useEffect, useState } from "react";
import { AlternateEmailOutlined } from "@mui/icons-material";
import { getAuth } from "firebase/auth";
import useGetUserById from "@/hooks/userHooks/useGetUserById";
import toast from "react-hot-toast";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { FIREBASE_STORE } from "@/FirebaseConfig";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  const currentUser = auth.currentUser;
  const database = FIREBASE_STORE;

  const { isUserLoading, userProfile } = useGetUserById(
    currentUser?.uid
  ) as any;

  const handlePost = async () => {
    if (!postTitle || !postContent) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      if (currentUser) {
        const newPostData = {
          userProfilePicture: userProfile.profilePicture,
          username: userProfile.username,
          comments: [],
          likes: [],
          createdAt: new Date(),
          createdBy: currentUser.uid,
          postTitle,
          postContent,
        };

        const postDocRef = await addDoc(
          collection(database, "posts"),
          newPostData
        );

        const userDocRef = doc(database, "users", currentUser.uid);
        await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
      }
    } catch (error) {
      toast.error("Error creating post. Please try again later.");
    } finally {
      setIsLoading(false);
      toast.success("Post created successfully.");
    }
  };

  return (
    <div className="max-w-[50rem] h-screen w-full mb-10 pt-10">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <AlternateEmailOutlined sx={{ fontSize: "2.5rem" }} />
          <h1 className="text-[2rem] font-medium !leading-[1] ">
            <span className="font-semibold uppercase">
              <span className="hero-gradient-text px-2">BRIGHT</span>blog
            </span>
          </h1>
        </div>
        <div className="bg-blue-500 rounded-xl hover:opacity-40 transition">
          <button
            onClick={handlePost}
            className="text-white px-5 py-2 font-medium "
          >
            POST
          </button>
        </div>
      </div>

      <div className="mt-10 w-full border-b-2 flex flex-row ">
        <textarea
          placeholder="Title"
          className="placeholder:text-[#a5a5a6] placeholder:text-[3rem] active:outline-none w-full text-[3rem] font-normal outline-none bg-white dark:bg-black resize-none overflow-hidden"
          onChange={(e) => setPostTitle(e.target.value)}
          rows={1}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = `${target.scrollHeight}px`;
          }}
        />
      </div>
      <div className="mt-2 w-full">
        <textarea
          placeholder="Tell your story..."
          className="placeholder:text-[#a5a5a6] placeholder:text-[1.5rem] active:outline-none w-full text-[1.5rem] font-normal outline-none bg-white dark:bg-black resize-none overflow-hidden"
          onChange={(e) => setPostContent(e.target.value)}
          rows={4}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = `${target.scrollHeight}px`;
          }}
        />
      </div>
    </div>
  );
};
export default CreatePost;
