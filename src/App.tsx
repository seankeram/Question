import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home /home";
import QuestionBox from "./component/questionBox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<QuestionBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
