import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <AboutMe />
    </>
  );
};

export default Home;
