import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/HBR-Learning.png";

const Navbar = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/" },
    { name: "About", link: "/" },
    { name: "Contacts", link: "/" },
  ]

  const [open, setOpen] = useState(false)

  return (
    <nav className="lg:flex justify-between items-center py-3">
      <div className="logo h-20">
        <Link to="/"><img src={logo} alt="" className="h-20 lg:w-full" /></Link>
      </div>
      <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-8 cursor-pointer lg:hidden">
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <div className="menu">
        <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:bg-none lg:z-auto z-[1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all rounded-lg duration-500 ease-in ${open ? "left-20 md:left-96 bg-slate-50" : "left-[-4900px]"}`}>
          {menuItems.map((item) => (
            <li key={item.name} className="lg:ml-8 text-xl lg:my-0 my-7">
              <Link to={item.link} className="text-gray-800 hover:text-gray-400 duration-500">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
