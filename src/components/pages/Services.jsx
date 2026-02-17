import Footer from "../layout/Footer";

const servicesData = [
  {
    title: "Live Concerts",
    description:
      "Our Experience and expertise in setting up and calibrating Sound and light Systems for Live Concerts. We have also complimented these capabilities with staging and lighting services. In that everlasting moment before the audience is instantaneously wowed, our clients feel confidence in our audio production.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    reverse: false,
    letter: "L",
  },
  {
    title: "Fashion Shows",
    description:
      "From initial conception and budget development through on-site event coordination, we provide complete production services for fashion shows. Over the past years, we have organized fashion shows for a large number of clients and ensure them of timely execution of the necessary tasks.",
    image: "https://media.istockphoto.com/id/2153393620/photo/beautiful-young-women-dancing-under-the-blue-neon-lights-in-nightclub.jpg?s=612x612&w=0&k=20&c=z9Q79sgEUrJ8z9Z1gMgMgz2gBsroQRK-2ChfcQxbCRE=",
    reverse: true,
    letter: "F",
  },
  {
    title: "Corporate Meets",
    description:
      "When we design, plan and deliver your Corporate event, fulfilling your Corporate vision is our primary concern. Dedicated to making visual statements by executing events for prominent corporations, we infuse style and flair into your corporate events.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    reverse: false,
    letter: "C",
  },
  {
    title: "Brand Events",
    description:
      "Our Experience and expertise in setting up and calibrating Sound and light Systems for Live Concerts. We have also complimented these capabilities with staging and lighting services.",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    reverse: true,
    letter: "B",
  },
  {
    title: "Theme Parties",
    description:
      "When it comes to organizing your themed party, we offer our exotic efforts for the creation of unforgettable events for you. Our imaginative approach will bring your concept to life.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    reverse: false,
    letter: "T",
  },
  {
    title: "Weddings",
    description:
      "We offer a suite of wedding planning services to fulfill all your needs. We add a personal touch and a creative eye, combining your wedding with style and imagination.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    reverse: true,
    letter: "W",
  },
];

const Services = () => {
  return (
    <>
      
      {/* HERO SECTION */}
      <section
        className="h-[40vh] sm:h-[50vh] md:h-80 bg-cover bg-center relative flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold uppercase">
            Services
          </h1>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-[#f3f3f3] py-24">
        <div className="max-w-full mx-10 px-6 space-y-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-16 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE SIDE */}
                <div className="relative flex justify-center w-full md:w-1/2">
                  <div className="absolute bg-red-600 w-[90%] h-[90%] -bottom-6 -right-6 z-0"></div>

                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative z-10 w-full max-w-lg object-cover shadow-lg"
                  />
                </div>

                {/* TEXT SIDE */}
                <div className="relative w-full md:w-1/2">
                  {/* Big Background Letter */}
                  <span className="absolute -top-16 left-0 text-[200px] font-bold text-gray-200 z-0 select-none">
                    {service.letter}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-red-600 uppercase text-sm tracking-widest">
                        Services
                      </span>
                      <div className="h-[2px] w-24 bg-red-600"></div>
                    </div>

                    <h2 className="text-5xl font-extrabold uppercase mb-6">
                      {service.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
