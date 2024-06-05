"use client";

import React, { useEffect, useState } from "react";
import { AlternateEmailOutlined } from "@mui/icons-material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useGetUserById from "@/hooks/userHooks/useGetUserById";
import toast from "react-hot-toast";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { FIREBASE_STORE, FIREBASE_AUTH } from "@/FirebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();
  const router = useRouter();
  const currentUser = auth.currentUser;
  const database = FIREBASE_STORE;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (!user) {
        router.push("/signup");
      }
    });

    return () => unsubscribe();
  }, []);

  const { isUserLoading, userProfile } = useGetUserById(
    currentUser?.uid
  ) as any;

  const handlePost = async () => {
    if (
      !postTitle ||
      !postContent ||
      !currentUser ||
      !userProfile ||
      isUserLoading
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      if (currentUser) {
        const newPostData = {
          userProfilePicture: userProfile.profilePicture || "",
          username: userProfile.username,
          fullName: userProfile.fullName,
          comments: [],
          likes: [],
          createdAt: new Date(),
          createdBy: currentUser.uid,
          postTitle,
          postContent,
          isCreatorVerified: userProfile.isVerified || false,
        };

        const postDocRef = await addDoc(
          collection(database, "posts"),
          newPostData
        );

        const userDocRef = doc(database, "users", currentUser.uid);
        await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
      }

      toast.success("Post created successfully.");
      router.push("/blog");
    } catch (error) {
      toast.error("Error creating post. Please try again later.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      [{ font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "blockquote"],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const quillFormats = [
    "header",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "blockquote",
    "align",
    "link",
    "image",
  ];

  return (
    <div className="max-w-[50rem] h-screen w-full mt-32 sm:mt-5 mb-10 pt-10">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <AlternateEmailOutlined sx={{ fontSize: "2.5rem" }} />
          <h1 className=" text-[1.5rem] sm:text-[2rem] font-medium !leading-[1] ">
            <span className="font-semibold uppercase">
              <span className="hero-gradient-text px-2">BRIGHT</span>blog
            </span>
          </h1>
        </div>
        {isLoading ? (
          <CircularProgress size={40} className="text-blue-500 p-1" />
        ) : (
          <div className="bg-blue-500 rounded-md hover:opacity-40 transition">
            <button
              onClick={handlePost}
              className="text-white px-5 py-2 font-medium "
            >
              POST
            </button>
          </div>
        )}
      </div>

      <div className="mt-10 w-full border-b-2 flex flex-row pl-3">
        <textarea
          placeholder="Title"
          className="placeholder:text-[#a5a5a6] font-semibold placeholder:text-[3rem] active:outline-none w-full text-[3rem] outline-none bg-white dark:bg-black resize-none overflow-hidden"
          onChange={(e) => setPostTitle(e.target.value)}
          rows={1}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = `${target.scrollHeight}px`;
          }}
        />
      </div>
      <div className="mt-3 w-full text-black dark:text-white">
        <ReactQuill
          value={postContent}
          onChange={setPostContent}
          className="w-full"
          placeholder="Tell your story..."
          theme="bubble"
          modules={quillModules}
          formats={quillFormats}
        />
      </div>
    </div>
  );
};
export default CreatePost;
