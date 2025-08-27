import React from 'react';

interface Project {
  title: string;
  description: string;
  id: string;
  category: string;
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
              <video
                className="w-full h-full max-h-[400px] lg:max-h-[500px] object-contain rounded-lg"
                controls
                autoPlay
                muted
                loop
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
                <p className="text-neutral-300 leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
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