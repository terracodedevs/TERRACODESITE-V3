import { motion } from 'framer-motion';
import { Wrench, Settings } from 'lucide-react';

export default function UnderMaintenance() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <div className="flex justify-center gap-6 mb-6">
          {/* Floating Wrench Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Wrench size={64} className="text-orange-500" />
          </motion.div>

          {/* Spinning Settings Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            <Settings size={64} className="text-orange-500" />
          </motion.div>
        </div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          We'll Be Back Soon!
        </motion.h1>

        <motion.p
          className="text-white text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Our website is currently undergoing scheduled maintenance.
          <br />
          <span className="text-orange-500 font-medium">Thank you</span> for your patience.
        </motion.p>
      </motion.div>
    </div>
  );
}
