import Button from "../custom/button";

export default function HeroSection(): JSX.Element {
    return (
        <div className='px-3 md:px-6 lg:px-8 xl:px-14  overflow-x-hidden overflow-y-hidden'>
            <div className="flex flex-col text-start">
                <div className="flex flex-col-reverse sm:flex-col text-start gap-6">
                <h1 className="sm:hidden flex lg:text-[20rem] leading-none text-[7rem] sm:text-[8rem] md:text-[14rem] font-[500] sm:font-[700] lg:font-[900] tracking-normal lg:tracking-wide lg:text-pretty md:text-balance  lg:mt-[-50px]">Emma.</h1>
                <div className="flex flex-row items-end gap-9">
                    <h1 className="lg:text-[25rem] text-[7rem] sm:text-[8rem] md:text-[14rem] font-[500] sm:font-[700] lg:font-[500] tracking- lg:text-pretty md:text-balance text-wrap leading-none lg:tracking-normal">Ferinco</h1>
                    {/* <div className="hidden xl:flex flex-col gap-4 h-full my-auto">
                        <p>what I do</p>
                        <div className="text-sm sm:text-xl md:text-2xl xl:text-4xl font-semibold">
                            <p>Plan,</p>
                            <p>Code &</p>
                            <p>Innovate. &nbsp; &nbsp;&nbsp;</p>
                            
                        </div>
                    </div> */}
                </div>
                {/* <h1 className="hidden sm:flex lg:text-[20rem] leading-none text-[7rem] sm:text-[8rem] md:text-[14rem] font-[500] sm:font-[700] lg:font-[900] tracking-normal lg:tracking-wide lg:text-pretty md:text-balance  lg:mt-[-50px]">Emmanuel</h1> */}
                {/* <h1 className="flex sm:hidden lg:text-[20rem] leading-none text-[7rem] sm:text-[8rem] md:text-[14rem] font-[500] sm:font-[700] lg:font-[900] tracking-normal lg:tracking-wide lg:text-pretty md:text-balance  lg:mt-[-50px]">Olawale</h1> */}
                </div>
                <div className="xl:hidden flex flex-col mt-11 gap-9">
                    <p className="lg:text-Paragraph-md md:text-Paragraph-sm text-Paragraph-sm space-x-4 text-wrap text-2xl md:text-4xl leading-normal ms:w-[75%] w-full">
                        A Frontend developer that conjures innovation to create extraordinary experiences.
                    </p>
                    <Button title="ferinco001@gmail.com" link="/projects" id="email" className="flex items-center gap-2 lg:py-4 py-3 lg:px-10 px-5 rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-medium"></Button>
                </div>
            </div>
        </div>
    )
}