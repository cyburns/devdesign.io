import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FIREBASE_STORE } from "@/FirebaseConfig";

const useGetPosts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<any[]>([]);
  const database = FIREBASE_STORE;

  const getMainFeedPosts = async () => {
    setIsLoading(true);

    try {
      const postsQuery = query(collection(database, "posts"));
      const querySnapshot = await getDocs(postsQuery);
      const fetchedPosts: any[] = [];

      querySnapshot.forEach((doc) => {
        const postData = doc.data();

        postData.id = doc.id;
        fetchedPosts.push(postData);
      });

      fetchedPosts.sort((a, b) => {
        const aTimestamp =
          a.createdAt.seconds * 1000 + a.createdAt.nanoseconds / 1000000;
        const bTimestamp =
          b.createdAt.seconds * 1000 + b.createdAt.nanoseconds / 1000000;
        return bTimestamp - aTimestamp;
      });

      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMainFeedPosts();
  }, [database, setPosts]);

  return { isLoading, posts };
};

export default useGetPosts;
