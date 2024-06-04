import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { FIREBASE_STORE } from "@/FirebaseConfig";

const useGetPostById = (postId: string) => {
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [onePost, setOnePost] = useState<any>(null);
  const database = FIREBASE_STORE;

  const getPost = async () => {
    setIsPostLoading(true);

    try {
      const userRef = await getDoc(doc(database, "posts", postId));

      if (userRef.exists()) {
        const postData = userRef.data();
        postData.id = userRef.id;
        setOnePost([postData]);
      }
    } catch (error) {
      console.log("Error getting user profile", error);
    } finally {
      setIsPostLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, [setOnePost, postId]);

  return { isPostLoading, onePost, setOnePost };
};

export default useGetPostById;