import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineCodepen } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer-container flex flex-col items-center mb-4">
      <div className="footer-top-section flex flex-row items-center gap-4 md:hidden">
        <a href="https://www.github.com/Firdous708">
          <AiFillGithub className="text-lightSlate text-3xl hover:text-newgreen hover:-translate-y-[2px] transition ease-in" />
        </a>
        <a href="https://www.linkedin.com/in/firdous-wani-b21063207">
          <AiFillLinkedin className="text-lightSlate text-3xl hover:text-newgreen hover:-translate-y-[2px] transition ease-in" />
        </a>
        <a href="https://leetcode.com/Wani__Firdous/">
          <SiLeetcode className="text-lightSlate text-3xl hover:text-newgreen hover:-translate-y-[2px] transition ease-in" />
        </a>
        <a href="https://www.codepen.io/wanifirdous">
          <AiOutlineCodepen className="text-lightSlate text-3xl hover:text-newgreen hover:-translate-y-[2px] transition ease-in" />
        </a>
      </div>
      <div className="footer-bottom-section mt-4 border border-newgreen text-center w-[400px] p-4 rounded-lg bg-slate-950 font-bold md:w-[600px]">
        <p className="text-lightSlate text-sm">Build by Firdous</p>
      </div>
    </div>
  );
}
