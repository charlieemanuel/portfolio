import Design from '../images/design.jpg'
import Code from '../images/code.jpg'
import Chill from '../images/chill.jpg'

const About = () => {
  return (
    <section className="about-section p-8 bg-gradient-to-b from-[#a5a9b4]/50 to-[#0a0a0a]/50" id="about">
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a0a0a] hero-shadow mt-7 mb-8">
                About Me
            </h2>
            <p className="text-center text-base text-white max-w-4xl px-8 py-6 rounded-xl leading-relaxed bg-[#0a0a0a]/75">
                I’m a UI/UX Designer and Web Developer who loves turning ideas into interactive, visually engaging websites. With a strong eye for design and a passion for user experience, I blend creativity and logic to craft digital products that feel as good as they look. Whether it’s designing intuitive interfaces or coding responsive layouts, I’m dedicated to delivering high-quality work that meets both user needs and business goals. Let’s create something amazing together!
            </p>
        </div>
        <div className="flex flex-col md:flex-row max-md:space-y-5 justify-center items-center mt-8">
            <div className="flex flex-col justify-center items-center text-xl text-white font-bold p-4 rounded-xl max-w-[720px] h-[420px]">
                <img src={Design} alt="Picture" className='rounded-xl w-full h-full mb-2' />
                <p>Design!</p>
            </div>
            <div className="flex flex-col justify-center items-center text-xl text-white font-bold p-4 rounded-xl max-w-[720px] h-[420px]">
                <img src={Code} alt="Picture"  className='rounded-xl w-full h-full mb-2' />
                <p>Code!</p>
            </div >
            <div className="flex flex-col justify-center items-center text-xl text-white font-bold p-4 rounded-xl max-w-[720px] h-[420px]">
                <img src={Chill} alt="Picture"  className='rounded-xl w-full h-full mb-2' />
                <p>Chill!</p>
            </div >
        </div>
    </section>
  )
}

export default About