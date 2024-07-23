import { Icon } from "@iconify/react";
import { useAppContext } from "../context"
import { ProjectData, ProjectImages } from "../Data"
import Button from "./button";

export default function ZoomedDiv(): JSX.Element {
    const { zoomedImage, name, setZoomedImage, setOpenZoom } = useAppContext()
    const filteredImages = ProjectData.filter(project => project.subtitle === name);
    console.log(filteredImages[0])
    return (
        <>

            <div className="w-screen h-screen flex flex-col justify-between items-center p-5 absolute">
                <div className="flex justify-end w-full"><Icon icon="iconoir:cancel" width="1.7rem" height="1.7rem" style={{ color: "black" }} className="cursor-pointer" onClick={() => {
                    setOpenZoom(false)
                }} /></div>
                <div className="flex md:flex-row gap-10 flex-col">
                    <div className="xl:flex flex-col justify-between hidden">
                        <div>
                            <p>Project Images</p>
                            <h1>{name}</h1>
                        </div>
                        <div>
                            <h1>{filteredImages[0].images.length + 1}</h1>
                            <p>Images</p>
                        </div>
                    </div>
                    <div className="w-[400px] sm:w-auto xl:w-[900px] h-fit justify-center object-contain">
                        <img src={zoomedImage} />
                    </div>

                    <div className="sm:flex md:flex-col gap-2 justify-end flex-row hidden">

                        {filteredImages[0].images.map((url) => (
                            <div className="w-40 h-20 overflow-hidden cursor-pointer"
                                onClick={() => {
                                    setZoomedImage(url)
                                }}
                            >
                                <img src={url} className="object-contain" />
                            </div>))}
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <h1>
                    </h1>
                    {/* <a href="/work" className="text-base font-medium">Other Projects</a> */}
                    <Button
                        className="text-base font-medium flex flex-row items-center justify-between gap-1"
                        title={"View Site"}
                        iconSize="text-sm"
                    ></Button>
                </div>
            </div>

        </>
    )
}