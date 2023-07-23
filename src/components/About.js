import ProgressBar from "./ProgressBar";

const About = ({ startAnimation }) => {
  // An About section that displays a small introduction alongside ProgressBar components to display Skills
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-4 pt-14 w-full min-h-screen overflow-hidden bg-gradient-to-br from-white to-sky-200 dark:bg-gradient-to-br dark:from-[#0F172A] dark:to-sky-900 text-[#0F172A] dark:text-white border-t-2 border-white px-5">
      <div className="flex w-6/6 h-68 md:h-60 border border-sky-500 rounded-md p-3 justify-start items-center">
        <p className="leading-7 text-left sm:text-center text-2xl m-auto sm:text-3xl dark:text-white">
          Hello ! I'm{" "}
          <span className="text-purple-700 dark:text-purple-500 whitespace-nowrap animate-pulse">
            Firas Blouza
          </span>
          , an enthusiastic and driven web developer. I thrive on continuous
          learning, always seeking new opportunities to grow and improve. I'm
          ambitious, quick learner, communicative and fun to work with !
        </p>
      </div>
      {/* Start of the Skills section */}
      <div className="flex flex-col gap-3 p-2 h-full w-full ">
        <h3 className="text-center text-2xl sm:text-4xl md:text-5xl text-sky-500 font-sharetech font-bold">
          Skills
        </h3>
        {/* Skills are wrapped in a container, and split evenly within two inner containers to control their display on different devices */}
        <div className="flex flex-col gap-7 sm:flex-row sm:flex-wrap md:flex-row justify-center items-center h-full w-full p-2 mt-6">
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
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <ProgressBar
              skill={"ReactJS"}
              score={70}
              startAnimation={startAnimation}
            />
            <ProgressBar
              skill={"PHP"}
              score={65}
              startAnimation={startAnimation}
            />
            <ProgressBar
              skill={"WP"}
              score={85}
              startAnimation={startAnimation}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
