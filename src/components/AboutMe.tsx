"use client";
import Image from "next/image";
import profilePicture from "@/assets/images/profilePicture.jpg";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="bg-[#000000] p-10 h-[100vh] md:p-20" id="about-me">
      <h2 className="text-white text-center text-3xl font-bold mb-6 md:text-4xl lg:text-5xl lg:text-center lg:mb-8">
        About Me
      </h2>
      <div className="w-[180px] h-[180px] flex justify-center items-center rounded-full overflow-hidden mb-4 mx-auto shadow-greenShadow">
        <Image src={profilePicture} className="w-full" alt="Zain Ahmed" />
      </div>
      <p className="text-white text-center text-lg font-semibold mb-2 md:text-xl">
        Zain Ahmed
      </p>
      <p className="text-white text-center text-sm mb-8 md:text-lg lg:w-1/2 lg:mx-auto">
        A Highly motivated Frontend Developer with a passion for crafting
        user-centric web experiences using React.js. Adept at leveraging modern
        development practices and eager to contribute to a fast-paced
        environment. Continuously learning and expanding the skill set to
        embrace full-stack development in the future.
      </p>
      <div>
        <h3 className="text-white text-center text-lg font-bold mb-3">
          Get in Touch With Me
        </h3>
        <div className="text-white text-lg flex justify-center gap-2 md:text-xl lg:text-2xl">
          <Link
            href={"mailto:zainahmed1713@gmail.com"}
            className="hover:scale-110"
          >
            <FaEnvelope />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/zain-ahmed-1ba904287/"}
            className="hover:scale-110"
          >
            <FaLinkedin />
          </Link>
          <Link
            href={"https://www.github.com/zainahmed1713/"}
            className="hover:scale-110"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
