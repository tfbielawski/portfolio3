import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";


function App() {
  return (
    <div className="w-full h-screen text-2xl font-bold">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
