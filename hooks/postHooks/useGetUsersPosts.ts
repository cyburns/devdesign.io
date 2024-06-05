import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { FIREBASE_STORE } from "@/FirebaseConfig";

const useGetUsersPosts = (userId: any) => {
  const [isUsersPostsLoading, setUsersPostsIsLoading] = useState<boolean>(true);
  const [usersPosts, setUsersPosts] = useState<any[]>([]);
  const [isLastPost, setIsLastPost] = useState<boolean>(false);
  const database = FIREBASE_STORE;

  const getUsersPosts = async (isAtTop: Boolean) => {
    if (isLastPost) return;

    try {
      let postsQuery;

      if (isAtTop) {
        setUsersPosts([]);

        postsQuery = query(
          collection(database, "posts"),
          where("createdBy", "==", userId),
          orderBy("createdAt", "desc"),
          limit(12)
        );
      } else {
        const lastPost = usersPosts[usersPosts.length - 1];

        postsQuery = query(
          collection(database, "posts"),
          where("createdBy", "==", userId),
          orderBy("createdAt", "desc"),
          startAfter(lastPost.createdAt),
          limit(12)
        );
      }

      const querySnapshot = await getDocs(postsQuery);
      const fetchedPosts: any[] = [];

      if (querySnapshot.size < 12) {
        setIsLastPost(true);
      }

      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        postData.id = doc.id;
        fetchedPosts.push(postData);
      });

      if (isAtTop) {
        setUsersPosts(fetchedPosts);
      } else {
        setUsersPosts((prevPosts) => [...prevPosts, ...fetchedPosts]);
      }
    } catch (error) {
      console.error("Error fetching posts: ", error);
    } finally {
      setUsersPostsIsLoading(false);
    }
  };

  useEffect(() => {
    setUsersPostsIsLoading(true);
    getUsersPosts(true);
  }, [database, setUsersPosts]);

  return { isUsersPostsLoading, usersPosts, getUsersPosts, isLastPost };
};

export default useGetUsersPosts;
