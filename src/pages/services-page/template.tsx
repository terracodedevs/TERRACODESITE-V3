import TerraButton from "@/components/button";
import { Rocket } from "lucide-react";
import React from "react";
import { useNavigate } from "@tanstack/react-router";


interface ServicePageProps {
  badge: string;
  title: string;
  image: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  badge,
  title,
  image,
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate({ to: '/career' });
  };

  return (
    <div className=" text-white font-lufga mt-5 lg:mt-20 px-4 container mx-auto">
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="flex flex-col  gap-4 items-center justify-center">
            <div className=" backdrop-blur-md bg-white/10  rounded-full p-4 md:px-10  text-white shadow-lg flex justify-center items-center flex-row gap-4 lg:gap-0 ">
                <Rocket className=" text-[#FDA10A] md:mr-4 w-12 h-8 md:w-12 " />
                <h1 className="text-md md:text-2xl ">{badge}</h1>
            </div>
            <div className="flex flex-col mt-8 items-start  md:items-center gap-6 ">
                <h1 className="text-4xl md:text-6xl font-extralight mb-4 text-[#FDA10A]">{title}</h1>
                <TerraButton className="mt-6" padding='pl-4 pr-2 py-1 rounded-4xl text-lg gap-2' label="View Openings" onClick={handleClick} />
            </div>
        </div>
        {/* team members Images */}
        
        <div className="relative rounded-3xl h-[31vh] md:h-[70vh] w-full overflow-hidden mt-10">
        {/* Image */}
        <img  
        src={image}
        alt={title}
        className="object-cover w-full h-full" />
        </div>
         </div>
       </div>


  );
};

export default ServicePage;

