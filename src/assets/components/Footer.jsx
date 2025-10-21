import { BsEnvelopeAtFill, BsTelephoneFill, BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, {})

const Footer = () => {
  useGSAP(() => {
    gsap.fromTo('footer', {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: 'footer',
        start: 'top bottom',
        end: 'top 70%',
        scrub: 2,
      }
    })
  })

  return (
    <footer className='flex flex-col justify-center py-10 px-10 bg-[gray]/60 text-white'>
      <div className='flex flex-col md:flex-row max-md:space-y-5 justify-between'>
        <div className='md:w-1/3'>
          <p>Creating exceptional digital experiences through innovative design and development. Let's build something amazing together.</p>
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='text-base font-bold'><span className='text-black'>Quick</span> Links</h2>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </div>
        <div>
          <h2 className='text-base font-bold'><span className='text-black'>Contact</span> Info</h2>
          <p className='flex items-center gap-2'><BsTelephoneFill /> +63-931-8481-732</p>
          <p className='flex items-center gap-2'><BsEnvelopeAtFill /> charlieemanuel18@gmail.com</p>
          <p className='flex items-center gap-2'><FaLocationDot /> City of Naga Cebu, Philippines</p>
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row justify-between mt-8 gap-y-8'>
        <p>2025 © Charlie Emanuel Daga-as - All rights reserved.</p>
        <div className='flex flex-row justify-center items-center space-x-5'>
          <a href='https://web.facebook.com/people/Charlie-Emnl-Daga-as/pfbid0WmiXtNjyQ43GL5oBY81S7tQUJ9jo8485PZpx797XeipiFzaghzyrpyKX25yWzpTAl/'>< BsFacebook size={18}/></a>
          <a href='#'>< BsInstagram size={18}/></a>
          <a href='#'>< BsLinkedin size={18}/></a>
          <a href='https://github.com/charlieemanuel'>< BsGithub size={18}/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;