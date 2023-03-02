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
import loader from "./assets/LOGO_1.svg";
import Drawer from "./components/Drawer";
import { useAppContext } from "./contexts/appContext";
import NavBar from "./components/NavBar";

function App() {
  const { loading } = useContext(LoaderContext);
  const { drawerOpen } = useAppContext()
  return (
    <div className="relative w-full min-h-full flex flex-col items-center justify-start bg-white scrollbar-hide">
      {loading ? (
        <div className="fixed top-0 z-[100] w-full h-full bg-black flex flex-col items-center justify-center">
          <img src={loader} alt="" className="w-[160px] sm:w-[200px] animate-pulse h-[100px]" />
          <h1 className="text-white text-[1rem] sm:text-[1.2rem] text-center mt-1">
            Getting Everything Ready
            <br /> Please wait..
          </h1>
        </div>
      ) : (
        <>
          {/* <NavBar /> */}
          <Header />
          <About />
          <Services />
          <Gallery />
          <Contact />
          <Footer />
        </>
      )}
      {drawerOpen && <Drawer />}
    </div>
  );
}

export default App;
