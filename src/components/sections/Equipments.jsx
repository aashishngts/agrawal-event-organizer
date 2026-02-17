import React from "react";

const equipmentsData = [
  {
    title: "Stage & Truss Systems",
    description:
      "Custom stage platforms, heavy-duty truss systems and secure rigging designed for concerts, weddings and large-scale productions.",
    image: "https://legendtruss.in/images/banner2.jpg",
    letter: "S",
  },
  {
    title: "Professional Sound Systems",
    description:
      "Line array speakers, digital mixing consoles, subwoofers and precision audio calibration for immersive sound experiences.",
    image:
      "https://www.shutterstock.com/image-photo/installation-professional-sound-light-stage-600nw-2025853667.jpg",
    letter: "P",
  },
  {
    title: "Advanced Lighting",
    description:
      "Moving heads, LED pars, lasers and special effects that transform venues into visually stunning live experiences.",
    image:
      "https://iqrorwxhljollr5q.leadongcdn.com/cloud/mlBpmKojRljSkrrojjlpj/custom-lighting-truss-design.jpg",
    letter: "L",
  },
  {
    title: "LED Video Walls",
    description:
      "High-definition LED screens for branding, live streaming, event visuals and audience engagement.",
    image:
      "https://image.made-in-china.com/202f0j00oYuGleScAjkv/Stage-Rental-Outdoor-LED-Display-Video-Wall-IP65-High-Brightness-Waterproof-Easy-Maintenance.webp",
    letter: "V",
  },
];

export default function Equipments() {
  return (
    <section className="bg-[#f3f3f3] py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-16 sm:space-y-20 md:space-y-28">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mb-3 sm:mb-4">
            Equipments
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            Professional stage production, crystal-clear sound systems and
            advanced lighting solutions for events of every scale.
          </p>
        </div>

        {equipmentsData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14 lg:gap-16 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE SIDE */}
              <div className="relative flex justify-center w-full md:w-1/2">
                <div
                  className="
      absolute 
      w-[85%] h-[85%] 
      -bottom-2 -right-2 
      sm:w-[90%] sm:h-[90%] 
      sm:-bottom-4 sm:-right-4 
      md:-bottom-6 md:-right-6 
      z-0 rounded-sm
    "
                  style={{
                    backgroundColor: "#dc2626",
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  }}
                ></div>

                <img
                  src={item.image}
                  alt={item.title}
                  className=" relative z-10  w-[90%] sm:w-full  max-w-xs sm:max-w-sm md:max-w-lg  object-cover shadow-lg"
                />
              </div>

              {/* TEXT SIDE */}
              <div className="relative w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
                {/* Background Letter */}
                <span className="absolute -top-6 sm:-top-8 md:-top-12 lg:-top-16 left-0 text-[80px] sm:text-[110px] md:text-[150px] lg:text-[200px] font-bold text-gray-200 z-0 select-none">
                  {item.letter}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <span className="text-red-600 uppercase text-[10px] sm:text-xs md:text-sm tracking-widest">
                      Equipments
                    </span>
                    <div className="h-[2px] w-14 sm:w-16 md:w-24 bg-red-600"></div>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold uppercase mb-3 sm:mb-4 md:mb-6">
                    {item.title}
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
