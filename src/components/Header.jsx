import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../../src/assets/header-icon.svg";
import bannerStar from "../assets/bannerStart.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // List item component with shared styling
  const NavItem = ({ children }) => (
    <li className="hover:bg-gradient-to-r from-[#1AD7BE] to-[#1F67E7] hover:inline-block hover:text-transparent hover:bg-clip-text cursor-pointer relative group">
      {children}
      <img
        className="absolute w-[12px] right-[-10px] top-[-3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        src={bannerStar}
        alt="Star Icon"
      />
    </li>
  );

  return (
    <div className="pt-[30px]">
      {/* Header Bar */}
      <div className="flex flex-wrap justify-between items-center bg-gradient-to-r from-[#ffffff90] via-[#ffffff30] to-[#ffffff90] border border-white w-[85%] mx-auto max-w-[1180px] py-[5px] px-[20px] rounded-[40px]">
        {/* Logo */}
        <div className="w-[120px] sm:w-[156px]">
          <img src={icon} alt="Header Icon" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex text-[14px] items-center justify-between w-[50%] max-w-[250px]">
          <NavItem>Home</NavItem>
          <NavItem>Features</NavItem>
          <NavItem>Pricing</NavItem>
          <NavItem>Resources</NavItem>
        </ul>

        {/* Contact Button for Desktop */}
        <button className="hidden sm:block bg-[#1AD7BE20] rounded-[50px] px-[4px] py-[4px]">
          <div className="px-[2px] py-[2px] bg-gradient-to-r from-[#1AD7BE70] to-[#1F67E770] text-white rounded-[50px] text-[14px]">
            <div className="px-[30px] py-[10px] bg-gradient-to-r from-[#1AD7BE] to-[#1F67E7] text-white rounded-[20px] text-[14px]">
              Contact Us
            </div>
          </div>
        </button>

        {/* Hamburger Menu Toggle */}
        <button
          className="sm:hidden  text-[20px] text-[#0B1928]"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white w-[85%] mx-auto mt-4 rounded-[20px] py-[10px] shadow-lg">
          <ul className="flex flex-wrap justify-between gap-4 px-4">
            <NavItem>Home</NavItem>
            <NavItem>Features</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>Resources</NavItem>
            <li>
              <button className="bg-[#1AD7BE20] rounded-[50px] px-[4px] py-[2px]">
                <div className="px-[10px] py-[6px] bg-gradient-to-r from-[#1AD7BE] to-[#1F67E7] text-white rounded-[20px] text-[14px]">
                  Contact Us
                </div>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
