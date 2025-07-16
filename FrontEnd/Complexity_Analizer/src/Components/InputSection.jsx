import React from "react";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const InputSection = () => {
  return (
    <>
      <div className="p-8 ">
        <div className="text-white p-3 bg-[#457b9d] flex justify-between items-center h-18 rounded-t-lg transition-all duration-100 ">
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
          className="w-full bg-white h-[20rem] rounded-b-lg p-8 resize-none focus:outline-none"
        ></textarea>

        <button className="text-white bg-blue-500 h-14 w-full rounded-lg hover:bg-blue-700 mt-2">
            <FontAwesomeIcon icon={faPlay} style={{color: "#ffffff",}} />   
            <span> </span>Analyze Complexity
        </button>
      </div>

      <div>

      </div>
    </>
  );
};

export default InputSection;
