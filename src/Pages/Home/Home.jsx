import React from "react";
import Typical from "react-typical";
import "./Home.css";
import { Layout } from "../../components/common";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowCircleDown as Arrow } from "react-icons/fa";
import Clock from "../../components/Clock";
function Home() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <Layout>
      <div className="h-full w-full flex flex-col">
        {/**Homepage */}
        <div className="h-full z-30">
          <div className="w-full  h-1/6 items-center flex justify-center font-extrabold text-4xl lg:text-5xl">
            <h1>Ali Kağan Yılmaz</h1>
          </div>
          <span className="w-full flex justify-center font-semibold text-[#F4D35E] mt-[50px]">
            <Typical
              steps={[
                "React Enthusiast",
                2500,
                "Developer",
                2500,
                "Designer",
                2500,
                "Cse Student",
                2500,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </span>
          {/**clock */}
          <Clock />

          <div className="flex flex-col h-4/6 justify-end gap-y-10">
            <div className="flex flex-row items-center space-x-5 justify-center">
              <span>Bu web sitesinin kodları için</span>
              <AiOutlineArrowRight />
              <motion.a
                href="https://github.com/MiqeWazowhiskey/portfolio_v2.0"
                target={"_blank"}
                rel="noopenner norefferer"
                whileHover={{ scale: 1.3 }}
              >
                Github
              </motion.a>
            </div>
            <div className="flex justify-center font-bold text-xl">
              <button
                onClick={handleScroll}
                className="flex  flex-col items-center"
              >
                <span className="hover:animate-bounce text-[#F95738]">
                  <Arrow size={25} />
                </span>
                About Me
              </button>
            </div>
          </div>
        </div>
        {/**About Me */}
        <div className="h-screen flex flex-col justify-center items-center gap-y-10 text-2xl ">
          <h3 className="flex ">Hello 👋, Nice to see u</h3>
          <h4 className="flex  font-extrabold text-xl">My Skills</h4>
          <p
            align="left"
            className="flex flex-wrap gap-x-4 justify-center w-96 px-5 lg:px-0 lg:w-full space-y-3 lg:space-y-0"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
              width="64"
              height="64"
              alt="JavaScript"
            />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
              width="64"
              height="64"
              alt="TypeScript"
            />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
              width="64"
              height="64"
              alt="Java"
            />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
              width="64"
              height="64"
              alt="React"
            />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg"
              width="64"
              height="64"
              alt="NextJs"
            />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
              width="64"
              height="64"
              alt="HTML5"
            />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
              width="64"
              height="64"
              alt="CSS3"
            />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
              width="64"
              height="64"
              alt="TailwindCSS"
            />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
              width="64"
              height="64"
              alt="Firebase"
            />
          </p>
          <p className="flex text-xl font-bold">
            I am a CSE student and web developer
          </p>
          <div className="text-3xl font-extrabold flex pt-10">
            <motion.button whileHover={{ scale: 1.1 }}>
              <a
                className="none"
                href="https://www.linkedin.com/in/ali-kagan-yilmaz/"
              ></a>
              <span className="bg-[#F95738] bg-opacity-50 rounded-full p-5">
                Hire Me
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
