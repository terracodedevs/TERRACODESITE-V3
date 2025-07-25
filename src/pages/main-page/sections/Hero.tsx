import Navbar from "@/components/navbar";
import { ArrowRightCircle, Heart,  LucideLightbulb, Rocket, Send } from "lucide-react";
import React, { useRef, useEffect } from "react";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadstart', () => console.log('Video load started'));
      video.addEventListener('canplay', () => console.log('Video can play'));
      video.addEventListener('error', (e) => console.error('Video error:', e));
      
      // Force play after component mounts
      video.play().catch(console.error);
    }
  }, []);

  return (
    
    <div className="relative w-full min-h-screen h-screen overflow-hidden font-lufga">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onError={(e) => console.error('Video failed to load:', e)}
        onCanPlay={(e) => {
                console.log('Video ready to play');
                e.currentTarget.playbackRate = 0.5; // 75% speed
            }}
      >
        <source src="/Hero.mp4" type="video/mp4" />
        <source src="/Hero.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="absolute inset-0  z-30 mx-10 mt-10">
       <Navbar/> 
       </div>
      {/* Content */}
      <div className="relative z-20 grid grid-cols-4 gap-4 items-center justify-center min-h-screen h-full px-4 py-8">
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
            <div className=" backdrop-blur-md bg-white/10  rounded-full p-6 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row">
                <LucideLightbulb className="w-10 h-10 text-[#FDA10A] mr-4" />
                <h1 className="text-3xl  ">Build You Ideas!</h1>
            </div>
            <div className=" backdrop-blur-sm bg-white/10  rounded-2xl p-8 max-w-md w-full text-white shadow-lg">
                <h1 className="text-3xl  mb-4">Latest Articles & News</h1>
                <img className="object-cover w-full h-full mb-4 rounded-md" src="/Mask group (1).png" alt="Vector" />
                <h1 className="text-lg">
                    Tech Giants Unveil Cutting-Edge AI Innovations
                </h1>
                <p className="text-sm text-neutral-400">
                    12 June 2025
                </p>
                <div className="flex flex-row gap-4">
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 mt-4 flex items-center gap-4">
                       <Send className="w-4 h-4"/> 99
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 mt-4 flex items-center gap-4">
                       <Heart className="w-4 h-4"/> 99
                    </div>
                </div>

            </div>
        </div>
        <div className="col-span-2">
            <div className=" backdrop-blur-md bg-white/10  rounded-full p-6 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row">
                <Rocket className="w-10 h-10 text-[#FDA10A] mr-4" />
                <h1 className="text-2xl text-nowrap ">AI-first digital experiences.</h1>
            </div>
            <div className="flex flex-col   mt-8">
                <h1 className="text-6xl font-extralight mb-4 text-[#FDA10A]">Future-Proof Software. Built for Impact.</h1>
                <p className="text-lg text-gray-400">We craft scalable, user-driven digital solutions that empower startups and enterprises to move faster, smarter, and better.</p>
                <button
                
                className="flex flex-row gap-4 w-fit mt-4  bg-amber-600 rounded-4xl p-4 text-2xl "
                >
                Submit
                <ArrowRightCircle className="w-7 h-7" />
                </button>
            </div>
        </div>
        <div className="col-span-1">
            <div className=" backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 max-w-md w-full text-white shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Welcome to Our Site</h1>
                <p className="text-sm">
                    Explore stunning design and immersive experiences with our hero section.
                </p>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
