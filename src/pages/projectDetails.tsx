import { useParams } from "react-router-dom"
import { ProjectData, ProjectImages } from "../Data"
import { Icon } from "@iconify/react"
import Button from "../custom/button"

export default function Details(): JSX.Element {
    const { subtitle } = useParams()
    const Project = ProjectData.filter((project) => project.subtitle === subtitle)
    const Images = ProjectImages.filter((project) => project.subtitle === subtitle)

    return (
        <div>
            {
                Project.map((project) => (
                    <div className='Home pt-1 pb-10  mt-[70px]'>
                        <div className='sm:px-0 md:px-6 lg:px-8 xl:px-6 overflow-x-hidden overflow-y-hidden'>
                            <div className="flex flex-row gap-10 items-end">
                                <h4 className="text-start lg:text-[8rem] text-[6rem] sm:text-[8rem] md:text-[14rem] font-medium tracking-tighter project-name">{project.title} </h4>
                                <Icon icon="fluent:arrow-turn-right-down-48-regular" width="50px" height="40px" style={{ color: "black" }} />
                            </div>
                            <div className="mt-10 flex flex-row justify-between items-end">
                                <p className="text-start max-w-3xl text-xl lg:text-2xl">Fully designed and launched the school's website, ensuring a user-friendly and responsive interface. <br /> Implemented SEO best practices to enhance search engine visibility.
                                </p>
                                <Button title="Visit Site" link={project.url} id="cap" className="flex items-center gap-2 lg:py-2 py-3 lg:px-10 px-5 rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-medium h-fit"
                                    iconSize="text-[14px]"
                                    target="_blank"
                                >
                                </Button>
                            </div>
                            <div className="h-[620px] rounded-[15px] flex flex-col p-0 justify-between w-full relative mt-10">
                                <img src={project.image} className="rounded-[15px] w-full h-full object-cover content-center " />
                                <div className="rounded-[15px] absolute flex justify-center items-center w-[100%] h-full cursor-pointer bg-black/15 100% transition-all hover:backdrop-blur-sm hover:bg-black/30">
                                </div>
                            </div>
                            {
                                Images.map((image) => (
                                    <>
                                        <div className="flex flex-row-reverse justify-between mt-20">
                                            <div className="flex flex-col justify-center relative w-auto items-center h-[500px] rounded-[15px] mt-10">
                                            <img className="parent-image w-[100%] h-[100%] object-contain" src={image.firstMobile} />
                                                <div className="rounded-[15px] absolute flex justify-center items-center w-[100%] h-full cursor-pointer bg-black/15 100% transition-all">
                                                </div>
                                            </div>
                                            <div className="parent-image w-[75%] h-[450px] flex justify-center items-center relative">
                                                <img className="parent-image w-[100%] h-[100%]" src={image.firstBanner} />
                                                <div className="rounded-[15px] absolute flex justify-center items-center w-[100%] h-full cursor-pointer bg-black/15 100% transition-all">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between mt-10">
                                            <div className="flex flex-col justify-center w-[280px] items-center">
                                                <h4 className="text-start lg:text-[5rem] text-[4rem] sm:text-[5rem] md:text-[4rem] font-medium tracking-tighter project-name">Check <br /> out page  </h4>
                                                <div className="flex flex-col justify-center w-full items-center h-[500px] border-2 border-red-600 rounded-[15px] mt-10">
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-[70%]">
                                                <div className="parent-image w-full h-[450px] flex justify-center items-center relative">
                                                    <img className="parent-image w-[100%] h-[100%]" src={image.secondBanner} />
                                                    <div className="rounded-[15px] absolute flex justify-center items-center w-[100%] h-full cursor-pointer bg-black/15 100% transition-all">
                                                    </div>
                                                </div>
                                                <div className="flex flex-row justify-between items-end mt-[30px]">
                                                    <p className="text-start max-w-[400px] text-xl lg:text-2xl">All these were 100% designed by me using numerous Front End teachnologies</p>
                                                    <Button title="Visit Site" link={project.url} id="cap" className="flex items-center gap-2 lg:py-2 py-3 lg:px-10 px-5 rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-medium h-fit"
                                                        iconSize="text-[14px]"
                                                        target="_blank"
                                                    >
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                ))
            }


        </div>

    )
}