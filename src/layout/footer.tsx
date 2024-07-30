import { useState } from "react";
import { Icon } from '@iconify/react';
import Button from "../custom/button";
import { SocialLinks } from "../data/socials";
import { NavLinks } from "../data/navigators";
import { useAppContext } from "../context";
import { useLocation } from "react-router-dom";





export default function Footer(): JSX.Element {
    const {active, setActive} = useAppContext()
    const location = useLocation();
    return (
        <div className='flex flex-col px-3 md:px-6 lg:px-8 xl:px-14 mt-[150px]'>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between py-12 border-t-2 border-gray-200 flex-wrap gap-y-6 lg:gap-0">
                    <div className="flex flex-col text-start font-semibold text-xl md:w-[100%] lg:w-[20%]">
                        <h6>Plan.</h6>
                        <h6>Code.</h6>
                        <h6>Innovate.</h6>
                    </div>
                    <div className="flex flex-col text-start lg:w-[42%] md:w-[60%]">
                        <p className="text-start text-2xl">
                            I'm currently seeking a full-time position but I am also available for gigs and freelance work. Send me an email to hire me, let's create something amazing together.                        </p>
                        <a className="text-start text-3xl text-[rgb(0, 105, 255)] email-link text-wrap" href="mailto:ferinco001@gmail.com">ferinco001@gmail.com</a>
                    </div>
                    <div className="flex flex-col lg:w-[20%] gap-2 md:w-[35%] w-[100%]">
                        {
                            SocialLinks.map((social) => (
                                <Button
                                    className="social-link lg:text-4xl text-3xl flex flex-row items-center justify-between"
                                    id={social.name}
                                    title={social.name}
                                    iconSize="text-xl"
                                    target="_blank"
                                    link={social.path}
                                ></Button>
                            ))
                        }

                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <p>2024 Ferinco's Portfolio.</p>
                    <div className='flex flex-row gap-8 justify-end'>
                    {NavLinks.map((link, index) => (
                    <a href={link.path} key={index} className={`flex flex-col items-start leading-4 ${location.pathname === link.path ? "active-link" : "nav-link"}`}
                    onClick={()=>{
                        setActive(link.num)
                    }}>
                        <span className='text-[10px]'>
                            {link.num}
                        </span>
                        <span className='text-sm font-[500]'>
                            {link.name}
                        </span>
                    </a>
                ))
                }
                    </div>
                </div>
                <div className="flex flex-row justify-end mt-[20px]">
                    <div className='logo-div w-[100px] h-[50px] bg-[#679046]'></div>
                </div>

            </div>
        </div>

    )
}
