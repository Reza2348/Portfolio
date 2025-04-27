import React from "react";
import Img from "../../assets/img/Group 1000015845.png";

const About = () => {
  return (
    <section className=" text-white py-16 px-5 sm:px-0 lg:px-24 text-center mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Img}
            alt="About me illustration"
            className="max-w-xs md:max-w-sm rounded-xl border"
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            About Me
          </h2>
          <div className="text-gray-700 space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              I'm a passionate, self-proclaimed designer who development Intern
              stack development (React.js & tailwindcss). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2023, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early twenty, 1 years after starting my web development
              journey, I'm building cutting-edge web applications using modern
              technologies such as Bootstrap, Html5, TailwindCSS, Css3,React and
              much more.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on Game or on Cinema , Watch the movie startups or enjoying
              some free time. You can follow me on Telegram where I share
              tech-related bites and build in public, or you can follow me on
              GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
