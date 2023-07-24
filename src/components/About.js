const About = ({ startAnimation }) => {
  // An About section that displays a small introduction alongside ProgressBar components to display Skills
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center gap-4 pt-14 w-full min-h-screen overflow-hidden bg-gradient-to-br from-white to-sky-200 dark:from-[#0F172A] dark:to-sky-900 text-[#0F172A] dark:text-white border-t-2 border-white px-5">
      {/* An overlay to blur the background, some sort of tempered glass effect. */}
      <div className="hero-bg absolute inset-0 w-full h-full bg-opacity-60 backdrop-blur-lg"></div>
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
      {/* <Skills startAnimation={startAnimation} /> */}
    </section>
  );
};

export default About;
