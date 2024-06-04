import React from "react";
import Link from "next/link";
import Image from "next/image";
import { defulatPfp } from "@/lib/data";
import { estimateReadingTime, calculateElapsedTime } from "@/hooks/utils";
import parse from "html-react-parser";

const Post = ({ post, isSinglePost }: any) => {
  return (
    <Link key={post.id} href={`/blog/${post.id}`} className="border-b-2">
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
          {isSinglePost
            ? parse(post.postContent)
            : parse(post.postContent.substring(0, 200).trim() + "...")}
        </p>
      </div>
    </Link>
  );
};

export default Post;
