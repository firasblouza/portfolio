import React from "react";
import ExperienceCard from "./ExperienceCard";

const ProfessionalExperience = () => {
  return (
    <section
      id="professional-experience"
      className="flex flex-col justify-center items-center p-5 w-full min-h-screen overflow-hidden bg-gradient-to-tr from-white to-sky-200 dark:from-[#0F172A] dark:to-sky-900 text-[#0F172A] dark:text-white">
      {/* An overlay to blur the background, some sort of tempered glass effect. */}
      <div className="hero-bg absolute inset-0 w-full h-full bg-opacity-60 backdrop-blur-lg"></div>
      <div className="flex flex-col gap-3 p-2 h-full w-full ">
        <h3 className="text-center text-2xl sm:text-4xl md:text-5xl text-sky-500 font-sharetech font-bold">
          Professional Experience
        </h3>
      </div>
      <div className="flex flex-col gap-5 p-3 h-full w-full my-5">
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
    </section>
  );
};

export default ProfessionalExperience;
