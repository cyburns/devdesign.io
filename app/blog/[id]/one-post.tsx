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
          {onePost.map((post: any) => (
            <Post key={post.id} post={post} isSinglePost={true} />
          ))}
        </div>
      )}
    </>
  );
};

export default OnePost;
