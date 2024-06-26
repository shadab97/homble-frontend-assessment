import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<div> details</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
