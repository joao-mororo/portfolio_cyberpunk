import { GrMysql } from "react-icons/gr";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

const skills = {
  frontend: [
    { icon: <FaHtml5 />, link: "https://html.com/" },
    { icon: <FaCss3 />, link: "https://css3.com/" },
    { icon: <FaJs />, link: "https://www.javascript.com/" },
    { icon: <FaReact />, link: "https://react.dev/" },
    { icon: <SiNextdotjs />, link: "https://nextjs.org/" },
    { icon: <SiTailwindcss />, link: "https://tailwindcss.com/" },
  ],
  backend: [
    { icon: <FaGitAlt />, link: "https://git-scm.com/" },
    { icon: <GrMysql />, link: "https://www.mysql.com/" },
    { icon: <SiMongodb />, link: "https://www.mongodb.com/pt-br" },
    { icon: <FaNodeJs />, link: "https://nodejs.org/en" },
    { icon: <SiExpress />, link: "https://expressjs.com/pt-br/" },
  ],
};

export default skills;
