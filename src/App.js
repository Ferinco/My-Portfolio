import "./App.css";
import Footer from "./layout/footer";
import HeroSection from "./components/hero";
import Navbar from "./layout/navbar";
import Home from "./pages/home";
import { useEffect, useState } from "react";
import Preloader from "./custom/preloader";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Details from "./pages/projectDetails";
import { useAppContext } from "./context";
import ZoomedDiv from "./custom/ZoomedDiv";
import Gallery from "./pages/gallery";
import Button from "./custom/button";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import General from "./layout/general";
import Contact from "./pages/contact";
import NoFooter from "./layout/noFooterLayout";
function App() {
  AOS.init();
  const { openZoom, active } = useAppContext();
  return (
    <>
      {openZoom === false ? (
        <div className="flex flex-col">
          <div className="App overflow-x-hidden">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<General />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/work" element={<Projects />} />
                  <Route path="/work/:subtitle" element={<Details />} />
                  <Route path="/work/:subtitle/gallery" element={<Gallery />} />
                </Route>
                <Route path="/contact" element={<NoFooter />}>
                  <Route index element={<Contact />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
          <motion.div
            className="fixed w-screen h-fit flex justify-end items-end p-5 bottom-0"
            initial={{ opacity: -10 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <Button
              title="Hire Me!"
              iconSize="hidden"
              className="flex items-center gap-2 py-3 px-12 rounded-full  border bg-[#0069FF] border-[#0069FF] text-white text-sm w-fit font-medium hire-btn z-[999]"
              link="mailto:ferinco001@gmail.com?subject=Inquiry&body=Hello%20Ferinco,%20I%20would%20like%20to%20hire%20you."
              target="_blank"
            ></Button>
          </motion.div>
        </div>
      ) : (
        <ZoomedDiv />
      )}
    </>
  );
}

export default App;
