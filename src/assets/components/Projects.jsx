import { TbExternalLink } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';
import One from '../images/one.jpg';
import Two from '../images/two.jpg';
import Three from '../images/three.jpg';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, {})

const Projects = () => {
  useGSAP(() => {
    gsap.fromTo('.projects-text', {
      x: -100,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.projects-text',
        start: 'top bottom',
        end: 'top 70%',
        scrub: 2,
      }
    })

    gsap.fromTo('.projects-image', {
      y: 200,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.projects-image',
        start: 'top bottom',
        end: 'top 40%',
        scrub: 2,
      }
    })
  })

  return (
      <section className='flex flex-col justify-center py-20 px-6 bg-[gray]/60' id="projects">
        <div className='projects-text'>
          <h2 className="w-full text-2xl sm:text-3xl font-semibold text-black mb-2">
            Featured <span className='text-white'>Projects</span>
          </h2>
          <p className="text-base text-white">
            Each one designed to push boundaries and deliver standout digital experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-20 justify-center items-center mt-20 projects-image">
          <div className="flex flex-col justify-center items-center text-xl font-bold rounded-sm overflow-hidden h-[650px] max-w-[420px] bg-[#0a0a0a]/75 hover:scale-[1.01] hover:shadow-md hover:shadow-white/50 transition-all duration-300">
            <img src={One} alt="Picture"  className='w-full h-full' />
            <div className='p-6 w-full space-y-4'>
              <h2 className='text-2xl text-[gray] te font-semibold'>
                Project <span className='text-white'>One</span>
              </h2>
              <p className='text-base text-white font-normal ">'>
                A comprehensive website solution featuring advanced functionality, real-time API, and seamless support experience with 55% improved conversion rates.
              </p>
              <div className='text-base font-semibold flex-col md:flex-row flex items-center justify-between max-sm:space-y-3 w-full'>
                <motion.a whileTap={{scale: 0.9}} href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <TbExternalLink/>
                  <span>View Project</span>
                </motion.a>
                <motion.a whileTap={{scale: 0.9}} href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <BsGithub/>
                  <span>Source Code</span>
                </motion.a>
              </div>
            </div>
          </div >
          <div className="flex flex-col justify-center items-center text-xl font-bold rounded-sm overflow-hidden h-[650px] max-w-[420px] bg-[#0a0a0a]/75 hover:scale-[1.01] hover:shadow-md hover:shadow-white/50 transition-all duration-300">
            <img src={Two} alt="Picture"  className='w-full h-full' />
            <div className='p-6 w-full space-y-4'>
              <h2 className='text-2xl text-[gray] te font-semibold'>
                Project <span className='text-white'>Two</span>
              </h2>
              <p className='text-base text-white font-normal ">'>
                A comprehensive website solution featuring advanced functionality, real-time API, and seamless support experience with 55% improved conversion rates.
              </p>
              <div className='text-base font-semibold flex-col md:flex-row flex items-center justify-between max-sm:space-y-3 w-full'>
                <motion.a whileTap={{scale: 0.9}} href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <TbExternalLink/>
                  <span>View Project</span>
                </motion.a>
                <motion.a whileTap={{scale: 0.9}} href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <BsGithub/>
                  <span>Source Code</span>
                </motion.a>
              </div>
            </div>
          </div >
          <div className="flex flex-col justify-center items-center text-xl font-bold rounded-sm overflow-hidden h-[650px] max-w-[420px] bg-[#0a0a0a]/75 hover:scale-[1.01] hover:shadow-md hover:shadow-white/50 transition-all duration-300">
            <img src={Three} alt="Picture"  className='w-full h-full' />
            <div className='p-6 w-full space-y-4'>
              <h2 className='text-2xl text-[gray] te font-semibold'>
                Project <span className='text-white'>Three</span>
              </h2>
              <p className='text-base text-white font-normal ">'>
                A comprehensive website solution featuring advanced functionality, real-time API, and seamless support experience with 55% improved conversion rates.
              </p>
              <div className='text-base font-semibold flex-col md:flex-row flex items-center justify-between max-sm:space-y-3 w-full'>
                <motion.a whileTap={{scale: 0.9}} href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <TbExternalLink/>
                  <span>View Project</span>
                </motion.a>
                <motion.a whileTap={{scale: 0.9}} href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <BsGithub/>
                  <span>Source Code</span>
                </motion.a>
              </div>
            </div>
          </div >
        </div>
      </section>
  )

}
export default Projects