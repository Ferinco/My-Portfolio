import { Icon } from "@iconify/react"

type SubHeaderProps = {
    title: string;
};

export const SubHeader: React.FC<SubHeaderProps> = ({ title }) => {
    return (
        <div>
            <div className="flex flex-row gap-10 items-baseline">
                <h4 className="text-start lg:text-[15rem] text-[5rem] sm:text-[8rem] md:text-[10rem] font-medium tracking-tighter">
                    {title}
                </h4>
                <Icon icon="fluent:arrow-turn-right-down-48-regular" width="35px" height="30px" style={{ color: "black" }} />
            </div>
        </div>
    );
};