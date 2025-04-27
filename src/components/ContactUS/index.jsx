import React from "react";
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

const ContactUS = () => {
  return (
    <section className="py-16 px-5 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Your website (if exists)"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            rows="4"
            placeholder="How can I help?*"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="hidden md:block bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg items-center gap-2">
              <a href="#newsletter" className="flex items-center">
                Get In Touch
              </a>
            </button>
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
        </form>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-3">
            Let’s <span className="font-extrabold underline">talk</span> for
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Something special
          </h3>
          <p className="text-gray-500 mb-6 max-w-md">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <p className="font-semibold text-black">Youremail@gmail.com</p>
          <p className="font-semibold text-black">1234567890</p>
        </div>
      </div>
    </section>
  );
};
export default ContactUS;
