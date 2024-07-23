import { Icon } from "@iconify/react"

export const Separation = (props: any): JSX.Element => {
    return (
        <div className="flex flex-row items-center justify-between">
        <div className="w-[35px] h-[35px] lg:w-[40px] sm:w-[30px] sm:h-[30px] border-[1px] border-black rounded-[50%] lg:h-[40px] flex justify-center items-center  lg:text-xl">{props.role}</div>
        <div className="hidden sm:flex separation-line w-[87%] lg:w-[90%] border-b-[1px] border-gray-400"></div>
        <Icon icon="fluent:arrow-turn-down-left-20-regular" className="lg:w-[40px] sm:w-[30px] sm:h-[30px] lg:h-[40px] hidden sm:flex" style={{ color: "black" }} />
        </div>
    )
}