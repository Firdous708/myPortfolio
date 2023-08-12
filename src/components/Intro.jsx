import React from "react";
import "../styling/intro.css";
import profile from "../assets/newfirdous.jpg";

export default function Intro() {
  return (
    <div
      id="intro"
      className="intro-text px-[50px] py-[50px] md:px-[100px] md:py-[70px] md:mt-[50px] flex flex-col items-start md:items-center  md:flex-row justify-between gap-[100px] md:gap-[150px]"
    >
      <div className="main-wrapper flex flex-col items-start gap-6 ">
        <p className="text-lg  text-newgreen">Hi, my name is</p>
        <h1 className="text-3xl  font-semibold text-lightestSlate">
          Firdous Ahmad
        </h1>
        <h2 className="text-2xl font-medium text-lightSlate">
          Crafting Elegant and Efficient Web Solutions
        </h2>
        <p className="text-md text-lightSlate">
          I'm a Computer Science Student and Web Developer
          <br /> specializing in building exceptional websites.
        </p>
        <button
          className="get-in-touch border border-newgreen px-14 py-4 rounded-md text-newgreen
        hover:bg-greenTint transition ease-in"
        >
          Let's Connect
        </button>
      </div>
      <div className="spline-dev border-2 border-newgreen rounded-lg w-[200px]">
        <img
          src={profile}
          alt="profile"
          className="profile-img h-[200px] -translate-x-4 -translate-y-6 rounded-lg hover:-translate-x-0 hover:-translate-y-0 transition ease-in"
        />
      </div>
    </div>
  );
}
