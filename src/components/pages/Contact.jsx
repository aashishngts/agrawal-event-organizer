import Footer from "../layout/Footer";

const Contact = () => {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section
        className="h-[35vh] sm:h-[45vh] md:h-80 bg-cover bg-center relative flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold uppercase">
            Get in touch
          </h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* LEFT SIDE - FORM */}
          <div className="bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden w-full lg:max-w-md">
            <div className="bg-red-600 text-white p-4 sm:p-6">
              <h3 className="font-bold uppercase text-base sm:text-lg">
                Have a Question?
              </h3>
              <p className="text-xs sm:text-sm mt-1">
                Fill out the form and our team will contact you shortly.
              </p>
            </div>

            <form className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-2.5 sm:p-3 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-2.5 sm:p-3 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition text-sm"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-2.5 sm:p-3 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition text-sm"
              />
              <textarea
                rows="4"
                placeholder="Tell us about your event"
                className="w-full border border-gray-300 p-2.5 sm:p-3 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition text-sm"
              ></textarea>

              <button className="w-full bg-red-600 text-white py-2.5 sm:py-3 rounded-md uppercase tracking-widest text-sm hover:bg-red-700 transition">
                Let's Get Started
              </button>
            </form>
          </div>

          {/* RIGHT SIDE - CONTACT INFO */}
          <div className="flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 w-full lg:max-w-md">
            {/* PHONE */}
            <div className="bg-white shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl flex items-start gap-3 sm:gap-4 hover:shadow-2xl transition">
              <div className="text-red-600 text-2xl sm:text-3xl">📞</div>
              <div>
                <h4 className="uppercase font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Phone
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  +91 99999 99999
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-white shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl flex items-start gap-3 sm:gap-4 hover:shadow-2xl transition">
              <div className="text-red-600 text-2xl sm:text-3xl">✉️</div>
              <div>
                <h4 className="uppercase font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Email
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  agrawalsoundlight@gmail.com
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="bg-white shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl flex items-start gap-3 sm:gap-4 hover:shadow-2xl transition">
              <div className="text-red-600 text-2xl sm:text-3xl">📍</div>
              <div>
                <h4 className="uppercase font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Address
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  10, Race Course Road, <br />Indore - 452001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
