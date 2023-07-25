import React from "react";

const Contact = ({ contactRef }) => {
  return (
    <section
      id="contact"
      ref={contactRef}
      className="flex flex-col justify-center items-center w-full min-h-screen overflow-hidden bg-gradient-to-tr from-white to-sky-200 dark:from-[#0F172A] dark:to-sky-700 text-[#0F172A] dark:text-white">
      {/* An overlay to blur the background, some sort of tempered glass effect. */}
      <div className="contact-bg inset-0 w-full h-full max-h-screen bg-opacity-60 backdrop-blur-lg"></div>
      <h3 className="text-center text-2xl mb-20 sm:text-4xl md:text-5xl text-sky-500 font-sharetech font-bold z-10">
        Get in touch
      </h3>
      <div className="flex items-center justify-center w-auto lg:w-1/2 p-4 rounded-lg shadow-xl z-10 dark:bg-gradient-to-br from-white to-sky-200 dark:from-[#e91e63] dark:to-[#673ab7] dark:text-white">
        <div className="grid gap-3 lg:gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-3 w-64">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10" src="img/icons/facebook.png" alt="" />
              <a
                className="text-lg"
                href="https://www.facebook.com/firas.blouza">
                Connect on Facebook
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-10 h-10" src="img/icons/gmail.png" alt="" />
              <a className="text-lg" href="mailto:firas.blouza1@gmail.com">
                Send an Email
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-64">
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10"
                src="img/icons/github-sign.png"
                alt=""
              />
              <a className="text-lg" href="https://github.com/firasblouza">
                Explore GitHub
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-10 h-10" src="img/icons/linkedin.png" alt="" />
              <a
                className="text-lg"
                href="https://www.linkedin.com/in/firas-blouza-a5a785243">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
