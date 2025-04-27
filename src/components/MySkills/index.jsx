import React from "react";
import { FaJs, FaGitAlt } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";

const MySkills = () => {
  const skills = [
    { name: "Git/Github", icon: <FaGitAlt /> },
    { name: "Javascript", icon: <FaJs />, highlight: true },
    { name: "Sass/Scss", icon: <SiSass /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "tailwindcss", icon: <RiTailwindCssFill /> },
    { name: "Html5", icon: <FaHtml5 /> },
    { name: "Css3", icon: <FaCss3 /> },
    { name: "React", icon: <FaReact /> },
  ];
  return (
    <section className=" text-white py-16 px-5 sm:px-0 lg:px-24 text-center mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-7">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 border rounded-2xl shadow-sm transition-all duration-300 ${
              skill.highlight
                ? "bg-black text-white"
                : "bg-white text-black hover:shadow-md"
            }`}
          >
            <div className="text-4xl md:text-5xl mb-3">{skill.icon}</div>
            <p className="text-base md:text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default MySkills;
