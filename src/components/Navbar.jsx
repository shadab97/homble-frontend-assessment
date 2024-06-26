import React from "react";

import AddNewProductModal from "./AddNewProductModal";

const Navbar = () => {
  return (
    <section
      role="navigation"
      className="d-flex px-4 my-4 justify-content-between"
    >
      <div className="h4">Homble</div>
      <AddNewProductModal />
    </section>
  );
};

export default Navbar;
