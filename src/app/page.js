import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Contact/>
      <Footer />
    </>
  );
}
