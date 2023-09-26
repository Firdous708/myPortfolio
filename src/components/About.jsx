import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import ".././../src/App.css";

export default function About() {
  return (
    <div id="about" className="about-section mt-12 mb-12 px-8 md:px-[100px]">
      <div className="about-top flex flex-row items-center gap-4">
        <p className="text-sm font-semibold text-newgreen"> * </p>
        <h1 className="text-2xl text-newwhite ">About Me</h1>
        <hr className="border-1 border-newgreen w-[100px]" />
      </div>
      <div className="about-body sm:ml-[40px]">
        <p className="text-md text-lightSlate mt-4 ">
          I am a MERN stack developer with a passion for learning and building
          new things. I am currently pursuing my B.Tech in Computer Science and
          Engineering from{" "}
          <a
            href="https://www.iare.ac.in"
            className="
          text-newgreen hover:underline"
          >
            Institute of Aeronautical Engineering
          </a>
          (IARE), Hyderabad.
        </p>
        <p className="text-md text-lightSlate mt-4">
          Here are a few technologies I've been working with recently:
        </p>
        <div className="tech-stack flex flex-row space-x-8 mt-8">
          <div className="tech-stack-item1 flex flex-col items-start gap-[15px]">
            <p className="text-sm text-lightSlate flex flex-row items-center">
              <AiFillCaretRight className="text-newgreen" />
              JavaScript (ES6+)
            </p>
            <p className="text-sm text-lightSlate flex flex-row items-center">
              <AiFillCaretRight className="text-newgreen" /> React
            </p>
            <p className="text-sm text-lightSlate flex flex-row items-center">
              <AiFillCaretRight className="text-newgreen" /> Node.js
            </p>
          </div>
          <div className="tech-stack-item2 flex flex-col items-start gap-[15px]">
            <p className="text-sm text-lightSlate flex flex-row items-center">
              <AiFillCaretRight className="text-newgreen" /> MongoDB
            </p>
            <p className="text-sm text-lightSlate flex flex-row items-center">
              <AiFillCaretRight className="text-newgreen" /> Python
            </p>
            <p className="text-sm text-lightSlate flex flex-row items-center">
              <AiFillCaretRight className="text-newgreen" /> SQL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
