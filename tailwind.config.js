/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      strokeDashArray: {
        200: "200"
      },
      boxShadow: {
        innerCircleLight:
          " inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);",
        innerCircleDark:
          "inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);"
      },
      gradientColors: {
        light: ["from-white", "to-sky-200"],
        dark: ["from-[#0F172A]", "to-sky-900"]
      },

      fontFamily: {
        sharetech: ["Share Tech Mono", "monospace"]
      },

      keyframes: {
        "slide-and-rotate": {
          "0%": {
            transform: "translateX(-1000px) rotate(0deg)"
          },
          "70%": { transform: " translateX(0) rotate(360deg)" },
          "85%": {
            transform: " translateX(-20px) rotate(-10deg)"
          },
          "100%": { transform: " translateX(0) rotate(0deg)" }
        },
        "opacity-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        "slide-up": {
          "0%": { transform: "translateY(1000px)" },
          "100%": { transform: "translateY(0)" }
        },
        "progress-bar": {
          "100%": { strokeDashoffset: "0" }
        }
      },
      animation: {
        "slide-and-rotate": "slide-and-rotate 2s ease-in-out forwards",
        "opacity-in": "opacity-in 2s 2s ease-in-out forwards",
        "slide-up": "slide-up 2s ease-in-out forwards",
        "progress-bar": "progress-bar 2s linear 0.5s forwards"
      }
    }
  },
  plugins: [require("tailwindcss-gradients")]
};
