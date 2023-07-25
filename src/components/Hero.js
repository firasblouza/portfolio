import { FaArrowDown } from "react-icons/fa";

const Hero = ({ heroLetsConnect }) => {
  // Hero Section that contains the animation and the connect button to navigate through the website
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center w-full min-h-screen overflow-hidden bg-gradient-to-tr from-white to-sky-200 dark:from-[#0F172A] dark:to-sky-700 text-[#0F172A] dark:text-white">
      {/* An overlay to blur the background, some sort of tempered glass effect. */}
      {/* Wrapped the image in a relative container that is in the middle screen to control it's position */}
      <div className="hero-profile w-2/3 h-64 relative">
        <img
          src="img/profile.jpg"
          alt="Firas"
          id="ProfilePic"
          className="profile-pic z-10 w-2/3 md:w-1/4 mb-5 h-auto rounded-full absolute  inset-0  m-auto animate-slide-and-rotate"
          width="895"
          height="955"
          aria-label="Firas's Image"
        />
      </div>
      {/* Beginning of the Intro Text, also wrapped in a box to add the slide up animation */}
      <div className="intro-container z-10 flex justify-center items-center flex-col animate-slide-up">
        <div className="intro-text-box grid place-content-center text-center z-10">
          <h1 className="intro-text text-[#0F172A] dark:text-white text-3xl sm:text-5xl md:text-4xl whitespace-nowrap mb-2 font-sharetech">
            Hi, I'm{" "}
            <span className="text-purple-700 dark:text-purple-500 animate-pulse  after:content-['👋']">
              Firas
            </span>
          </h1>
          <h3 className="intro-sub-text text-[#0F172A] dark:text-white text-3xl sm:text-4xl md:text-4xl font-sharetech">
            A Full Stack Web Developer
          </h3>
        </div>
        <div className="w-2/3 z-10 flex flex-col-reverse gap-3 justify-center items-center mt-6 sm:mt-10 animate-bounce">
          <FaArrowDown
            className="p-2 text-4xl text-purple-500 dark:text-white md:text-5xl border-2 rounded-full sm:py-2 border-violet-500 dark:border-violet-950 cursor-pointer"
            onClick={heroLetsConnect}
          />
          <h3 className="intro-sub-text text-[#0F172A] mt-5 dark:text-white text-center text-1xl sm:text-2xl font-sharetech">
            Let's get to know each other!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
