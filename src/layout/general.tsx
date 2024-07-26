import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function General():JSX.Element{
    return(
        <>
        <Navbar/>
        <div className="container">
        <Outlet/>
        </div>
        <Footer/>
        </>
    )
}