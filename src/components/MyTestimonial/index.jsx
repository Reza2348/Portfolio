import React from "react";
import Img from "../../assets/img/Frame 19.png";
import Img1 from "../../assets/img/Frame 18.png";
const testimonials = [
  {
    name: "Evren Shah",
    role: "Designer",
    image: Img,
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    active: false,
  },
  {
    name: "Flora Sheen",
    role: "Designer",
    image: Img1,
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    active: true,
  },
  {
    name: "Evren Shah",
    role: "Designer",
    image: Img,
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    active: false,
  },
];

const MyTestimonial = () => {
  return (
    <section className="py-16 px-5 sm:px-0 lg:px-24 text-center mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-16">
        My Testimonial
      </h2>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 text-center shadow-md ${
                  item.active
                    ? "bg-black text-white scale-105"
                    : "bg-white text-gray-800"
                }`}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-16 h-16 rounded-full mb-4 object-cover ${
                      item.active
                        ? "border-2 border-gray-600"
                        : "border-2 border-gray-200"
                    }`}
                  />
                  <p className="text-sm mb-4">{item.text}</p>
                  <hr
                    className={`w-10 border-t-2 mx-auto mb-2 ${
                      item.active ? "border-gray-400" : "border-gray-300"
                    }`}
                  />
                  <h4 className="font-semibold text-base">{item.name}</h4>
                  <span
                    className={`text-sm ${
                      item.active ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyTestimonial;
