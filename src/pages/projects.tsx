import { Icon } from "@iconify/react";
import Button from "../custom/button";
import ProjectTile from "../custom/projectTile";
interface Project {
    image: string,
    title: string,
    about: string,
    url: string,
    role: string
}
const ProjectData: Array<Project> = [
    {
        image: "/images/ferinstore.png",
        title: "clothify",
        about: "erhe hiueir huihe uire ipe pier ipriewh pihe ipyewuhp ipuyrf rfphruifhr dhgedu uiehd eue uehuegd",
        url: "www.ferinstore.netlify.app",
        role: "A"
    },
    {
        image: "/images/seemax.png",
        title: "seemax",
        about: "erhe hiueir huihe uire ipe pier ipriewh pihe ipyewuhp ipuyrf rfphruifhr dhgedu uiehd eue uehuegd",
        url: "www.ferinco.com",
        role: "B"
    },
    {
        image: "/images/ferinco.png",
        title: "Ferinco's Portfolio Website",
        about: "erhe hiueir huihe uire ipe pier ipriewh pihe ipyewuhp ipuyrf rfphruifhr dhgedu uiehd eue uehuegd",
        url: "www.ferinco.com",
        role: "C"
    },
    {
        image: "/images/fgms.png",
        title: "Firdaus-Gate Model Schools",
        about: "erhe hiueir huihe uire ipe pier ipriewh pihe ipyewuhp ipuyrf rfphruifhr dhgedu uiehd eue uehuegd",
        url: "www.firdausgateschools.com",
        role: "D"
    },
]



export default function Projects(): JSX.Element {
    return (
        <div className='Project pt-1 pb-10  mt-[70px]'>
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

                            <div className={index % 2 === 0 ? "flex flex-row justify-between items-end mt-16" : "flex flex-row-reverse justify-between items-end mt-16"}>
                                <div className="w-[100%] rounded-[15px] project-img">
                                    <ProjectTile image={project.image} />
                                </div>
                                {/* <div className="w-[19%] flex flex-col gap-5">
                                    <div>
                                        <h6 className={`${index % 2 === 0 ? "text-end site-name text-5xl" : "text-start site-name text-5xl"}`}>{project.title}</h6>
                                        <p className={index % 2 === 0 ? "text-start" : "text-end"}>{project.about}</p>
                                    </div>
                                    <div className={index % 2 === 0 ? "flex flex-row items-center justify-end gap-5" : "flex flex-row-reverse items-center justify-end gap-5"}>
                                        <Button title="Visit Site" link={project.url} id="cap" className="flex items-center justify-center m-0 text-center gap-1 py-1 px-2 h-fit rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-semibold text-[14px]"
                                            iconSize="text-[12px]"
                                            target="_blank"
                                        >
                                        </Button>
                                        <p>[ ]</p>
                                    </div>
                                </div> */}
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