import React from "react";
import Owner from "../../assets/owner1.webp";

const Founder = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT - Image Container */}
        <div className="flex justify-center md:justify-start relative w-full">
          
          {/* Background Card */}
          <div className="w-[600px] h-[600px] rounded-3xl shadow-2xl overflow-hidden bg-gray-100">
            {/* Person Image inside card */}
            <img
              src={Owner}
              alt="Mr. Anoop Agrawal"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT - Content */}
        <div>
          <p className="text-sm font-semibold tracking-widest uppercase text-red-600 mb-2">
            A Visionary Behind The Sound
          </p>

          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Mr. Anoop Agrawal <br />
            <span className="text-red-600 font-semibold text-xl">
              Carrying Forward a Legacy Since 1952
            </span>
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Agrawal Sound & Light is more than a business — it is a legacy built on passion, precision, and decades of unwavering commitment to excellence. Under the leadership of Mr. Anoop Agrawal, the company continues to redefine event production with advanced technology while staying deeply rooted in the values that shaped its strong foundation.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            With an exceptional understanding of sound engineering and large-scale event execution, his vision has successfully powered over <span className="font-bold text-red-600">7,500 events across 30+ cities</span>. From luxurious weddings and high-energy concerts to prestigious government shows, every project reflects professionalism, reliability, and world-class standards.
          </p>

          <blockquote className="mt-6 italic text-gray-800 border-l-4 border-red-600 pl-4 text-lg">
            “Great events are remembered not for how they looked, but for how they made people feel and that begins with perfect sound and spectacular light.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Founder;
