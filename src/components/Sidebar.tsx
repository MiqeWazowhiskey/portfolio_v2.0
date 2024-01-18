import {TbLetterA as A} from "react-icons/tb";
import {NavLink} from "react-router-dom";
import {SiAboutdotme} from "react-icons/si";
import {CiCloud} from "react-icons/ci";
import {FaGitAlt} from "react-icons/fa6";
import {FiBookmark} from "react-icons/fi";
import useWindowLocation from "../hooks/useWindowLocation";

interface Props {
  currentPath: string
}
export const Sidebar = ({currentPath}:Props) => {
  return (
    <div
      className="font-ubuntu lg:min-w-[300px] md:min-w-[300px] h-screen fixed hidden lg:flex md:flex flex-col text-black border-r-2 border-amber-100">
      <a href="/"
        className="w-full h-[80px] flex flex-row whitespace-nowrap border-b-2 border-amber-100">
        <div className="relative p-5">
          <div
            className="absolute flex justify-center -rotate-12 ">
        <span className="text-[#F95738]">
          <A size={38}/>
        </span>
          </div>
          <div
            className="absolute flex justify-center -rotate-12">
        <span className="mb-5 mr-8 text-[#F4D35E]">
          <A size={38}/>
        </span>
          </div>
        </div>
        <div
          className="ml-auto mr-auto flex items-center w-fit text-xl">
          Ali Kağan Yılmaz
        </div>
      </a>
      <div>
        <ul>
          <li>
            <NavLink to={"/Projects"} className={`sidebar-css flex flex-row items-center gap-4 p-4  ${currentPath?.includes("Projects") && "bg-amber-200"} `}>
              <FaGitAlt size={24}/>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Wall"} className={`sidebar-css flex flex-row items-center gap-4 p-4  ${currentPath?.includes("Wall") && "bg-amber-200"} `}>
              <CiCloud size={24}/>
              Wall
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Contact"} className={`sidebar-css flex flex-row items-center gap-4 p-4  ${currentPath?.includes("Contact") && "bg-amber-200"} `}>
              <SiAboutdotme size={24}/>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Bookmarks"} className={`sidebar-css flex flex-row items-center gap-4 p-4 ${currentPath?.includes("Bookmarks") && "bg-amber-200"} `}>
              <FiBookmark size={24}/>
              Bookmarks
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}