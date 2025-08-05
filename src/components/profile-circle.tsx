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

const ProfileCircles: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<number | null>(null);

  const profiles: ProfileData[] = [
    {
      id: 1,
      name: "Shehani Dias",
      role: "Product Designer",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-pink-200",
      lightColor: "bg-gradient-to-br from-pink-300 to-pink-500"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "UX Designer",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-amber-200",
      lightColor: "bg-gradient-to-br from-amber-300 to-orange-500"
    },
    {
      id: 3,
      name: "Mike Chen",
      role: "Frontend Developer",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-blue-200",
      lightColor: "bg-gradient-to-br from-blue-300 to-blue-500"
    },
    {
      id: 4,
      name: "Alex Rivera",
      role: "Creative Director",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-green-200",
      lightColor: "bg-gradient-to-br from-green-300 to-emerald-500"
    },
     {
      id: 5,
      name: "Shehani Dias",
      role: "Product Designer",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-pink-200",
      lightColor: "bg-gradient-to-br from-pink-300 to-pink-500"
    },
    {
      id: 6,
      name: "Sarah Johnson",
      role: "UX Designer",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-amber-200",
      lightColor: "bg-gradient-to-br from-amber-300 to-orange-500"
    },
    {
      id: 7,
      name: "Mike Chen",
      role: "Frontend Developer",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-blue-200",
      lightColor: "bg-gradient-to-br from-blue-300 to-blue-500"
    },
    {
      id: 8,
      name: "Alex Rivera",
      role: "Creative Director",
      image: "public/Screenshot 2025-08-04 110822.png",
      bgColor: "bg-green-200",
      lightColor: "bg-gradient-to-br from-green-300 to-emerald-500"
    }
  ];

  const handleInteraction = (profileId: number) => {
    setActiveProfile(activeProfile === profileId ? null : profileId);
  };

  return (
    <div className=" bg-black items-center justify-center p-4">
      {/* Mobile/Tablet Layout - Vertical Stack */}
      <div className="block md:hidden space-y-8 ">
        {profiles.map((profile) => (
          <ProfileCircle
            key={profile.id}
            profile={profile}
            isActive={activeProfile === profile.id}
            onInteraction={() => handleInteraction(profile.id)}
          />
        ))}
      </div>

      {/* Desktop Layout - Horizontal Row */}
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 space-x-8 lg:space-x-12 space-y-32 ">
        {profiles.map((profile) => (
          <ProfileCircle
            key={profile.id}
            profile={profile}
            isActive={activeProfile === profile.id}
            onInteraction={() => handleInteraction(profile.id)}
          />
        ))}
      </div>
    </div>
  );
};

interface ProfileCircleProps {
  profile: ProfileData;
  isActive: boolean;
  onInteraction: () => void;
}

const ProfileCircle: React.FC<ProfileCircleProps> = ({ profile, isActive, onInteraction }) => {
  return (
    <div className="relative md:w-[360px] md:h-[380px]">
      {/* Fixed footprint wrapper prevents layout shift */}
    <motion.div
      className="relative cursor-pointer select-none "
      onClick={onInteraction}
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
          className={`absolute inset-0 rounded-full border-4 bg-white overflow-hidden w-72 h-72 md:w-auto md:h-auto  ${profile.bgColor}  `}
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
          className="absolute top-1/8 left-6/12 transform -translate-x-1/2 text-black text-nowrap"
          initial={{ opacity: 0, y: -20 }}
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