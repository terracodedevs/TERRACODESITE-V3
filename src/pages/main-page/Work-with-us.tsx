import { Link } from '@tanstack/react-router'

const Workwithus = () => {
  return (
          <div className="grid grid-cols-1 md:grid-cols-2 p-4">
            <div className="flex flex-col  items-start justify-start p-4 md:space-y-5">
                <h1 className="text-4xl xl:text-6xl text-[#FDA10A]">Why Work With <br/><span className=''>Terracode</span></h1>
                <p className="text-[#A4A4A4] mt-2 text-lg md:text-2xl">
                 Tech expertise. Human-centered process.
                </p>
                <p className="text-white mt-2 text-xl lg:text-2xl xl:text-3xl">
                  At TerraCode, we don’t just write code; we cultivate enduring partnerships that prioritize innovation, excellence, and your sustainable success. Our team is dedicated to understanding your unique challenges and aspirations, ensuring that every solution we deliver is tailored to drive measurable impact. With a focus on cutting-edge technology and a commitment to collaboration, we empower you to navigate the complexities of the digital landscape with confidence.
                </p>
                <Link to="/about">
                  <h1 className="text-lg md:text-2xl text-[#f56d04] mt-4 md:mt-10 hover:text-[#FDA10A]">
                    Learn More →
                  </h1>
                </Link>
            </div>
            <div className=" text-white flex flex-col">
              <div className='bg-neutral-900 rounded-3xl md:p-6 m-2 '>
                <div className='flex items-center gap-2 px-4'>
                    <div className='rounded-full bg-[#f56d04] h-4 w-4'></div>
                    <p className='p-2 md:text-2xl'>Smarter by Design</p>
                </div>
              </div>
              <div className='bg-neutral-900 rounded-3xl md:p-6 m-2'>
                <div className='flex items-center gap-2 px-4'>
                    <div className='rounded-full bg-[#f56d04] h-4 w-4'></div>
                    <p className='p-2  md:text-2xl'>Experts. Not Just Developers.</p>
                </div>
              </div>
              <div className='bg-neutral-900 rounded-3xl md:p-6 m-2'>
                <div className='flex items-center gap-2 px-4'>
                    <div className='rounded-full bg-[#f56d04] h-4 w-4'></div>
                    <p className='p-2 text-lg md:text-2xl'>Partnership-Driven Process</p>
                </div>
              </div>
                <div className='bg-neutral-900 rounded-3xl md:p-6 m-2'>
                    <div className='flex items-center gap-2 px-4'>
                        <div className='rounded-full bg-[#f56d04] h-4 w-4'></div>
                        <p className='p-2 text-lg md:text-2xl'>Built to Scale</p>
                    </div>
                </div>
                 <div className='bg-neutral-900 rounded-3xl md:p-6 m-2'>
                    <div className='flex items-center gap-2 px-4'>
                        <div className='rounded-full bg-[#f56d04] h-4 w-4'></div>
                        <p className='p-2 text-lg md:text-2xl'>Agile. Transparent. On Track.</p>
                    </div>
                </div>
                <div className='bg-neutral-900 rounded-3xl md:p-6 m-2'> 
                <div className='flex items-center gap-2 px-4'>
                    <div className='rounded-full bg-[#f56d04] h-4 w-4'></div>
                    <p className='p-2 text-lg md:text-2xl'>Delivered with Discipline</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Workwithus