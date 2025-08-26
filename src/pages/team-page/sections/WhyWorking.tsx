import { SearchIcon } from "lucide-react"
import ProcessCardItem from "@/components/processCard"

const imageData = [
  {
    imageSrc: "processcard/Vector.svg",
    cl: "absolute top-[0px] left-[195px] w-[170px] opacity-[0.4] mix-blend-overlay"
  },
  {
    imageSrc: "processcard/2.svg",
    cl: "absolute top-[0px] left-[185px] w-[280px] opacity-[0.4] mix-blend-overlay"
  },
  {
    imageSrc: "processcard/3.svg",
    cl: "absolute top-[0px] left-[130px] w-[295px] opacity-[0.4] mix-blend-overlay"
  },
  {
    imageSrc: "processcard/4.svg",
    cl: "absolute top-[0px] left-[120px] w-[320px] opacity-[0.4] mix-blend-overlay"
  },
]

const WorkCardData = [
  {
    title: "Flexible Work Culture",
    description: "Hybrid & remote-first approach so you can work your way.",
    icon: SearchIcon,
  },
  {
    title: "AI-First Innovation",
    description: "Work with emerging tech like OpenAI, LangChain, and more.",
    icon: SearchIcon,
  },
  {
    title: "Growth & Learning",
    description: "Monthly workshops, internal mentorship, and paid courses.",
    icon: SearchIcon,
  },
  {
    title: "Team That Feels Like Home",
    description: "We support each other like family - no egos, just excellence.",
    icon: SearchIcon,
  },
]

const WhyWorking = () => {
  return (
     <div className="flex flex-col gap-5  font-lufga mt-10 xl:mt-20 container mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center mb-10">
                    <h2 className="text-4xl md:text-6xl font-extralight mb-4 text-[#FDA10A] ">Why You’ll Love Working Here</h2>
                    <p className="md:text-2xl font-extralight text-neutral-400 ">
                    Why Work at Terracode
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center sm:flex-row gap-5 flex-wrap xl:flex-nowrap"> 
                {WorkCardData.map((item, index) => (
                    <ProcessCardItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    imageSrc={imageData[index].imageSrc}
                    imageClass={imageData[index].cl}
                    />
                ))}
                </div>
            </div>
  )
}

export default WhyWorking