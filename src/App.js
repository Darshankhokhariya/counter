import logo from "./logo.svg";
import Word from "./Component/Word";
import Image from "./Component/Image";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./Component/Main";
import "./App.css";
import ImageQualityReducer from "./Component/ImageReducer";
import ImageToText from "./Component/ImageToText";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
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
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/converter" element={<Image />} />
        <Route path="/wordcounters" element={<Word />} />
        <Route path="/imagereducer" element={<ImageQualityReducer />} />
        <Route path="/imagetotext" element={<ImageToText />} />
      </Routes>
    </>
  );
}

export default App;
