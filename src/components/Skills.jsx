import React from "react";
import { SkillSlider } from "./SkillSlider";

const Skills = () => {
  return (
    <section className="font-roboto bg-[#A3BE8C] h-[90vh] p-12">
      <div className="heading mb-8">
        <h3 className="text-[#353535] text-4xl text-center font-bold">
          Skills
        </h3>
      </div>
      <SkillSlider />
    </section>
  );
};
export default Skills;
