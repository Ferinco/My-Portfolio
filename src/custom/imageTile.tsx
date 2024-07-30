export const BigTile =(props: any): JSX.Element => {
    return(
        <div className={`xl:w-[70%] w-full flex gap-3 ${props.flexType}`}>
        <div className="w-[30px] h-[30px] border-[1px] border-black rounded-[50%] flex justify-center items-center text-xl">{props.role}</div>
        <div className="parent-image w-full xl:h-[450px] flex justify-center items-center relative xl:object-cover object-contain">
            <img className="parent-image w-[100%] h-[100%] rounded-[15px]" src={props.image} />
            <div className="rounded-[15px] absolute flex justify-center items-center w-[100%] h-full bg-black/15 100% transition-all">
            </div>
        </div>
    </div>
    )
}
export const SmallTile =(props: any): JSX.Element => {
    return(
        <div className= {`hidden md:flex gap-3 ${props.flexType}`}>
        <div className="flex flex-col justify-center relative w-[280px] items-center h-[450px] rounded-[15px] overflow-hidden">
            <img className="parent-image w-[100%] h-full object-cover object-top" src={props.image} />
            <div className="absolute flex justify-center items-center w-[100%] h-[450px] bg-black/15 100% transition-all">
            </div>
        </div>
        <div className="w-[30px] border-[1px] border-black rounded-[50%] h-[30px] flex justify-center items-center text-xl">{props.role}</div>

    </div>
    )
}