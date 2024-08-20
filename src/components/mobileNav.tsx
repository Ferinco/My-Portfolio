import { Icon } from "@iconify/react";
import { useAppContext } from "../context";
import { NavLinks } from "../data/navigators";
import { SocialLinks } from "../data/socials";
import Button from "../custom/button";

export default function MobileNav(): JSX.Element {
  const { openNavbar, setOpenNavbar } = useAppContext();

  return (
    <div
      className={`h-[calc(100vh - 110px)] mt-[110px] z-[999999] w-screen left-0 bottom-0 top-0 absolute md:hidden bg-[#f2f2f2] p-3 ${
        openNavbar ? "block" : "hidden"
      }`}
    >
      <div className="nav-list flex flex-col justify-start items-start gap-3">
        {NavLinks.map((link, index) => (
          <a href={link.path} key={index} className="flex gap-3 items-center">
            <span className="text-base">{link.num}</span>
            <span className="font-[500] text-3xl">{link.name}</span>
          </a>
        ))}
      </div>
      <div className="flex gap-1 mt-80">
      <Icon icon="system-uicons:mail" width="2.1em" height="2.1em"  style={{color: "gray"}} />
        <a
          className="text-start text-3xl text-[rgb(0, 105, 255)] email-link text-wrap"
          href="mailto:ferinco001@gmail.com"
        >
          ferinco001@gmail.com
        </a>
      </div>
      <div className="flex justify-between mt-10">
        <p>Hire me so I can afford starlink :)</p>
        <a className="text-blue-600 underline mt-5">hire me</a>
      </div>
      {SocialLinks.map((social, index) => (
              <Button
                className="social-link text-xl flex flex-row items-center justify-between"
                id={social.name}
                title={social.name}
                iconSize="text-xl"
                target="_blank"
                link={social.path}
                key={index}
              ></Button>
            ))}
    </div>
  );
}
