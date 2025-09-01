import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

interface Project {
  title: string;
  description: string;
  id: string;
  category: string;
  link?: string;
  img: string;
  videoUrl?: string;
  detailedDescription?: string;
  technologies?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0  bg-white/30 backdrop-blur-lg flex items-center justify-center z-50 p-4  font-lufga"
      onClick={handleBackdropClick}
    >
      <div className="bg-neutral-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full ">
          {/* Left Side - Video */}
          <div className="lg:w-3/5  flex items-center justify-center p-4">
            {project.videoUrl ? (
              <iframe
              width="720"
              height="455"
              src={project.videoUrl}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            ) : (
              <div className="w-full h-full max-h-[400px] lg:max-h-[500px] flex items-center justify-center bg-neutral-800 rounded-lg">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Right Side - Project Details */}
          <div className="lg:w-2/5 p-6 text-white overflow-y-auto">
            <div className="space-y-6">
              {/* Category Badge */}
              <div className="inline-block bg-[#F56D04] text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </div>
              {/* Title */}
              <h2 className="text-3xl lg:text-5xl font-bold text-[#FDA10A]">
                {project.title}
              </h2>

              {/* Description */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[#F56D04]">Description</h3>
                <p className="text-neutral-300 leading-relaxed mb-2">
                  {project.detailedDescription || project.description}
                </p>
                  {/* Conditionally render the Visit Project button only if link exists */}
                  {project.link && (
                    <div className='flex w-1/3 bg-white/30 backdrop-blur-lg border-2 border-gray-200 text-white pl-4 py-1 rounded-full text-sm font-medium hover:border-amber-500'>
                      <Link to={project.link} className='hover:text-amber-500'>
                        Visit Project
                      </Link>
                      <ArrowUpRight className='w-4 h-4 ml-1' />
                    </div>
                  )}
                </div>

        
              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#F56D04]">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-neutral-700 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;