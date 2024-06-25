import "./App.css";
import Footer from "./layout/footer";
import HeroSection from "./components/hero";
import Navbar from "./layout/navbar";
import Home from "./pages/home";
import { useEffect, useState } from "react";
import Preloader from "./custom/preloader";
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
      {loading ? (
       <Preloader/>
      ) : (
        <div className="App container m-auto">
          <Navbar />
          <Home />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
