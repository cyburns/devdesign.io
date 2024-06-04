import useGetUsersPosts from "@/hooks/postHooks/useGetUsersPosts";
import { getAuth } from "firebase/auth";
import React from "react";
import Image from "next/image";
import { estimateReadingTime, calculateElapsedTime } from "@/hooks/utils";

const UserPosts = () => {
  const currentUser = getAuth();
  const userId = currentUser.currentUser?.uid || "";

  const { isUsersPostsLoading, usersPosts, getUsersPosts, isLastPost } =
    useGetUsersPosts(userId) as any;

  const defulatPfp =
    "https://firebasestorage.googleapis.com/v0/b/seatr-416422.appspot.com/o/profile-pictures%2FzZlxE2oUvKYpgOgATRFrBZuewGm1?alt=media&token=75c9c254-e4e5-4cd4-963b-53227ef5a8ee";

  if (isUsersPostsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {usersPosts.map((post: any, index: number) => (
        <div key={index} className="mt-10 p-3">
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
          <h1 className="text-black dark:text-white font-semibold text-[3rem] active:outline-none w-full outline-none bg-white dark:bg-black resize-none overflow-hidden !leading-[1.2]">
            {post.postTitle}
          </h1>
          <p className="text-black dark:text-white active:outline-none w-full text-[1.5rem] font-thin outline-none bg-white dark:bg-black resize-none overflow-hidden !leading-[1.5] mt-5">
            {post.postContent.substring(0, 200).trim() + "..."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
