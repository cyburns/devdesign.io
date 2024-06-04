import React from "react";
import BrightHeaderText from "@/components/ui/bright-header-text";
import Services from "@/components/home/services";

const page = () => {
  return (
    <div className="flex flex-col items-center px-4 pt-32 mb-32">
      <BrightHeaderText />
      <Services />
    </div>
  );
};

export default page;
