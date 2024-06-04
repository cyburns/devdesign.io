"use client";

import React from "react";
import Contact from "../home/contact";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Welcome = () => {
  const auth = getAuth();

  const handleLgout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
    } catch (error) {
      console.log(error);
      toast.error("Error logging out. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mt-56">
      <Contact />
      <div>
        <h1 className="text-green-500 dark:text-green-400 mt-24">
          Thank you for joing the BRIGHT community. We will have content up and
          running soon!
        </h1>
        <button onClick={handleLgout}>Log out</button>
      </div>
    </div>
  );
};

export default Welcome;
