import React, { useState } from "react";
import {
  RxLetterCaseUppercase,
  RxLetterCaseLowercase,
  RxFontItalic,
  RxFontBold,
  RxLetterCaseCapitalize,
  RxReset,
} from "react-icons/rx";

function Word() {
  const [inputText, setInputText] = useState("");
  const [fontStyle, setFontStyle] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const countWords = () => {
    if (inputText?.length > 0) {
      const words = inputText.trim().split(/\s+/);
      return words.length;
    } else return 0;
  };

  const handleStyle = (style) => {
    setFontStyle(style);
  };

  return (
    <>
      <div className="h-screen w-auto  flex flex-col justify-center items-center p-2">
        <h1 className="text-4xl font-medium mb-4">Word Counter</h1>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              handleStyle("uppercase");
            }}
            className="bg-slate-300 p-2 rounded border border-slate-600"
          >
            <RxLetterCaseUppercase />
          </button>
          <button
            onClick={() => {
              handleStyle("lowercase");
            }}
            className="bg-slate-300 p-2 rounded border border-slate-600"
          >
            <RxLetterCaseLowercase />
          </button>
          <button
            onClick={() => {
              handleStyle("capitalize");
            }}
            className="bg-slate-300 p-2 rounded border border-slate-600"
          >
            <RxLetterCaseCapitalize />
          </button>
          <button
            onClick={() => {
              handleStyle("italic");
            }}
            className="bg-slate-300 p-2 rounded border border-slate-600"
          >
            <RxFontItalic />
          </button>
          <button
            onClick={() => {
              handleStyle("font-bold");
            }}
            className="bg-slate-300 p-2 rounded border border-slate-600"
          >
            <RxFontBold />
          </button>
          <button
            onClick={() => {
              handleStyle(null);
            }}
            className="bg-slate-300 p-2 rounded border border-slate-600"
          >
            <RxReset />
          </button>
        </div>
        <div className="px-5 w-full mt-4">
          <textarea
            rows="6"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type here..."
            className={` ${fontStyle} p-3 border border-black w-full`}
          />
        </div>
        <p className="text-xl">
          Word Count :{" "}
          <span className="text-2xl font-semibold">{countWords()} </span>{" "}
        </p>
        <p className="text-xl">
          Character Count :{" "}
          <span className="text-2xl font-semibold">{inputText?.length} </span>{" "}
        </p>
      </div>
    </>
  );
}

export default Word;
