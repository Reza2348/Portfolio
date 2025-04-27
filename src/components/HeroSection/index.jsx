import React from "react";
import Img from "../../assets/img/Frame 20.png";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const IconButton = ({ icon, highlight }) => (
  <button
    className={`w-10 h-10 border rounded-md flex items-center justify-center transition
      ${
        highlight
          ? "bg-black text-white border-black"
          : "border-gray-300 hover:bg-black hover:text-white"
      }`}
  >
    {icon}
  </button>
);

const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-6">
      <div className="w-full md:w-1/2 space-y-8">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Hello I'am Amir Reza. Frontend Developer Based In Iran
        </p>
        <h1 className="text-gray-600 text-lg md:text-xl max-w-xl">
          I'm Amir Reza Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </h1>
        <div className="flex items-center justify-center space-x-4 py-4 mr-[85px]">
          <div className="flex gap-2">
            <IconButton icon={<FaFacebookF />} highlight={true} />
            <a
              href="https://github.com/Reza2348?tab=repositories"
              target="_blank"
            >
              <IconButton icon={<FaGithub />} />
            </a>
            <IconButton icon={<FaWhatsapp />} />
            <IconButton icon={<FaTelegram />} />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative">
          <img src={Img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
