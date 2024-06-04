"use client";

import React from "react";
import OnePost from "./one-post";

const page = ({ params }: any) => {
  return (
    <div className="flex justify-center items-center">
      <OnePost params={params} />
    </div>
  );
};

export default page;
