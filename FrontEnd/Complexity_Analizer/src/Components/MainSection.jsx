import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const MainSection = () => {
  return (
    <>
      <div className="pt-4 px-4 sm:px-20 sm:pt-8 w-full text-white flex justify-center items-center gap-5 sm:justify-start">
        <FontAwesomeIcon
          icon={faLaptopCode}
          size="2x"
          style={{ color: "#ffffff" }}
        />
        <div className="flex flex-col">
          <p className="text-2xl font-bold">Code Complexity Analysis</p>
          <p>
            Analyze your code's performance and get optimization suggestions
          </p>
        </div>
      </div>
    </>
  );
};

export default MainSection;
