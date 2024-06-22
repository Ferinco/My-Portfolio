export default function PhotoGrid(): JSX.Element{
return(
    <div className='px-3 md:px-6 lg:px-8 xl:px-14 mt-40 flex flex-col lg:flex-row justify-between gap-5 lg:gap-0'>
        <div className="h-[500px] w-full lg:w-[68%] border-2 border-red-400"></div>
        <div className="h-[500px] w-full lg:w-[28%] border-2 border-red-400"></div>
    </div>
)
}