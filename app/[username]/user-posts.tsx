import React from "react";
import Post from "@/components/post/post";

const UserPosts = ({ usersPosts }: any) => {
  return (
    <div>
      {usersPosts.map((post: any, index: number) => (
        <Post post={post} isSinglePost={false} key={index} />
      ))}
      <div className="h-32 w-full" />
    </div>
  );
};

export default UserPosts;
