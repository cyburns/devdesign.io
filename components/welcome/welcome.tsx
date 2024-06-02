import React from "react";
import Contact from "../home/contact";

const Welcome = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-56">
      <Contact />
      <div>
        <h1 className="text-green-500 dark:text-green-400 mt-24">
          Thank you for joing the BRIGHT community. We will have content up and
          running soon!
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
