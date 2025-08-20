
const SaaS = () => {
  return (
    <div className="px-4 md:px-4 bg-black text-white font-lufga mt-10 xl:mt-20 container mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl text-[#FDA10A] font-light">
          What We’ve Built for You
        </h2>
        <p className="text-[#A4A4A4] text-lg md:text-2xl mt-2">
          Scalable tech. Smart experiences. Delivered with precision.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Large Card */}
        <div className="lg:col-span-2 lg:row-span-2 bg-neutral-800 rounded-2xl lg:rounded-3xl px-4 pt-4 lg:px-8 lg:pt-8 overflow-hidden hidden md:block">
          <h1 className="text-2xl lg:text-4xl font-medium mb-3 text-white">
            Boost Efficiency with Smart Solutions
          </h1>
          <p className="text-[#A4A4A4] lg:text-2xl">
            Our dedicated team crafts tailored software solutions designed to meet your
            specific business needs. We collaborate closely with you from concept to launch,
            ensuring every aspect reflects your goals.
          </p>

          {/* Images Placement */}
          <div className='flex lg:justify-between gap-6 pt-4'>
            <div className="h-[180px] lg:h-[280px]">
            <img
              src="/Saas/Container1.png"
              alt="Solutions"
              className="relative z-0 top-20 lg:top-35 lg:-right-18 "
            />
            <img
              src="/Saas/Card Container1.png"
              alt="Scalable Solutions"
              className="relative -top-30 lg:-top-30  z-10 lg:-right-20"
            />
            </div>
            <div className='hidden md:block'>
                 <img
              src="/Saas/Main Container-1.png"
              alt="Showcase"
              className="relative top-10"
            />
            </div>
          </div>   
        </div>
        {/*mobile view*/}
        <div className="flex flex-col bg-neutral-800 rounded-2xl lg:rounded-3xl px-6 pt-4 overflow-hidden md:hidden">
          <h1 className="text-2xl lg:text-4xl font-medium mb-3 text-white">
            Boost Efficiency with Smart Solutions
          </h1>
          <p className="text-[#A4A4A4] lg:text-2xl">
            Our dedicated team crafts tailored software solutions designed to meet your
            specific business needs. We collaborate closely with you from concept to launch, 
            ensuring every aspect reflects your goals.
          </p>

          {/* Images Placement */}
          <div className='flex lg:justify-between pt-4'>
            <div className="h-[170px] lg:h-[280px]">
            <img
              src="/Saas/Container.png"
              alt="Solutions"
              className="relative z-0 top-20 px-2 "
            />
            <img
              src="/Saas/Card Container.png"
              alt="Scalable Solutions"
              className="relative -top-20 z-10"
            />
            </div>
          </div>   
        </div>

        {/* Right Large Card */}
        <div className="relative lg:col-span-1 lg:row-span-3 bg-neutral-800 rounded-2xl lg:rounded-3xl pt-8 pl-10 overflow-hidden hidden lg:block">
          <h1 className="text-2xl lg:text-4xl font-medium mb-3 text-white">
            Progress Tracking
          </h1>
          <p className="text-[#A4A4A4] text-2xl">
            Elevate your project management with a dynamic app that tracks progress,
            optimizes workflows, and enhances collaboration.
          </p>

          <img
            src="/Saas/Main Container1.png"
            alt="Customizable Features"
            className="absolute bottom-0 right-0"
          />
        </div>
        {/*mobile view */}
        <div className=" bg-neutral-800 rounded-2xl lg:rounded-3xl pt-4 px-4 overflow-hidden lg:hidden">
          <h1 className="text-2xl lg:text-4xl font-medium mb-3 text-white">
            Progress Tracking
          </h1>
          <p className="text-[#A4A4A4] mb-4">
            Elevate your project management with a dynamic app that tracks progress,
            optimizes workflows, and enhances collaboration.
          </p>

          <img
            src="/Saas/Main Container.png"
            alt="Customizable Features"
            className=""
          />
        </div>

        {/* Medicare App */}
        <div className="md:flex lg:col-span-1 lg:row-span-1 bg-neutral-800 rounded-2xl lg:rounded-3xl px-8 pt-8 overflow-hidden hidden">
          <div>
            <h1 className="text-2xl lg:text-4xl font-medium mb-3 text-white">Medicare App</h1>
            <p className="text-[#A4A4A4] text-2xl">
              Clean code meets exceptional UX in lightning-fast web experiences.
            </p>
          </div>
          <img src="/Saas/image 29.png" alt="Seamless Integration"  />
        </div>
        {/*moblile viwe*/}
        <div className="flex flex-col bg-neutral-800 rounded-2xl lg:rounded-3xl pl-4 pt-4 overflow-hidden md:hidden">
          <div>
            <h1 className="text-2xl lg:text-4xl font-medium mb-3 text-white">Medicare App</h1>
            <p className="text-[#A4A4A4] ">
              Clean code meets exceptional UX in lightning-fast web experiences.
            </p>
          </div>
          <img src="/Saas/image 39.png" alt="Seamless Integration"   />
        </div>


        {/* Money Adviser App */}
        <div className="md:flex lg:col-span-1 lg:row-span-1 bg-neutral-800 rounded-2xl lg:rounded-3xl pl-6 overflow-hidden hidden">
          <div className="my-8">
            <h1 className="text-2xl lg:text-3xl font-medium mb-3 text-white">Money Adviser Apps</h1>
            <p className="text-[#A4A4A4] text-2xl">
              Transform your financial journey with our Money Adviser Apps.
            </p>
          </div>
          <img src="/Saas/image 41.png" alt="Robust Security" />
        </div>
        {/*mobile view */}
        <div className="flex flex-col bg-neutral-800 rounded-2xl lg:rounded-3xl pr-4 pt-4 overflow-hidden md:hidden">
          <div className="ml-6">
            <h1 className="text-2xl lg:text-4xl font-medium mb-3 text-white">Money Adviser Apps</h1>
            <p className="text-[#A4A4A4] mb-6">
              Transform your financial journey with our Money Adviser Apps.
            </p>
          </div>
          <img src="/Saas/image 40.png" alt="Robust Security" className="mr-10" />
        </div>

      </div>
    </div>
  )
}

export default SaaS
