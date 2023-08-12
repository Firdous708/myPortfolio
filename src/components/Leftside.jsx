import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineCodepen } from "react-icons/ai";

export default function Leftside() {
  return (
    <div className="side-social-links hidden flex-col gap-8 text-lightSlate text-2xl items-center translate-y-[200px] md:flex fixed left-[30px]">
      <a
        href="https://www.github.com/Firdous708"
        className="hover:text-newgreen hover:-translate-y-2 transition ease-in"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/firdous-wani-b21063207"
        className="hover:text-newgreen hover:-translate-y-2 transition ease-in"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://leetcode.com/Wani__Firdous/"
        className="hover:text-newgreen hover:-translate-y-2 transition ease-in"
      >
        <SiLeetcode />
      </a>
      <a
        href="https://www.codepen.io/wanifirdous"
        className="hover:text-newgreen hover:-translate-y-2 transition ease-in"
      >
        <AiOutlineCodepen />
      </a>
      <div className="side-line w-[1px] h-[200px] bg-lightSlate"></div>
    </div>
  );
}
