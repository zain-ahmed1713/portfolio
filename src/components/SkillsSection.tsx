import React from "react";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const SKILLS_QUERY = `*[
  _type == "skills"]{_id, name, detail, image}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const SkillsSection = async () => {
  const skills = await sanityFetch<SanityDocument[]>({ query: SKILLS_QUERY });

  const skillsArray = skills.map((item) => ({
    title: item.name,
    description: item.detail[0].children[0].text,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={`${
            item.image
              ? urlFor(item.image)?.width(300).height(300).url()
              : "https://via.placeholder.com/300x300"
          }`}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt={item.name}
        />
      </div>
    ),
  }));

  return (
    <div className="bg-[#000000] p-10 md:p-20" id="skills-section">
      <h2 className="text-white text-center text-3xl font-bold mb-2 md:text-4xl lg:text-5xl lg:text-left lg:mb-4">
        Skills
      </h2>
      <p className="text-white text-center text-sm mb-6 md:text-lg lg:w-1/2 lg:text-left">
        I leverage <strong>Modern Development</strong> practices with a suite of
        tools and technologies including <strong>React.js</strong>,{" "}
        <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
      </p>
      <StickyScroll content={skillsArray} />
    </div>
  );
};

export default SkillsSection;
