
const Contact = () => {
  return (
    <section className='flex flex-col lg:flex-row max-md:justify-center max-md:items-center py-20 px-6' id='contact'>
      <div className=' md:flex flex-col justify-center items-center px-2 w-full'>
        <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-semibold text-[gray] mb-2">Let's Build Something <span
            className='text-white'>Great</span></h2>
        <p className="text-base text-white text-center">Got an idea, collaboration, or opportunity in mind? Let’s connect and bring
          it to life. I’m always open to new challenges that let creativity and technology meet.</p>
        <form action=" " className="mt-10 text-white text-base md:text-xl border-2 p-6 rounded-sm space-y-4">

          {/*====== Name Input ======*/}
          <div className="flex md:justify-center md:items-center flex-col md:flex-row max-md:space-y-4 md:space-x-4 w-full">
            <div className=''>
              <input type="text" id="fname" name="fname" placeholder="First Name" required={true} className="border-2 w-full h-12 p-3 rounded-sm"/>
            </div>
            <div className=''>
              <input type="text" id="fname" name="fname" placeholder="Last Name" required={true} className="border-2 w-full h-12 p-3 rounded-sm"/>
            </div>
          </div>

          {/*====== Email & Text Input ======*/}
          <div className='w-full space-y-4'>
            <input type="text" id="fname" name="fname" placeholder="Email" required={true} className="border-2 w-full h-12 p-3 rounded-sm"/><br/>
            <input type="text" id="fname" name="fname" placeholder="Subject" required={true} className="border-2 w-full h-12 p-3 rounded-sm"/><br/>
            <textarea id="message" name="message" rows="10" cols="30" placeholder="Message" required={true} className='border-2 w-full p-3 rounded-sm'></textarea>
          </div>

          {/*====== Submit Button ======*/}
          <input type="submit" value="Submit" className="border-2 w-full h-12 p-3 rounded-sm"></input>
        </form>
      </div>
    </section>
  )
}

export default Contact