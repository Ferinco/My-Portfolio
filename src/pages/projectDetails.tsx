import { useParams } from "react-router-dom"
import { ProjectData } from "../Data"
import { Icon } from "@iconify/react"

export default function Details(): JSX.Element {
    const { subtitle } = useParams()
    const Project = ProjectData.filter((project) => project.subtitle === subtitle)
    return (
        <div>
                        {
                Project.map((project) => (
                    <div className='Home pt-1 pb-10  mt-[70px]'>
                    <div className='sm:px-0 md:px-6 lg:px-8 xl:px-6 overflow-x-hidden overflow-y-hidden'>
                        <div className="flex flex-row gap-10 items-end">
                            <h4 className="text-start lg:text-[9rem] text-[6rem] sm:text-[8rem] md:text-[14rem] font-medium tracking-tighter project-name">{project.title} </h4>
                            <Icon icon="fluent:arrow-turn-right-down-48-regular" width="50px" height="40px" style={{ color: "black" }} />
                        </div>
                    </div>
                </div>
                ))
            }


        </div>

    )
}