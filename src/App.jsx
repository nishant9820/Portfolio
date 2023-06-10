import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Elements from "./Elements";
import Projects from "./Projects";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Elements />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  );
};
export default App;
