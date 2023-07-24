/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        innerCircleLight:
          " inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);",
        innerCircleDark:
          "inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(0, 0, 0, 0.7), -0.5px -0.5px 0px rgba(0, 0, 0, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);"
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
            transform: " translateX(-20px) rotate(-10deg) scale(1.2)"
          },
          "100%": { transform: " translateX(0) rotate(0deg) scale(1)" }
        },

        "slide-out-and-rotate": {
          "0%": {
            transform: "translateX(0) rotate(0deg) scale(1)"
          },
          "70%": { transform: " translateX(0) rotate(-360deg) scale(1.2)" },
          "85%": {
            transform: " translateX(20px) rotate(10deg) scale(1)"
          },
          "100%": { transform: " translateX(1000px) rotate(0deg) scale(1)" }
        },
        "slide-up": {
          "0%": { transform: "translateY(1000px)" },
          "90%": { transform: "translateY(-20px) scaleY(1.1)" },
          "100%": { transform: "translateY(0) scaleY(1)" }
        },
        "progress-bar": {
          "100%": { strokeDashoffset: "0" }
        }
      },
      animation: {
        "slide-and-rotate": "slide-and-rotate 2s ease-in-out forwards",
        "slide-out-and-rotate": "slide-out-and-rotate 2s ease-in-out backwards",
        "slide-up": "slide-up 2s ease-in-out forwards",
        "progress-bar": "progress-bar 2s linear 0.5s forwards"
      }
    }
  },
  plugins: []
};
