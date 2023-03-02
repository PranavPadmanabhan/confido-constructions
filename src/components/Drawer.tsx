import React from 'react'
import { FaPlus } from "react-icons/fa"
import { useAppContext } from '../contexts/appContext'

const Drawer = () => {
    const { setDrawerOpen } = useAppContext()

  return (
    <div className='fixed z-[10000] flex lg:hidden top-0 right-0 w-[75%] h-screen bg-medium-opacity backdrop-blur-[50px] duration-1000'>
      <div className="w-full h-full flex flex-col items-center justify-start  relative pt-[40%]">
        <FaPlus onClick={() => setDrawerOpen(false)} color='white' size={35} className="absolute top-10 right-6 flex rotate-45 sm:hidden" />
        <div className="w-full h-[50%] flex flex-col items-start justify-evenly pl-[15%] box-border">
        <a onClick={() => setDrawerOpen(false)} href="#home" className="cursor-pointer  text-white text-[1.2rem] font-light">
            Home
          </a>
          <a onClick={() => setDrawerOpen(false)} href="#about" className="cursor-pointer  text-white text-[1.2rem] font-light">
            About Us
          </a>
          <a onClick={() => setDrawerOpen(false)} href="#services" className=" cursor-pointer  text-white text-[1.2rem] font-light">
            Services
          </a>
          <a onClick={() => setDrawerOpen(false)} href="#gallery" className=" cursor-pointer  text-white text-[1.2rem] font-light">
            Gallery
          </a>
          <a onClick={() => setDrawerOpen(false)} href="#contact" className="cursor-pointer  text-white text-[1.2rem] font-light">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Drawer
