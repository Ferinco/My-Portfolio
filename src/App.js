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
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  const { openZoom } = useAppContext();
  return (
    <>
      {openZoom === false ? (
        <div className="flex flex-col">
          <div className="App overflow-x-hidden">
            <BrowserRouter>
              <Navbar />
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/work" element={<Projects />} />
                  <Route path="/work/:subtitle" element={<Details />} />
                  <Route path="/work/:subtitle/gallery" element={<Gallery />} />
                </Routes>
              </div>
              <Footer />
            </BrowserRouter>
          </div>
          <motion.div
            className="fixed w-screen h-screen flex justify-end items-end p-5"
            initial={{ opacity: -10 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9}}
          >
            <Button
              title="Hire Me!"
              iconSize="hidden"
              className="flex items-center gap-2 py-3 px-12 rounded-full  border bg-[#0069FF] border-[#0069FF] text-white text-sm w-fit font-medium hire-btn z-[999]"
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
