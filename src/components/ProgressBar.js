import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaPhp,
  FaWordpress,
  FaNodeJs,
  FaDatabase,
  FaCss3
} from "react-icons/fa";

const ProgressBar = ({ startAnimation, skill, score, progressBarRef }) => {
  // A ProgressBar component that displays a skill and its score
  // DashOffset is calculated based on the skill score
  // progressNumber state is used to animate the skill score from 0 to the ending value.
  const dashOffset = 472 - (472 * score) / 100;
  const [progressNumber, setProgressNumber] = useState(0);

  useEffect(() => {
    let animationFrameId;
    if (startAnimation) {
      let currentNumber = 0;
      const increment = () => {
        if (currentNumber < score) {
          currentNumber++;
          setProgressNumber(currentNumber);
          animationFrameId = requestAnimationFrame(increment);
        }
      };
      animationFrameId = requestAnimationFrame(increment);
    }

    return () => {
      // Cleanup the animation frame when the component unmounts or when the animation stops
      cancelAnimationFrame(animationFrameId);
    };
  }, [startAnimation, score]);

  // A function that returns an icon based on the skill name, since this is hardcoded, it's not the best solution, but it works for now.
  const getIconBySkill = (skill) => {
    switch (skill.toLowerCase()) {
      case "html":
        return <FaHtml5 />;
      case "css":
        return <FaCss3Alt />;
      case "javascript":
        return <FaJs />;
      case "reactjs":
        return <FaReact />;
      case "php":
        return <FaPhp />;
      case "wp":
        return <FaWordpress />;
      case "nodejs":
        return <FaNodeJs />;
      case "expressjs":
        return <FaNodeJs />;
      case "mongodb":
        return <FaDatabase />;
      case "mysql":
        return <FaDatabase />;
      case "tailwindcss":
        return <FaCss3 />;
      default:
        return null;
    }
  };

  // The ProgressBar component
  return (
    <div className="skill w-40 h-40 relative">
      <div className="outer h-40 w-40 p-[20px] rounded-full shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] dark:shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(0,0,0,0.7)]">
        <div className="inner flex flex-col items-center justify-center h-[120px] w-[120px] rounded-full shadow-innerCircleLight dark:shadow-innerCircleDark">
          <div
            id="number"
            className="font-semibold text-[#555] dark:text-white">
            {progressNumber}%
          </div>
          <div className="flex items-center justify-center my-3">
            {getIconBySkill(skill)}
            <h2 className="text-center mx-1 text-[14px] sm:text-1xl font-bold text-[#0F172A] dark:text-white">
              {skill}
            </h2>
          </div>
        </div>
      </div>
      <svg
        className="skillBar absolute top-0 left-0"
        ref={progressBarRef}
        width="160px"
        height="160px">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          className={`fill-none stroke-[url(#GradientColor)] stroke-[20px] `}
          cx="80"
          cy="80"
          r="70"
          strokeLinecap="round"
          strokeDashoffset={dashOffset}
          strokeDasharray={472}
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
