import React, { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

interface Section {
  id: string;
  title: string;
  content: string;
}

const WorkWithUs: React.FC = () => {
  const expandedRef = useRef<HTMLDivElement | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      id: 'smarter-design',
      title: 'Smarter by Design',
      content: 'We integrate artificial intelligence at the core of what we build — from automation to analytics — giving your software the ability to think, learn, and adapt.'
    },
    {
      id: 'experts',
      title: 'Experts. Not Just Developers.',
      content: 'Our team consists of seasoned professionals with deep domain expertise across multiple industries, ensuring solutions that go beyond code to deliver strategic value.'
    },
    {
      id: 'partnership',
      title: 'Partnership-Driven Process',
      content: 'We work as an extension of your team, fostering collaboration and transparency throughout every phase of development to ensure alignment with your vision.'
    },
    {
      id: 'built-scale',
      title: 'Built to Scale',
      content: 'Our solutions are architected with scalability in mind, using modern technologies and best practices to grow seamlessly with your business needs.'
    },
    {
      id: 'agile',
      title: 'Agile. Transparent. On Track.',
      content: 'We employ agile methodologies with clear communication channels, regular check-ins, and transparent progress tracking to keep projects on schedule.'
    },
    {
      id: 'discipline',
      title: 'Delivered with Discipline',
      content: 'Every project follows our rigorous quality assurance processes, code reviews, and testing protocols to ensure robust, reliable, and maintainable solutions.'
    }
  ];

  const handleMouseEnter = (sectionId: string): void => {
    setExpandedSection(sectionId);
  };

  const handleMouseLeave = (): void => {
    setExpandedSection(null);
  };

  const handleSectionClick = (sectionId: string): void => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="px-4 md:px-4 bg-black text-white font-lufga mt-10 xl:mt-20 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 py-4 gap-8 mx-auto">
        {/* Left Column */}
        <div className="flex flex-col items-start justify-start p-4 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#FDA10A] font-light">
            Why Work With <br/>
            <span className="text-[#FDA10A]">TerraCode</span>
          </h1>
          
          <p className="text-[#A4A4A4] text-lg md:text-xl lg:text-xl font-light">
            Tech expertise. Human-centered process.
          </p>
          
          <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-light ">
            At TerraCode, we don't just write code; we cultivate enduring partnerships that prioritize innovation, excellence, and your sustainable success. Our team is dedicated to understanding your unique challenges and aspirations, ensuring that every solution we deliver is tailored to drive measurable impact. With a focus on cutting-edge technology and a commitment to collaboration, we empower you to navigate the complexities of the digital landscape with confidence.
          </p>
          
          <Link to="/about">
            <div className="text-lg md:text-xl lg:text-2xl text-[#f56d04] mt-6 hover:text-[#FDA10A] transition-colors duration-200 flex items-center gap-2 group cursor-pointer">
              Learn More 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </Link>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-3 lg:space-y-4 lg:mt-5">
          {sections.map((section) => (
            <div 
              key={section.id}
              className="relative"
              ref={expandedSection === section.id ? expandedRef : null}
              onMouseEnter={() => handleMouseEnter(section.id)}  
              onMouseLeave={handleMouseLeave}    
            >
              <div 
                className={`bg-neutral-900 rounded-2xl lg:rounded-3xl transition-all duration-500 cursor-pointer border-2 relative overflow-hidden group ${
                  expandedSection === section.id 
                    ? 'border-transparent pb-6 animate-bounce-gentle ' 
                    : 'border-transparent'
                }`}
                onClick={() => handleSectionClick(section.id)}
              >
                {/* Top gradient line on hover */}
                <div className="absolute top-0 left-0 w-full h-[1.5px] opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
                
                {/* Bottom gradient line on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between px-4 lg:px-6 py-4 lg:py-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#f56d04] h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0"></div>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium">
                      {section.title}
                    </p>
                  </div>
                  <ChevronRight 
                    className={`w-5 h-5 lg:w-6 lg:h-6 text-[#f56d04] transition-all duration-500 flex-shrink-0 ${
                      expandedSection === section.id ? 'rotate-90 scale-110' : 'hover:scale-110'
                    }`}
                  />
                </div>
                
                {/* Expandable Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    expandedSection === section.id 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`px-4 lg:px-6 pb-4 transition-all duration-500 ${
                    expandedSection === section.id ? 'transform translate-y-0' : 'transform -translate-y-4'
                  }`}>
                    <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed ml-6">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          25% {
            transform: translateY(-8px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
          50% {
            transform: translateY(-4px);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          75% {
            transform: translateY(-2px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default WorkWithUs;