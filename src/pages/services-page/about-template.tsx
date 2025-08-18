import React from "react";

interface Highlight {
  id: number;
  text: string;
}

interface ServiceAboutProps {
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  highlights: Highlight[];
}

const ServiceAbout: React.FC<ServiceAboutProps> = ({
  paragraph1,
  paragraph2,
  paragraph3,
  highlights,
}) => {
  return (
    <>
    <div className="  bg-[#1A1A1A] font-lufga ">
         <div className="grid grid-cols-1 md:grid-cols-2 p-4 container mx-auto ">
           <div className="flex flex-col  items-start justify-start p-4 md:space-y-5">
               <p className="text-white mt-2 text-xl md:text-2xl">
                {paragraph1}
               </p>
               <p className="text-white mt-2 text-xl md:text-2xl">
                {paragraph2}
               </p>
               <p className="text-white mt-2 text-xl md:text-2xl">
                {paragraph3}
               </p>
           </div>
           <div className=" text-white flex flex-wrap py-5 ">
               <div className='flex flex-col md:gap-2 px-4 '>
                <h1 className="text-4xl md:text-6xl text-[#FDA10A]">About us</h1>
                  <ul className="space-y-3 flex flex-wrap">
                    {highlights.map((item) => (
                        <div className=' bg-[#303030] rounded-4xl md:p-2 m-2 flex-wrap'>
                        <div className='flex items-center md:gap-2 px-4'>
                        <div className='rounded-full bg-[#FDA10A] h-3 w-3 md:h-4 md:w-4'></div>
                            <li
                                key={item.id}
                                className="p-2 text-sm md:text-xl"
                            >
                                {item.text}
                            </li>
                        </div>
                    </div>
                    ))}
                    </ul>
               </div>
             </div>
         </div>
       </div>
    </>
  )
}

export default ServiceAbout;
