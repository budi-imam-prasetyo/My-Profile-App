import Header from "./components/Navbar";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/Footer";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <div className="bg-slate-800">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
