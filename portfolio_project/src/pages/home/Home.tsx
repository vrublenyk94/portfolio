import React from "react";
import Welcome from "./components/welcome/Welcome";
import Skills from "./components/skills/Skills";
import MyStory from "./components/myStory/MyStory";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";

const Home: React.FC = () => {
  return (
    <>
      <Welcome />
      <Skills />
      <Projects />
      <Experience />
      <MyStory />
    </>
  );
};

export default Home;
