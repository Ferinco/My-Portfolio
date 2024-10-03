import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import { useAppContext } from "../context";
import MobileNav from "../components/mobileNav";

export default function NoFooter(): JSX.Element {
    const {openNavbar } = useAppContext();

    return (
        <>
            <Navbar />
            <div className={openNavbar ? "fixed container" : "container"}>
                <Outlet />
            </div>
            <MobileNav/>
        </>
    )
}