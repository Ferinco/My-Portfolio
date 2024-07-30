import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../context";
import { NavLinks } from "../data/navigators";

export default function Navbar(): JSX.Element {
  const { active, setActive, openNavbar, setOpenNavbar } = useAppContext();
  const location = useLocation();
console.log(openNavbar)
  return (
    <div className="flex flex-col pr-3 md:pr-6 lg:pr-8 xl:pr-14 lg:gap-0 gap-6">
      <motion.a
        className="logo-div w-[70px] h-[100px] bg-[#679046] text-white flex flex-col cursor-pointer"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9 }}
        href="/"
      >
        
      </motion.a>
      <div className="flex-row gap-8 justify-end items-end z-[999] hidden md:flex">
        {NavLinks.map((link, index) => (
          <a
            href={link.path}
            key={index}
            className={`flex flex-col items-start leading-4 ${
              location.pathname === link.path ? "active-link" : "nav-link"
            }`}
            onClick={() => {
              setActive(link.num);
            }}
          >
            <span className="text-[10px]">{link.num}</span>
            <span className="text-sm font-[500]">{link.name}</span>
          </a>
        ))}
        <Icon
          icon="fluent:arrow-turn-down-left-48-regular"
          width="1.7em"
          height="1.7em"
          style={{ color: "black" }}
          className="lg:flex lg:ml-14"
        />
      </div>
      {/* <div className="flex md:hidden justify-end">
      <label htmlFor="check" onClick={()=>{
        setOpenNavbar(prev => !prev)
      }}>
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
      </label>
      </div> */}
    </div>
  );
}
