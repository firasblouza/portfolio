import React from "react";
import ProgressBar from "./ProgressBar";

const Skills = ({ startAnimation }) => {
  /* Start of the Skills section */
  return (
    <section
      id="skills-section"
      className="flex flex-col justify-center items-center gap-4 p-5 w-full min-h-screen overflow-hidden bg-gradient-to-br from-white to-sky-200 dark:from-[#0F172A] dark:to-sky-700 text-[#0F172A] dark:text-white">
      {/* An overlay to blur the background, some sort of tempered glass effect. */}
      <div className="hero-bg absolute inset-0 w-full h-full bg-opacity-60 backdrop-blur-lg"></div>
      <div className="flex flex-col gap-3 p-2 h-full w-full z-10">
        <h3 className="text-center text-2xl sm:text-4xl md:text-5xl text-sky-500 font-sharetech font-bold">
          Skills
        </h3>
        {/* Skills are wrapped in a container, and split evenly within two inner containers to control their display on different devices */}
        <div className="flex flex-col gap-7 sm:flex-row sm:flex-wrap md:flex-row justify-center items-center h-full w-full p-2 mt-6">
          <div className="flex flex-col gap-5">
            <div className="flex justify-center items-center">
              <h1 className="font-bold p-2 text-2xl sm:text-3xl">Frontend</h1>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <ProgressBar
                skill={"HTML"}
                score={100}
                startAnimation={startAnimation}
              />
              <ProgressBar
                skill={"CSS"}
                score={80}
                startAnimation={startAnimation}
              />
              <ProgressBar
                skill={"JavaScript"}
                score={80}
                startAnimation={startAnimation}
              />
              <ProgressBar
                skill={"ReactJS"}
                score={70}
                startAnimation={startAnimation}
              />
              <ProgressBar
                skill={"TailwindCSS"}
                score={60}
                startAnimation={startAnimation}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-center items-center">
              <h1 className="font-bold p-2 text-2xl sm:text-3xl">Backend</h1>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <ProgressBar
                skill={"NodeJS"}
                score={70}
                startAnimation={startAnimation}
              />
              <ProgressBar
                skill={"ExpressJS"}
                score={70}
                startAnimation={startAnimation}
              />
              <ProgressBar
                skill={"PHP"}
                score={65}
                startAnimation={startAnimation}
              />
              <ProgressBar
                skill={"MongoDB"}
                score={85}
                startAnimation={startAnimation}
              />
              <ProgressBar
                skill={"MySQL"}
                score={85}
                startAnimation={startAnimation}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
