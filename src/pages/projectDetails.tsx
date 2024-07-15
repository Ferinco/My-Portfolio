import { useParams } from "react-router-dom"
import { ProjectData, ProjectImages } from "../Data"
import { Icon } from "@iconify/react"
import Button from "../custom/button"
import { BigTile, SmallTile } from "../custom/imageTile"

export default function Details(): JSX.Element {
    const { subtitle } = useParams()
    const Project = ProjectData.filter((project) => project.subtitle === subtitle)
    const Images = ProjectImages.filter((project) => project.subtitle === subtitle)

    return (
        <div className="Home sm:px-0 md:px-6 lg:px-8 xl:px-6 py-9 overflow-x-hidden overflow-y-hidden mt-[70px]">
            {
                Project.map((project) => (
                    <div>
                        <div className=''>
                            <div className="flex flex-row gap-10 items-end">
                                <h4 className="text-start lg:text-[8rem] text-[6rem] sm:text-[8rem] md:text-[14rem] font-medium tracking-tighter project-name">{project.title} </h4>
                                <Icon icon="fluent:arrow-turn-right-down-48-regular" width="50px" height="40px" style={{ color: "black" }} />
                            </div>
                            <div className="mt-10 flex flex-row justify-between items-end">
                                <p className="text-start max-w-3xl text-xl lg:text-2xl">Fully designed and launched the school's website, ensuring a user-friendly and responsive interface. <br /> Implemented SEO best practices to enhance search engine visibility.
                                </p>
                                {
                                    project.subtitle === "ferinco" ? "" :
                                        <Button title="Visit Site" link={project.url} id="cap" className="flex items-center gap-2 lg:py-2 py-3 lg:px-10 px-5 rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-medium h-fit"
                                            iconSize="text-[14px]"
                                            target="_blank"
                                        >
                                        </Button>
                                }
                            </div>
                            <div className="h-[620px] rounded-[15px] flex flex-col p-0 justify-between w-full relative mt-10">
                                <img src={project.image} className="rounded-[15px] w-full h-full object-cover content-center " />
                                <div className="rounded-[15px] absolute flex justify-center items-center w-[100%] h-full cursor-pointer bg-black/15 100% transition-all hover:backdrop-blur-sm hover:bg-black/30">
                                </div>
                            </div>
                            <div className="flex flex-row justify-between mt-5">
                                <h1>A</h1>
                                <p className={"text-start text-lg font-medium text-black max-w-[400px]"}>{project.about}</p>
                                <div className="flex flex-col text-start">
                                    {
                                        project.tools.map((tool) => (
                                            <h1>{tool}</h1>

                                        ))
                                    }
                                </div>
                            </div>
                            {
                                project.subtitle === "ferinco" ? "" :

                                    Images.map((image) => (
                                        <>
                                            <div className="flex flex-row justify-between items-center mt-[70px]">
                                                <h1 className="flex text-3xl w-[10%] text-start">Project Images</h1>
                                            </div>
                                            <div className="flex flex-row-reverse justify-between mt-5">
                                                <SmallTile image={image.firstMobile} role="B" flexType="flex-col items-end"></SmallTile>
                                                <BigTile image={image.firstBanner} role="A" flexType="flex-col" ></BigTile>
                                            </div>
                                            <div className="flex flex-row justify-between mt-20">
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