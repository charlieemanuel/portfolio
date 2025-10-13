import { BiDownload, BiPlay } from 'react-icons/bi';
import Image from '../images/hero-profile.png';

const Hero = () => {
  return (
    <section id='hero-image'>
        <div className="flex flex-col justify-end items-center pb-10 min-h-[calc(100vh-80px)] text-center px-4 py-5">
            <div className='mb-7 bg-[gray]/20 backdrop-blur-[1px] border-4 border-[gray] rounded-4xl hidden' id='hero-profile'>
                <img src={Image} alt="Profile" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[gray] tracking-tighter hero-shadow mb-3">Charlie Emanuel Daga-as
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-5 tracking-tight">
                UI/UX Designer <span className='text-[gray] text-2xl md:text-4xl font-bold'>+</span> Developer
            </h2>
            <p className="text-base text-white max-w-2xl leading-relaxed">
                I'm a passionate UI/UX designer and developer dedicated to crafting visually stunning and user-friendly digital experiences. With a keen eye for detail and a commitment to excellence, I bring ideas to life through innovative design and seamless functionality.
            </p>
            <div className='flex flex-col sm:flex-row justify-center items-cente mt-1'>
            <button>
                <a href="#" className="mt-4 px-6 py-3 h-12 bg-gradient-to-t from-[#a5a9b4] to-[#0a0a0a] text-white font-bold border-2 border-[gray] rounded-lg flex items-center space-x-2 hover:from-[#0a0a0a00] hover:to-[#a5a9b400] hover:text-[gray] hover:border-2 hover:border-[gray] hover:scale-105 transition-all duration-300">
                    <BiDownload size={20}/>
                    <span>Download CV</span>
                </a>
            </button>
            <button>
                <a href="#" className="mt-4 sm:ml-4 px-6 py-3 h-12 border-2 border-[gray] text-[gray] font-bold rounded-lg flex items-center space-x-2 hover:bg-gradient-to-t hover:from-[#a5a9b4] hover:to-[#0a0a0a] hover:text-white hover:scale-105 transition-all duration-300">
                    <BiPlay size={25}/>
                    <span>See My Work</span>
                </a>
            </button>
            </div>
            
        </div>
    </section>
  )
}

export default Hero