import React from 'react';
import Inquire from './Inquire';

interface Project {
  title: string;
  description?: string;
  id?: string;
  category: string;
  link?: string;
  img?: string;
  videoUrl?: string;
  detailedDescription?: string;
  technologies?: string[];
}


interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

const PartPopup: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, defaultPackage })=> {
   if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0  bg-white/30 backdrop-blur-lg flex items-center justify-center z-50 p-4  font-lufga "
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

        <div className="flex flex-col lg:flex-row h-full max-h-[90vh] ">
        <Inquire defaultPackage={defaultPackage}/>
        </div>
      </div>
    </div>
  );
};

export default PartPopup