import React from "react";
import Img from "../../assets/img/image (1).png";
import Img1 from "../../assets/img/image.png";
import Img2 from "../../assets/img/image 770.png";

const projects = [
  {
    id: "01",
    title: "Crypto Screener Application",
    img: Img,
    alt: "Crypto Screener App Preview",
    desc: "A React-based crypto screener that uses live CoinGecko API data to filter and analyze cryptocurrencies by market cap, volume, and price trends.",
    reverse: false,
  },
  {
    id: "02",
    title: "Euphoria - Ecommerce Website Template",
    img: Img1,
    alt: "Ecommerce Template Preview",
    desc: "A modern and stylish eCommerce apparel template built using React and Tailwind CSS, with responsive layouts and smooth UX.",
    reverse: true,
  },
  {
    id: "03",
    title: "Blog Website Template",
    img: Img2,
    alt: "Blog Template Preview",
    desc: "A clean, minimal, and fully responsive blog website template ideal for personal or tech blogging with optimized readability.",
    reverse: false,
  },
];

const MyProjects = () => {
  return (
    <section className="bg-black text-white py-16 px-5 sm:px-0 lg:px-24 text-center mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 ">
        My Projects
      </h2>
      {projects.map(({ id, title, img, alt, desc, reverse }) => (
        <div
          key={id}
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-8 mb-16`}
        >
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={img}
              alt={alt}
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 text-left flex flex-col justify-center h-full">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {id}
            </h3>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
              {title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyProjects;
