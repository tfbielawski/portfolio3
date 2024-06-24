import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Fiction from "./components/Fiction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="w-full h-screen text-2xl font-bold">
      {/* Add a Personal Interest page: hobbies, family, fun, books */}
      {/* <Interests /> */}
      <Router>
        <Navbar />
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/fiction" element={<Fiction />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
