// import { SearchIcon } from "lucide-react"
// import React from "react"

// const ProcessCardProps = [
//   {
//     title: "Discover",
//     description: "We kick things off by understanding your business goals, target users, and challenges. Through stakeholder calls, market research, and technical discovery, we lay the foundation for a successful build.",
//     duration: "Within 3–5 working days",
//     icon: SearchIcon,
//     imageSrc: "Vector.svg",
//     cl:"absolute top-[0px] left-[195px] w-[170px]  opacity-[0.4] mix-blend-overlay"
//   },
//   {
//     title: "Design",
//     description: "We bring ideas to life through user flows, wireframes, and high-fidelity UI designs. Expect collaborative feedback loops, modern design systems, and pixel-perfect prototypes.",
//     duration: "Within 3–5 working days",
//     icon: SearchIcon,
//     imageSrc: "2.svg",
//     cl:"absolute top-[0px] left-[185px] w-[280px]  opacity-[0.4] mix-blend-overlay"
//   },
//   {
//     title: "Develop",
//     description: "Our engineers write scalable, secure code using the latest tech stacks and integrate AI tools where needed — all following agile sprints and weekly demos.",
//     duration: "Within 3–5 working days",
//     icon: SearchIcon,
//     imageSrc: "3.svg",
//     cl:"absolute top-[0px] left-[130px] w-[295px]  opacity-[0.4] mix-blend-overlay"
//   },
//   {
//     title: "Deliver & Support",
//     description: "After rigorous QA and user testing, we deploy to production. We stay with you post-launch — for monitoring, iteration, and growth support.",
//     duration: "Within 3–5 working days",
//     icon: SearchIcon,
//     imageSrc: "4.svg",
//     cl:"absolute top-[0px] left-[120px] w-[320px]  opacity-[0.4] mix-blend-overlay"
//   },
//   // Add more process steps as needed
// ]

// export default function ProcessCard() {
//   return (
//     <div className="flex flex-row gap-5">
//       {ProcessCardProps.map((process, index) => (
//         <div
//           key={index}
//           className="group w-full relative rounded-3xl bg-[#1B1B1B] h-[408px] overflow-hidden text-center text-2xl text-neutral-500 hover:text-white text-darkorange font-lufga" 
//         >
//           {/* Bottom gradient line on hover */}
//           <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />


//           {/* Card Image */}
//           <div className={process.cl}>
//             <img className="w-full h-full" alt="" src={process.imageSrc} />
//           </div>

//           {/* Card Content */}
//           <div className="absolute top-[32px] left-[24px] w-[264px] flex flex-col items-start justify-start gap-4">
//             <div className="bg-white rounded-full p-2 text-orange-400">
//                   {typeof process.icon === 'string' ? 
//                     <img src={process.icon} alt="" className="" /> : 
//                     React.createElement(process.icon)}
//                 </div>
//             <div className="self-stretch relative text-[32px] text-white tracking-[0.04px] leading-10 text-left flex flex-row items-center gap-2">     
//                 {process.title}
//             </div>
//             <div className="self-stretch relative text-xl font-extralight tracking-[0.04px] leading-6 text-left">
//               <p className="m-0">{process.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

import React from "react"

interface ProcessCardItemProps {
  icon: React.ComponentType | string;
  title: string;
  description: string;
  imageSrc: string;
  imageClass?: string; // Optional class for the image container
}

export default function ProcessCardItem({ icon, title, description, imageSrc, imageClass }: ProcessCardItemProps) {
  return (
    <div className="group w-full relative rounded-3xl bg-[#1B1B1B] max-w-[364px] h-[408px] overflow-hidden text-center text-2xl text-neutral-500 hover:text-white font-lufga duration-800">
      {/* Bottom gradient line on hover */}
      <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />

      {/* Background Image */}
      <div className={imageClass}>
        <img className="w-full h-full" alt="" src={imageSrc} />
      </div>

      {/* Card Content */}
      <div className="absolute top-[32px] left-[24px] w-[264px] flex flex-col items-start justify-start gap-4">
        <div className="bg-white rounded-full p-2 text-orange-400">
          {typeof icon === 'string' ? (
            <img src={icon} alt="" className="w-6 h-6" />
          ) : (
            React.createElement(icon as React.ComponentType)
          )}
        </div>
        <div className="self-stretch text-[32px] text-white tracking-[0.04px] leading-10 text-left flex items-center gap-2">
          {title}
        </div>
        <div className="self-stretch text-xl font-extralight tracking-[0.04px] leading-6 text-left">
          <p className="m-0">{description}</p>
        </div>
      </div>
    </div>
  )
}

