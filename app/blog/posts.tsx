"use client";

import useGetPosts from "@/hooks/postHooks/useGetPosts";
import Image from "next/image";
import React from "react";
import { estimateReadingTime, calculateElapsedTime } from "@/hooks/utils";
import Link from "next/link";

const Posts = () => {
  const { isLoading, posts } = useGetPosts();

  const defulatPfp =
    "https://firebasestorage.googleapis.com/v0/b/seatr-416422.appspot.com/o/profile-pictures%2FzZlxE2oUvKYpgOgATRFrBZuewGm1?alt=media&token=75c9c254-e4e5-4cd4-963b-53227ef5a8ee";

  return (
    <div className="flex justify-center items-center mt-5">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="max-w-[40rem]">
          <div className="mt-10 w-full border-b-2 pb-2">
            <h2 className="text-black dark:text-white text-xl font-medium p-3">
              Posts
            </h2>
          </div>
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="mt-10 p-3">
                <div className="flex flex-row items-center justify-between mb-7 w-full">
                  <div className="flex flex-row">
                    <Image
                      src={post.profilePicture || defulatPfp}
                      alt="profile picture"
                      width={50}
                      height={50}
                    />
                    <div className="ml-3">
                      <h2 className="text-black dark:text-white font-medium">
                        {post.username}
                      </h2>
                      <h2 className="text-[#a5a5a6] font-normal">
                        {estimateReadingTime(post.postContent)} min read
                      </h2>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[#a5a5a6] font-normal">
                      {calculateElapsedTime(post.createdAt)} ago
                    </h2>
                  </div>
                </div>
                <h1 className="text-black dark:text-white font-semibold text-[2rem] active:outline-none w-full outline-none bg-white dark:bg-black resize-none overflow-hidden !leading-[1.2]">
                  {post.postTitle}
                </h1>
                <p className="text-black dark:text-white active:outline-none w-full text-[1rem] font-thin outline-none bg-white dark:bg-black resize-none overflow-hidden !leading-[1.5] mt-5">
                  {post.postContent.substring(0, 200).trim() + "..."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
