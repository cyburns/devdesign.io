"use client";

import React from "react";
import Accordion from "./accordion";
import { useSectionInView } from "@/lib/hooks";

const Works = () => {
  const { ref } = useSectionInView("Works");

  return (
    <div
      ref={ref}
      id="works"
      className="p-4 bg-white dark:bg-black rounded-lg mb-32 sm:mb-48"
    >
      <h2 className="font-medium mb-8 text-[3rem] sm:text-[5rem] uppercase leading-[1] text-center">
        selected works
      </h2>

      <div className="max-w-[50rem]">
        <Accordion
          title="Audia"
          link="https://www.getaudia.com/"
          answer="Audia is a mobile app that lets users share and discover new music with friends, find communities, and grow businesses around music. Audia uses React Native with TypeScript and Expo Router, it supports both iOS and Android. Audia leverages Google Cloud storage for a scalable, secure data system, reducing retrieval times by 50%. It integrates multiple APIs to enhance user experience, with a Node and Express server ensuring efficient and safe data flow. A Figma vision board guides high-standard UI/UX design, while test-driven development ensures app security and minimizes technical debt."
        />
        <Accordion
          title="ReacType"
          link="https://www.reactype.dev/"
          answer="ReacType is a prototyping tool that allows users to visualize application architecture through a drag-and-drop interface and real-time code preview, enhancing collaboration. By restructuring file architecture and migrating to Vite, bundle time improved by 30x. TypeScript conversion rates rose from 75% to over 95%. Socket.IO enabled real-time communication, while industry-leading authentication with OAuth, bcrypt, and JWTs ensured data security. VideoSDK integration provided a robust video meeting interface. Jest increased test coverage to over 80%, and a sleek landing page was crafted using MUI, Tailwind.css, Shadcd/ui, and Aceturnity within a Next.js structure. Redux and Redux Toolkit improved state and data flow management."
        />
        <Accordion
          title="Press Sports"
          link="https://presssportsapp.com/"
          answer="Developed a dynamic website with React and TypeScript, enabling efficient state management and tailored user data display using reusable components for optimized rendering performance, enhancing UI and UX. Collaborated with the engineering team to develop the React Native mobile app, ensuring design continuity from web to mobile. Contributed to the app's growth, acquiring over 300,000 users with a 4.9-star rating from 11.8k reviews."
        />
      </div>
    </div>
  );
};

export default Works;
