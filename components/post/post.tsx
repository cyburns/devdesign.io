import React from "react";
import Link from "next/link";
import Image from "next/image";
import { defulatPfp } from "@/lib/data";
import { estimateReadingTime, calculateElapsedTime } from "@/hooks/utils";
import parse from "html-react-parser";
import { Verified } from "@mui/icons-material";
import Buttons from "./buttons";

const Post = ({ post, isSinglePost }: any) => {
  return (
    <div className="mt-10 p-3 border-[#EFEFEF] dark:border-[#161616] border-b-2">
      <Link key={post.id} href={`/blog/${post.id}`}>
        <div className="flex flex-row items-center justify-between mb-7 w-full">
          <div className="flex flex-row">
            <Image
              src={post.userProfilePicture || defulatPfp}
              alt="profile picture"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="ml-3">
              <div className="flex flex-row">
                <h2 className="text-black dark:text-white font-medium">
                  {post.username}
                </h2>
                {post.isCreatorVerified && (
                  <div className="ml-1">
                    <Verified className="text-[#0295f6] text-lg mb-1" />
                  </div>
                )}
              </div>
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
        {isSinglePost && (
          <div className="border-[#EFEFEF] dark:border-[#161616] border-b-2 border-t-2 mb-5 p-1">
            <Buttons post={post} />
          </div>
        )}
        <div className="text-black dark:text-white font-semibold text-[2rem] w-full bg-white dark:bg-black !leading-[1.2]">
          {post.postTitle}
        </div>
        <div className="text-black dark:text-white w-full text-[1rem] font-base outline-none bg-white dark:bg-black !leading-[1.5] mt-5">
          <span className="text-black dark:text-white ">
            {isSinglePost
              ? parse(post.postContent)
              : parse(post.postContent.substring(0, 200).trim() + "...")}
          </span>
        </div>
      </Link>
      {!isSinglePost && (
        <div className="mt-3 mb-1">
          <Buttons post={post} />
        </div>
      )}
    </div>
  );
};

export default Post;
