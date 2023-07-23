import About from "./components/About";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  const [startAnimation, setStartAnimation] = useState(false);

  const handleLetsConnect = () => {
    const nextElement = document.getElementById("about");
    const progressBar = document.querySelectorAll(".skillBar");
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: "smooth" });
      progressBar.forEach((bar) => {
        bar.classList.add("animate-progress-bar");
      });
      setStartAnimation(true);
    }
  };
  return (
    <div className="App min-h-screen">
      <Hero handleLetsConnect={handleLetsConnect} />
      <About startAnimation={startAnimation} />
    </div>
  );
}

export default App;
