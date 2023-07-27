import AboutCard from "./AboutCard";
import { FaArrowDown } from "react-icons/fa";

const About = ({ startAnimation, handleClick, aboutRef }) => {
  // An About section that displays a small introduction alongside ProgressBar components to display Skills
  return (
    <section
      id="about"
      ref={aboutRef}
      className="flex flex-col justify-center items-center pt-14 w-full min-h-screen overflow-hidden bg-gradient-to-br from-white to-sky-200 dark:from-[#0F172A] dark:to-sky-700 text-[#0F172A] dark:text-white px-5">
      {/* An overlay to blur the background, some sort of tempered glass effect. */}
      <div className="about-bg inset-0 w-full h-full bg-opacity-60 backdrop-blur-lg"></div>
      {/* Made the about card in a seperate re usable component.*/}
      <AboutCard
        title={"An enthusiastic web developer"}
        name={"Firas Blouza"}
        text={
          "an enthusiastic and driven web developer. I thrive on continuous learning, always seeking new opportunities to grow and improve. I'm ambitious, quick learner, communicative and fun to work with !"
        }
      />
      <div className="w-2/3 z-10 flex flex-col-reverse gap-3 justify-center items-center mt-6 sm:mt-10 animate-bounce">
        <FaArrowDown
          className="p-2 text-4xl text-purple-500 dark:text-white md:text-5xl border-2 rounded-full sm:py-2 border-violet-500 dark:border-violet-950 cursor-pointer"
          onClick={() => handleClick("about")}
        />
        <h3 className="intro-sub-text text-[#0F172A] mt-5 dark:text-white text-center text-1xl sm:text-2xl font-sharetech after:content-['👀']">
          Still interested ? Let's explore more !
        </h3>
      </div>
      {/* <Skills startAnimation={startAnimation} /> */}
    </section>
  );
};

export default About;
