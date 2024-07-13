"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import reactjs from "@/assets/images/reactjs.png"
import nextjs from "@/assets/images/nextjs.png"
import tailwindcss from "@/assets/images/tailwindcss.png"
import firebase from "@/assets/images/firebase.png"
import htmlCssJs from "@/assets/images/htmlCssJs.png"

const content = [
  {
    title: "React.js",
    description:
      "With its component-based architecture, React allows for the creation of reusable UI components, enhancing code maintainability and scalability. Its virtual DOM improves performance, making updates faster and more efficient.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={reactjs}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="React.js"
          />
        </div>
    ),
  },
  {
    title: "Next.js",
    description:
      "Next.js enhances performance through optimized bundling and pre-fetching, making it ideal for modern web applications. Its built-in support for SEO, internationalization, and automatic code-splitting ensures that applications are fast, scalable, and optimized for search engines.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={nextjs}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Next.js"
        />
      </div>
    ),
  },
  {
    title: "Tailwind CSS",
    description:
      "Tailwind enables a highly customizable and consistent design system without writing traditional CSS. Its approach promotes the creation of responsive, modern, and visually appealing user interfaces. Tailwind's extensive configurability and built-in design patterns help streamline development, reduce code redundancy, and maintain a scalable codebase.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={tailwindcss}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
    ),
  },
  {
    title: "Firebase",
    description:
      "It offers a suite of cloud-based services including real-time databases, authentication, hosting, cloud functions, and analytics. With Firebase, I can effortlessly implement secure user authentication, store and sync data in real-time across all clients, and deploy applications quickly.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={firebase}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
    ),
  },
  {
    title: "HTML, CSS, & JavaScript",
    description:
      "HTML, CSS, and JavaScript are the core technologies for building web applications. HTML provides the structure, CSS handles the styling and layout, and JavaScript brings interactivity and dynamic functionality, allowing me to create responsive, visually appealing, and engaging user experiences.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={htmlCssJs}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
    ),
  },
];

const SkillsSection = () => {
  return (
    <div className="bg-[#000000] p-10 md:p-20">
        <h2 className="text-white text-center text-3xl font-bold mb-2 md:text-4xl lg:text-5xl lg:text-left lg:mb-4">Skills</h2>
        <p className="text-white text-center text-sm mb-6 md:text-lg lg:w-1/2 lg:text-left">I leverage <strong>Modern Development</strong> practices with a suite of tools and technologies including <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.</p>
      <StickyScroll content={content} />
    </div>
  );
}

export default SkillsSection;
