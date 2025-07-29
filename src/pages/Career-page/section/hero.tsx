import TerraButton from "@/components/button"
import { Rocket } from "lucide-react"

const Hero = () => {
  return (
    <div className="bg-black text-white font-lufga mt-20">
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="flex flex-col  gap-4 items-center justify-center">
            <div className=" backdrop-blur-md bg-white/10  rounded-full py-4 px-10  w-it text-white shadow-lg flex justify-center items-center flex-row">
                <Rocket className=" text-[#FDA10A] mr-4" />
                <h1 className="text-2xl ">Code with purpose. Design with impact. Grow with people who care.</h1>
            </div>
            <div className="flex flex-col mt-8 px-24 items-center gap-6 ">
                <h1 className="text-6xl font-extralight mb-4 text-[#FDA10A]">Build the Future With Us</h1>
                <p className="text-2xl text-neutral-400 text-center">We’re on a mission to craft powerful digital experiences using code, creativity, and AI. Join a team where innovation thrives, learning never stops, and every project is a new opportunity to level up.</p>
                <TerraButton className="mt-6" label="View Openings"/>
            </div>
        </div>
        {/* team members Images */}
        <div className=" rounded-3xl py-10">
          <img src="/team.png" alt="" className="object-cover w-full"/>
        </div>
      </div>
    </div>
    
  )
}

export default Hero