import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import About from "./containers/About";
import Services from "./containers/Services";
import Gallery from "./containers/Gallery";
import Contact from "./containers/Contact";
import Footer from "./components/Footer";
import { LoaderContext } from "./contexts/LoadingContext";
import loader from "./assets/loader.gif";

function App() {
  const { loading } = useContext(LoaderContext);

  return (
    <div className=" w-full min-h-full flex flex-col items-center justify-start bg-white scrollbar-hide">
      {loading ? (
        <div className="fixed top-0 z-[100] w-full h-full bg-black flex items-center justify-center">
          <img src={loader} alt="" className="w-[100px] h-[100px]" />
        </div>
      ) : (
        <>
          <Header />
          <About />
          <Services />
          <Gallery />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
