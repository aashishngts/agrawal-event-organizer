import React from "react";

const services = [
  {
    title: "LIVE CONCERTS",
    image:
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?w=800&h=900&fit=crop",
  },
  {
    title: "FASHION SHOWS",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "THEME PARTIES",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=900&fit=crop",
  },
  {
    title: "CORPORATE MEETS",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=900&fit=crop",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 items-center mb-16">
          
          {/* Left Heading */}
          <div>
            <p className="text-red-600 font-semibold tracking-[0.3em] uppercase text-sm">
              Our Services
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold mt-4">
              WHAT WE DO
            </h2>
          </div>

          {/* Description */}
          <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-gray-600 text-lg max-w-2xl">
              Whether you’re planning a wedding or corporate event for 100
              guests or 10,000+, we work with you to create a memorable event
              that will WOW your crowd. Check out how we can serve you!
            </p>

            <button className="bg-red-600 text-white px-8 py-4 uppercase tracking-widest font-semibold hover:bg-black transition-all duration-300">
              All Services
            </button>
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

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

              {/* Vertical Text */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right">
                <h3 className="text-white font-bold tracking-widest text-lg">
                  {service.title}
                </h3>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
