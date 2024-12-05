import { Navbar, Button } from "react-daisyui";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 shadow-lg flex items-center">
        <NavLink to="/" className="text-2xl font-bold text-white flex gap-2 items-center absolute">
          Ryoukaii
        </NavLink>
        <div className="flex justify-center w-full">
            <Button className="btn btn-ghost text-white">
              <NavLink to="/" className="text-xl normal-case">
                Home
              </NavLink>
            </Button>
            <Button className="btn btn-ghost text-white">
              <NavLink to="/about" className="text-xl normal-case">
                About
              </NavLink>
            </Button>
            <Button className="btn btn-ghost text-white">
              <NavLink to="/contact" className="text-xl normal-case">
                Contact
              </NavLink>
            </Button>
            <Button className="btn btn-ghost text-white">
              <NavLink to="/projects" className="text-xl normal-case">
                Projects
              </NavLink>
            </Button>
        </div>
    </Navbar>
  );
}
