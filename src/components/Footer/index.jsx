import React from "react";
import logo from "../../assets/img/logo 1.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <img src={logo} alt="Logo" className="w-5 h-5" />
          <span className="font-semibold text-sm">Personal</span>
        </div>

        <div className="text-xs text-right space-y-1">
          <p>@ 2019-2023 Personal</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
