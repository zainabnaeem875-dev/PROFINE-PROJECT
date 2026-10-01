import Hero from "../components/Hero/Hero";
import StatBar from "../components/StatBar/StatBar.tsx";
import Trusted from "../components/Trusted/Trusted.tsx";
import Journey from "../components/Journey/Journey.tsx";
import Products from "../components/Products/Products.tsx";
import Portfolio from "../components/Portfolio/Portfolio.tsx";
import Testimonial from "../components/Testimonial/Testimonial.tsx";
import ChatDemo from "../components/ChatDemo/ChatDemo.tsx";
import Pricing from "../components/Pricing/Pricing.tsx";
import About from "../components/About/About.tsx";
import Contact from "../components/Contact/Contact.tsx";
import Footer from "../components/Footer/Footer.tsx";
function Home() {
  return (
    <>
      <Hero />
      <StatBar />
      <Trusted /> 
      <Journey/>
      <Products/>
      <Portfolio/>
      <Testimonial/>
      <ChatDemo/>
      <Pricing/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;