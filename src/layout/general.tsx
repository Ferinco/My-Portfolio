import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import MobileNav from "../components/mobileNav";
import { useAppContext } from "../context";

export default function General(): JSX.Element {
  const { openNavbar } = useAppContext();

  return (
    <>
      <Navbar />
      <div className={openNavbar ? "fixed" : ""}>
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
      <MobileNav />
    </>
  );
}
