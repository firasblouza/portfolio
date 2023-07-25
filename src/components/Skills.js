import React from "react";
import ProgressBar from "./ProgressBar";
import { FaArrowDown } from "react-icons/fa";

const Skills = ({ startAnimation, skillsLetsConnect }) => {
  /* Start of the Skills section */
  return (
    <section
      id="skills-section"
      className="flex flex-col justify-center items-center gap-4 p-5 w-full min-h-screen overflow-hidden bg-gradient-to-br from-white to-sky-200 dark:from-[#0F172A] dark:to-sky-700 text-[#0F172A] dark:text-white">
      {/* An overlay to blur the background, some sort of tempered glass effect. */}
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
      <div className="w-2/3 z-10 flex flex-col-reverse gap-3 justify-center items-center mt-6 sm:mt-10 ">
        <FaArrowDown
          className="p-2 text-4xl text-purple-500 dark:text-white md:text-5xl border-2 rounded-full sm:py-2 border-violet-500 dark:border-violet-950 cursor-pointer"
          onClick={skillsLetsConnect}
        />
        <h3 className="intro-sub-text text-[#0F172A] mt-5 dark:text-white text-center text-1xl sm:text-2xl font-sharetech after:content-['👀']">
          Let's get in touch !
        </h3>
      </div>
    </section>
  );
};

export default Skills;
