import React from "react";
import ExperienceCard from "./ExperienceCard";
import { FaArrowDown } from "react-icons/fa";

const ProfessionalExperience = ({
  handleClick,
  setNextSection,
  experienceRef
}) => {
  return (
    <section
      id="professional-experience"
      ref={experienceRef}
      className="flex flex-col justify-center items-center p-5 w-full min-h-screen overflow-hidden bg-gradient-to-tr from-white to-sky-200 dark:from-[#0F172A] dark:to-sky-700 text-[#0F172A] dark:text-white">
      {/* An overlay to blur the background, some sort of tempered glass effect. */}
      <div className="professional-bg  inset-0 w-full h-full bg-opacity-70 backdrop-blur-lg"></div>
      <h3 className="text-center p-2 text-2xl sm:text-4xl md:text-5xl text-sky-500 font-sharetech font-bold z-10">
        Professional Experience
      </h3>
      {/* ExperienceCard are split evenly and each couple is wrapped in a container to maintain responsiveness */}
      <div className="flex flex-col gap-5 p-3 h-full w-full my-5 z-10">
        <div className="flex flex-col md:flex-row gap-5 w-full h-full">
          <ExperienceCard
            title={"Lead Web Developer - Vision Vortexes Greece"}
            date={"2022-2023"}
            experience={
              "In charge of creating and managing websites and web applications while effectively leading a team and ensuring client satisfaction"
            }
          />
          <ExperienceCard
            title={"Stage : Web Developer at DS-Consulting France"}
            date={"02/05/2023 - 31/05/2023"}
            experience={
              "Creation of a Blog and creating and maintaining several client websites."
            }
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5 w-full h-full">
          <ExperienceCard
            title={"Stage : Web Developer at EWEB2PRO"}
            date={"01/07/2022 - 31/08/2022"}
            experience={
              "Creating and maintaining websites and web applications and providing web services for the agency's clients."
            }
          />
          <ExperienceCard
            title={"Stage : Web Developer at One Webmarketing"}
            date={"01/12/2021 - 31/12/2021"}
            experience={
              "Maintenance and Development of WordPress websites and re branding of clients businesses alongside a team of creative minds."
            }
          />
        </div>
      </div>
      {/* An arrow to move to the next section */}
      <div className="w-2/3 z-10 flex flex-col-reverse gap-3 justify-center items-center mt-6 sm:mt-10 animate-bounce">
        <FaArrowDown
          className="p-2 text-4xl text-purple-500 dark:text-white md:text-5xl border-2 rounded-full sm:py-2 border-violet-500 dark:border-violet-950 cursor-pointer"
          onClick={() => setNextSection("skills-section")}
        />
        <h3 className="intro-sub-text text-[#0F172A] mt-5 dark:text-white text-center text-1xl sm:text-2xl font-sharetech after:content-['😋']">
          Let's keep going !
        </h3>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
