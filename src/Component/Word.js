import React, { useState } from "react";

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
      <div className="h-screen w-full flex flex-col justify-center items-center container">
        <h1 className="text-4xl font-medium mb-4">Word Counter</h1>
        <textarea
          rows="6"
          cols="50"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type here..."
          className="p-3 border border-black"
        />
        <p className="text-xl">
          Word Count :{" "}
          <span className="text-2xl font-semibold">{countWords()} </span>{" "}
        </p>
      </div>
    </>
  );
}

export default Word;
