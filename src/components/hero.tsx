export default function HeroSection(): JSX.Element{
    return(
        <div className='px-3 md:px-6 lg:px-8 xl:px-14 mt-40'>
            <div className="flex flex-col text-start">
                <div className="flex flex-row justify-between items-end">
           <h1 className="lg:text-[20rem] leading-none text-[7rem] md:text-[8rem]">Ferinco</h1> 
<div className="flex flex-col gap-4 h-full my-auto">
    <p>Coding For</p>
    <div className="text-4xl font-medium">
    <p>Development.</p>
    <p>Planning.</p>
    <p>Design.</p>
    </div>
</div>
                </div>
           <h1 className="lg:text-[20rem] leading-none text-[7rem] md:text-[8rem]">Emmanuel.</h1> 
         </div>
        </div>
    )
}