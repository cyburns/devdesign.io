"use client";

import React from "react";
import useGetPostById from "@/hooks/postHooks/useGetPostById";
import Image from "next/image";
import { defulatPfp } from "@/lib/data";
import { estimateReadingTime, calculateElapsedTime } from "@/hooks/utils";
import parse from "html-react-parser";
import Post from "@/components/post/post";

const OnePost = ({ params }: any) => {
  const { isPostLoading, onePost } = useGetPostById(params.id);

  if (isPostLoading) {
    return <p>Loading...</p>;
  }

  const post = onePost[0];

  return (
    <div className="mt-10 p-3 max-w-[40rem] mb-32">
      {onePost.map((post: any) => (
        <Post key={post.id} post={post} isSinglePost={true} />
      ))}
    </div>
  );
};

export default OnePost;
