import logo from "./logo.svg";
import Word from "./Component/Word";
import Image from "./Component/Image";
import { Route, Routes } from "react-router-dom";
import Main from "./Component/Main";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/converter" element={<Image />} />
        <Route path="/wordcounters" element={<Word />} />
      </Routes>
    </>
  );
}

export default App;
