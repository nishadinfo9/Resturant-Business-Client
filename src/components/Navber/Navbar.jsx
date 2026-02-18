import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 shadow flex justify-between">
      <Link to="/" className="font-bold">
        SmallBiz
      </Link>
      <div className="space-x-4">
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
