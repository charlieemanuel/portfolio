import Design from '../images/design.jpg'  
import Code from '../images/code.jpg'
import Chill from '../images/chill.jpg'

const About = () => {
  return (
    <section className="about-section py-20 px-6 bg-[gray]/60" id="about">
        <div className="flex flex-col justify-center">
          <h2 className="w-full text-2xl sm:text-3xl font-bold text-black mb-8">
            Crafting Digital <span className='text-white'> Experiences</span>
          </h2>
          <p className=" flex justify-center w-full text-center text-base text-white px-5 py-20 rounded-sm leading-loose bg-[#0a0a0a]/75 hover:scale-[1.01] hover:shadow-md hover:shadow-gray-500/80 transition-all duration-300">
              I’m a UI/UX Designer and Web Developer who loves turning ideas into interactive, visually engaging websites. With a strong eye for design and a passion for user experience, I blend creativity and logic to craft digital products that feel as good as they look. Whether it’s designing intuitive interfaces or coding responsive layouts, I’m dedicated to delivering high-quality work that meets both user needs and business goals. Let’s create something amazing together!
          </p>
        </div>
        <div className="flex flex-col md:flex-row max-md:space-y-12 justify-between items-center mt-8">
            <div className="flex flex-col justify-center items-center text-xl text-white font-bold rounded-sm md:max-w-[49%] p-4 bg-[#0a0a0a]/75">
                <img src={Design} alt="Picture" className='rounded-sm w-full h-full' />
            </div>
            <div className="flex flex-col justify-center items-center text-xl text-white font-bold rounded-sm md:max-w-[49%] p-4 bg-[#0a0a0a]/75">
                <img src={Code} alt="Picture"  className='rounded-sm w-full h-full' />
            </div >
        </div>
    </section>
  )
}

export default About