import JSlogo from '../logos/javascript-1.svg';
import HTMLlogo from '../logos/html-1.svg';
import CSSlogo from '../logos/css-3.svg';
import ReactLogo from '../logos/react-2.svg';
import TailwindLogo from '../logos/tailwind-css-2.svg';
import GSAPlogo from '../logos/gsap-greensock.svg';
import FramerMotionLogo from '../logos/framer-motion.svg';
import GitLogo from '../logos/git-icon.svg';
import FigmaLogo from '../logos/figma-icon.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, {})

const Skills = () => {
    useGSAP(() => {
        gsap.fromTo('.skills-text', {
            x: -100,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.skills-text',
                start: 'top bottom',
                end: 'top 50%',
                scrub: 2,
            }
        })

        gsap.fromTo('.logo-list', {
            xPercent: -39,
        }, {
            xPercent: 41,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "none",
        })
    })
  return (
    <section className="flex flex-col py-20 px-6" id="skills">
        <div className='flex flex-col flex-wrap skills-text'>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[gray] mb-2">My <span className='text-white'>Toolkit</span> </h2>
            <p className="text-base text-gray-400 ">From sleek front-end builds to dynamic animations, I use modern tools like:</p>
        </div>
        <div className='flex justify-center items-center space-x-30 mt-20 logo-wrapper'>
            <div className='flex flex-row justify-center items-center space-x-15 md:space-x-25 logo-list'>
                <div className='logo-item'>
                    <img src={JSlogo} alt="react logo" width={60}/>
                </div>
                <div className='logo-item'>
                    <img src={HTMLlogo} alt="react logo" width={55}/>
                </div>
                <div className='logo-item'>
                    <img src={CSSlogo} alt="react logo" width={55}/>
                </div>
                <div className='logo-item'>
                    <img src={ReactLogo} alt="react logo" width={70}/>
                </div>
                <div className='logo-item'>
                    <img src={TailwindLogo} alt="tailwind logo" width={70}  />
                </div>
                <div className='logo-item'>
                    <img src={GSAPlogo} alt="gsap logo" width={60}  />
                </div>
                <div className='logo-item'>
                    <img src={FramerMotionLogo} alt="framer motion logo" width={60}  />
                </div>
                <div className='logo-item'>
                    <img src={GitLogo} alt="git logo" width={60}  />
                </div>
                <div className='logo-item'>
                    <img src={FigmaLogo} alt="figma logo" width={40} />
                </div>
                <div className='logo-item'>
                    <img src={JSlogo} alt="react logo" width={60}/>
                </div>
                <div className='logo-item'>
                    <img src={HTMLlogo} alt="react logo" width={55}/>
                </div>
                <div className='logo-item'>
                    <img src={CSSlogo} alt="react logo" width={55}/>
                </div>
                <div className='logo-item'>
                    <img src={ReactLogo} alt="react logo" width={70}/>
                </div>
                <div className='logo-item'>
                    <img src={TailwindLogo} alt="tailwind logo" width={70}  />
                </div>
                <div className='logo-item'>
                    <img src={GSAPlogo} alt="gsap logo" width={60}  />
                </div>
                <div className='logo-item'>
                    <img src={FramerMotionLogo} alt="framer motion logo" width={60}  />
                </div>
                <div className='logo-item'>
                    <img src={GitLogo} alt="git logo" width={60}  />
                </div>
                <div className='logo-item'>
                    <img src={FigmaLogo} alt="figma logo" width={40} />
                </div>
            </div>
        </div>
        <div className='skills-text'>
            <p className="text-base text-gray-400 mt-20">Every project is built for performance, beauty, and scalability.</p>
        </div>
    </section>
  )
}

export default Skills