import React from "react";
import { motion } from 'framer-motion'
export default function WriteUp(): JSX.Element {
    return (
        <div className="px-3 md:px-6 lg:px-8 xl:px-14 mt-40">
            <div className="flex flex-col">
                <h2 className="lg:text-[10rem] leading-none text-[6rem] md:text-[8rem] text-start" 
                    data-aos="fade-in"
                    data-aos-delay={100}
                    data-aos-easing="ease-in-sine">
                    Coding for <br /> impact.
                </h2>
                <div className="flex flex-col gap-7 w-100">
                    <div className="hidden-image border-8 border-black w-48 h-1 mt-2"
                     data-aos="fade-in"
                     data-aos-delay={100}
                     data-aos-easing="ease-in-sine"></div>
                    <div className="flex flex-row justify-between flex-wrap w-full items-end lg:mt-10 mt-0"
                     data-aos="fade-in"
                     data-aos-delay={100}
                     data-aos-easing="ease-in-sine">
                        <p className="text-start max-w-2xl text-xl lg:text-2xl">
                            My passion for creation through coding has always driven me to
                            merge visionary ideas with technical precision, crafting unique
                            and impactful user experiences. I firmly believe in the power of
                            technology to shape our world, collaborating closely with
                            design-focused teams to build transformative websites and
                            microsites that leave a lasting impression.
                        </p>
                        {/* <div>Check Projects</div> */}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-7 w-full lg:mt-10"
                 data-aos="fade-in"
                 data-aos-delay={100}
                 data-aos-easing="ease-in-sine">
                    <div className="hidden-image border-8 border-transparent w-48 h-1 mt-2"></div>
                    <div className="flex lg:flex-row flex-col gap-5 lg:gap-0 justify-between w-full items-start">
                        <p className="text-start text-xl lg:text-lg text-wrap lg:w-[32%] w-full">
                            Being an artist, working with a strong sense of artistry has
                            helped me deliver masterful projects over the years—crafting and
                            solving problems to enhance user experience.{" "}
                        </p>
                        <p className="text-start text-xl lg:text-lg text-wrap lg:w-[32%] w-full">
                            With years of experience, I have demonstrated my ability to be a
                            highly collaborative developer, bringing diverse and essential
                            problem-solving skills to every project.{" "}
                        </p>
                        <p className="text-start text-xl lg:text-lg text-wrap lg:w-[32%] w-full">
                            Additionally, I am a fast learner who easily blends and adapts to new tools and environments, enabling me to excel on different projects.{" "}
                        </p>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}
