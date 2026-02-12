import PhotoGrid from "../components/photoGrid";
import { motion } from "framer-motion";
import { SubHeader } from "../custom/headers";
export default function About(): JSX.Element {
  return (
    <motion.div
      className="Home pt-5 pb-10  mt-[70px] md:px-6 lg:px-8 xl:px-6 overflow-x-hidden overflow-y-hidden px-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="">
        <SubHeader title="About" />
        <div className="flex flex-col lg:flex-row justify-between lg:mt-0 mt-[70px]">
          <div className="flex flex-col text-start text-5xl lg:text-7xl w-[40%]">
            <p>Plan.</p>
            <p>Code.</p>
            <p>Innovate.</p>
          </div>
          <div className="flex flex-col text-start lg:w-[55%] gap-3">
            <p className="text-start text-xl lg:text-2xl lg:mt-0 mt-10">
              Driven by the passion to always outdo myself in delivering
              appealing and user-friendly websites that don't just meet the
              demand of the users, but alse engage and inspire them.
            </p>
            <div className="flex flex-row flex-wrap justify-between text-base">
              <p className="lg:w-[280px] text-xl lg:text-base w-full mt-2">
                With my in-depth knowledge of various full-stack technologies, I
                am able to bring designs to life. Being able to innovate when
                and after I plan and code has always helped me stand out.{" "}
              </p>
              <p className="lg:w-[280px] w-full text-xl lg:text-base mt-2">
                Whether I am working on a small project for a local business or
                a large-scale application for a global brand, I approach each
                task with the same level of enthusiasm and attention to detail.
              </p>
              <p className="lg:w-[300px] text-xl lg:text-base mt-2">
                I am constantly learning and adapting to new technologies and
                trends in order to stay ahead of the curve and deliver the best
                possible results for my clients.{" "}
              </p>
            </div>
          </div>
        </div>
        <PhotoGrid />
        <div className="employ flex flex-col lg:flex-row mt-20 h-fit justify-between">
          <div className="flex flex-col text-start lg:gap-24 gap-4">
            <p>Hire me</p>
            <div className="flex flex-col gap-3">
              <p className="text-2xl">Would you like to hire me?</p>
              <p className="text-3xl w-[400px]">
                I am definitly that addition your team needs, I bring the
                skills, talent and creativity.
              </p>
              <a
                href="mailto:emmanuelferrum003@gmail.com"
                className="text-start text-sm text-[rgb(0, 105, 255)] email-link font-semibold"
              >
                Hire me
              </a>
            </div>
          </div>
          <div className="flex flex-col text-start mt-12 lg:mt-0 lg:gap-24 gap-4">
            <p>Contact</p>
            <div>
              <p className="text-2xl">Send me an email</p>
              <a
                className="text-start text-xl sm:text-2xl md:text-3xl text-[rgb(0, 105, 255)] email-link break-all"
                href="mailto:emmanuelferrum003@gmail.com"
              >
                emmanuelferrum003@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
