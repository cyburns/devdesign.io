"use client";

import useGetPosts from "@/hooks/postHooks/useGetPosts";
import React from "react";
import Post from "@/components/post/post";
import PostSkeleton from "@/components/skeletons/post-skeleton";

const Posts = () => {
  const { isLoading, posts } = useGetPosts();

  return (
    <div className="flex justify-center items-center mt-5">
      {isLoading ? (
        <div className="max-w-[40rem] w-full">
          <PostSkeleton />
        </div>
      ) : (
        <div className="max-w-[40rem]">
          <div className="mt-1 sm:mt-10 w-full border-[#EFEFEF] dark:border-[#161616] border-b-2 pb-2">
            <h2 className="text-black dark:text-white text-xl font-medium p-3">
              Posts
            </h2>
          </div>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
