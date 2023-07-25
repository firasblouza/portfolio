import About from "./components/About";
import Hero from "./components/Hero";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const heroLetsConnect = () => {
    if (startAnimation) setStartAnimation(false);
    const nextElement = document.getElementById("about");
    const profileImage = document.getElementById("ProfilePic");
    const introBox = document.querySelector(".intro-container");
    if (nextElement) {
      profileImage.classList.remove("animate-slide-and-rotate");
      profileImage.classList.add("animate-slide-out-and-rotate");
      introBox.classList.remove("animate-slide-up");
      setTimeout(() => {
        nextElement.scrollIntoView({ behavior: "smooth" });
        profileImage.classList.remove("animate-slide-out-and-rotate");
      }, 2000);
    }
  };

  const aboutLetsConnect = () => {
    const nextElement = document.getElementById("professional-experience");
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const experienceLetsConnect = () => {
    const nextElement = document.getElementById("skills-section");
    if (nextElement) {
      const progressBar = document.querySelectorAll(".skillBar");
      progressBar.forEach((bar) => {
        bar.classList.add("animate-progress-bar");
      });
      setStartAnimation(true);
      nextElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skillsLetsConnect = () => {
    const nextElement = document.getElementById("contact");
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");

      const showThreshold = heroSection.offsetTop + heroSection.offsetHeight;

      setShowGoToTop(window.scrollY >= showThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    const nextElement = document.getElementById("hero");
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App min-h-screen relative">
      <Hero heroLetsConnect={heroLetsConnect} />
      <About
        startAnimation={startAnimation}
        aboutLetsConnect={aboutLetsConnect}
      />
      <ProfessionalExperience experienceLetsConnect={experienceLetsConnect} />
      <Skills
        startAnimation={startAnimation}
        skillsLetsConnect={skillsLetsConnect}
      />
      <Contact />
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
