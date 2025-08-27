const images = [
  { src: 'team/WhatsApp Image 2025-08-27 at 11.57.30_9592ea34.jpg', className: 'col-start-1 col-span-4 row-start-1 row-span-4' },
  { src: 'team/WhatsApp Image 2025-08-27 at 13.29.18_a8c0cf2d.jpg', className: 'col-start-5 col-span-4 row-start-1 row-span-4' },
  { src: 'team/IMG-20250825-WA0018 (2).jpg', className: 'col-start-9 col-span-4 row-start-1 row-span-4' },
  { src: 'team/WhatsApp Image 2025-08-27 at 13.23.42_cf1f6041.jpg', className: 'col-start-1 col-span-3 row-start-5 row-span-3' },
  { src: 'team/2.jpg', className: 'col-start-4 col-span-6 row-start-5 row-span-5' },
  { src: 'team/3.JPEG', className: 'col-start-10 col-span-3 row-start-5 row-span-5' },
  { src: 'team/4.JPEG', className: 'col-start-1 col-span-3 row-start-8 row-span-5' },
  { src: 'team/9.jpeg', className: 'col-start-4 col-span-3 row-start-10 row-span-3' },
  { src: 'team/WhatsApp Image 2025-08-27 at 13.57.49_87fb3e68.jpg', className: 'col-start-7 col-span-3 row-start-10 row-span-3' },
  { src: 'team/6.JPG', className: 'col-start-10 col-span-3 row-start-10 row-span-3' },
];

export const BehindTheScenes = () => {
  return (
    <div className="bg-black text-white py-12 container mx-auto font-lufga">
      <div className="text-center mb-10">
        <h2 className="text-[#FDA10A] text-4xl md:text-6xl font-light mb-2">Behind the Scenes</h2>
        <p className="md:text-2xl font-extralight text-neutral-400 ">Want to see the real us?</p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-12 grid-rows-12 gap-3 max-w-7xl mx-auto h-[800px]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`${img.className} overflow-hidden rounded-lg`}
          >
            <img 
              src={img.src} 
              alt={`Behind the scenes ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" 
            />
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="grid md:hidden grid-cols-2 gap-3 max-w-xl mx-auto px-4">
        {images.map((img, index) => (
          <div key={index} className="rounded-lg overflow-hidden aspect-square">
            <img 
              src={img.src} 
              alt={`Behind the scenes mobile ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};