import React from "react";
import AddNewProductModal from "./AddNewProductModal";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <section
      role="navigation"
      className="d-flex mb-4 py-3 px-4  border justify-content-between"
    >
      <Link rel="stylesheet" to="/">
        <h4>Homble</h4>
      </Link>
      <div className="d-flex gap-2">
        <Button size="sm" variant="ghost">
          <Link rel="stylesheet" to="/dashboard">
            Dashboard
          </Link>
        </Button>

        <AddNewProductModal />
      </div>
    </section>
  );
};

export default Navbar;
