import React from "react";
import { Link } from "react-router-dom";
import App from "./App";

const Navbar = () => {
    return (
        <nav className="bg-[#03045E] text-white px-6 py-1.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-green-50">
          <Link to="/">InstaFood</Link>
        </div>
        <div className="flex space-x-6 fou">
          <Link to="/" className="hover:text-green-600 ">
            Home
          </Link>
          <Link to="/product" className="hover:text-green-600 ">
            Product
          </Link>
          <Link to="/addseller" className="hover:text-green-600 ">
            Add Seller
          </Link>
          <Link to="/login" className="hover:text-green-600 ">
            Login
          </Link>
        </div>
      </div>
        </nav>
    )
}

export default Navbar;