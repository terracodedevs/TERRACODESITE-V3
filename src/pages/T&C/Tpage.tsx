import Navbar from "@/components/navbar"
import TandC from "./sections/TandC"
import { motion } from "framer-motion"

const Tpage = () => {
  return (
    <>
    <div className="mt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className=" px-6"
      >
    <Navbar/>
    <TandC />
    </motion.div>
    </div>
    </>
  )
}

export default Tpage
