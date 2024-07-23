import { useParams } from "react-router-dom"
import { ProjectData, ProjectImages } from "../Data"
import { Icon } from "@iconify/react"
import Button from "../custom/button"
import { BigTile, SmallTile } from "../custom/imageTile"
import ProjectTile from "../custom/projectTile"
import { useAppContext } from "../context"

export default function Details(): JSX.Element {
    const { subtitle } = useParams()
    const Project = ProjectData.filter((project) => project.subtitle === subtitle)
    const Images = ProjectImages.filter((project) => project.subtitle === subtitle)
    const { setOpenZoom, setZoomedImage, setName } = useAppContext()
    return (
        <div className="Home sm:px-0 px-3 md:px-6 lg:px-8 xl:px-6 py-9 overflow-x-hidden overflow-y-hidden mt-[70px]">
            {
                Project.map((project) => (
                    <div>
                        <div className='flex flex-col lg:gap-10'>
                            <div className="flex flex-row gap-10 items-end">
                                <h4 className="text-start lg:text-[8rem] text-[5rem] sm:text-[6rem] md:text-[7rem] font-medium tracking-tighter project-name">{project.title} </h4>
                                <Icon icon="fluent:arrow-turn-right-down-48-regular" width="50px" height="40px" style={{ color: "black" }} className="hidden lg:flex" />
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between lg:items-end items-start gap-10 lg:gap-0 mt-10 lg:mt-0">
                                <p className="text-start lg:w-[700px] text-xl lg:text-2xl">Fully designed and launched the school's website, ensuring a user-friendly and responsive interface. <br /> Implemented SEO best practices to enhance search engine visibility.
                                </p>
                                {
                                    project.subtitle === "ferinco" ? "" :
                                        <Button title="Visit Site" link={project.url} id="cap" className="flex items-center gap-2 py-2 px-10 rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-medium h-fit"
                                            iconSize="text-[14px]"
                                            target="_blank"
                                        >
                                        </Button>
                                }
                            </div>
                            <div>
                                <div className="xl:h-[620px] rounded-[15px] flex flex-col p-0 justify-between w-full relative project-tile mt-10 lg:mt-0">
                                    <img src={project.image} className="rounded-[15px] w-full h-full object-contain xl:object-cover content-center " />
                                    {/* <a href=""> */}
                                    <div className="rounded-[15px] absolute flex justify-center items-center w-[100%] h-full cursor-pointer bg-black/15 100% transition-all" 
                                    onClick={()=>{
                                        setOpenZoom(true)
                                        setZoomedImage(project.image)
                                        setName(project.subtitle)
                                    }}>
                                    </div>

                                    {/* </a> */}
                                </div>
                                <div className="flex flex-row justify-between mt-5 md:items-start items-center">
                                    <h1 className="text-start hidden lg:flex"></h1>
                                    <p className={"text-start text-lg font-medium text-black md:max-w-[400px] w-[60%]"}>{project.about}</p>
                                    <div className="flex flex-col text-start">
                                        {
                                            project.tools.map((tool) => (
                                                <h1>{tool}</h1>

                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                project.subtitle === "ferinco" ? "" :

                                    Images.map((image) => (
                                        <>
                                            <div className="flex flex-row justify-between items-center mt-[70px]">
                                                <h1 className="flex text-3xl w-[10%] text-start">Project Images</h1>
                                            </div>
                                            <div className="flex flex-col-reverse gap-5 xl:gap-0 xl:flex-row-reverse justify-between mt-5">
                                                <SmallTile image={image.firstMobile} role="B" flexType="flex-col items-end"></SmallTile>
                                                <BigTile image={image.firstBanner} role="A" flexType="flex-col" ></BigTile>
                                            </div>
                                            <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row justify-between mt-5">
                                                <SmallTile image={image.secondMobile} role="C" flexType="flex-col-reverse items-start"></SmallTile>
                                                <BigTile image={image.secondBanner} role="D" flexType="flex-col-reverse items-end"></BigTile>
                                            </div>
                                        </>
                                    ))

                            }
                        </div>
                    </div>
                ))
            }

            <div className="employ flex flex-col lg:flex-row mt-20 h-fit justify-between">

                <div className="flex flex-col text-start lg:gap-24 gap-4">
                    <p>Hire me</p>
                    <div className="flex flex-col gap-3">
                        <p className="text-2xl">Would you like to hire me?</p>
                        <p className="text-3xl w-[400px]">I am definitly that addition your team needs, I bring the skills, talent and creativity.</p>
                        <a className="text-start text-sm text-[rgb(0, 105, 255)] email-link font-semibold">Hire me</a>
                    </div>
                </div>
                <div className="flex flex-col text-start mt-12 lg:mt-0 lg:gap-24 gap-4">
                    <p>Contact</p>
                    <div>
                        <p className="text-2xl">Send me an email</p>
                        <a className="text-start text-3xl text-[rgb(0, 105, 255)] email-link">ferinco001@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>

    )
}