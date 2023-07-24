import About from "./components/About";
import Hero from "./components/Hero";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Skills from "./components/Skills";
import { useState } from "react";

function App() {
  const [startAnimation, setStartAnimation] = useState(false);

  const handleLetsConnect = () => {
    const nextElement = document.getElementById("about");
    const profileImage = document.getElementById("ProfilePic");
    const progressBar = document.querySelectorAll(".skillBar");
    const introBox = document.querySelector(".intro-container");
    if (nextElement) {
      profileImage.classList.remove("animate-slide-and-rotate");
      profileImage.classList.add("animate-slide-out-and-rotate");
      introBox.classList.remove("animate-slide-up");
      setTimeout(() => {
        nextElement.scrollIntoView({ behavior: "smooth" });
        progressBar.forEach((bar) => {
          bar.classList.add("animate-progress-bar");
        });
        setStartAnimation(true);
        profileImage.classList.remove("animate-slide-out-and-rotate");
      }, 2000);
    }
  };
  return (
    <div className="App min-h-screen">
      <Hero handleLetsConnect={handleLetsConnect} />
      <About startAnimation={startAnimation} />
      <ProfessionalExperience />
      <Skills startAnimation={startAnimation} />
    </div>
  );
}

export default App;
