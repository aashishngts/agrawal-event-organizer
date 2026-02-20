import React from "react";
import avolites from '../../assets/equipment-img/grandMA2_Arena.png';
import cowbell1 from '../../assets/equipment-img/Pearl_Master_2.png';
import cowbell3 from '../../assets/equipment-img/Neumann_3.png';
import dasEvent from '../../assets/equipment-img/DAS_EVENT_210.png';
import elight from '../../assets/equipment-img/Elight_1.webp';
import jblSrx from '../../assets/equipment-img/DAS_LARA_1.jpg';
import neumann from '../../assets/equipment-img/Neumann_1.png';
import pearlMaster from '../../assets/equipment-img/ProfessionalSoundSystems.png';
import tigerTouch from '../../assets/equipment-img/Tiger_Touch_1.png';
import universalTruss from '../../assets/equipment-img/Universal_Truss_2.png';

const equipmentsData = [
  {
    title: "Stage & Truss Systems",
    description:
      "We design and install custom stage platforms, heavy-duty truss systems and secure rigging solutions tailored for concerts, corporate events, weddings and large-scale productions. Our structures are engineered for safety, durability and seamless integration with lighting, audio and LED setups. From compact indoor stages to massive outdoor festival platforms, we ensure stability, precision alignment and flawless execution.",
    image: universalTruss,
    letter: "S",
  },
  {
    title: "Professional Sound Systems",
    description:
      "Our advanced line array speaker systems, digital mixing consoles, subwoofers and monitoring solutions deliver crystal-clear audio across venues of all sizes. We provide complete sound design, acoustic calibration and live mixing to ensure balanced frequencies and immersive audience experiences. Whether it's a high-energy concert or a corporate conference, our sound systems guarantee powerful, distortion-free performance.",
    image: pearlMaster,
    letter: "P",
  },
  {
    title: "Advanced Stage Lighting",
    description:
      "We offer cutting-edge stage lighting systems engineered for maximum visual impact. Our professional lighting rigs feature sophisticated moving heads, LED fixtures, intelligent beam lights and synchronized special effects. With precise beam control, seamless color transitions and advanced programming capabilities, we create immersive lighting designs that transform venues and captivate audiences at every moment.",
    image: elight,
    letter: "L",
  },
  {
    title: "LED Video Walls & Displays",
    description:
      "Our high-definition LED video wall systems provide stunning vibrant visuals, live streaming integration and immersive stage backdrops. Designed for both indoor and outdoor environments, our panels deliver exceptional brightness, seamless connectivity and crystal-clear resolution. Perfect for promotional branding, live event broadcasting and dynamic visual storytelling that engages every audience member.",
    image: tigerTouch,
    letter: "V",
  },
  {
    title: "Percussion & Drum Kits",
    description:
      "Premium percussion instruments and professional-grade drum kits engineered for superior performances. Our collection features industry-leading brands with exceptional sound quality, responsive dynamics and flawless tuning. Ideal for studio recordings, live concerts and theatrical productions, our percussion equipment delivers the perfect beat and rhythm for any musical performance.",
    image: cowbell1,
    letter: "P",
  },
  {
    title: "Cymbal Stands & Rigging",
    description:
      "Professional-grade cymbal stands and percussion rigging systems designed for optimal instrument positioning and stability. Our heavy-duty stands feature smooth adjustment mechanisms and reliable construction for all performance environments. Built to withstand intense use while maintaining perfect timing and delivering flawless acoustic clarity throughout every performance.",
    image: cowbell3,
    letter: "C",
  },
  {
    title: "Lighting Control & Programming",
    description:
      "Advanced lighting control consoles and programming systems featuring intuitive interfaces for real-time event management. Our state-of-the-art control boards provide precision control over all lighting elements, special effects and synchronized cues across your entire production. With comprehensive programming features and seamless integration with all equipment, we deliver complete creative control for unforgettable live experiences.",
    image: avolites,
    letter: "C",
  },
  {
    title: "Line Array Speaker Systems",
    description:
      "Professional-grade JBL line array speaker systems engineered for powerful, consistent sound distribution across large venues. Our state-of-the-art speakers deliver exceptional clarity, deep bass response and uniform coverage. Designed for concerts, festivals and large-scale events, these systems provide premium audio performance with superior reliability and acoustic excellence.",
    image: jblSrx,
    letter: "L",
  },
  {
    title: "Compact Line Array Systems",
    description:
      "Versatile DAS compact line array systems designed for flexible venue configurations and rapid deployment. Our modular speaker arrays deliver professional sound quality with easy setup and configuration. Perfect for mid-sized venues, corporate events and touring productions, these systems combine portability with exceptional acoustic performance.",
    image: dasEvent,
    letter: "C",
  },
  {
    title: "Professional Studio Microphones",
    description:
      "Industry-standard Neumann studio microphones engineered for pristine audio capture and broadcast quality. Our premium condenser microphones deliver exceptional clarity, natural response and professional-grade reliability. Ideal for live streaming, studio recording, podcasting and professional broadcast applications requiring studio-quality audio.",
    image: neumann,
    letter: "M",
  },
];


export default function Equipments() {
  return (
    <section className="bg-[#f3f3f3] py-14 sm:py-16 md:py-20 lg:py-12">
      <div className="max-w-full mx-2 px-4 sm:px-6 lg:px-10 space-y-16 sm:space-y-20 md:space-y-28">
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

                  {/* White Container with Image */}
                  <div className="relative z-10 w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] bg-white rounded-md shadow-xl overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
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