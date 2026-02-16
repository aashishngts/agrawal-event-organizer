import Footer from "../layout/Footer";
import AboutSection from "../sections/AboutSection";
import Brands from "../sections/Brands";
import EventTypes from "../sections/EventTypes";
import Founder from "../sections/Founder";
import Hero from "../sections/Hero";
import Services from "../sections/Services";


const Home = () => {
  return (
    <>
      <Hero />
      <Brands/>
      <Services />
      <AboutSection/>
      <Founder/>
      <EventTypes/>
      <Footer />
    </>
  );
};

export default Home;
