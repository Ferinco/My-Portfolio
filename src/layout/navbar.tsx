import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../context";
import { NavLinks } from "../data/navigators";

export default function Navbar(): JSX.Element {
  const { active, setActive, openNavbar, setOpenNavbar } = useAppContext();
  const location = useLocation();
  return (
    <div className="flex flex-col px-3 md:px-6 lg:px-8 xl:px-14 lg:gap-0 gap-6 py-3">
      <motion.a
        className="logo-div w-fit bg-transparent text-black cursor-pointer font-semibold text-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9 }}
        href="/"
      >
        Ferinco.
      </motion.a>
      <div className="flex-row gap-8 justify-end items-end z-[999] hidden md:flex">
        {NavLinks.map((link, index) => (
          <a
            href={link.path}
            key={index}
            className={`flex flex-col items-start leading-[0.8] ${
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
        {/* <Icon
          icon="fluent:arrow-turn-down-left-48-regular"
          width="1.7em"
          height="1.7em"
          style={{ color: "black" }}
          className="lg:flex lg:ml-14"
        /> */}
      </div>
      <div className="flex md:hidden justify-end">
      <label htmlFor="check" onClick={()=>{
        openNavbar == true ? setOpenNavbar(false) : setOpenNavbar(true)
      }}>
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
      </label>
      </div>
    </div>
  );
}
