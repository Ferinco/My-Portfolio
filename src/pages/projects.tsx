import Button from "../custom/button";
import ProjectTile from "../custom/projectTile";
interface Project {
    image: string,
    title: string,
    about: string,
    url: string,
}
const ProjectData: Array<Project> = [
    {
        image: "/images/ferinstore.png",
        title: "clothify",
        about: "erhe hiueir huihe uire ipe pier ipriewh pihe ipyewuhp ipuyrf rfphruifhr dhgedu uiehd eue uehuegd",
        url: "www.ferinstore.netlify.app",
    },
    {
        image: "/images/fgms.png",
        title: "Firdaus-Gate Model Schools",
        about: "erhe hiueir huihe uire ipe pier ipriewh pihe ipyewuhp ipuyrf rfphruifhr dhgedu uiehd eue uehuegd",
        url: "www.firdausgateschools.com",
    },
]



export default function Projects(): JSX.Element {
    return (
        <div className='Home pt-1 pb-10  mt-[70px]'>
            <div className='sm:px-0 md:px-6 lg:px-8 xl:px-6 overflow-x-hidden overflow-y-hidden'>
                <h4 className="text-start text-[17rem] font-medium tracking-tighter">Projects</h4>
                <div className="projects-body flex flex-col gap-8 mt-[70px]">
                    {
                        ProjectData.map((project, index) => (
                            <div className={index % 2 === 0 ? "flex flex-row justify-between items-end" : "flex flex-row-reverse justify-between items-end"}>
                                <div className="w-[79%] rounded-[15px]">
                                    <ProjectTile />
                                </div>
                                <div className="w-[19%] flex flex-col gap-5">
                                    <div>
                                        <h6 className={`${index % 2 === 0 ? "text-end site-name text-5xl" : "text-start site-name text-5xl"}`}>{project.title}</h6>
                                        <p className={index % 2 === 0? "text-start":"text-end"}>{project.about}</p>
                                    </div>
                                    <div className={index % 2 === 0 ? "flex flex-row items-center justify-end gap-5" : "flex flex-row items-center justify-start gap-5"}>
                                        <Button title="Visit Site" link={project.url} id="cap" className="flex items-center gap-1 py-1 px-2 h-fit rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-semibold text-[14px]"
                                            iconSize="text-[12px]"
                                            target="_blank"
                                        >
                                        </Button>
                                        <p>[ ]</p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
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