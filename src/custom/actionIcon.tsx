import { Icon } from "@iconify/react"
import { useState } from "react"

export default function ActionIcon(): JSX.Element {

    const [hovered, setHovered] = useState<boolean>(false)

    const handleMouseEnter = (): void => {
        setHovered(true)

    }
    const handleMouseLeave = (): void => {
        setHovered(false)
    }
    return (
        <Icon icon={hovered ? "ep:top-right" : "majesticons:arrow-right"} width="1.2em" height="1.2em" style={{ color: "black" }}
            className="transition-all  duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    )
}