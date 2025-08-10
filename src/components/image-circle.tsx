// ProfileGrid.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Profile = {
  id: number;
  name: string;
  title: string;
  image: string;
};

const profiles: Profile[] = [
  {
    id: 1,
    name: "Shehani Dias",
    title: "Product Designer",
    image: "public/Screenshot 2025-08-04 110822.png",
  },
  {
    id: 2,
    name: "Alex Morgan",
    title: "UX Researcher",
    image: "public/Screenshot 2025-08-04 110822.png",
  },
  {
    id: 3,
    name: "James Lee",
    title: "Frontend Engineer",
    image: "public/Screenshot 2025-08-04 110822.png",
  },
  {
    id: 4,
    name: "Priya Singh",
    title: "Visual Designer",
    image: "public/Screenshot 2025-08-04 110822.png",
  },
  {
    id: 5,
    name: "Carlos Ruiz",
    title: "Product Manager",
    image: "public/Screenshot 2025-08-04 110822.png",
  },
  {
    id: 6,
    name: "Maya Chen",
    title: "Content Strategist",
    image: "public/Screenshot 2025-08-04 110822.png",
  },
  {
    id: 7,
    name: "Liam O'Connor",
    title: "Developer Advocate",
    image: "public/Screenshot 2025-08-04 110822.png",
  },
  {
    id: 8,
    name: "Zara Ahmed",
    title: "Design Ops",
    image: "public/Screenshot 2025-08-04 110822.png",
  },
];

const ringVariants = {
  rest: {
    scaleY: 1,
    boxShadow: "0 0 0 rgba(255, 165, 0, 0)",
    borderColor: "#C4C4C4",
  },
  hover: {
    scaleY: 1.08,
    boxShadow: "0 20px 40px -5px rgba(255,165,0,0.6)",
    borderColor: "#C4C4C4",
    transition: {
      type: "spring" as const,
      stiffness: 250,
      damping: 20,
      duration: 0.3,
    },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" as any },
  },
};

const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => {
  const [active, setActive] = useState(false);
  const isInteractive = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  const handleClick = () => {
    // On touch devices toggle
    setActive((v) => !v);
  };

  return (
    <div className="flex justify-center ">
      <motion.div
        className="relative "
        onClick={handleClick}
        onMouseLeave={() => isInteractive && setActive(false)}
        onMouseEnter={() => isInteractive && setActive(true)}
        aria-label={`${profile.name}, ${profile.title}`}
      >
        {/* Outer ring */}
        <motion.div
          className="rounded-full border-8 w-40 h-40 md:w-60 md:h-60 flex items-center justify-center"
          style={{ borderStyle: "solid" }}
          variants={ringVariants}
          animate={active ? "hover" : "rest"}
          initial="rest"
          transition={{ duration: 0.3 }}
        >
          {/* Inner clipped image circle with top-stretch illusion */}
          <motion.div
            className="rounded-full overflow-hidden w-full h-full"
            variants={imageVariants}
            animate={active ? "hover" : "rest"}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="object-cover w-full h-full block"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* Optional name/title below on active (can be toggled off if undesired) */}
        <AnimatePresence>
          {active && (
            <motion.div
              key="info"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-center w-44"
            >
              <div className="text-sm font-semibold text-white">{profile.name}</div>
              <div className="text-xs text-gray-300">{profile.title}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const ProfileGrid: React.FC = () => {
  return (
    <div className="bg-black min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Grid of 8 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center space-y-16">
          {profiles.map((p) => (
            <ProfileCard key={p.id} profile={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileGrid;
