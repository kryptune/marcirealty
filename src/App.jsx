import Home from "./components/Home";
import About from "./components/About";
import Overview from "./components/Overview";
import DreamHome from "./components/DreamHome";
import Badges from "./components/Badges";
import PhotoGallery from "./components/PhotoGallery";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#1A1A1A]">
      <Home />
      <About />
      <Overview />
      <DreamHome />
      <Badges />
      <PhotoGallery />
      <Services />
      <Contact />
      <Location />
      <Footer />
    </main>
  );
}

export default App;
