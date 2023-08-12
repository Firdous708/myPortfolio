import React from "react";

export default function Rightside() {
  return (
    <div
      className="right-side-email md:flex flex-col  items-center text-lightSlate hover:text-newgreen 
  translate-y-[200px] gap-6 hidden fixed right-[30px] "
    >
      <a
        href="mailto:wanifirdous799@gmail.com"
        className="[writing-mode:vertical-lr] text-sm"
      >
        wanifirdous799@gmail.com
      </a>
      <div className="side-line w-[1px] h-[200px] bg-lightSlate"></div>
    </div>
  );
}
