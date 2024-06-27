import Button from "../custom/button";

export default function About(): JSX.Element {
    return (
        <div className='Home pt-1 pb-10  mt-[70px]'>
            <div className='sm:px-0 md:px-6 lg:px-8 xl:px-6 overflow-x-hidden overflow-y-hidden'>
                <h4 className="text-start text-[17rem] font-medium tracking-tighter">About</h4>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col text-start text-7xl w-[40%]">
                        <p>Plan.</p>
                        <p>Code.</p>
                        <p>Innovate.</p>
                    </div>
                    <div className="flex flex-col text-start w-[55%] gap-4">
                        <p className="text-3xl">design we ddghd ghjgshgs abd intreriuis streetscaoes and bak=dbscpaw graphics and way finsing we jabe 65 prosionalls ins sufgdw uy wygwuwuwgw gwyugyww gyu</p>
                        <div className="flex flex-row flex-wrap justify-between text-base">
                            <p className="w-[300px] mt-4">bsgdgwd iweguywgewbgu uguwigeuwgiu uguywgfuyegw uegwuegfwyg uguygwgyug yuw gvyugyugfwue guywfdgfwdu </p>
                            <p className="w-[300px] mt-4">bsgdgwd iweguywgewbgu uguwigeuwgiu uguywgfuyegw uegwuegfwyg uguygwgyug yuw gvyugyugfwue guywfdgfwdu </p>
                            <p className="w-[300px] mt-4">bsgdgwd iweguywgewbgu uguwigeuwgiu uguywgfuyegw uegwuegfwyg uguygwgyug yuw gvyugyugfwue guywfdgfwdu </p>
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
                <div className="employ flex flex-row mt-20 h-fit justify-between">

                <div className="flex flex-col text-start gap-24">
                    <p>Hire me</p>
                    <div className="flex flex-col gap-3">
                    <p className="text-2xl">Would you like to hire me?</p>
                    <p className="text-3xl w-[400px]">I am definitly that addition your team needs, I bring the skills, talent and creativity.</p>
                    <a className="text-start text-sm text-[rgb(0, 105, 255)] email-link font-semibold">Hire me</a>
                    </div>
                </div>
                <div className="flex flex-col text-start gap-24">
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