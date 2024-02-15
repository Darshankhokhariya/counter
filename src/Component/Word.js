import React, { useState } from "react";
import { Link } from "react-router-dom";

function Word() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const countWords = () => {
    const words = inputText.trim().split(/\s+/);
    return words.length;
  };

  return (
    <>
      <div className="h-screen w-auto  flex flex-col justify-center items-center p-2">
        <Link className="items-start w-full" to="/">
          <button
            class="cursor-pointer duration-200 hover:scale-125 active:scale-100"
            title="Go Back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              class="stroke-blue-300"
            >
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M11 6L5 12M5 12L11 18M5 12H19"
              ></path>
            </svg>
          </button>
        </Link>
        <h1 className="text-4xl font-medium mb-4">Word Counter</h1>
        <div className="px-5 w-full">
          <textarea
            rows="6"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type here..."
            className="p-3 border border-black w-full"
          />
        </div>
        <p className="text-xl">
          Word Count :{" "}
          <span className="text-2xl font-semibold">{countWords()} </span>{" "}
        </p>
      </div>
    </>
  );
}

export default Word;
