import useGetUsersPosts from "@/hooks/postHooks/useGetUsersPosts";
import { getAuth } from "firebase/auth";
import React from "react";
import Post from "@/components/post/post";

const UserPosts = () => {
  const currentUser = getAuth();
  const userId = currentUser.currentUser?.uid || "";

  const { isUsersPostsLoading, usersPosts } = useGetUsersPosts(userId) as any;

  if (isUsersPostsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {usersPosts.map((post: any, index: number) => (
        <Post post={post} isSinglePost={false} key={index} />
      ))}
    </div>
  );
};

export default UserPosts;
