import React from "react";
import Typical from "react-typical";
import "./Home.css";
import {Layout} from "../../components/common";
import {motion} from "framer-motion";
import {AiOutlineArrowRight} from "react-icons/ai";
import {FaArrowCircleDown as Arrow} from "react-icons/fa";
import Clock from "../../components/Clock";
import {NavLink} from "react-router-dom";

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
            {/**Homepage */}
            <div className={"h-screen flex justify-center items-center flex-col gap-10"}>
                <Typical
                    className={"text-5xl font-bold text-black text-opacity-50"}
                    steps={[
                        "Hello, I'm Kagan...", 1000,
                        "Here are my skills...", 1000
                    ]}
                    loop={Infinity}
                    wrapper="p"
                />
<div className={"flex flex-row gap-10"}>
        <a className={"text-x"} href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a><a className={"text-x"} href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a><a className={"text-x"} href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a><a className={"text-x"} href="https://angular.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg" width="36" height="36" alt="Angular" /></a><a className={"text-x"} href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a><a className={"text-x"} href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a><a className={"text-x"} href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a><a className={"text-x"} href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a><a className={"text-x"} href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a><a className={"text-x"} href="https://redux.js.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" /></a><a className={"text-x"} href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="36" height="36" alt="Vite" /></a><a className={"text-x"} href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="36" height="36" alt="PostgreSQL" /></a>



</div>

                <div className={"flex flex-row w-full gap-10 justify-center"}>
                    <motion.a
                        role="a"
                        className="no-underline text-decoration-none! flex flex-col text-black text-opacity-50 font-bold text-xl justify-center items-center w-1/3 px-5 py-10 bg-opacity-20 rounded-xl shadow-inner shadow-black bg-white"
                        whileHover={{scale: 1.1}}
                        href="/projeler"
                    >
                        Projects
                    </motion.a>
                    <motion.a
                        className="flex flex-col text-black text-opacity-50 font-bold text-xl justify-center items-center w-1/3 px-5 py-10 bg-opacity-20 rounded-xl shadow-inner shadow-black bg-white"
                        whileHover={{scale: 1.1}}
                        href="/contact"

                    >
                        Contact
                    </motion.a>
                </div>
                <div className={"flex flex-row w-full gap-10 justify-center"}>
                    <motion.a
                        className="flex flex-col text-black text-opacity-50 font-bold text-xl justify-center items-center w-1/3 px-5 py-10 bg-opacity-20 rounded-xl shadow-inner shadow-black bg-white"
                        whileHover={{scale: 1.1}}
                        href="/wall"
                    >
                        Wall
                    </motion.a>
                    <motion.a
                        className="flex flex-col text-black text-opacity-50 font-bold text-xl justify-center items-center w-1/3 px-5 py-10 bg-opacity-20 rounded-xl shadow-inner shadow-black bg-white"
                        whileHover={{scale: 1.1}}
                        href="mailto: contact@kaanyble.com"
                    >
                        Hire Me
                    </motion.a>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
