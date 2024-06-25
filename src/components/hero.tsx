import Button from "../custom/button";

export default function HeroSection(): JSX.Element {
    return (
        <div className='px-3 md:px-6 lg:px-8 xl:px-14 mt-8 overflow-x-hidden overflow-y-hidden'>
            <div className="flex flex-col text-start">
                <div className="flex flex-row justify-between items-end">
                    <h1 className="lg:text-[20rem] leading-none text-[7rem] md:text-[14rem] font-[500] lg:font-[900] lg:tracking-wide lg:text-pretty md:text-balance">Ferinco</h1>
                    <div className="hidden xl:flex flex-col gap-4 h-full my-auto">
                        <p>Coding For</p>
                        <div className="text-sm sm:text-xl md:text-2xl xl:text-4xl font-medium">
                            <p>Development.</p>
                            <p>Planning.</p>
                            <p>Design.</p>
                        </div>
                    </div>
                </div>
                <h1 className="lg:text-[20rem] leading-none text-[7rem] md:text-[14rem] font-[500] lg:font-[900] lg:tracking-wide lg:text-pretty md:text-balance">Emmanuel</h1>
                <div className="xl:hidden flex flex-col mt-11 gap-9">
                    <p className="lg:text-Paragraph-md md:text-Paragraph-sm text-Paragraph-sm space-x-4 text-wrap text-2xl md:text-4xl leading-normal w-[75%]">
                        A Frontend developer that conjures innovation to create extraordinary experiences.
                    </p>
                    <Button title="ferinco001@gmail.com"></Button>
                </div>
            </div>
        </div>
    )
}