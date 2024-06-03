import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { FIREBASE_STORE } from "@/FirebaseConfig";

const useGetUserById = (userId: any) => {
  const [isUserLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const database = FIREBASE_STORE;

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);

      try {
        const userRef = await getDoc(doc(database, "users", userId));

        if (userRef.exists()) {
          //@ts-ignore
          setUserProfile(userRef.data());
        }
      } catch (error) {
        console.log("Error getting user profile", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [setUserProfile, userId]);

  const refetchGetUserProfile = async () => {
    setIsLoading(true);

    try {
      const userRef = await getDoc(doc(database, "users", userId));

      if (userRef.exists()) {
        //@ts-ignore
        setUserProfile(userRef.data());
      }
    } catch (error) {
      console.log("Error getting user profile", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isUserLoading, userProfile, setUserProfile, refetchGetUserProfile };
};

export default useGetUserById;
