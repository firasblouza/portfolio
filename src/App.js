import About from "./components/About";
import Hero from "./components/Hero";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [nextSection, setNextSection] = useState("");

  // Section Refs
  const heroRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  // Refs for the Hero Section
  const profileImageRef = useRef();
  const progressBarRefs = useRef([]);
  const introBoxRef = useRef();

  // Function to handle the Go To Next Section button
  const handleClick = () => {
    switch (nextSection) {
      case "about":
        if (startAnimation) setStartAnimation(false);
        const profileImage = profileImageRef.current;
        const introBox = introBoxRef.current;
        profileImage.classList.toggle("animate-slide-and-rotate");
        profileImage.classList.toggle("animate-slide-out-and-rotate");
        introBox.classList.toggle("animate-slide-up");
        setTimeout(() => {
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
          profileImage.classList.toggle("animate-slide-out-and-rotate");
        }, 2000);
        break;

      case "professional-experience":
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "skills-section":
        progressBarRefs.current.forEach((bar) => {
          bar.current.classList.add("animate-progress-bar");
        });
        setStartAnimation(true);
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        return null;
    }
  };

  useEffect(() => {
    handleClick();
  }, [nextSection]);

  // const heroLetsConnect = () => {
  //   if (startAnimation) setStartAnimation(false);
  //   const nextElement = document.getElementById("about");

  //   if (nextElement) {
  //     const profileImage = profileImageRef.current;
  //     const introBox = introBoxRef.current;
  //     profileImage.classList.toggle("animate-slide-and-rotate");
  //     profileImage.classList.toggle("animate-slide-out-and-rotate");
  //     introBox.classList.toggle("animate-slide-up");
  //     setTimeout(() => {
  //       nextElement.scrollIntoView({ behavior: "smooth" });
  //       profileImage.classList.toggle("animate-slide-out-and-rotate");
  //     }, 2000);
  //   }
  // };

  // const aboutLetsConnect = () => {
  //   const nextElement = document.getElementById("professional-experience");
  //   if (nextElement) {
  //     nextElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const experienceLetsConnect = () => {
  //   const nextElement = document.getElementById("skills-section");
  //   if (nextElement) {
  //   }
  // };

  // const skillsLetsConnect = () => {
  //   const nextElement = document.getElementById("contact");
  //   if (nextElement) {
  //     nextElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // Check whether the user is on the Hero section to control Go To Top button display
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = heroRef.current;
      const skillsSection = skillsRef.current;
      const showThreshold = heroSection.offsetTop + heroSection.offsetHeight;
      setShowGoToTop(window.scrollY >= showThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Go To Top button function

  const goToTop = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App min-h-screen relative">
      <Hero
        handleClick={handleClick}
        profileImageRef={profileImageRef}
        introBoxRef={introBoxRef}
        setNextSection={setNextSection}
        heroRef={heroRef}
      />
      <About
        startAnimation={startAnimation}
        handleClick={handleClick}
        setNextSection={setNextSection}
        aboutRef={aboutRef}
      />
      <ProfessionalExperience
        handleClick={handleClick}
        setNextSection={setNextSection}
        experienceRef={experienceRef}
      />
      <Skills
        startAnimation={startAnimation}
        handleClick={handleClick}
        progressBarRefs={progressBarRefs}
        setNextSection={setNextSection}
        skillsRef={skillsRef}
      />
      <Contact contactRef={contactRef} />
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
