import React from 'react'
import { NavLink } from 'react-router-dom';
interface Link {
    num: number;
    name: string;
    path: string;
}
const NavLinks: Array<Link> = [
    {
        num: 1,
        name: "About",
        path: "/"
    },
    {
        num: 2,
        name: "Work",
        path: "/work"
    }, {
        num: 3,
        name: "Contact",
        path: "/contact"
    },
]
export default function Navbar(): JSX.Element {
    return (
        <div className='flex flex-col px-3 md:px-6 lg:px-8 xl:px-14'>
            <div className='logo-div w-[100px] h-[50px] bg-[#679046]'></div>
            <div className='flex flex-row gap-8 justify-end'>
                {NavLinks.map((link, index) => (
                    <a href={link.path} key={index} className='flex flex-col items-start leading-4'>
                        <span>
                            {link.num}
                        </span>
                        <span>
                            {link.name}
                        </span>
                    </a>
                ))
                }
            </div>
        </div>
    )
}
