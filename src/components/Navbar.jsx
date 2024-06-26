import React from "react";
import AddNewProductModal from "./AddNewProductModal";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section
      role="navigation"
      className="d-flex px-4 my-4 justify-content-between"
    >
      <h4>Homble</h4>

      <AddNewProductModal />
    </section>
  );
};

export default Navbar;
