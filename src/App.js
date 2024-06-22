import "./App.css";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="App container m-auto">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
