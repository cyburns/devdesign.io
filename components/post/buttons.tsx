import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import useLikePost from "@/hooks/postHooks/useLikePost";
import { getAuth } from "firebase/auth";
import { LuMessageCircle } from "react-icons/lu";
import { TbShare3 } from "react-icons/tb";
import toast from "react-hot-toast";

const Buttons = ({ post }: any) => {
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const { handleLikePost, isLiked } = useLikePost(post, userId);

  const handleLike = () => {
    if (!auth.currentUser) {
      toast.error("You need to login to like a post");
      return;
    }

    handleLikePost();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(
      `https://brightdev.vercel.app/blog/${post.id}`
    );

    toast.success("Link copied to clipboard");
  };

  return (
    <div className="flex items-center justify-around">
      <div
        onClick={handleLike}
        className="flex items-center hover:bg-[#EFEFEF] dark:hover:bg-[#161616] p-2 rounded-md w-full justify-center"
      >
        {isLiked ? (
          <>
            <AiFillLike className="text-2xl text-[#0295f6]" />
            <span className="text-lg text-[#0295f6]  ml-1 font-medium">
              Like
            </span>
          </>
        ) : (
          <>
            <AiOutlineLike className="text-2xl text-black dark:text-white" />
            <span className="text-lg text-black dark:text-white  ml-1 font-medium">
              Like
            </span>
          </>
        )}
      </div>
      {/* <div className="flex items-center hover:bg-[#EFEFEF] dark:hover:bg-[#161616] p-2 rounded-md w-full justify-center">
        <LuMessageCircle className="text-2xl text-black dark:text-white ml-3" />
        <span className="text-lg text-black dark:text-white  ml-1 font-medium">
          Comment
        </span>
      </div> */}
      <div
        onClick={handleShare}
        className="flex items-center hover:bg-[#EFEFEF] dark:hover:bg-[#161616] p-2 rounded-md w-full justify-center"
      >
        <TbShare3 className="text-2xl text-black dark:text-white ml-3" />
        <span className="text-lg text-black dark:text-white  ml-1 font-medium">
          Share
        </span>
      </div>
    </div>
  );
};

export default Buttons;
