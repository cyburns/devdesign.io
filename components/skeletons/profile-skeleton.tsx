import React from "react";
import Skeleton from "@mui/material/Skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="max-w-[50rem] w-full h-screen p-2 mt-10 sm:mt-1">
      <div className="max-w-[50rem] w-full flex items-center justify-between pt-10">
        <div className="flex flex-col sm:flex-row">
          <Skeleton
            width={110}
            height={110}
            animation="wave"
            variant="circular"
            className="bg-[#EFEFEF] dark:bg-[#161616]"
          />
          <div className="flex flex-col mt-4 sm:mt-0 sm:ml-5 justify-center">
            <h1 className="text-3xl text-black dark:text-white capitalize">
              <Skeleton
                width={150}
                height={25}
                animation="wave"
                variant="rectangular"
                className="rounded-sm bg-[#EFEFEF] dark:bg-[#161616]"
              />
            </h1>
            <h2 className="text-xl text-[#a5a5a6] mt-1">
              <Skeleton
                width={100}
                height={15}
                animation="wave"
                variant="rectangular"
                className="rounded-sm bg-[#EFEFEF] dark:bg-[#161616] mt-4"
              />
            </h2>
            <h3 className="text-black dark:text-white text-xl font-medium mt-1">
              <Skeleton
                width={100}
                height={15}
                animation="wave"
                variant="rectangular"
                className="rounded-sm bg-[#EFEFEF] dark:bg-[#161616] mt-4"
              />
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-4 w-full flex flex-row justify-around">
        <Skeleton
          height={35}
          animation="wave"
          variant="rectangular"
          className="rounded-sm bg-[#EFEFEF] dark:bg-[#161616] w-full m-1"
        />
        <Skeleton
          height={35}
          animation="wave"
          variant="rectangular"
          className="rounded-sm bg-[#EFEFEF] dark:bg-[#161616] w-full m-1"
        />
      </div>
    </div>
  );
};

export default ProfileSkeleton;
