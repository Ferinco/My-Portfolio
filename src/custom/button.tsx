import { Icon } from "@iconify/react";
import ActionIcon from "./actionIcon";
import { useState } from "react";

export default function Button(props: any): JSX.Element {
    const [hovered, setHovered] = useState<string>("none")
    const handleMouseEnter = (): void => {
        setHovered(props.id)

    }
    const handleMouseLeave = (): void => {
        setHovered("none")
    }
    return (
        <a className={`${props.className} cursor-pointer`} href={props.link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {props.title}
            <Icon icon={"ep:top-right"} width="1.2em" height="1.2em" style={{ color: "black" }}
                 className={hovered === props.id ? "rotate-45 transition-all duration-300" : "rotate-0 transition-all duration-300"}
            />
        </a>
    )
}
