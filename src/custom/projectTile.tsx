export default function ProjectTile( props :any):JSX.Element{
    return(
        <div className="h-[600px] rounded-[15px] flex flex-col p-0 justify-between w-full">
        <img src={props.image} className="rounded-[15px] w-full h-full object-contain content-center"/>

        </div>
    )
}