"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviewsArray = [
  {
    text: "Design is everything, and these guys have nailed it. The aesthetics and functionality of their creations are second to none. Truly a top-tier design.",
    name: "Mario F.",
    title: "CEO, Astrid Inc.",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    text: "Their attention to detail is truly impressive. Every aspect of their work reflects a deep commitment to quality and precision, making their designs stand out.",
    name: "Tom M.",
    title: "Creative Director, Vortex Studios",
    img: "https://randomuser.me/api/portraits/men/79.jpg",
  },
  {
    text: "Innovative designs that set a new standard. They continuously push the boundaries of what is possible, creating unique and inspiring pieces that capture the imagination.",
    name: "John H.",
    title: "Founder, Horizon Labs",
    img: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    text: "Craftsmanship and creativity at its best. Their ability to blend technical skill with artistic vision results in products that are not only functional but also visually stunning.",
    name: "Peter P.",
    title: "Lead Designer, Pixel Forge",
    img: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    text: "Every element is perfectly executed. From the initial concept to the final product, their meticulous approach ensures that every detail is flawless and cohesive.",
    name: "Emma T.",
    title: "Manager, Zenith Corp.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "A masterclass in modern design. Their work exemplifies contemporary aesthetics, combining clean lines, innovative materials, and cutting-edge technology.",
    name: "Liam N.",
    title: "Architect, Urban Design Co.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    text: "Turning visions into reality with perfection. They listen carefully to their clients' needs and transform ideas into beautiful, tangible outcomes that exceed expectations.",
    name: "Sophia B.",
    title: "Interior Designer, Creative Spaces",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    text: "Stunning work that speaks for itself. Their designs have a timeless quality, effortlessly blending form and function to create pieces that are both beautiful and practical.",
    name: "Noah W.",
    title: "Product Designer, Innovate Labs",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviewsArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[60vh] max-w-[50rem] mx-auto p-4 relative flex flex-col z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            y: 75,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 1.25,
            },
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 0.75 }}
          className="flex flex-col"
        >
          <h1 className="text-[#a3a3a7] text-[5rem] font-bold mb-[-2rem]">
            ❛❛
          </h1>
          <h2 className="text-black dark:text-white text-3xl mb-8">
            {reviewsArray[currentIndex].text}
          </h2>
          <div className="flex flex-row justify-end">
            <div className="flex flex-col justify-center items-end text-right">
              <h3 className="text-black dark:text-white text-xl font-semibold">
                {reviewsArray[currentIndex].name}
              </h3>
              <h4 className="text-black dark:text-[#a3a3a7] text-sm sm:text-xl">
                {reviewsArray[currentIndex].title}
              </h4>
            </div>
            <div className="gradient">
              <img
                src={reviewsArray[currentIndex].img}
                alt="Picture of the author"
                className="image"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
