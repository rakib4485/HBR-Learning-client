import React from "react";
import logo from "../../../assets/logo/HBR-Learning.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Our Process", link: "/" },
    { name: "Courses", link: "/" },
  ];

  const community = [
    { name: "Go Premium", link: "/" },
    { name: "Team Plan", link: "/" },
    { name: "Refer a Friend", link: "/" },
    { name: "Gift Cards", link: "/" },
  ];

  const resources = [
    { name: "Support", link: "/" },
    { name: "Latest Updates", link: "/" },
    { name: "Updates Newsletter", link: "/" },
    { name: "Course Management", link: "/" },
  ];

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        <div className="">
          <img src={logo} alt="" className="w-[80%]" />
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            cumque fuga. Minima molestiae{" "}
          </p>
          <div className="flex justify-around mt-5 text-2xl">
            <Link className="p-2 bg-slate-600 rounded-full text-white hover:text-blue-700 hover:bg-white">
              <FaFacebook></FaFacebook>
            </Link>
            <Link className="p-2 bg-slate-600 rounded-full text-white instagram">
              <FaInstagram></FaInstagram>
            </Link>
            <Link className="p-2 bg-slate-600 rounded-full text-white hover:bg-white hover:text-blue-800">
              <FaTwitter></FaTwitter>
            </Link>
            <Link className="p-2 bg-slate-600 rounded-full text-white hover:text-blue-700 hover:bg-white">
              <FaLinkedin></FaLinkedin>
            </Link>
          </div>
        </div>
        <div className="md:ml-32">
          <h1 className="text-xl font-semibold underline-offset-2">Links</h1>
          <div className="mt-4">
            <ul>
              {links.map((link, i) => (
                <li key={i}>
                  <Link to={link.link} className="hover:underline">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:ml-16">
          <h1 className="text-xl font-semibold">Community</h1>
          <div className="mt-4">
            <ul>
              {community.map((link, i) => (
                <li key={i}>
                  <Link to={link.link} className="hover:underline">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Resources</h1>
          <div className="mt-4">
            <ul>
              {resources.map((link, i) => (
                <li key={i}>
                  <Link to={link.link} className="hover:underline">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 w-full h-[2px] rounded-sm my-8"></div>
      <p className="text-center ">© 2023 HBR Learning.</p>
    </div>
  );
};

export default Footer;
