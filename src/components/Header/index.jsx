import React, { useState } from "react";
import logo from "../../assets/img/Logo.svg";
import { HiMenu, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import Fdf from "../../assets/pdf/Amirreza Majidai Resume File.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  const navLinks = [
    { href: "about", label: "About Me" },
    { href: "skills", label: "Skills" },
    { href: "project", label: "Project" },
    { href: "contact", label: "Contact Me" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={logo} alt="Logo" />
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <HiX className="size-6 ml-40 sm:ml-[386px] xs:ml-[287px]" />
          ) : (
            <HiMenu className="size-6 ml-40 sm:ml-[386px] xs:ml-[287px]" />
          )}
        </button>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <button className="hidden md:block bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg items-center gap-2">
            <a href={Fdf} target="_blank" className="flex items-center">
              Resume
              <FiDownload className="w-5 h-5 ml-2" />
            </a>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              href={Fdf}
              target="_blank"
              className="text-center w-full bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              Resume
              <FiDownload className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

