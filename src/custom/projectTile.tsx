import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function ProjectTile(props: any): JSX.Element {
    return (
        <div className="xl:h-[620px] rounded-[15px] flex flex-col p-0 justify-between w-full relative project-tile">
            <img src={props.image} className="rounded-[15px] w-full h-full object-contain xl:object-cover content-center " />
            <div className="rounded-[15px] absolute flex justify-center items-center w-[100%] h-full cursor-pointer bg-black/15 100% transition-all hover:backdrop-blur-sm hover:bg-black/30">
            <a href={props.link}>
                <Icon icon={"ep:top-right"} style={{ color: "white" }}
                    className={`icon hidden rotate-45 hover:rotate-0 transition-all duration-300 xl:w-[7rem] xl:h-[7rem] md:h-[5rem] md:w-[5rem] h-[3rem] w-[3rem] ${props.icon}`}
                />
            </a>
            </div>
        </div>
    )
}