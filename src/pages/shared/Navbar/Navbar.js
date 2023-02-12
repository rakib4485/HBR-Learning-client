import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/HBR-Learning.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-3">
      <div className="logo h-20">
        <Link to ="/"><img src={logo} alt=""  className="h-20 w-full"/></Link>
      </div>
      <div className="menu">
        <ul className="flex gap-4 text-xl">
            <Link to="/"><li>Home</li></Link>
            <Link to="/"><li>Courses</li></Link>
            <Link to="/"><li>About us</li></Link>
            <Link to="/"><li>Contacts</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
