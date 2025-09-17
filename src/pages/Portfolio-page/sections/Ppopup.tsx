import React from 'react';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, title = 'Company Portfolio', description, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-white/30 backdrop-blur-lg flex items-center justify-center z-50 p-4 font-lufga"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="bg-neutral-900 rounded-2xl max-w-6xl w-full max-h-[90vh] lg:max-h-1/2 overflow-hidden relative ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-1/2 ">
          {/* Left: content (Flipbook) */}
          <div className="lg:w-4/6  flex items-center justify-center p-4">
            <div className="w-full h-full">
              {children}
            </div>
          </div>

          {/* Right: details */}
          <div className="lg:w-2/6 p-6 text-white overflow-y-auto max-h-[70vh] lg:max-h-[90vh] scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-neutral-800">
            <div className="space-y-6">
              <div className="inline-block bg-[#F56D04] text-white px-3 py-1 rounded-full text-sm font-medium">
                Portfolio
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#FDA10A]">
                {title}
              </h2>
              {description ? (
                <p className="text-neutral-300 leading-relaxed">
                  {description}
                </p>
              ) : (
                <p className="text-neutral-300 leading-relaxed">
                  Explore our interactive company portfolio. Flip through pages to view selected projects, capabilities, and highlights. Optimized for all devices.
                </p>
              )}
              <div className="text-sm text-neutral-400">
                Tip: Swipe on mobile or click page corners on desktop to flip pages.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;