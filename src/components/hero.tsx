export default function HeroSection(): JSX.Element {
    return (
        <div className='px-3 md:px-6 lg:px-8 xl:px-14 mt-40'>
            <div className="flex flex-col text-start">
                <div className="flex flex-row justify-between items-end">
                    <h1 className="lg:text-[20rem] leading-none text-[8rem] md:text-[14rem] font-[600] lg:font-[900] tracking-wide">Ferinco</h1>
                    <div className="hidden xl:flex flex-col gap-4 h-full my-auto">
                        <p>Coding For</p>
                        <div className="text-sm sm:text-xl md:text-2xl xl:text-4xl font-medium">
                            <p>Development.</p>
                            <p>Planning.</p>
                            <p>Design.</p>
                        </div>
                    </div>
                </div>
                <h1 className="lg:text-[20rem] leading-none text-[8rem] md:text-[14rem] font-[600] lg:font-[900] tracking-wide">Emmanuel.</h1>
                <div className="xl:hidden flex flex-col mt-8">
                    <p className="text-2xl">
                    A Frontend developer who strategizes, codes, and conjures innovation to create extraordinary experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}