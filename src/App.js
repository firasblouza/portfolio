import About from "./components/About";
import Hero from "./components/Hero";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Skills from "./components/Skills";
import { useState } from "react";

function App() {
  const [startAnimation, setStartAnimation] = useState(false);

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

  return (
    <div className="App min-h-screen relative">
      <Hero heroLetsConnect={heroLetsConnect} />
      <About
        startAnimation={startAnimation}
        aboutLetsConnect={aboutLetsConnect}
      />
      <ProfessionalExperience experienceLetsConnect={experienceLetsConnect} />
      <Skills startAnimation={startAnimation} />
    </div>
  );
}

export default App;
