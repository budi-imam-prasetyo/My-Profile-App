import { Navbar, Button } from "react-daisyui";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar className="bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-sm p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white flex gap-2 items-center">
          <Icon icon="mdi:code-braces" className="w-8 h-8 text-blue-400" />
          Ryoukaii
        </NavLink>

        <Button className="lg:hidden btn btn-ghost text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} className="w-6 h-6" />
        </Button>

        <div className="hidden lg:flex gap-2">
          <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-500/20 text-blue-400" : "text-slate-400 hover:text-white hover:bg-slate-700/50"}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-500/20 text-blue-400" : "text-slate-400 hover:text-white hover:bg-slate-700/50"}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-500/20 text-blue-400" : "text-slate-400 hover:text-white hover:bg-slate-700/50"}`}>
            Contact
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-500/20 text-blue-400" : "text-slate-400 hover:text-white hover:bg-slate-700/50"}`}>
            Projects
          </NavLink>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-sm p-4 flex flex-col gap-2 border-t border-slate-700">
          <NavLink
            to="/"
            className={({ isActive }) => `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-500/20 text-blue-400" : "text-slate-400 hover:text-white hover:bg-slate-700/50"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-500/20 text-blue-400" : "text-slate-400 hover:text-white hover:bg-slate-700/50"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-500/20 text-blue-400" : "text-slate-400 hover:text-white hover:bg-slate-700/50"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-500/20 text-blue-400" : "text-slate-400 hover:text-white hover:bg-slate-700/50"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </NavLink>
        </div>
      )}
    </Navbar>
  );
}
