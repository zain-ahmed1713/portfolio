"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import nineyservices from "@/assets/images/nineyservices.png";
import gemi from "@/assets/images/gemi.png";
import weatherapp from "@/assets/images/weatherapp.png";

const projects = [
  {
    id: 1,
    title: "NineyServices",
    description:
      "Developed a custom web application for a client to automate their digital services business. Utilized React for a dynamic and responsive user interface, and Firebase for a robust backend solution, including firestore database and authentication services",
    image: nineyservices,
    repoLink: "",
    liveLink: "https://nineyservices-c65e9.firebaseapp.com/",
  },
  {
    id: 2,
    title: "Gemi - AI Chatbot",
    description:
      "A conversational chatbot app that utilizes Google Gemini's API to respond to user's prompts. Powered by React and Tailwind CSS on the Frontend and Google Firebase for User Authentication.",
    image: gemi,
    repoLink: "https://github.com/zainahmed1713/gemi-chatbot-app",
    liveLink: "https://gemi-chatbot-app.vercel.app/",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "Developed a weather forecast application utilizing the WeatherAPI.com API to deliver accurate weather forecasts for up to 2 days. Integrated Browser's Geolocation API to automatically retrieve and use the user's current location for personalized weather updates",
    image: weatherapp,
    repoLink: "https://github.com/zainahmed1713/weather-app",
    liveLink: "https://zainahmed1713.github.io/weather-app/src/",
  },
];

const ProjectsSection = () => {
  return (
    <div className="bg-[#000000] p-10 md:p-20">
      <h2 className="text-white text-center text-3xl font-bold mb-2 md:text-4xl lg:text-5xl lg:text-left lg:mb-4">
        Projects
      </h2>
      <p className="text-white text-center text-sm mb-4 md:text-lg lg:w-1/2 lg:text-left">
        Explore my diverse range of projects, where{" "}
        <strong>Creativity meets Functionality</strong>. From innovative
        personal projects to professional client work, each showcases my{" "}
        <strong>dedication</strong> to delivering{" "}
        <strong>exceptional user experiences</strong> and cutting-edge
        solutions.
      </p>
      <div className="h-fit flex flex-col gap-2  lg:overflow-scroll lg:flex-row">
        {projects.map((project) => (
          <CardContainer key={project.id} className="">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={
                    project.repoLink.length === 0
                      ? project.liveLink
                      : project.repoLink
                  }
                  target="__blank"
                  className={`px-4 py-2 rounded-xl text-xs font-normal dark:text-white`}
                >
                  {project.repoLink.length === 0
                    ? "Closed Source"
                    : "Visit Repo"}
                </CardItem>
                <Link href={project.liveLink}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Visit Live Site
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};
export default ProjectsSection;
