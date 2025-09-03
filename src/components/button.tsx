import React, { useState } from 'react'

type TerraButtonProps = {
  label?: string
  iconSrc?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  gradient?: string // Tailwind-compatible gradient string
  hoverGradient?: string // Tailwind-compatible hover gradient string
  padding?: string // Tailwind-compatible padding string
  img?: string // Tailwind-compatible image size string
  imgpadding?: string // Tailwind-compatible padding for the image
}

const TerraButton: React.FC<TerraButtonProps> = ({
  label = 'Talk to Us',
  iconSrc = '/button/Arrow.svg',
  onClick,
  type = 'button',
  className = '',
  gradient = 'bg-gradient-to-r from-[#f56d04] to-[#fb9709]',
  hoverGradient = 'bg-gradient-to-l from-[#f56d04] to-[#fb9709]',
  padding ='pl-4 pr-2 py-2 rounded-4xl text-xl gap-2',
  img = 'w-4',
  imgpadding = 'p-4'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative cursor-pointer
        overflow-hidden
        hover:shadow-lg 
        rounded-full
        hover:scale-105
        transition-transform duration-500
        p-[2px] 
        w-fit
        ${isHovered ? 'bg-gradient-to-l from-white to-transparent' : 'bg-transparent'}
        transition-colors duration-1000  w-fit ease-in-out 
        ${className}
      `}
    >
      <div className={`
        ${isHovered ? hoverGradient : gradient}
        transition-colors duration-700 ease-in-out
        flex flex-row items-center justify-center 
        ${padding} w-full h-full 
        rounded-full text-left text-white font-lufga
      `}>
        <span className="tracking-[0.04px] leading-6 font-semibold">{label}</span>
        <span className={`bg-white rounded-full ${imgpadding}`}>
          <img className={`${img}`} src={iconSrc} alt="icon" />
        </span>
      </div>
    </button>
  )
}

export default TerraButton

