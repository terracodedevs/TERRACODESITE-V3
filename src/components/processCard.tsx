

import React from "react"

interface ProcessCardItemProps {
  icon: React.ComponentType | string;
  title: string;
  description: string;
  imageSrc: string;
  imageClass?: string; // Optional class for the image container
  footer?:string
}

export default function ProcessCardItem({ icon, title, description, imageSrc, imageClass,footer }: ProcessCardItemProps) {
  return (
    <div className="group w-full relative rounded-3xl bg-[#1B1B1B] min-w-[340px] max-w-[364px] h-[380px] sm:h-[408px] overflow-hidden text-center text-2xl text-neutral-500 hover:text-white font-lufga duration-800">
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
            <img src={icon} alt="" className="w-8 h-8" />
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
        {footer && (
          <div className="self-stretch flex flex-row mt-2 gap-2 items-center w-fit px-4 py-2 text-sm bg-white rounded-3xl text-black tracking-[0.04px] leading-5 text-left">
            <div className="w-[15px] relative rounded-[50%] bg-amber-600 h-[15px]" />
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

