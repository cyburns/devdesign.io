import React from "react";
import Skeleton from "@mui/material/Skeleton";

const PostSkeleton = () => {
  const fakePostsArray = Array.from({ length: 5 }, (_, i) => i);

  return (
    <>
      {fakePostsArray.map((_, index) => (
        <div
          key={index}
          className="mt-10 p-3 pb-7 border-b-2 border-[#EFEFEF] dark:border-[#161616]"
        >
          <div className="flex flex-row items-center justify-between mb-7 w-full">
            <div className="flex flex-row">
              <Skeleton
                width={50}
                height={50}
                animation="wave"
                variant="circular"
                className="bg-[#EFEFEF] dark:bg-[#161616]"
              />
              <div className="ml-3">
                <div className="flex flex-row">
                  <h2 className="text-black dark:text-white font-medium">
                    <Skeleton
                      width={100}
                      height={15}
                      animation="wave"
                      variant="rectangular"
                      className="rounded-sm bg-[#EFEFEF] dark:bg-[#161616]"
                    />
                  </h2>
                </div>
                <h2 className="font-normal mt-3">
                  <Skeleton
                    width={50}
                    height={15}
                    animation="wave"
                    variant="rectangular"
                    className="rounded-sm bg-[#EFEFEF] dark:bg-[#161616] "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div className="text-black dark:text-white font-semibold text-[2rem] w-full bg-white dark:bg-black !leading-[1.2]">
            <Skeleton
              width={"80%"}
              height={55}
              animation="wave"
              variant="rectangular"
              className="rounded-sm bg-[#EFEFEF] dark:bg-[#161616]"
            />
          </div>
          <div className="text-black dark:text-white w-full text-[1rem] font-thin outline-none bg-white dark:bg-black !leading-[1.5] mt-5">
            <Skeleton
              width={"70%"}
              height={15}
              animation="wave"
              variant="rectangular"
              className="rounded-sm bg-[#EFEFEF] dark:bg-[#161616] mt-2"
            />
            <Skeleton
              width={"50%"}
              height={15}
              animation="wave"
              variant="rectangular"
              className="rounded-sm bg-[#EFEFEF] dark:bg-[#161616] mt-2"
            />
            <Skeleton
              width={"60%"}
              height={15}
              animation="wave"
              variant="rectangular"
              className="rounded-sm bg-[#EFEFEF] dark:bg-[#161616] mt-2"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default PostSkeleton;
