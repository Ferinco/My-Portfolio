import { Icon } from "@iconify/react";
import PhotoGrid from "../components/photoGrid";
import Button from "../custom/button";

export default function About(): JSX.Element {
    return (
        <div className='Home pt-1 pb-10  mt-[70px]'>
            <div className='sm:px-0 md:px-6 lg:px-8 xl:px-6 overflow-x-hidden overflow-y-hidden'>
                <div className="flex flex-row gap-10 items-baseline">
                <h4 className="text-start lg:text-[17rem] text-[6rem] sm:text-[8rem] md:text-[14rem] font-medium tracking-tighter">About </h4>
                <Icon icon="fluent:arrow-turn-right-down-48-regular" width="35px" height="30px"  style={{color: "black"}}/>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:mt-0 mt-[70px]">
                    <div className="flex flex-col text-start text-5xl lg:text-7xl w-[40%]">
                        <p>Plan.</p>
                        <p>Code.</p>
                        <p>Innovate.</p>
                    </div>
                    <div className="flex flex-col text-start lg:w-[55%] gap-3">
                        <p className="text-2xl lg:mt-0 mt-10">Driven by the passion to always outdo myself in delivering appealing and user-friendly websites that don't just meet the demand of the users, but alse engage and inspire them.</p>
                        <div className="flex flex-row flex-wrap justify-between text-base">
                            <p className="lg:w-[280px] w-full mt-2">With my in-depth knowledge of various front-end technologies, I am able to bring designs to life. Being able to innovate when and after I plan and code has always helped me stand out. </p>
                            <p className="lg:w-[280px] w-full mt-2">Whether I am working on a small project for a local business or a large-scale application for a global brand, I approach each task with the same level of enthusiasm and attention to detail.</p>
                            <p className="lg:w-[300px] mt-3">I am constantly learning and adapting to new technologies and trends in order to stay ahead of the curve and deliver the best possible results for my clients. </p>
                        </div>
                    </div>
                </div>
                <div className="images flex flex-row mt-20 h-fit justify-between">
                    <div className="image-1 border-2 border-red-500 w-[70%] h-[400px]"></div>
                    <div className="flex flex-col h-[400px] w-[27%] justify-between">
                        <div className="border-2 border-red-500 h-[40%]">
                            
                        </div>
                        <div className="border-2 border-red-500 h-[57%]"></div>

                    </div>
                </div>
                {/* <div className="mt-[70px]">

                <PhotoGrid/>
                </div> */}
                <div className="employ flex flex-col lg:flex-row mt-20 h-fit justify-between">

                <div className="flex flex-col text-start lg:gap-24 gap-4">
                    <p>Hire me</p>
                    <div className="flex flex-col gap-3">
                    <p className="text-2xl">Would you like to hire me?</p>
                    <p className="text-3xl w-[400px]">I am definitly that addition your team needs, I bring the skills, talent and creativity.</p>
                    <a className="text-start text-sm text-[rgb(0, 105, 255)] email-link font-semibold">Hire me</a>
                    </div>
                </div>
                <div className="flex flex-col text-start mt-12 lg:mt-0 lg:gap-24 gap-4">
                    <p>Contact</p>
                    <div>
                    <p className="text-2xl">Send me an email</p>
                    <a className="text-start text-3xl text-[rgb(0, 105, 255)] email-link">ferinco001@gmail.com</a>
                    {/* <p>Hire me, so I can afford starlink.</p> */}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}