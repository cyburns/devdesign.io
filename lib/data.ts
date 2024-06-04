import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "/",
    link: "/",
  },
  {
    name: "Blog",
    hash: "#blog",
    link: "/blog",
  },
  {
    name: "About",
    hash: "#about",
    link: "/about",
  },
  {
    name: "Services",
    hash: "#services",
    link: "/services",
  },
  {
    name: "Works",
    hash: "#works",
    link: "/works",
  },
  {
    name: "Pricing",
    hash: "#pricing",
    link: "/pricing",
  },
  {
    name: "Contact",
    hash: "#contact",
    link: "/contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const testimonials = [
  {
    name: "Wireframing",
  },
  {
    name: "Design",
  },
  {
    name: "Architectural Planning",
  },
  {
    name: "Containerization",
  },
  {
    name: "Front-end Development",
  },
  {
    name: "API Integration",
  },
  {
    name: "Database Design",
  },
];

export const serviceCardsData = [
  {
    title: "Development",
    description:
      "Crafting responsive and dynamic websites or web applications, using a combination of front-end and back-end technologies, to meet various online business needs.",
    icon: React.createElement(FaReact),
    num: "01",
  },
  {
    title: "Design",
    description:
      "Creating UI mockups with foundational elements to grasp the business requirements. High-fidelity prototypes are produced, featuring rich detail and mock data.",
    icon: React.createElement(CgWorkAlt),
    num: "02",
  },
  {
    title: "Consulting",
    description:
      "I provide consulting services for web development, DevOps, system design and prototyping.",
    icon: React.createElement(CgWorkAlt),
    num: "03",
  },
  {
    title: "DevOps",
    description:
      " Implementing a seamless pipeline for code integration and deployment, enabling faster release cycles and immediate feedback along with disaster recovery.",
    icon: React.createElement(LuGraduationCap),
    num: "04",
  },
] as const;

export const defulatPfp =
  "https://firebasestorage.googleapis.com/v0/b/seatr-416422.appspot.com/o/profile-pictures%2FzZlxE2oUvKYpgOgATRFrBZuewGm1?alt=media&token=75c9c254-e4e5-4cd4-963b-53227ef5a8ee";
