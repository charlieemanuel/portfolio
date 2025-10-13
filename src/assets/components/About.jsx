

const About = () => {
  return (
    <section className="about-section p-8 bg-gradient-to-b from-[#a5a9b4]/50 to-[#0a0a0a]/50">
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a0a0a] hero-shadow mt-7 mb-8">
                About Me
            </h2>
            <p className="text-center text-base text-white max-w-4xl px-8 py-6 rounded-xl leading-relaxed bg-[#0a0a0a]/75">
                I’m a UI/UX Designer and Web Developer who loves turning ideas into interactive, visually engaging websites. With a strong eye for design and a passion for user experience, I blend creativity and logic to craft digital products that feel as good as they look. Whether it’s designing intuitive interfaces or coding responsive layouts, I’m dedicated to delivering high-quality work that meets both user needs and business goals. Let’s create something amazing together!
            </p>
        </div>
        <div className="flex justify-evenly items-center text-white mt-8">
            <div className="bg-white/50 text-[#0a0a0a] text-xl font-bold p-4 rounded-xl">
                <img src="" alt="" />
                <p>Design</p>
            </div >
            <div className="bg-white/50 text-[#0a0a0a] text-xl font-bold p-4 rounded-xl">
                <img src="" alt="" />
                <p>Code</p>
            </div>
        </div>
        <div className="flex justify-center items-center bg-white/50 text-[#0a0a0a] text-xl font-bold mt-8 p-4 rounded-xl">
            <img src="" alt="" />
            <p>Rest</p>
        </div>
    </section>
  )
}

export default About