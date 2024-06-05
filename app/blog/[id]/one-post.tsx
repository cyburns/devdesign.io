"use client";

import React from "react";
import useGetPostById from "@/hooks/postHooks/useGetPostById";
import Post from "@/components/post/post";
import SinglePostSkeleton from "@/components/skeletons/single-post-skeleton";

const OnePost = ({ params }: any) => {
  const { isPostLoading, onePost } = useGetPostById(params.id);

  return (
    <>
      {isPostLoading ? (
        <div className="max-w-[40rem] w-full">
          <SinglePostSkeleton />
        </div>
      ) : (
        <div className="mt-10 p-3 max-w-[40rem] mb-32">
          {onePost ? (
            <>
              {onePost.map((post: any) => (
                <Post key={post.id} post={post} isSinglePost={true} />
              ))}
            </>
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

export default OnePost;
