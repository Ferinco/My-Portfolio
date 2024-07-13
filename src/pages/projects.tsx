import { Icon } from "@iconify/react";
import Button from "../custom/button";
import ProjectTile from "../custom/projectTile";
import { ProjectData } from "../Data";




export default function Projects(): JSX.Element {
    return (
        <div className='Home pt-1 pb-10  mt-[70px]'>
            <div className='sm:px-0 md:px-6 lg:px-8 xl:px-6 overflow-x-hidden overflow-y-hidden'>
                <div className="flex flex-row gap-10 items-baseline">
                    <h4 className="text-start lg:text-[15rem] text-[6rem] sm:text-[8rem] md:text-[14rem] font-medium tracking-tighter">Projects</h4>

                    <Icon icon="fluent:arrow-turn-right-down-48-regular" width="35px" height="30px" style={{ color: "black" }} />
                </div>
                <div className="mt-[100px]">
                    <div className="flex flex-row justify-between items-center">
                <p className="text-start max-w-xl text-xl lg:text-2xl">I've worked on various projects over the years, personal and official. Check out some of the ones I am permitted to share here</p>
                <p className="text-start max-w-xl text-xl lg:text-2xl">5 featured</p>

                    </div>
                <div className="projects-body flex flex-col gap-[100px] mt-[70px]">
                    {
                        ProjectData.map((project, index) => (
                            <div className="flex flex-col mt-[70px]">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="w-[40px] border-2 border-black rounded-[50%] h-[40px] flex justify-center items-center text-2xl">{project.role}</div>
                                    <div className="separation-line w-[90%] border-b-[1px] border-gray-400"></div>
                                    <Icon icon="fluent:arrow-turn-down-left-20-regular" width="40px" height="40px"  style={{color: "black"}}/>

                                </div>

                            <div className={"flex flex-col justify-between items-end mt-16"}>
                                <div className="w-[100%] rounded-[15px] project-img">
                                    <ProjectTile image={project.image} link={`/work/${project.subtitle}`}/>
                                </div>
                                 <div className="w-[100%] flex flex-row justify-between items-start mt-7">
                                    <div className="lg:w-[33%]">
                                        <h6 className={"text-start site-name text-2xl"}>{project.title}</h6>
                                    </div>
                                    <div className="lg:w-[33%]">
                                        <p className={"text-start text-lg font-medium text-black"}>{project.about}</p>
                                    </div>
                                    <div className={"flex flex-row items-center justify-center gap-5 lg:w-[33%]"}>
                                        <Button title="Visit Site" link={project.url} id="cap" className="flex items-center gap-2 lg:py-2 py-3 lg:px-10 px-5 rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-medium"
                                            iconSize="text-[14px]"
                                            target="_blank"
                                        >
                                        </Button>
                                    </div>
                                </div> 
                            </div>
                            </div>

                        ))
                    }
                </div>
                </div>
            </div>
            {/* <div className="projects-body grid grid-cols-2 gap-5 mt-[70px]">
            <div className="flex flex-col gap-5">
            <ProjectTile/>
            <ProjectTile/>
            </div>
            <div className="flex flex-col gap-5 mt-[100px]">
            <ProjectTile/>
            <ProjectTile/>
            </div>
        </div> */}

        </div>
    )
}