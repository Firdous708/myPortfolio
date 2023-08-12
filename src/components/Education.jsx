import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

export default function Education() {
  return (
    <div id="education" className=" mb-12 px-8 md:px-[100px] mt-32">
      <div className="education-top flex flex-row items-center gap-4">
        <p className="text-sm font-semibold text-newgreen"> 02. </p>
        <h1 className="text-2xl text-newwhite ">Education</h1>
        <hr className="border-1 border-newgreen w-[100px]" />
      </div>
      <div className="education-body sm:ml-[40px] mt-12 flex flex-row gap-4 items-center">
        <div className="education-sideline w-[1px] h-[180px] bg-lightSlate"></div>
        <div className="education-content">
          <div
            className="education-content1 flex flex-row items-center  bg-lightNavy px-4 py-2 rounded-lg shadow-2xl 
          w-[300px]"
          >
            <AiFillCaretRight className="text-newgreen" />
            <h1 className=" text-newwhite">B.Tech in Computer Science</h1>
          </div>
          <p className="text-md text-lightSlate mt-4">
            I'm currently pursuing Bachelor's in Computer Science and
            Engineering from Institute of Aeronautical Engineering Hyderabad.
            I'm in my last year of graduation and will be graduating in 2024.
          </p>
        </div>
      </div>
    </div>
  );
}
