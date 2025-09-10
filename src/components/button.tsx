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
  isLoading?: boolean // Add this new prop for loading state
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
  imgpadding = 'p-4',
  isLoading = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isLoading}
      className={`
        relative cursor-pointer
        overflow-hidden
        hover:shadow-lg 
        rounded-full
        ${!isLoading && 'hover:scale-105'}
        transition-transform duration-500
        p-[2px] 
        w-fit
        ${isLoading ? 'opacity-90' : ''}
        ${className}
      `}
    >
      <div className={`
        ${isHovered && !isLoading ? hoverGradient : gradient}
        transition-colors duration-700 ease-in-out
        flex flex-row items-center justify-center 
        ${padding} w-full h-full 
        rounded-full text-left text-white font-lufga
      `}>
        <span className="tracking-[0.04px] leading-6 font-semibold">{label}</span>
        
        {isLoading ? (
          <span className={`bg-white rounded-full ${imgpadding} flex items-center justify-center`}>
            <svg className="animate-spin h-4 w-4 text-[#f56d04]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        ) : iconSrc ? (
          <span className={`bg-white rounded-full ${imgpadding}`}>
            <img className={`${img}`} src={iconSrc} alt="icon" />
          </span>
        ) : null}
      </div>
    </button>
  )
}

export default TerraButton