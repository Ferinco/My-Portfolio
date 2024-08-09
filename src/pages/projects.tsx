import { Icon } from "@iconify/react";
import Button from "../custom/button";
import ProjectTile from "../custom/projectTile";
import { ProjectData } from "../data/projectsData";
import { Separation } from "../custom/separationDiv";
import { motion } from "framer-motion";
import { SubHeader } from "../custom/headers";

export default function Projects(): JSX.Element {
  return (
    <motion.div
      className="Home pt-1 pb-10 mt-[70px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="sm:px-0 md:px-6 lg:px-8 xl:px-6 overflow-x-hidden overflow-y-hidden px-3">
        <SubHeader title="Projects" />
        <div className="mt-[70px]">
          <div className="flex flex-row justify-between items-center">
            <p className="text-start max-w-xl text-xl lg:text-2xl">
              I've worked on various projects over the years, personal and
              official. Check out some of the ones I am permitted to share here
            </p>
            <p className="hidden lg:block text-start max-w-xl text-xl lg:text-2xl">
              5 featured
            </p>
          </div>
          <div className="projects-body flex flex-col lg:gap-[100px] gap-[50px] mt-[70px]">
            {ProjectData.map((project, index) => (
              <div className="flex flex-col">
                <Separation role={project.role}></Separation>

                <div
                  className={
                    "flex flex-col justify-between items-end mt-5 lg:mt-9"
                  }
                  data-aos="fade-in"
                  data-aos-delay={100}
                  data-aos-easing="ease-in-sine"
                >
                  <div className="w-[100%] rounded-[15px] project-img">
                    <ProjectTile
                      image={project.image}
                      link={`/work/${project.subtitle}`}
                    />
                  </div>
                  <div className="w-[100%] flex flex-row justify-between items-start mt-7">
                    <div
                      className="lg:w-[33%] w-auto"
                      data-aos="fade-in"
                      data-aos-delay={0}
                      data-aos-easing="ease-in-sine"
                    >
                      <h6 className={"text-start site-name lg:text-2xl"}>
                        {project.title}
                      </h6>
                    </div>
                    <div
                      className="w-[33%] hidden lg:flex"
                      data-aos="fade-in"
                      data-aos-delay={100}
                      data-aos-easing="ease-in-sine"
                    >
                      <p
                        className={" text-start text-lg font-medium text-black"}
                      >
                        {project.about}
                      </p>
                    </div>
                    <div
                      className={
                        "flex flex-row items-center justify-center gap-5 lg:w-[33%] w-auto"
                      }
                      data-aos="fade-in"
                      data-aos-delay={150}
                      data-aos-easing="ease-in-sine"
                    >
                      {project.subtitle === "ferinco" ? (
                        <p>-</p>
                      ) : project.subtitle === "bato" ? (
                        <p className="font-medium text-sm">20% complete</p>
                      ) : (
                        <Button
                          title="Visit Site"
                          link={project.url}
                          id="cap"
                          className="text-xs lg:text-sm flex items-center gap-2 lg:py-2 py-1 lg:px-10 px-5 rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-medium"
                          iconSize="text-[10px] lg:text-[14px]"
                          target="_blank"
                        ></Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
