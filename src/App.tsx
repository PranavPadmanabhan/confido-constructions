import React from "react";
import "./App.css";
import Header from "./components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import About from "./containers/About";
import Services from "./containers/Services";
import Gallery from "./containers/Gallery";
import Contact from "./containers/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start bg-white scrollbar-hide">
      <Header />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
