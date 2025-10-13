import { HiOutlineX, HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';


const Navbar = () => {
    const [isOpen, seIsOpen] =useState(false);
    const handleNav = () => {
        seIsOpen(!isOpen);
    }

    return (
        <header className="w-full h-20 px-10 flex-center bg-transparent sticky top-0 z-50">
            <nav className="flex justify-between items-center w-full">

                {/* logo */}
                <div>
                <a href="#" className="text-[gray] text-3xl font-bold tracking-wide">cm<span className="text-white">l</span>.</a>
                </div>

                {/* nav menus */}
                <div className="text-white space-x-6 lg:space-x-8 text-sm md:flex hidden tracking-wide">
                    <a href="#" className="hover:text-[gray] transition-all duration-300">HOME</a>
                    <a href="#" className="hover:text-[gray] transition-all duration-300">ABOUT</a>
                    <a href="#" className="hover:text-[gray] transition-all duration-300">SKILLS</a>
                    <a href="#" className="hover:text-[gray] transition-all duration-300">PROJECTS</a>
                    <a href="#" className="hover:text-[gray] transition-all duration-300">CONTACT</a>
                </div>

                {/* hire me btn */}
                <div className='md:flex hidden'>
                    <a href="#" className="px-10 py-2 font-bold border-2 border-[gray] text-[gray] rounded-lg bg-gradient-to-t hover:from-[#a5a9b4] hover:to-[#0a0a0a] transition-all duration-300">HIRE ME</a>
                </div>

                {}{/* hamburger icon */}
                <div onClick={handleNav} className="md:hidden z-10 text-white cursor-pointer hover:text-[gray] transition-all duration-300">
                    {isOpen ? <HiOutlineX size={25}/> : <HiOutlineMenuAlt3 size={25}/>}
                </div>
                
                {/* mobile menu */}
                <div className={isOpen ? "absolute top-0 left-0 w-[100vw] h-screen bg-black/90 flex flex-col justify-center items-center ease-in duration-300 md:hidden" : "absolute top-0 left-[-100%] opacity-0 w-full h-screen bg-black/5 flex flex-col justify-center items-center ease-in duration-300 md:hidden"}>
                    <a href="#" className="text-white text-sm hover:text-[gray] transition-all duration-300 m-8">HOME</a>
                    <a href="#" className="text-white text-sm hover:text-[gray] transition-all duration-300 m-8">ABOUT</a>
                    <a href="#" className="text-white text-sm hover:text-[gray] transition-all duration-300 m-8">SKILLS</a>
                    <a href="#" className="text-white text-sm hover:text-[gray] transition-all duration-300 m-8">PROJECTS</a>
                    <a href="#" className="text-white text-sm hover:text-[gray] transition-all duration-300 m-8">CONTACT</a>
                    <hr className="border-[gray] w-[80%] m-8"/>
                    <button className="px-10 py-2 font-bold border-2 border-[gray] text-[gray] rounded-lg bg-gradient-to-t hover:from-[#a5a9b4] hover:to-[#0a0a0a] transition-all duration-300 m-8" onClick={handleNav}>
                        <a href="#">HIRE ME</a>
                    </button>
                </div>
            </nav>
        </header>
  )
}

export default Navbar