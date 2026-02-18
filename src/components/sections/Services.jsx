import React from "react";
import { useNavigate } from "react-router-dom";
import waveBg from "../../assets/images/wave-abstract-image.png"; // adjust path if needed

const services = [
  {
    title: "LIVE CONCERTS",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "FASHION SHOWS",
    image:
      "https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "THEME PARTIES",
    image:
      "https://media.istockphoto.com/id/2196025063/photo/summer-winter-candle-light-dinner-party-theme-with-fine-dinning-arrangements-fairy-lights-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=4bS0MWfwgmvcYkvpgPjVChx2efBD28Q5xH-IeAnvEpQ=",
  },
  {
    title: "CORPORATE MEETS",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=900&fit=crop",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-12 bg-[#f4f4f4] overflow-hidden">
      {/* Background Wave Image */}
      <img
        src={waveBg}
        alt="background wave"
        className="absolute -top-32 -left-32 w-[750px] opacity-10 pointer-events-none select-none"
      />

      <div className="relative max-w-full mx-2 px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-5 items-center mb-8">
          {/* Left Heading */}
          <div>
            <p className="text-red-600 font-semibold tracking-[0.3em] uppercase text-sm">
              Our Services
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mb-3 sm:mb-4">
              WHAT WE DO
            </h2>
          </div>

          {/* Description */}
          <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto ">
              Whether you’re planning a wedding or corporate event for 100
              guests or 10,000+, we work with you to create a memorable event
              that will WOW your crowd. Check out how we can serve you!
            </p>

            
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden h-[450px]"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute right-0 bottom-[-180px]   h-full flex items-center">
                <div className="bg-black/80 px-4 py-6">
                  <h3 className="text-white font-bold tracking-widest text-xs sm:text-sm md:text-base writing-mode-vertical">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
