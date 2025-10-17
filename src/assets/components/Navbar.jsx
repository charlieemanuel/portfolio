import { HiOutlineX, HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import {useGSAP} from "@gsap/react";
import  gsap from "gsap";


const Navbar = () => {
    const [isOpen, seIsOpen] = useState(false);
    const handleNav = () => {
        seIsOpen(!isOpen);
    }

    useGSAP(() => {
      gsap.fromTo('.logo', {
        x: -100,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        ease: 'elastic.inOut',
        duration: 1,
      })

      gsap.fromTo('.sm-menuBtn', {
        x: 100,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        ease: 'elastic.inOut',
        duration: 1,
        delay: 0.5,
      })

      gsap.fromTo('.nav-menu', {
        y: -70,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        ease: 'power1.in',
        duration: 0.8,
        delay: 0.3,
        stagger: 0.1,
      })

      gsap.fromTo('.lg-nav-button ', {
        x: 100,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        ease: 'elastic.inOut',
        duration: 1,
      })
    })

    return (
        <header className="w-full h-20 px-10 flex-center bg-gray-300/5 backdrop-blur-[2px] sticky top-0 z-50">
            <nav className="flex justify-between items-center w-full">

                {/* logo */}
                <div className='flex justify-center items-center border-white rounded-full py-4 px-2 hover:scale-110 transition-all duration-300'>
                <a href="#" className="text-[gray] text-3xl font-bold tracking-wider logo">cm<span className="text-white">l</span>.</a>
                </div>

                {/* nav menus */}
                <div className="text-white font-light space-x-6 lg:space-x-8 text-sm md:flex hidden tracking-wide">
                    <a href="#" className="hover:text-[gray] transition-all duration-300 nav-menu">HOME</a>
                    <a href="#about" className="hover:text-[gray] transition-all duration-300 nav-menu">ABOUT</a>
                    <a href="#skills" className="hover:text-[gray] transition-all duration-300 nav-menu">SKILLS</a>
                    <a href="#projects" className="hover:text-[gray] transition-all duration-300 nav-menu">PROJECTS</a>
                    <a href="#contact" className="hover:text-[gray] transition-all duration-300 nav-menu">CONTACT</a>
                </div>

                {/* hire me btn */}
                <div className='md:flex hidden lg-nav-button'>
                    <a href="#" className="px-10 py-2 text-base bg-gradient-to-t from-[#a5a9b4] to-[#0a0a0a] text-white font-semibold border-[1px] border-[gray] rounded-sm flex items-center space-x-2 hover:from-[#0a0a0a00] hover:to-[#a5a9b400] hover:text-[gray] hover:border-[1px] hover:border-[gray] hover:scale-105 transition-all duration-300">Hire Me</a>
                </div>

                {}{/* hamburger icon */}
                <div onClick={handleNav} className="md:hidden z-10 text-[gray] cursor-pointer hover:text-[gray] transition-all duration-300 sm-menuBtn">
                    {isOpen ? <HiOutlineX size={25}/> : <HiOutlineMenuAlt3 size={25}/>}
                </div>
                
                {/* mobile menu */}
                <div className={isOpen ? "absolute top-0 left-0 w-[100vw] h-screen bg-black/90 flex flex-col justify-center items-center font-light ease-in duration-300 md:hidden" : "absolute top-0 left-[-100%] opacity-0 w-full h-screen bg-black/5 flex flex-col justify-center items-center ease-in duration-300 md:hidden"}>
                    <button className='m-8' onClick={handleNav}>
                        <a href="#" className="text-white text-sm hover:text-[gray] transition-all duration-300 ">HOME</a>
                    </button>
                    <button className='m-8' onClick={handleNav}>
                        <a href="#about" className="text-white text-sm hover:text-[gray] transition-all duration-300 ">ABOUT</a>
                    </button>
                    <button className='m-8' onClick={handleNav}>
                        <a href="#skills" className="text-white text-sm hover:text-[gray] transition-all duration-300 ">SKILLS</a>
                    </button>
                    <button className='m-8' onClick={handleNav}>
                        <a href="#projects" className="text-white text-sm hover:text-[gray] transition-all duration-300 ">PROJECTS</a>
                    </button>
                    <button className='m-8' onClick={handleNav}>
                        <a href="#contact" className="text-white text-sm hover:text-[gray] transition-all duration-300 ">CONTACT</a>
                    </button>
                    <hr className="border-[gray] w-[80%] m-8"/>
                    <button className="px-10 py-2 text-base bg-gradient-to-t from-[#a5a9b4] to-[#0a0a0a] text-white font-semibold border-[1px] border-[gray] rounded-sm flex items-center space-x-2 hover:from-[#0a0a0a00] hover:to-[#a5a9b400] hover:text-[gray] hover:border-[1px] hover:border-[gray] hover:scale-105 transition-all duration-300 m-8" onClick={handleNav}>
                        <a href="#">Hire Me</a>
                    </button>
                </div>
            </nav>
        </header>
  )
}
export default Navbar