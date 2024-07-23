import { motion } from "framer-motion"
import Button from "./button"
export default function Preloader(): JSX.Element {
  return (
    <div className='w-screen absolute h-screen top-0 left-0 bg-[#ebebeb] z-[999] flex flex-col'>
      <div className="flex items-center justify-center w-full h-full">

      <motion.h1 className="preloader-span"
        initial={{ y: -100, scale: 0.5 }}
        animate={{  y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
      >F</motion.h1>
      <motion.h1 className="preloader-span"
        initial={{ y: 100, scale: 0.5 }}
        animate={{  y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.3, delay: 0.3 }}
      >E</motion.h1>   
       <motion.h1 className="preloader-span"
        initial={{ y: 100, scale: 0.5 }}
        animate={{  y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.3, delay: 0.4 }}
      >R</motion.h1>   
       <motion.h1 className="preloader-span"
          initial={{ x: 100, scale: 0.5 }}
          animate={{  x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.3, delay: 0.5 }}
      >I</motion.h1>   
       <motion.h1 className="preloader-span"
         initial={{ y: 100, scale: 0.5 }}
         animate={{  y: 0, scale: 1 }}
         transition={{ type: "spring", stiffness: 100, duration: 0.3, delay: 0.6 }}
      >N</motion.h1>  
        <motion.h1 className="preloader-span"
        initial={{ y: 100, scale: 0.5 }}
        animate={{  y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.3, delay: 0.7 }}
      >C</motion.h1>
      <motion.h1 className="preloader-span"
       initial={{ y: 100, scale: 0.5 }}
       animate={{  y: 0, scale: 1 }}
       transition={{ type: "spring", stiffness: 100, duration: 0.3, delay: 0.8 }}
       >O</motion.h1>
      </div>
      <motion.div className="fixed w-screen h-screen flex justify-end items-end p-5 -z-10"
       initial={{opacity: 0 }}
       animate={{opacity: 1 }}
       transition={{duration: 0.4, delay: 1.0 }}>
            <Button
              title="Hire Me!"
              iconSize="hidden"
              className="flex items-center gap-2 py-3 px-12 rounded-full  border bg-[#0069FF] border-[#0069FF] text-white text-sm w-fit font-medium hire-btn"
            ></Button>
          </motion.div>
    </div>
  )
}