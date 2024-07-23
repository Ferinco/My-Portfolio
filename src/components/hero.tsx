import Button from "../custom/button";
import { motion } from "framer-motion"
export default function HeroSection(): JSX.Element {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
                duration: 0.01
            }
        }
    };

    const item = {
        hidden: {y: 10, rotateZ: 15, opacity: 0, z:5 },
        show: { y: 0, rotateZ: 0, opacity: 1, z:0 }
    }
    return (
        <div className='px-3 md:px-6 lg:px-8 xl:px-14  overflow-x-hidden overflow-y-hidden'>
            <div className="flex flex-col text-start">
                <div className="flex flex-col sm:flex-col text-start gap-0">
                    {/* <h1 className="sm:hidden flex lg:text-[20rem] leading-none text-[7rem] sm:text-[8rem] md:text-[14rem] font-[500] sm:font-[700] lg:font-[900] tracking-normal lg:tracking-wide lg:text-pretty md:text-balance  lg:mt-[-50px]">Emma.</h1> */}
                    <motion.div className="flex flex-row items-end lg:gap-1"
                        variants={container}
                        initial="hidden"
                        animate="show">
                            <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                F
                            </motion.h1>
                            <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                e
                            </motion.h1> <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                r
                            </motion.h1> <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                i
                            </motion.h1> <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                n
                            </motion.h1> <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                c
                            </motion.h1>
                            <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                o
                            </motion.h1>
                    </motion.div>
                    <motion.div className="flex md:hidden flex-row items-end gap-0 -mt-4"
                        variants={container}
                        initial="hidden"
                        animate="show">
                            <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                e
                            </motion.h1>
                            <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                m
                            </motion.h1> <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                m
                            </motion.h1> <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                a
                            </motion.h1> <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                n
                            </motion.h1> <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                u
                            </motion.h1>
                            <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                e
                            </motion.h1>
                            <motion.h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal" variants={item}>
                                l
                            </motion.h1>
                    </motion.div>
                </div>
                <div className="xl:hidden flex flex-col md:mt-11 lg:gap-9 gap-7">
                    <p className="lg:text-Paragraph-md md:text-Paragraph-sm text-Paragraph-sm space-x-4 text-wrap text-2xl md:text-4xl leading-tight md:leading-normal ms:w-[75%] w-full">
                        A Frontend developer that conjures innovation to create extraordinary experiences.
                    </p>
                    <Button title="ferinco001@gmail.com" link="/projects" id="email" className="flex items-center gap-2 lg:py-4 py-3 lg:px-10 px-5 rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-medium"></Button>
                </div>
            </div>
        </div>
    )
}