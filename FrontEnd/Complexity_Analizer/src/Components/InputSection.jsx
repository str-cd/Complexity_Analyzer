import React, { useState } from "react";
import Dropdown from "./Dropdown";
import LoadingScreen from "./LoadingScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const InputSection = () => {
  const [codeInput, setCodeInput] = useState("");
  const [language, setLanguage] = useState("");
  const [response, setResponse] = useState(null);
  const [resultToShow, setResultToShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // ✅ new state

  const handleDropdownSelect = (language) => {
    setLanguage(language);
  };

  let handleBtn = () => {
    if (codeInput === "" && language === "") {
      alert("Enter Code And Select Language");
    } else if (codeInput === "") {
      alert("Please Enter Code");
    } else if (language === "") {
      alert("Please Enter Language");
    } else {
      const payload = {
        code: codeInput,
        language: "java",
      };

      setIsLoading(true);
      setErrorMessage(""); // clear previous errors

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      fetch("http://localhost:8080/api/complexity/getComplexityReport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })
        .then((response) => {
          clearTimeout(timeoutId); // clear timeout if response arrives
          if (!response.ok) {
            throw new Error("Server error: " + response.status);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Response from server:", data);
          setResponse(data);
          setResultToShow(true);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error during fetch:", error);
          if (error.name === "AbortError") {
            setErrorMessage("Request timed out. Please try again.");
          } else {
            setErrorMessage("Failed to fetch complexity. Please try again.");
          }
          setIsLoading(false);

          setTimeout(() => {
            setErrorMessage("");
          }, 5000);
        });
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen />}

      {errorMessage && (
        <div className="w-full bg-red-600 text-white px-4 py-2 text-center font-semibold">
          {errorMessage}
        </div>
      )}

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
              <Dropdown onSelect={handleDropdownSelect}></Dropdown>
            </div>
          </div>

          <textarea
            name="text"
            id="CodeInput"
            className="w-full bg-gray-900 h-[20rem] rounded-b-lg p-3 resize-none focus:outline-none border-1 border-b-blue-200 border-l-blue-200 border-r-blue-200 text-white"
            onChange={(e) => {
              setCodeInput(e.target.value);
            }}
          ></textarea>

          <button
            className="text-white bg-blue-500 h-14 w-full rounded-lg hover:bg-blue-700 mt-2"
            onClick={handleBtn}
          >
            <FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff" }} />
            <span> </span>Analyze Complexity
          </button>
        </div>

        {resultToShow ? (
          <div className="right text-white  w-full">
            <div className="main border-2 border-gray-500 bg-gray-800 h-[30rem] flex flex-col justify-center items-center gap-4 p-5">
              <div className="box h-28 w-64 border-2 border-white flex flex-col justify-center items-start px-4 bg-black ">
                <p>
                  <span className="text-blue-500">Current Time Complexity</span>
                </p>
                <p className="text-gray-400">
                  {response.Current_Time_Complexity}
                </p>
              </div>

              <div className="box h-28 w-64 border-2 border-white flex flex-col justify-center items-start px-4 bg-black ">
                <p>
                  <span className="text-blue-500">
                    Current Space Complexity
                  </span>
                </p>
                <p className="text-gray-400">
                  {response.Current_Space_Complexity}
                </p>
              </div>

              <div className="box h-28 w-64 border-2 border-white flex flex-col justify-center items-start px-4 bg-black ">
                <p>
                  <span className="text-blue-500">Optimal Time Complexity</span>
                </p>
                <p className="text-gray-400">
                  {response.Optimal_Time_Complexity}
                </p>
              </div>

              <div className="box h-28 w-64 border-2 border-white flex flex-col justify-center items-start px-4 bg-black ">
                <p>
                  <span className="text-blue-500">
                    Optimal Space Complexity
                  </span>
                </p>
                <p className="text-gray-400">
                  {response.Optimal_Space_Complexity}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="right text-white  w-full">
            <div className="main border-2 border-gray-500 bg-gray-800 flex flex-col justify-center items-center h-[30rem] gap-4">
              <img src="icons8-ghost-100.png" alt="" className="mb-4" />
              <p className="text-gray-400">Ready to Analyze</p>
              <p className="text-gray-400 text-center">
                Enter your code and click <br />
                "Analyze Complexity" to get started
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InputSection;
