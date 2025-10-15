import JSlogo from '../logos/javascript-1.svg';
import HTMLlogo from '../logos/html-1.svg';
import CSSlogo from '../logos/css-3.svg';
import ReactLogo from '../logos/react-2.svg';
import TailwindLogo from '../logos/tailwind-css-2.svg';
import GSAPlogo from '../logos/gsap-greensock.svg';
import FramerMotionLogo from '../logos/framer-motion.svg';
import GitLogo from '../logos/git-icon.svg';
import FigmaLogo from '../logos/figma-icon.svg';

const Skills = () => {
  return (
    <section className="flex flex-col flex-wrap p-8" id="skills">
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#6e6e6e] hero-shadow mt-7 mb-2">My Toolkit</h2>
            <p className="text-2xl text-gray-400 font-bold">From sleek front-end builds to dynamic animations, I use modern tools like:</p>
        </div>
        <div className='flex flex-col justify-evenly items-center mt-20'>
            <img src={JSlogo} alt="react logo" width={70}  />
            <img src={HTMLlogo} alt="react logo" width={60}  />
            <img src={CSSlogo} alt="react logo" width={60}  />
            <img src={ReactLogo} alt="react logo" width={70}  />
            <img src={TailwindLogo} alt="react logo" width={70}  />
            <img src={GSAPlogo} alt="react logo" width={60}  />
            <img src={FramerMotionLogo} alt="react logo" width={60}  />
            <img src={GitLogo} alt="react logo" width={60}  />
            <img src={FigmaLogo} alt="react logo" width={40} />
        </div>
        <div>
            <p className="text-2xl text-gray-400 font-bold mt-20">Every project is built for performance, beauty, and scalability.</p>
        </div>
    </section>
  )
}

export default Skills