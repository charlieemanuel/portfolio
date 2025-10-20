
const Contact = () => {
  return (
    <section className='flex flex-col lg:flex-row max-md:justify-center max-md:items-center py-20 px-6' id='contact'>
      <div className=' md:flex flex-col justify-center items-center rpx-2 w-full'>
        <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-semibold text-[gray] mb-2">Let's Build Something <span
            className='text-white'>Great</span></h2>
        <p className="text-base text-white text-center">Got an idea, collaboration, or opportunity in mind? Let’s connect and bring
          it to life. I’m always open to new challenges that let creativity and technology meet.</p>
        <form action="https://formspree.io/f/xpwynbbd" method="POST" className="mt-10 text-white text-base font-light rounded-sm space-y-5">

          {/*====== Name Input ======*/}
          <div className="flex md:justify-center md:items-center flex-col md:flex-row max-md:space-y-5 md:space-x-4 w-full">
            <div className=''>
              <input type="text" id="fname" name="fname" placeholder="First Name" required={true} className="border-b-2 w-full h-12 p-3 outline-none"/>
            </div>
            <div className=''>
              <input type="text" id="fname" name="fname" placeholder="Last Name" required={true} className="border-b-2 w-full h-12 p-3 outline-none"/>
            </div>
          </div>

          {/*====== Email & Text Input ======*/}
          <div className='w-full space-y-4'>
            <input type="text" id="fname" name="fname" placeholder="Email" required={true} className="border-b-2 w-full h-12 p-3 outline-none"/><br/>
            <input type="text" id="fname" name="fname" placeholder="Subject" required={true} className="border-b-2 w-full h-12 p-3 outline-none"/><br/>
            <textarea id="message" name="message" rows="6" cols="20" placeholder="Message" required={true} className='border-2 mt-2 w-full p-3 rounded-sm outline-none'></textarea>
          </div>

          {/*====== Submit Button ======*/}
          <button type="submit" className="flex justify-center w-full h-12 p-3 bg-gradient-to-t from-[#a5a9b4] to-[#0a0a0a] text-white font-bold border-[1px] border-[gray] rounded-sm items-center space-x-2 hover:from-[#0a0a0a00] hover:to-[#a5a9b400] hover:text-[gray] hover:border-[gray] hover:scale-105 transition-all duration-300">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact