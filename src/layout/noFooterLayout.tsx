import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function NoFooter(): JSX.Element {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}