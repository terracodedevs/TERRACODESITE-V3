import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

// Add this interface for the ref
export interface ScrollingEffectRef {
  scrollLeft: () => void;
  scrollRight: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  getScrollState: () => { canScrollLeft: boolean; canScrollRight: boolean };
  toggleAutoScroll: () => void;
  setAutoScroll: (enabled: boolean) => void;
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
  pauseOnHover?: boolean;
}

export const ScrollingEffect = forwardRef<ScrollingEffectRef, ScrollingEffectProps>(({
  children,
  cards = [],
  autoScroll = false,
  scrollSpeed = 3000,
  showControls = true,
  gap = 6,
  pauseOnHover = true
}, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(autoScroll);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Check scroll position to enable/disable navigation buttons
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const newCanScrollLeft = scrollLeft > 10;
      const newCanScrollRight = scrollLeft < scrollWidth - clientWidth - 10;
      
      setCanScrollLeft(newCanScrollLeft);
      setCanScrollRight(newCanScrollRight);
    }
  };

  // Manual scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setTimeout(checkScrollPosition, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScrollPosition, 300);
    }
  };

  // Add these missing functions
  const handleMouseEnter = () => {
    if (pauseOnHover && isAutoScrolling) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && isAutoScrolling) {
      setIsPaused(false);
    }
  };

  // Improved auto scroll function for continuous movement
  const autoScrollNext = () => {
    if (scrollRef.current && !isPaused) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = 1;
      
      if (scrollLeft >= scrollWidth - clientWidth - 1) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'instant' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'auto' });
      }
    }
  };

  // Toggle auto scroll
  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  // Set auto scroll programmatically
  const setAutoScrollState = (enabled: boolean) => {
    setIsAutoScrolling(enabled);
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
    getScrollState,
    toggleAutoScroll,
    setAutoScroll: setAutoScrollState
  }));

  // Modified auto scroll effect for continuous movement
  useEffect(() => {
    if (isAutoScrolling && scrollSpeed > 0) {
      // Use much faster interval for smooth continuous scroll
      intervalRef.current = setInterval(autoScrollNext, 50); // 50ms for smooth movement
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [isAutoScrolling, scrollSpeed, isPaused]);

  // Alternative: CSS-based infinite scroll approach
  const duplicateContent = () => {
    if (children) {
      return (
        <>
          {children}
          {children} {/* Duplicate for seamless loop */}
        </>
      );
    }
    
    return (
      <>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        {cards.map((card) => (
          <Card key={`duplicate-${card.id}`} card={card} />
        ))}
      </>
    );
  };

  // Setup scroll listener and initial check
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollPosition);
      
      const timeoutId = setTimeout(checkScrollPosition, 100);
      
      return () => {
        scrollElement.removeEventListener('scroll', checkScrollPosition);
        clearTimeout(timeoutId);
      };
    }
  }, [children, cards]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

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
          
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAutoScroll}
              className={`p-2 rounded-lg transition-colors ${
                isAutoScrolling 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              title={isAutoScrolling ? 'Pause auto scroll' : 'Start auto scroll'}
            >
              {isAutoScrolling ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>
      )}

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className={`flex overflow-x-auto gap-${gap} pb-4 scrollbar-hide cursor-grab active:cursor-grabbing`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {duplicateContent()}
      </div>

      {/* Auto scroll indicator */}
      {/* {isAutoScrolling && (
        <div className="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
          Auto Scroll {isPaused ? '(Paused)' : ''}
        </div>
      )} */}

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