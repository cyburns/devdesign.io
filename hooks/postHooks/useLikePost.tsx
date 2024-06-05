import { useState } from "react";
import { FIREBASE_STORE } from "@/FirebaseConfig";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const useLikePost = (post: any, userId: any) => {
  const [isLiking, setIsLiking] = useState(false);
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(post.likes.includes(userId));
  const database = FIREBASE_STORE;

  const handleLikePost = async () => {
    if (isLiking) return;
    setIsLiked(!isLiked);
    setIsLiking(true);

    try {
      const postRef = doc(database, "posts", post.id);
      await updateDoc(postRef, {
        likes: isLiked ? arrayRemove(userId) : arrayUnion(userId),
      });

      isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLiking(false);
    }
  };

  return { isLiked, likes, handleLikePost };
};

export default useLikePost;
