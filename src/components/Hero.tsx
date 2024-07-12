"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import GradientButton from "./GradientButton";
import Link from "next/link";

const Hero = () => {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight className="text-black dark:text-white">
          I&apos;m Zain Ahmed
        </Highlight> <br />
        A Highly Motivated Frontend Web Developer
        <Link href="https://www.github.com/zainahmed1713" target="_blank">
          <GradientButton buttonText="Visit My Github"/>
        </Link>
      </motion.h1>
    </HeroHighlight>
  );
}

export default Hero;
