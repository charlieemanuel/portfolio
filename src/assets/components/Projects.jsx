import { BiDownload, BiPlay } from 'react-icons/bi';
import One from '../images/one.jpg';
import Two from '../images/two.jpg';
import Three from '../images/three.jpg';

const Projects = () => {
  return (
      <section className='flex flex-col justify-center py-20 px-6 bg-[gray]/60' id="projects">
        <div>
          <h2 className="w-full text-2xl sm:text-3xl font-semibold text-black mb-2">
            Featured <span className='text-white'>Projects</span>
          </h2>
          <p className="text-base text-white">
            Each one designed to push boundaries and deliver standout digital experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-20 justify-center items-center mt-20">
          <div className="flex flex-col justify-center items-center text-xl font-bold rounded-sm overflow-hidden h-[650px] max-w-[420px] bg-[#0a0a0a]/75 hover:scale-[1.01] hover:shadow-md hover:shadow-white/50 transition-all duration-300">
            <img src={One} alt="Picture"  className='w-full h-full' />
            <div className='p-6 w-full space-y-4'>
              <h2 className='text-2xl text-[gray] te font-semibold'>
                Project <span className='text-white'>One</span>
              </h2>
              <p className='text-base text-white font-normal ">'>
                A comprehensive website solution featuring advanced functionality, real-time API, and seamless support experience with 55% improved conversion rates.
              </p>
              <div className='text-base font-semibold flex items-center justify-between w-full">'>
                <a href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <BiDownload size={20}/>
                  <span>View Project</span>
                </a>
                <a href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <BiDownload size={20}/>
                  <span>Source Code</span>
                </a>
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
              <div className='text-base font-semibold flex items-center justify-between w-full">'>
                <a href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <BiDownload size={20}/>
                  <span>View Project</span>
                </a>
                <a href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <BiDownload size={20}/>
                  <span>Source Code</span>
                </a>
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
              <div className='text-base font-semibold flex items-center justify-between w-full">'>
                <a href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <BiDownload size={20}/>
                  <span>View Project</span>
                </a>
                <a href='#' className='flex items-center justify-center space-x-2 text-white hover:text-[gray] transition-all duration-300'>
                  <BiDownload size={20}/>
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div >
        </div>
      </section>
  )

}
export default Projects