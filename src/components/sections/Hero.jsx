import HeroImages from "../../assets/Hero2.jpg";

const Hero = () => {
  return (
    <section className="relative h-[65vh] sm:h-[85vh] md:h-screen w-full flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImages})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-7xl font-extrabold leading-snug md:leading-tight uppercase tracking-wide">
          <span className="text-white">Create </span>
          <span className="text-red-600">Unforgettable</span>
          <br />
          Concert Moments
        </h1>

        {/* Description */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          We specialize in high-impact concert production, professional audio
          and dynamic lighting experiences that captivate every audience.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-10 flex justify-center gap-4 sm:gap-6 flex-wrap">
          
          {/* Enquiry Button */}
          <button
            className="
              px-5 py-2
              sm:px-10 sm:py-4
              text-[11px] sm:text-sm md:text-base
              uppercase tracking-widest font-semibold
              bg-red-600 rounded-full
              shadow-[0_0_15px_rgba(220,38,38,0.6)]
              hover:shadow-[0_0_40px_rgba(220,38,38,1)]
              hover:scale-105
              transition-all duration-300
            "
          >
            Enquiry Now
          </button>

          {/* Glass Button */}
          <button
            className="
              px-5 py-2
              sm:px-10 sm:py-4
              text-[11px] sm:text-sm md:text-base
              uppercase tracking-widest font-semibold
              border border-white/30
              bg-white/10 backdrop-blur-md
              rounded-full
              hover:bg-white hover:text-black
              transition-all duration-300
            "
          >
            View Events
          </button>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
