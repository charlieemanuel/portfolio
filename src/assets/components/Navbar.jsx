import { HiOutlineX, HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';


const Navbar = () => {
    const [isOpen, seIsOpen] =useState(false);
    const handleNav = () => {
        seIsOpen(!isOpen);
    }

    return (
        <header className="w-full h-20 px-10 flex-center backdrop-blur-[2px] sticky top-0 z-50">
            <nav className="flex justify-between items-center w-full">

                {/* logo */}
                <div>
                <a href="#" className="text-[gray] text-3xl font-bold tracking-tighter">cm<span className="text-white">l</span>.</a>
                </div>

                {/* nav menus */}
                <div className="text-white space-x-6 lg:space-x-8 text-sm md:flex hidden tracking-wide">
                    <a href="#" className="hover:text-[gray] transition-all duration-300">HOME</a>
                    <a href="#about" className="hover:text-[gray] transition-all duration-300">ABOUT</a>
                    <a href="#skills" className="hover:text-[gray] transition-all duration-300">SKILLS</a>
                    <a href="#projects" className="hover:text-[gray] transition-all duration-300">PROJECTS</a>
                    <a href="#contact" className="hover:text-[gray] transition-all duration-300">CONTACT</a>
                </div>

                {/* hire me btn */}
                <div className='md:flex hidden'>
                    <a href="#" className="px-10 py-2 text-base bg-gradient-to-t from-[#a5a9b4] to-[#0a0a0a] text-white font-bold border-2 border-[gray] rounded-lg flex items-center space-x-2 hover:from-[#0a0a0a00] hover:to-[#a5a9b400] hover:text-[gray] hover:border-2 hover:border-[gray] hover:scale-105 transition-all duration-300">Hire Me</a>
                </div>

                {}{/* hamburger icon */}
                <div onClick={handleNav} className="md:hidden z-10 text-white cursor-pointer hover:text-[gray] transition-all duration-300">
                    {isOpen ? <HiOutlineX size={25}/> : <HiOutlineMenuAlt3 size={25}/>}
                </div>
                
                {/* mobile menu */}
                <div className={isOpen ? "absolute top-0 left-0 w-[100vw] h-screen bg-black/90 flex flex-col justify-center items-center ease-in duration-300 md:hidden" : "absolute top-0 left-[-100%] opacity-0 w-full h-screen bg-black/5 flex flex-col justify-center items-center ease-in duration-300 md:hidden"}>
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
                    <button className="px-10 py-2 text-base bg-gradient-to-t from-[#a5a9b4] to-[#0a0a0a] text-white font-bold border-2 border-[gray] rounded-lg flex items-center space-x-2 hover:from-[#0a0a0a00] hover:to-[#a5a9b400] hover:text-[gray] hover:border-2 hover:border-[gray] hover:scale-105 transition-all duration-300 m-8" onClick={handleNav}>
                        <a href="#">Hire Me</a>
                    </button>
                </div>
            </nav>
        </header>
  )
}

export default Navbar