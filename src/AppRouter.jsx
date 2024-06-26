import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ProductDetailsPage from "./screens/ProductDetailsPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
