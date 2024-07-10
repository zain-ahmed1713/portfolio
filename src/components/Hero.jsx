import React from "react";

const Hero = () => {
  const redirectToGithub = () => {
    window.open("https://www.github.com/zainahmed1713", "_blank");
  };

  return (
    <section className="h-[90vh] bg-[#353535] flex flex-col justify-center items-center gap-6 p-3 md:p-4">
      <h2 className="font-neueHaas font-bold text-[#A3BE8C] text-4xl text-center tracking-wide leading-tight md:text-7xl md:leading-snug lg:text-8xl lg:w-2/4 animate-fadeIn">
        Highly Motivated Frontend Web Developer
      </h2>
      <div className="button-container animate-bounce">
        <button
          onClick={redirectToGithub}
          className="font-neueHaas tracking-wide bg-[#A3BE8C] text-[#353535] p-2 rounded-3xl hover:opacity-80 md:text-xl md:p-3"
        >
          Visit My Github
        </button>
      </div>
    </section>
  );
};
export default Hero;
