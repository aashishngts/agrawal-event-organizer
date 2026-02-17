import HeroImages from "../../assets/Hero2.jpg";



const Hero = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${HeroImages})` }}
      ></div>

      {/* Red to Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/0-900/10"></div>

      {/* Animated Red Glow */}
      {/* <div className="absolute inset-0 bg-red-600/20 blur-3xl animate-pulse"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight uppercase tracking-wide">
          <span className="text-white">Create</span>{" "}
          <span className="text-red-600">Unforgettable</span> <br />
          Concert Moments
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          We specialize in high-impact concert production, professional audio,
          dynamic lighting, a
        </p>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          
          {/* Creative Enquiry Button */}
          <button className="relative px-10 py-4 uppercase tracking-widest font-semibold 
                             bg-red-600 rounded-full 
                             shadow-[0_0_20px_rgba(220,38,38,0.7)] 
                             hover:shadow-[0_0_40px_rgba(220,38,38,1)] 
                             hover:scale-105
                             transition-all duration-300">
            Enquiry Now
          </button>

          {/* Glass Button */}
          <button className="px-10 py-4 uppercase tracking-widest font-semibold 
                             border border-white/30 
                             bg-white/10 backdrop-blur-md 
                             rounded-full 
                             hover:bg-white hover:text-black 
                             transition-all duration-300">
            View Events
          </button>
        </div>
      </div>

      {/* Bottom Fade for Smooth Scroll Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
