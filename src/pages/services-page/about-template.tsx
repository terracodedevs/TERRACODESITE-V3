import React from "react";

interface Highlight {
  id: number;
  text: string;
}

interface ServiceAboutProps {
  paragraph: string;
  highlights: Highlight[];
}

const ServiceAbout: React.FC<ServiceAboutProps> = ({
  paragraph,
  highlights,
}) => {
  return (
    <>
    <div className="  bg-[#1A1A1A] font-lufga ">
         <div className="grid grid-cols-1 md:grid-cols-2 p-4 container mx-auto ">
           <div className="flex flex-col  items-start justify-start p-4 md:space-y-5">
               <p className="text-white mt-2 text-2xl md:text-3xl">
                {paragraph}
               </p>
           </div>
           <div className=" text-white flex flex-wrap ">
             
               <div className='flex items-center md:gap-2 px-4'>
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
