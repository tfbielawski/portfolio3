import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Interests from "./components/Interests";


function App() {
  return (
    <div className="w-full h-screen text-2xl font-bold">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* Add a Personal Interest page: hobbies, family, fun, books */}
      <Interests />
    </div>
  );
}

export default App;
