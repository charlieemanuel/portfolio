import { BiDownload, BiPlay } from 'react-icons/bi';
import Image from '../images/hero-profile.png';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

  useGSAP(() => {
    gsap.fromTo('.hero-image', {
      scale: 0,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease:'back',
    })

    gsap.fromTo('.hero-title', {
      y: 50,
      opacity: 0,
    }, {
      y:0,
      opacity: 1,
      delay: 0.5,
      ease: 'power1.inOut'
    })

    gsap.fromTo('.hero-subTitle', {
      y: 50,
      opacity: 0,
    }, {
      y:0,
      opacity: 1,
      delay: 0.7,
      ease: 'power1.inOut'
    })

    gsap.fromTo('.hero-text', {
      y: 50,
      opacity: 0,
    }, {
      y:0,
      opacity: 1,
      delay: 0.9,
      ease: 'power1.inOut'
    })

    gsap.fromTo('.hero-cta', {
      y: 50,
      opacity: 0,
    }, {
      y:0,
      opacity: 1,
      delay: 1.1,
      ease: 'power1.inOut'
    })
  })


  return (
    <section className='px-6 hero-image' id='home'>
        <div className="flex flex-col justify-end items-center pb-10 min-h-[calc(100vh-80px)] text-center px-4 py-5">
            <div className='mb-7 bg-[gray]/20 backdrop-blur-[1px] border-4 border-[gray] rounded-4xl hidden' id='hero-profile'>
                <img src={Image} alt="Profile" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-[gray] hero-shadow mb-3 hero-title">Charlie Emanuel <span className='text-white'>Daga-as</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-5 tracking-tight hero-subTitle">
                UI/UX Designer <span className='text-[gray] text-2xl md:text-3xl font-bold px-1'>+</span> Developer
            </h2>
            <p className="text-base text-white max-w-2xl leading-relaxed hero-text">
                I'm a passionate UI/UX designer and developer dedicated to crafting visually stunning and user-friendly digital experiences.
            </p>
            <div className='flex flex-col sm:flex-row justify-center items-cente mt-1 hero-cta'>
            <button>
                <a href="#" className="mt-4 px-6 py-3 h-12 bg-gradient-to-t from-[#a5a9b4] to-[#0a0a0a] text-white font-bold border-[1px] border-[gray] rounded-sm flex items-center space-x-2 hover:from-[#0a0a0a00] hover:to-[#a5a9b400] hover:text-[gray] hover:border-2 hover:border-[gray] hover:scale-105 transition-all duration-300">
                    <BiDownload size={20}/>
                    <span>Download CV</span>
                </a>
            </button>
            <button>
                <a href="#" className="mt-4 sm:ml-4 px-6 py-3 h-12 border-[1px] border-[gray] text-[gray] font-bold rounded-sm flex items-center space-x-2 hover:bg-gradient-to-t hover:from-[#a5a9b4] hover:to-[#0a0a0a] hover:text-white hover:scale-105 transition-all duration-300">
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