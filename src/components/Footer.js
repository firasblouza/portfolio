import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const thisYear = date.getFullYear();
  return (
    <footer className="absolute w-full h:36 md:h-28 bg-gradient-to-br from-white to-sky-200 dark:from-[#0F172A] dark:to-sky-700 border-t-2 dark:border-white border-[#0F172A] dark:text-white z-10 p-8">
      <div className="flex flex-col gap-5 justify-center items-center md:justify-between md:items-center md:flex-row w-full h-full">
        <h3 className="text-2xl text-[#333] dark:text-white">
          &copy; {thisYear} - All Rights Reserved
        </h3>
        <div className="flex gap-5">
          <a
            href="https://www.github.com/firasblouza"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className="text-3xl text-[#333] dark:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/firas-blouza-a5a785243/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-[#333] dark:text-white" />
          </a>
          <a
            href="https://www.facebook.com/firas.blouza"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebook className="text-3xl text-[#333] dark:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
