import { useState, useEffect, useRef } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  // Section Refs
  const sectionRefs = {
    hero: useRef(),
    about: useRef(),
    experience: useRef(),
    skills: useRef(),
    contact: useRef()
  };

  // Hero Section Refs
  const profileImageRef = useRef();
  const progressBarRefs = useRef([]);

  // Handle click for the buttons
  const handleClick = (section) => {
    if (section === "hero") {
      const profileImage = profileImageRef.current;
      profileImage.classList.add("animate-slide-out-and-rotate");
      profileImage.addEventListener(
        "animationend",
        function handleAnimationEnd() {
          profileImage.classList.remove(
            "animate-slide-out-and-rotate",
            "animate-slide-and-rotate"
          );
          sectionRefs.about.current.scrollIntoView({ behavior: "smooth" });
          profileImage.removeEventListener("animationend", handleAnimationEnd);
        }
      );
    } else if (section === "about") {
      sectionRefs.experience.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "experience") {
      sectionRefs.skills.current.scrollIntoView({ behavior: "smooth" });
      toggleProgressBar();
    } else if (section === "skills") {
      sectionRefs.contact.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle the progress bar animation, used on handleScroll and handleClick
  const toggleProgressBar = () => {
    if (!startAnimation) {
      progressBarRefs.current.forEach((progressBar) => {
        progressBar.classList.add("animate-progress-bar");
      });
      setStartAnimation(true);
    }
  };

  // Control the behavior of the page when the currentSection changes

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = sectionRefs.hero.current;
      const heroThreshold = heroSection.offsetTop + heroSection.offsetHeight;
      setShowGoToTop(window.scrollY >= heroThreshold);

      const skillsSection = sectionRefs.skills.current;
      const skillsThreshold =
        skillsSection.offsetTop - skillsSection.offsetHeight + 400;
      if (!startAnimation && scrollY >= skillsThreshold) {
        toggleProgressBar();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll to the top of the page on load
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App min-h-screen relative">
      <Hero
        handleClick={handleClick}
        heroRef={sectionRefs.hero}
        profileImageRef={profileImageRef}
      />

      <About handleClick={handleClick} aboutRef={sectionRefs.about} />

      <ProfessionalExperience
        handleClick={handleClick}
        experienceRef={sectionRefs.experience}
      />

      <Skills
        handleClick={handleClick}
        skillsRef={sectionRefs.skills}
        progressBarRefs={progressBarRefs}
        startAnimation={startAnimation}
      />

      <Contact contactRef={sectionRefs.contact} />

      <Footer />
      {showGoToTop && (
        <div className="back-to-top fixed bottom-8 flex justify-center items-center right-5 rounded-full h-24 w-24 z-10 animate-pulse">
          <FaArrowUp
            className="p-2 text-4xl text-purple-500 dark:text-white md:text-5xl border-2 rounded-full sm:py-2 border-violet-500 dark:border-violet-950 cursor-pointer"
            onClick={goToTop}
          />
        </div>
      )}
    </div>
  );
}

export default App;
