import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden font-lufga">

      {/* Floating background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-[28rem] h-[28rem] bg-orange-500/20 rounded-full blur-3xl top-20 left-20"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        className="absolute w-[28rem] h-[28rem] bg-orange-400/20 rounded-full blur-3xl bottom-20 right-20"
      />

      {/* Glass overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        {/* Animated GIF */}
        {/* <motion.img
          src="https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif" // replace with your gif
          alt="Not Found Animation"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-52 mx-auto mb-6 drop-shadow-lg rounded-xl"
        /> */}

        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[8rem] font-extrabold text-orange-500 drop-shadow-lg"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-white/90 font-medium mb-6"
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.p>

        <motion.a
          href="/"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255,165,0,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-block px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg shadow-lg hover:bg-orange-400 transition"
        >
          Back to Home
        </motion.a>
      </motion.div>
    </div>
  );
}
