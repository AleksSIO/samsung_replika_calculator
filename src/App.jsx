import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BasicCalc, Converter, SpecialCalc } from "./components";

const App = () => {

  return (
    <>
      <div className="w-full h-[100vh] bg-black/85 flex flex-col justify-center items-center">
        <Router basename="/samsung_replika_calculator">
          <Routes>
          <Route path="/" element={<BasicCalc />}/>
          <Route path="/s" element={<SpecialCalc />}/>
          <Route path="/c" element={<Converter />}/>
        </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
