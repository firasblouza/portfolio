import React from "react";

const AboutCard = ({ title, name, text }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-3/4 gap-6 rounded-lg bg-white shadow-lg z-10">
      <div className="about-img relative">
        <img
          className="w-auto min-w-full h-auto rounded-t-lg lg:rounded-l-lg min-w-content max-h-fit"
          src="img/about-laptop.jpg"
          alt="About Me Laptop"
        />
        <span className="absolute flex justify-center items-center mx-auto inset-x-0 -bottom-8 lg:inset-x-auto lg:mx-0 lg:inset-y-0 lg:my-auto lg:-right-8 rounded-full bg-white w-36 h-36">
          {/* <img
            className="w-28 h-auto rounded-full z-10"
            src="img/profile.jpg"
            alt=""
          /> */}
          <span className="animate-pulse text-5xl">💻</span>
        </span>
      </div>
      <div className="about-info bg-white w-auto h-auto grid py-4 px-2 lg:pl-4 place-content-center justify-center justify-items-center lg:justify-items-start">
        <h2 className="about-subtitle font-bold font-sharetech text-sky-500">
          About Me
        </h2>
        <h2 className="about-title font-bold my-2 text-2xl text-center lg:text-left font-sharetech text-[#0F172A]">
          {title}
        </h2>
        <p className="text-1xl text-[#0F172A] text-center lg:text-left">
          Hello ! I'm{" "}
          <span className="text-purple-700 dark:text-purple-500 whitespace-nowrap animate-pulse">
            {name}
          </span>
          , {text}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
