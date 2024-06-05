import Header from "@/app/blog/header";
import React from "react";
import Posts from "./posts";

const page = () => {
  return (
    <div className="pb-56">
      <Header />
      <Posts />
    </div>
  );
};

export default page;
