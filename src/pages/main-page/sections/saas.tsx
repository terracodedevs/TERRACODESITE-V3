import React from 'react'

const SaaS = () => {
  return (
    <div className="px-4 md:px-4 bg-black text-white font-lufga mt-10 xl:mt-20 container mx-auto ">
        {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl text-[#FDA10A] font-light">
          What We’ve Built for You
        </h2>
        <p className="text-[#A4A4A4] text-lg md:text-2xl mt-2">
          Scalable tech. Smart experiences. Delivered with precision.
        </p>
      </div>

      {/** Features Section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>

            <div className='grid col-span-1 md:col-span-2 row-span-2 bg-neutral-800 rounded-2xl lg:rounded-3xl '>
                <h1  className="text-2xl lg:text-4xl font-medium mb-3 text-white">Boost Efficiency with Smart Solutions</h1>
                <p className="text-[#A4A4A4] text-xl lg:text-2xl">Our dedicated team crafts tailored software solutions designed to meet your specific business needs. We collaborate closely with you from concept to launch, ensuring every aspect reflects your goals. </p>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <img src="/Saas/Card Container.png" alt="Scalable Solutions" />
                        <img src="/Saas/Container.png" alt=" Solutions"  />
                    </div> 
                    <div>
                        <img src="/Saas/Main Container-1.png" alt="Scalable Solutions" className='hidden md:block' />
                    </div> 
                </div>  
            </div>

            <div className='grid col-span-1 md:col-span-1 row-span-3 bg-neutral-800 rounded-2xl lg:rounded-3xl '>
                <h1 className="text-2xl lg:text-4xl font-medium mb-3 text-white">Progress Tracking </h1>
                <p className="text-[#A4A4A4] text-xl lg:text-2xl">Elevate your project management with a dynamic app that tracks progress, optimizes workflows, and enhances collaboration.</p>
                <img src="/Saas/Main Container.png" alt="Customizable Features" />
            </div>

            <div className='grid col-span-1 md:col-span-1 row-span-1  bg-neutral-800 rounded-2xl lg:rounded-3xl'>
                <h1 className="text-2xl lg:text-4xl font-medium mb-3 text-white">Medicare App</h1>
                <p className="text-[#A4A4A4] text-xl lg:text-2xl ">Clean code meets exceptional UX in lightning-fast web experiences.</p>
                <img src="/Saas/image 39.png" alt="Seamless Integration" />
            </div>

            <div className='grid col-span-1 md:col-span-1 row-span-1 bg-neutral-800 rounded-2xl lg:rounded-3xl'>
                <h1 className="text-2xl lg:text-4xl font-medium mb-3 text-white">Money Adviser Apps</h1>
                <p className="text-[#A4A4A4] text-xl lg:text-2xl">Transform your financial journey with our Money Adviser Apps.</p>
                <img src="/Saas/image 40.png" alt="Robust Security" />
            </div>

        </div>
    </div>
  )
}
export default SaaS
