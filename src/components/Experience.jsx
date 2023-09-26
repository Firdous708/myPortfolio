import React from "react";
import { SiProgress } from "react-icons/si";

export default function Experience() {
  return (
    <div id="experience" className=" mb-12 px-8 md:px-[100px] mt-32">
      <div className="experience-top flex flex-row items-center gap-4">
        <p className="text-sm font-semibold text-newgreen"> 01. </p>
        <h1 className="text-2xl text-newwhite ">Experience</h1>
        <hr className="border-1 border-newgreen w-[100px]" />
      </div>
      <div className="experience-body lg:px-12 pt-8  flex flex-row items-center sm:flex-none">
        <div className="experience-card border-2 border-newgreen   p-4 rounded-lg  hover:bg-lightNavy transition ease-in">
          <div className="experience-card-header flex flex-row  gap-[100px] sm:justify-between sm:gap-0">
            <h1 className="text-lightestSlate font-bold tracking-wider flex flex-row items-center gap-[10px]">
              {<SiProgress />}
              SDE Intern @Byteridge
            </h1>
            <h1 className="text-lightestSlate font-bold tracking-wider">
              Sept 2023 --- Present
            </h1>
          </div>
          <div className="experience-card-body mt-4">
            <p className="text-md text-lightSlate">
              I'm currently interning with <b>Byteridge</b> (IT Services and IT
              Consulting) as Software Developement Engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
