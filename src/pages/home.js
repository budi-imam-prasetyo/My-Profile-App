import { Button } from "react-daisyui";
import MyLogo from "../MyLogo.png";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 min-h-screen flex flex-col justify-around items-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full max-w-6xl">
        <div className="md:col-span-3 flex flex-col justify-center items-start space-y-4 px-4">
          <h1 className="text-2xl font-bold text-slate-300">"Turning Concepts into Code"</h1>
          <h2 className="text-5xl font-bold text-slate-100">Hai!! Namaku Budi Imam Prasetyo</h2>
          <h3 className="text-3xl font-semibold text-slate-100">Saya seorang Frontend Developer</h3>
          <div className="flex space-x-4 mt-5">
            <Button className="btn btn-primary ">
              <NavLink className="flex items-center justify-center" to="/about">
                Tentang Saya
                <Icon icon="mdi:arrow-right" className="w-5 h-5 ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center items-center">
          <img src={MyLogo} alt="Logo" className="w-3/4 md:w-1/2 rounded-full shadow-sm shadow-white" />
        </div>
      </div>

      
    </div>
  );
}
