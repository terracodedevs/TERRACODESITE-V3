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
  width = 420,
  height = 600,
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
        minWidth={315}
        maxWidth={600}
        minHeight={420}
        maxHeight={1350}
        maxShadowOpacity={0.5}
        showCover={showCover}
        mobileScrollSupport={true}
        className="flipbook"
        style={{}}
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={10}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {pages.map((page, idx) => (
          <div key={idx} className="flipbook-page">
            {page}
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}