import React from "react";

export default function Githubstatus() {
  return (
    <div className="githubstatus-container flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-newgreen mb-14 mt-[80px]">
        Github Status
      </h1>
      {/* <div className="streak-widget overflow-hidden">
        <iframe
          title="GitHub Streak"
          src="https://github-readme-streak-stats.herokuapp.com?user=Firdous708&theme=dark&mode=weekly"
          width="100%"
          height="200"
        ></iframe>
      </div> */}
      <div className="toplangs-widget">
        <iframe
          title="Top Languages"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Firdous708&layout=compact&theme=vision-friendly-dark"
          width="100%"
          height="200"
        ></iframe>
      </div>
    </div>
  );
}
