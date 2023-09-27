import React, { useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(input);
      setInput("");
    }
  };

  const executeCommand = (command) => {
    switch (command) {
      case "whoami":
        displayOutput("My name is: Firdous Ahmad Wani");
        break;
      case "help":
        displayOutput("Commands: whoami, help, github, techstack, clear");
        break;
      case "github":
        displayOutput("https://github.com/Firdous708");
        break;
      case "techstack":
        displayOutput("MERN Stack");
        break;
      case "clear":
        setOutput("");
        break;
      default:
        displayOutput("Command not found");
    }
  };
  const displayOutput = (outputText) => {
    setOutput(outputText);
  };

  return (
    <div className="terminal px-8 md:px-[100px]">
      <div className="terminal-content bg-black px-4 py-6 h-[400px] rounded-lg shadow-2xl">
        <div className="terminal-header flex flex-row items-center gap-[10px]">
          <div className="terminal-header-button red  bg-red-400 rounded-full w-[15px] h-[15px]"></div>
          <div className="terminal-header-button yellow bg-yellow-300 rounded-full w-[15px] h-[15px]"></div>
          <div className="terminal-header-button green bg-green-500 rounded-full w-[15px] h-[15px]"></div>
        </div>
        <div className="terminal-body">
          <p className="text-lg   text-lightSlate mt-4">
            Get started by typing 'help' command below:
          </p>
          <div className="terminal-output text-green-400 ">{output}</div>
          <div className="input-container flex flex-row items-center gap-4">
            <div className="terminal-content-text flex flex-row items-center text-green-400 text-sm mt-4">
              <span className="terminal-content-text-user">root@firdous</span>
              <span className="terminal-content-text-separator">:</span>
              <span className="terminal-content-text-dir">~</span>
              <span className="terminal-content-text-separator">$</span>
            </div>
            <input
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              type="text"
              autoFocus
              className="bg-black text-green-400 text-[16px] outline-none mt-3 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
