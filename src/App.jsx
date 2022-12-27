import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Menu from "./component/Menu/menu";
import PaysDescription from "./component/Pays/Pays.descrption";
import Q3 from "./component/Q3/q3";
import Q4 from "./component/Q4/q4";
import Q5 from "./component/Q5/q5";
import Q6 from "./component/Q6/q6";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/q3" element={<Q3 />}/>
        <Route path="/q4" element={<Q4 />}/>
        <Route path="/q4/:year" element={<PaysDescription />}/>
        <Route path="/q5" element={<Q5 />}/>
        <Route path="/q6" element={<Q6 />}/>
      </Routes>
    </div>
  );
}

export default App;
