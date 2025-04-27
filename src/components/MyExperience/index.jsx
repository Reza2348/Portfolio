import React from "react";
import { FaYoutube, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const experiences = [
  {
    company: "Google",
    role: "Lead Software Engineer at Google",
    period: "Nov 2019 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    icon: <FcGoogle className="text-3xl text-[#4285F4]" />,
    bg: "bg-[#1a1a1a]",
  },
  {
    company: "Youtube",
    role: "Software Engineer at Youtube",
    period: "Jan 2017 - Oct 2019",
    description:
      "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    icon: <FaYoutube className="text-3xl text-[#FF0000]" />,
    bg: "bg-[#2a2a2a]",
  },
  {
    company: "Apple",
    role: "Junior Software Engineer at Apple",
    period: "Jan 2016 - Dec 2017",
    description:
      "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
    icon: <FaApple className="text-3xl text-white" />,
    bg: "bg-[#1a1a1a]",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-white">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${exp.bg} p-6 rounded-lg border border-gray-700 transition-all hover:shadow-lg hover:shadow-gray-800 mr-2`}
            >
              <div className="flex items-start justify-between flex-col md:flex-row gap-4">
                <div className="flex items-center gap-3">
                  {exp.icon}
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                </div>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>
              <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
