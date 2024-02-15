import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <Link to="/wordcounters">
          <button class="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-white">
            Word counter
          </button>
        </Link>

        <Link to="/converter">
          <button class="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-white">
            JPG to PDF
          </button>
        </Link>
      </div>
    </>
  );
}

export default Main;
