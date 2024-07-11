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
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setLoading(true);
  }, []);
  return (
    <>
      {/* {loading ? (
        <Preloader />
      ) : ( */}
        <div className="App container overflow-x-hidden">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Projects />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      {/* )} */}
    </>
  );
}

export default App;
