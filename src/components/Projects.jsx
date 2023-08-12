import React from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { LuGithub } from "react-icons/lu";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineApi } from "react-icons/ai";
import { TbBrandFirebase } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { BiLogoCss3 } from "react-icons/bi";
import { Slide, Zoom, Hinge, JackInTheBox, Bounce } from "react-awesome-reveal";

export default function Projects() {
  return (
    <div
      id="projects"
      className="projects-section mb-12 px-8 md:px-[100px] mt-32"
    >
      <div className="projects-section-top mb-12 flex flex-row items-center gap-4">
        <p className="text-sm font-semibold text-newgreen"> 03. </p>
        <h1 className="text-2xl text-newwhite ">Projects</h1>
        <hr className="border-1 border-newgreen w-[100px]" />
      </div>
      <div className="projects-container flex flex-col items-center gap-12 md:grid md:grid-cols-2 lg:grid-cols-3">
        {/* project-1 */}
        <Zoom duration={1000}>
          <div className="projects-card bg-lightestNavy hover:bg-lightNavy p-8 rounded-sm shadow-2xl hover:-translate-y-3 transition ease-in w-[350px] sm:w-full ">
            <div className="project-card-top flex flex-row items-center justify-between">
              <AiOutlineFolder className="text-newgreen text-[50px]" />
              <div className="card-links flex flex-row gap-4">
                <a
                  href="https://github.com/Firdous708/updatedMovieDB"
                  className="hover:-translate-y-[2px] transition ease-in"
                >
                  <BiLinkExternal className="text-lightSlate  text-3xl" />
                </a>
                <a
                  href="https://github.com/Firdous708/updatedMovieDB"
                  className="hover:-translate-y-[2px] transition ease-in"
                >
                  <LuGithub className="text-lightSlate text-3xl" />
                </a>
              </div>
            </div>
            <div className="project-card-body">
              <h1 className="text-newwhite text-2xl font-medium mt-4">
                Movie Land
              </h1>
              <p className="text-sm text-lightSlate mt-4">
                Movie Search App that uses the TMDB API to give users access to
                the most popular movies and TV shows. Users can search for
                movies and TV shows by name and get detailed information about
                any movie or TV show.
              </p>
              <p className="text-[12px] text-lightSlate mt-4 flex flex-row items-center gap-4">
                <GrReactjs className="text-newgreen text-2xl inline-block mr-2" />
                <SiTailwindcss className="text-newgreen text-2xl inline-block mr-2" />
                <IoLogoJavascript className="text-newgreen text-2xl inline-block mr-2" />
              </p>
            </div>
          </div>
        </Zoom>
        {/* project-2 */}
        <Zoom duration={1000}>
          <div className="projects-card bg-lightestNavy hover:bg-lightNavy p-8 rounded-sm shadow-2xl hover:-translate-y-3 transition ease-in w-[350px] sm:w-full">
            <div className="project-card-top flex flex-row items-center justify-between">
              <AiOutlineFolder className="text-newgreen text-[50px]" />
              <div className="card-links flex flex-row gap-4">
                <a
                  href="https://snapqr.fiirdous708.repl.co/"
                  className="hover:-translate-y-[2px] transition ease-in"
                >
                  <BiLinkExternal className="text-lightSlate  text-3xl" />
                </a>
                <a
                  href="https://github.com/Firdous708/snapQR"
                  className="hover:-translate-y-[2px] transition ease-in"
                >
                  <LuGithub className="text-lightSlate text-3xl" />
                </a>
              </div>
            </div>
            <div className="project-card-body">
              <h1 className="text-newwhite text-2xl font-medium mt-4">
                snapQR
              </h1>
              <p className="text-sm text-lightSlate mt-4">
                snapQR is a web application that uses QR API to generate the
                dynamic QR codes from the text or links entered by the user. The
                generated QR codes can be downloaded once they're generated.
              </p>
              <p className="text-[12px] text-lightSlate mt-4 flex flex-row items-center gap-4">
                <AiFillHtml5 className="text-newgreen text-2xl inline-block mr-2" />
                <BiLogoCss3 className="text-newgreen text-2xl inline-block mr-2" />
                <IoLogoJavascript className="text-newgreen text-2xl inline-block mr-2" />
                <AiOutlineApi className="text-newgreen text-2xl inline-block mr-2" />
              </p>
            </div>
          </div>
        </Zoom>
        {/* project-3 */}
        <Zoom duration={1000}>
          <div className="projects-card bg-lightestNavy hover:bg-lightNavy p-8 rounded-sm shadow-2xl hover:-translate-y-3 transition ease-in w-[350px] sm:w-full">
            <div className="project-card-top flex flex-row items-center justify-between">
              <AiOutlineFolder className="text-newgreen text-[50px]" />
              <div className="card-links flex flex-row gap-4">
                <a
                  href="https://bahaar.netlify.app/"
                  className="hover:-translate-y-[2px] transition ease-in"
                >
                  <BiLinkExternal className="text-lightSlate  text-3xl" />
                </a>
                <a
                  href="https://github.com/Firdous708/Bahaar"
                  className="hover:-translate-y-[2px] transition ease-in"
                >
                  <LuGithub className="text-lightSlate text-3xl" />
                </a>
              </div>
            </div>
            <div className="project-card-body">
              <h1 className="text-newwhite text-2xl font-medium mt-4">
                Mausam
              </h1>
              <p className="text-sm text-lightSlate mt-4">
                Mausam is a weather app that uses the OpenWeather API to give
                users access to the current weather conditions of any city in
                the world. Users can search for cities and get detailed
                information about the weather conditions of that city.
              </p>
              <p className="text-[12px] text-lightSlate mt-4 flex flex-row items-center gap-4">
                <AiFillHtml5 className="text-newgreen text-2xl inline-block mr-2" />
                <IoLogoJavascript className="text-newgreen text-2xl inline-block mr-2" />
                <AiOutlineApi className="text-newgreen text-2xl inline-block mr-2" />
                <BiLogoCss3 className="text-newgreen text-2xl inline-block mr-2" />
              </p>
            </div>
          </div>
        </Zoom>
        {/* project-4 */}
        <Zoom duration={1000}>
          <div className="projects-card bg-lightestNavy hover:bg-lightNavy p-8 rounded-sm shadow-2xl hover:-translate-y-3 transition ease-in w-[350px] sm:w-full">
            <div className="project-card-top flex flex-row items-center justify-between">
              <AiOutlineFolder className="text-newgreen text-[50px]" />
              <div className="card-links flex flex-row gap-4">
                <a
                  href="https://github.com/Firdous708/discorduiclone"
                  className="hover:-translate-y-[2px] transition ease-in"
                >
                  <BiLinkExternal className="text-lightSlate  text-3xl" />
                </a>
                <a
                  href="https://github.com/Firdous708/discorduiclone"
                  className="hover:-translate-y-[2px] transition ease-in"
                >
                  <LuGithub className="text-lightSlate text-3xl" />
                </a>
              </div>
            </div>
            <div className="project-card-body">
              <h1 className="text-newwhite text-2xl font-medium mt-4">
                Discord UI Clone
              </h1>
              <p className="text-sm text-lightSlate mt-4">
                Discord UI Clone is a clone of the Discord app. It is a
                responsive web application that uses ReactJS and TailwindCSS.
                This project is a part of the ReactJS challenge by Codedamn.
              </p>
              <p className="text-[12px] text-lightSlate mt-4 flex flex-row items-center gap-4">
                <GrReactjs className="text-newgreen text-2xl inline-block mr-2" />
                <SiTailwindcss className="text-newgreen text-2xl inline-block mr-2" />
                <IoLogoJavascript className="text-newgreen text-2xl inline-block mr-2" />
              </p>
            </div>
          </div>
        </Zoom>
      </div>
      <div className="projects-section-bottom mt-12 text-center">
        <a
          href="https://github.com/Firdous708"
          className="
        border border-newgreen text-newgreen px-[50px] sm:px-[100px] py-[15px] rounded-lg hover:bg-greenTint 
        transition ease-in"
        >
          More
        </a>
      </div>
    </div>
  );
}
