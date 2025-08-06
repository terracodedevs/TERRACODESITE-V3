import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProfileData {
  id: number;
  name: string;
  role: string;
  image: string;
  bgColor: string;
  lightColor: string;
}

// Helper to detect if device is mobile
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

const ProfileCircles: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<number | null>(null);

  const profiles: ProfileData[] = [
    {
      id: 1,
      name: "Nomin Sendinu",
      role: "CEO",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-pink-200",
      lightColor: "bg-gradient-to-br from-pink-300 to-pink-500"
    },
    {
      id: 2,
      name: "K N piyumina",
      role: "CTO",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-amber-200",
      lightColor: "bg-gradient-to-br from-amber-300 to-orange-500"
    },
    {
      id: 3,
      name: "Manuka Rathnayake",
      role: "COO",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-blue-200",
      lightColor: "bg-gradient-to-br from-blue-300 to-blue-500"
    },
    {
      id: 4,
      name: "Chamod Fernando",
      role: "Head of Marketing",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-green-200",
      lightColor: "bg-gradient-to-br from-green-300 to-emerald-500"
    },
     {
      id: 5,
      name: "Ishira Namadith",
      role: "full Stack Developer",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-pink-200",
      lightColor: "bg-gradient-to-br from-pink-300 to-pink-500"
    },
    {
      id: 6,
      name: "Yasith Theekshana",
      role: "operations Manager",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-amber-200",
      lightColor: "bg-gradient-to-br from-amber-300 to-orange-500"
    },
    {
      id: 7,
      name: "Panindu Vithanage",
      role: "full Stack Developer",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-blue-200",
      lightColor: "bg-gradient-to-br from-blue-300 to-blue-500"
    },
    {
      id: 8,
      name: "AHLI Umayanga",
      role: "Mobile app Developer",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-green-200",
      lightColor: "bg-gradient-to-br from-green-300 to-emerald-500"
    }
  ];

  // const handleInteraction = (profileId: number) => {
  //   setActiveProfile(activeProfile === profileId ? null : profileId);
  // };

  return (
    <div className=" bg-black items-center justify-center p-4">
      {/* Mobile/Tablet Layout - Vertical Stack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 w-full place-items-center ">
        {profiles.map((profile) => (
          <ProfileCircle
            key={profile.id}
            profile={profile}
            isActive={activeProfile === profile.id}
            onSetActive={setActiveProfile}
          />
        ))}
      </div>

      {/* Desktop Layout - Horizontal Row */}
      <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-32 ">
        {profiles.map((profile) => (
          <ProfileCircle
            key={profile.id}
            profile={profile}
            isActive={activeProfile === profile.id}
            onSetActive={setActiveProfile}
          />
        ))}
      </div>
    </div>
  );
};

interface ProfileCircleProps {
  profile: ProfileData;
  isActive: boolean;
  onSetActive: (id: number | null) => void;
}

const ProfileCircle: React.FC<ProfileCircleProps> = ({ profile, isActive,  onSetActive }) => {
   const handleMouseEnter = () => {
    if (!isMobile()) {
      onSetActive(profile.id);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile()) {
      onSetActive(null);
    }
  };

  const handleClick = () => {
    if (isMobile()) {
      onSetActive(isActive ? null : profile.id);
    }
  };

  return (
    <div className="relative w-full max-w-[360px] h-[380px]">
      {/* Fixed footprint wrapper prevents layout shift */}
    <motion.div
       onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
      {/* Outer Container */}
      <motion.div
        className="relative"
        animate={{
        height: isActive ? 480 : 360,
        width: 360,
        y: isActive ? -120 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.8
        }}
      >
        {/* Background Circle with Color Animation */}
        <motion.div
          className={`absolute inset-0 rounded-full border-4 bg-white overflow-hidden w-72 h-72 md:w-auto md:h-auto ${profile.bgColor}  `}
          animate={{
            background: isActive 
                ? profile.lightColor 
                : profile.bgColor,
             
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Glowing Effect */}
          {/* <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: isActive 
                ? "0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)" 
                : "0 0 0px rgba(0, 0, 0, 0)",
            }}
            transition={{ duration: 0.4 }}
          /> */}
        </motion.div>

        {/* Profile Image Container */}
        <motion.div
          className="z-20 absolute top-1/2 left-1/2 md:top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            y: isActive ? 60 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.6
          }}
        >
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-3 border-white  shadow-lg">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="z-10 absolute top-1/8 left-6/12 transform -translate-x-1/2 text-black text-nowrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 20,
          }}
          transition={{
            duration: 0.4,
            delay: isActive ? 0.2 : 0,
          }}
        >
          <h3 className="text-lg md:text-2xl text-[#FDA10A] font-bold mb-1">{profile.name}</h3>
          <p className="text-sm md:text-base  font-bold">{profile.role}</p>
        </motion.div>

        {/* Subtle Pulse Animation for Inactive State */}
        {!isActive && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/20"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>
    </motion.div>
    </div>
  );
};

export default ProfileCircles;