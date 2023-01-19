import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import navbar from "../assets/navbar.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="sticky top-0 w-full h-20 flex justify-between items-center px-4 py-4 shadow-lg z-10 mx-auto">
      <div className="flex justify-start w-4/5 2xl:visible">
        <img
          src={navbar}
          alt="app logo"
          className="md:w-[150px] w-full h-28 md:p-4 invisible md:visible"
        />
      </div>
      <ul className="flex items-end w-full justify-start md:p-8 font-black text-white capitalize text-xl invisible md:visible drop-shadow-lg shadow-black">
        <motion.li whileHover={{ scale: 1.1 }} className="md:mx-2">
          <Link to="/" className="hover:text-[#AEB4C3]">
            Home
          </Link>
        </motion.li>
        <motion.li className="md:mx-2" whileHover={{ scale: 1.1 }}>
          <Link to="/popular" className="hover:text-[#AEB4C3]">
            Popular
          </Link>
        </motion.li>
        <motion.li className="md:mx-2" whileHover={{ scale: 1.1 }}>
          <Link to="/genre" className="hover:text-[#AEB4C3]">
            Genres
          </Link>
        </motion.li>
      </ul>
      <div className="md:hidden">
        <img
          src={navbar}
          alt="logo"
          className="absolute left-0 top-0 w-24 h-20"
        />
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className="cursor-pointer mx-auto"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        {toggleMenu && (
          <div
            className="menu w-full h-screen"
            style={{ background: "rgba(0,0,0,0.80)" }}
            onClick={() => setToggleMenu(false)}
          >
            <ul className="font-black text-white capitalize text-2xl menu py-4">
              <img
                src={navbar}
                alt="logoexpress"
                className="h-28"
                loading="lazy"
              />
              <li className="mx-2">
                <Link to="/" className="hover:text-[#AEB4C3] cursor-pointer">
                  Home
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  to="/popular"
                  className="hover:text-[#AEB4C3] cursor-pointer"
                >
                  Popular
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  to="/genre"
                  className="hover:text-[#AEB4C3] cursor-pointer"
                >
                  Genres
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
