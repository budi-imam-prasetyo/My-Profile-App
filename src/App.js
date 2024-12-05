import Header from "./components/Navbar";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Stars from "./Stars.svg";


function App() {
  return (
    <Router>
      <div className="bg-slate-800">
        <img className="fixed top-0 left-0" src={Stars} alt="stars" />
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
