import Footer from "./components/landing-page/Footer";
import Hero from "./components/landing-page/Hero";
import Information from "./components/landing-page/Information";
import Navbar from "./components/landing-page/Navbar";

const App = () => {
  return (
    <div className="bg-[#00040f]">
      <Navbar />
      <Hero />
      <Information />
      <Footer />
    </div>
  );
};

export default App;
