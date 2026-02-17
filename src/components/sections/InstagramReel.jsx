import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import reel1 from "../../assets/reel1.mp4";
import reel2 from "../../assets/reel2.mp4";
import reel3 from "../../assets/reel3.mp4";
import reel4 from "../../assets/reel4.mp4";
import reel5 from "../../assets/reel5.mp4";

export default function InstagramReel() {
  const reels = [
    {
      video: reel1,
      link: "https://www.instagram.com/agrawalsoundlight/reel/DLpBb2fSK_t/",
    },
    {
      video: reel2,
      link: "https://www.instagram.com/agrawalsoundlight/reel/DT5HJygAaLK/",
    },
    {
      video: reel3,
      link: "https://www.instagram.com/agrawalsoundlight/reel/DLnZ16fqmHB/",
    },
    {
      video: reel4,
      link: "https://www.instagram.com/agrawalsoundlight/reel/DJhIcWKTbL3/",
    },
    {
      video: reel5,
      link: "https://www.instagram.com/agrawalsoundlight/reel/DUQX2_rgT4q/",
    },
  ];

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        {/* Heading */}
        <p className="text-red-600 uppercase tracking-widest text-xs sm:text-sm font-semibold">
          Follow Us
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 sm:mt-4">
          Latest Instagram Reels
        </h2>

        {/* Instagram Button */}
        <div className="mt-5 sm:mt-6">
          <a
            href="https://www.instagram.com/agrawalsoundlight/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 sm:gap-3
              bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]
              hover:opacity-90
              text-white px-5 sm:px-6 md:px-8 
              py-2.5 sm:py-3
              uppercase tracking-widest
              text-[11px] sm:text-xs md:text-sm
              font-semibold transition duration-300
              rounded-md shadow-lg
            "
          >
            {/* Instagram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm4.25 2.5A5.5 5.5 0 006.5 12 5.5 5.5 0 0012 17.5 5.5 5.5 0 0017.5 12 5.5 5.5 0 0012 6.5zm0 2A3.5 3.5 0 0115.5 12 3.5 3.5 0 0112 15.5 3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5zm4.75-2.75a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
            Follow Us On Instagram
          </a>
        </div>

        {/* Carousel */}
        <div className="mt-10 sm:mt-12 md:mt-16">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {reels.map((reel, index) => (
              <SwiperSlide key={index}>
                <a
                  href={reel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <video
                    src={reel.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="
                      w-full 
                      h-[300px] 
                      sm:h-[350px] 
                      md:h-[380px] 
                      lg:h-[420px] 
                      object-cover
                    "
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
