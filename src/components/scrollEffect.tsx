import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight} from 'lucide-react';

// Add this interface for the ref
export interface ScrollingEffectRef {
  scrollLeft: () => void;
  scrollRight: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  getScrollState: () => { canScrollLeft: boolean; canScrollRight: boolean };
}

// Card interface
export interface CardData {
  id: number;
  title: string;
  description: string;
  image?: string;
  category?: string;
}

// Individual Card Component
const Card: React.FC<{ card: CardData }> = ({ card }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-80 h-48 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-full p-6 flex flex-col justify-between">
        <div>
          {card.category && (
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
              {card.category}
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {card.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">
            {card.description}
          </p>
        </div>
        <div className="mt-4">
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            Learn More →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

interface ScrollingEffectProps {
  children?: React.ReactNode;
  cards?: CardData[];
  autoScroll?: boolean;
  scrollSpeed?: number;
  showControls?: boolean;
  gap?: number;
}

export const ScrollingEffect = forwardRef<ScrollingEffectRef, ScrollingEffectProps>(({
  children,
  cards = [],
//   autoScroll = true,
  showControls = true,
  gap = 6
}, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(autoScroll);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to enable/disable navigation buttons
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const newCanScrollLeft = scrollLeft > 10; // Add small threshold
      const newCanScrollRight = scrollLeft < scrollWidth - clientWidth - 10; // Add small threshold
      
      setCanScrollLeft(newCanScrollLeft);
      setCanScrollRight(newCanScrollRight);
    }
  };

  // Manual scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = 440; // 424px + gap
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      // Update scroll state after animation
      setTimeout(checkScrollPosition, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = 440; // 424px + gap
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      // Update scroll state after animation
      setTimeout(checkScrollPosition, 300);
    }
  };

  // Get current scroll state
  const getScrollState = () => {
    checkScrollPosition();
    return { canScrollLeft, canScrollRight };
  };

  // Expose functions through ref
  useImperativeHandle(ref, () => ({
    scrollLeft,
    scrollRight,
    canScrollLeft,
    canScrollRight,
    getScrollState
  }));

  // Toggle auto scroll
//   const toggleAutoScroll = () => {
//     setIsAutoScrolling(!isAutoScrolling);
//   };

  // Setup scroll listener and initial check
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollPosition);
      
      // Initial check with a small delay to ensure DOM is ready
      const timeoutId = setTimeout(checkScrollPosition, 100);
      
      return () => {
        scrollElement.removeEventListener('scroll', checkScrollPosition);
        clearTimeout(timeoutId);
      };
    }
  }, [children, cards]); // Re-run when content changes

  return (
    <div className="relative w-full">
      {/* Controls */}
      {showControls && (
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className={`flex overflow-x-auto gap-${gap} pb-4 scrollbar-hide cursor-grab active:cursor-grabbing`}
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
      >
        {/* Render cards or children */}
        {children ? (
          children
        ) : (
          cards.map((card) => (
            <Card key={card.id} card={card} />
          ))
        )}
      </div>

      {/* Custom scrollbar hide styles */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
});

ScrollingEffect.displayName = 'ScrollingEffect';