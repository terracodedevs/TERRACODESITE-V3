import React from "react";
import HTMLFlipBook from "react-pageflip";

type FlipBookProps = {
  width?: number;
  height?: number;
  showCover?: boolean;
  pages: React.ReactNode[];
  className?: string;
};

export default function FlipBook({
  width = 900,   // portrait baseline
  height = 1100, // portrait baseline
  showCover = true,
  pages,
  className,
}: FlipBookProps) {
  return (
    <div className={className}>
      <HTMLFlipBook
        width={width}
        height={height}
        size="stretch"
        minWidth={320}
        maxWidth={1400}
        minHeight={400}
        maxHeight={2000}
        maxShadowOpacity={0.5}
        showCover={showCover}
        mobileScrollSupport={true}
        className="flipbook"
        style={{}}
        startPage={0}
        drawShadow={true}
        flippingTime={800}
        usePortrait={true}         // prefer single-page portrait mode
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={10}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {pages.map((page, idx) => (
          <div key={idx} className="flipbook-page overflow-hidden">
            {page}
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}