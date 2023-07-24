import React from "react";

const ExperienceCard = ({ title, date, experience }) => {
  return (
    <div className="flex flex-col w-full h-auto border py-2 px-5 border-sky-500 rounded-md shadow-lg">
      <div className="card-title flex flex-col justify-start flex-grow">
        <h1 className="font-medium text-2xl my-2 text-[#0F172A] dark:text-white">
          {title}
        </h1>
        <h1 className="font-medium text-[20px] md:text[32px] text-[#51596d] dark:text-[#a7a7a7]">
          {date}
        </h1>
      </div>
      <div className="card-experience flex justify-start w-full h-full">
        <p className="text-left font-light leading-7 text-[#0F172A] dark:text-white">
          {experience}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
