import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import Home from "./pages/home";
function App() {
  return (
    <div className="App container m-auto">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
