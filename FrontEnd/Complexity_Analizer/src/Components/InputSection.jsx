import React from "react";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


const InputSection = () => {
  return (
    <>
      <div className="p-8 flex flex-col gap-6 md:flex-row w-full sm:px-20 ">
        
        <div className="left w-full">
          <div className="text-white p-3 bg-gray-900 flex justify-between items-center h-18 rounded-t-lg transition-all duration-100 border-1 border-blue-200">
          <div className="flex gap-4 left justify-between items-center">
            <img
              src="src/assets/code-solid.svg"
              alt=""
              className=" h-5 sm:h-8"
            />
            <p className="text-xl sm:text-2xl md:text-2xl">Code Input</p>
          </div>

          <div className="right">
            <Dropdown></Dropdown>
          </div>
        </div>
        <textarea
          name="text"
          id="CodeInput"
          className="w-full bg-gray-900 h-[20rem] rounded-b-lg p-3 resize-none focus:outline-none border-1 border-b-blue-200 border-l-blue-200 border-r-blue-200 text-white "
        ></textarea>

        <button className="text-white bg-blue-500 h-14 w-full rounded-lg hover:bg-blue-700 mt-2">
          <FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff" }} />
          <span> </span>Analyze Complexity
        </button>

        </div>

        <div className="right text-white  w-full">
          <div className="main border-2 border-gray-500 bg-gray-800 flex flex-col justify-center items-center h-[30rem] gap-4">
            <img src="icons8-ghost-100.png" alt=""  className="mb-4"/>
            <p className="text-gray-400">Ready to Analyze</p>
            <p className="text-gray-400 text-center">Enter your code and click <br></br>"Analyze Complexity" to get started</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default InputSection;
