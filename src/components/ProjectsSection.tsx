import React from "react";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const PROJECTS_QUERY = `*[
  _type == "projects"]{_id, name, detail, image, repoLink, liveLink}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const ProjectsSection = async () => {
  const projects = await sanityFetch<SanityDocument[]>({
    query: PROJECTS_QUERY,
  });

  return (
    <div className="bg-[#000000] p-10 md:p-20" id="projects-section">
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
          <CardContainer key={project._id} className="">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.detail[0].children[0].text}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={`${
                    project.image
                      ? urlFor(project.image)?.width(1000).height(1000).url()
                      : "https://via.placeholder.com/1000x1000"
                  }`}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.name}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={
                    project.repoLink === null
                      ? project.liveLink
                      : project.repoLink
                  }
                  target="__blank"
                  className={`px-4 py-2 rounded-xl text-xs font-normal dark:text-white`}
                >
                  {project.repoLink === null ? "Closed Source" : "Visit Repo"}
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
