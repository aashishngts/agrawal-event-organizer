import React from "react";

const equipmentsData = [
  {
    title: "Stage & Truss Systems",
    description:
      "We design and install custom stage platforms, heavy-duty truss systems and secure rigging solutions tailored for concerts, corporate events, weddings and large-scale productions. Our structures are engineered for safety, durability and seamless integration with lighting, audio and LED setups. From compact indoor stages to massive outdoor festival platforms, we ensure stability, precision alignment and flawless execution.",
    image: "https://legendtruss.in/images/banner2.jpg",
    letter: "S",
  },
  {
    title: "Professional Sound Systems",
    description:
      "Our advanced line array speaker systems, digital mixing consoles, subwoofers and monitoring solutions deliver crystal-clear audio across venues of all sizes. We provide complete sound design, acoustic calibration and live mixing to ensure balanced frequencies and immersive audience experiences. Whether it's a high-energy concert or a corporate conference, our sound systems guarantee powerful, distortion-free performance.",
    image:
      "https://www.shutterstock.com/image-photo/installation-professional-sound-light-stage-600nw-2025853667.jpg",
    letter: "P",
  },
  {
    title: "Advanced Lighting",
    description:
      "We offer cutting-edge lighting systems including moving heads, LED pars, beam lights, lasers and synchronized special effects. Our lighting designs enhance mood, energy and stage presence while complementing the event theme. With intelligent programming and dynamic control systems, we transform ordinary venues into visually stunning live experiences that captivate every audience.",
    image:
      "https://iqrorwxhljollr5q.leadongcdn.com/cloud/mlBpmKojRljSkrrojjlpj/custom-lighting-truss-design.jpg",
    letter: "L",
  },
  {
    title: "LED Video Walls",
    description:
      "Our high-definition LED video walls provide vibrant visuals, live streaming integration, branding displays and immersive stage backdrops. Designed for indoor and outdoor environments, our LED panels deliver high brightness, seamless connectivity and crystal-clear resolution. From promotional branding to live event broadcasting, we ensure impactful visual communication for every audience.",
    image:
      "https://image.made-in-china.com/202f0j00oYuGleScAjkv/Stage-Rental-Outdoor-LED-Display-Video-Wall-IP65-High-Brightness-Waterproof-Easy-Maintenance.webp",
    letter: "V",
  },
];


export default function Equipments() {
  return (
    <section className="bg-[#f3f3f3] py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-full mx-4 px-4 sm:px-6 lg:px-10 space-y-16 sm:space-y-20 md:space-y-28">
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
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <div className="relative w-full max-w-md md:max-w-lg">
                  {/* Red Background */}
                  <div
                    className=" absolute inset-0 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 z-0 rounded-md "
                    style={{
                      backgroundColor: "#dc2626",
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
                      backgroundSize: "12px 12px",
                    }}
                  ></div>

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" relative z-10 w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] object-cover shadow-xl rounded-md"
                  />
                </div>
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
