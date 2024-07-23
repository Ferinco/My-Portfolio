import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
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
        path: "/about"
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
        <div className='flex flex-col pr-3 md:pr-6 lg:pr-8 xl:pr-14 lg:gap-0 gap-6'>
            <motion.div className="logo-div w-[70px] h-[100px] bg-[#679046] text-white flex flex-col"
                initial={{ x: -100}}
                animate={{ x: 0 }}
                transition={{ duration: 0.9 }}
            ></motion.div>
            <div className='flex flex-row gap-8 justify-end items-end z-[999]'>
                {NavLinks.map((link, index) => (
                    <a href={link.path} key={index} className='flex flex-col items-start leading-4 nav-link'>
                        <span className='text-[10px]'>
                            {link.num}
                        </span>
                        <span className='text-sm font-[500]'>
                            {link.name}
                        </span>
                    </a>
                ))
                }
                <Icon icon="fluent:arrow-turn-down-left-48-regular" width="1.7em" height="1.7em" style={{ color: "black" }} className='lg:flex lg:ml-14' />
            </div>
        </div>
    )
}
