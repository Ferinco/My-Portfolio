import Button from "../custom/button";
import { motion } from "framer-motion";
export default function HeroSection(): JSX.Element {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
        duration: 0.01,
      },
    },
  };

  const item = {
    hidden: { y: 10, rotateZ: 15, opacity: 0, z: 5 },
    show: { y: 0, rotateZ: 0, opacity: 1, z: 0 },
  };
  return (
    <div className="wrapper px-3 md:px-6 lg:px-8 xl:px-14 overflow-x-hidden overflow-y-hidden">
      <div className="flex flex-col text-start gap-5">
        <div className="flex flex-col sm:flex-col text-start gap-0">
          <motion.div variants={container} initial="hidden" animate="show"
          className="xl:text-[25rem] lg:text-[20rem] sm:text-[7rem] text-[6rem] md:text-[14rem] tracking-normal lg:text-pretty md:text-balance font-medium md:justify-center text-wrap lg:tracking-normal md:leading-tight leading-[0.9]">
            <h1 className=" ">
              ferinco<span className="inline-block md:hidden">,</span>
            </h1>
            <h1 className="block md:hidden">
              a frontend
            </h1>
            <h1 className="block md:hidden">
              developer.
            </h1>
            
          </motion.div>
        </div>
        <div className="md:hidden flex flex-col md:mt-11 lg:gap-9 gap-7">
          <p className="lg:text-Paragraph-md md:text-Paragraph-sm text-Paragraph-sm space-x-4 text-wrap text-2xl md:text-4xl leading-tight md:leading-normal ms:w-[75%] w-full">
            I conjure innovation to create
            extraordinary experiences.
          </p>
          {/* <Button
            title="ferinco001@gmail.com"
            link="/projects"
            id="email"
            className="flex items-center gap-2 lg:py-4 py-3 lg:px-10 px-5 rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-medium"
          ></Button> */}
        </div>
      </div>
    </div>
  );
}
