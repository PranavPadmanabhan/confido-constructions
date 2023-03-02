import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from "../assets/LOGO_1.svg";
import { useAppContext } from '../contexts/appContext';
import "../App.css"


const NavBar = () => {
    const { setDrawerOpen } = useAppContext()

  return (
    <div id='navbar' className=" w-full h-[15%] sm:h-[20%] flex items-center justify-between px-[8%] sm:px-[12%] box-border ">
        <img src={logo} alt="" className="z-[100] w-[35%]  sm:w-[18%]" />
        <div className="z-[100] w-[60%] h-full flex items-center justify-end sm:justify-between">
          <a href="#home" className="cursor-pointer hidden sm:block text-white text-[1.2rem] font-light">
            Home
          </a>
          <a href="#about" className="cursor-pointer hidden sm:block text-white text-[1.2rem] font-light">
            About Us
          </a>
          <a href="#services" className=" cursor-pointer hidden sm:block text-white text-[1.2rem] font-light">
            Services
          </a>
          <a href="#gallery" className=" cursor-pointer hidden sm:block text-white text-[1.2rem] font-light">
            Gallery
          </a>
          <a href="#contact" className="cursor-pointer hidden sm:block text-white text-[1.2rem] font-light">
            Contact Us
          </a>
          <FaBars onClick={() => setDrawerOpen(true)} className="z-[100] flex sm:hidden " color="white" size={29} />
        </div>
      </div>
  )
}

export default NavBar
