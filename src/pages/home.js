import { Button } from "react-daisyui";
import MyLogo from "../MyLogo.png";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 min-h-screen flex flex-col justify-center items-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        <div className="flex flex-col justify-center space-y-6 px-4 order-2 md:order-1">
          <div className="space-y-3">
            <p className="text-blue-400 font-medium text-lg">Selamat Datang di Portfolio Saya</p>
            <h1 className="text-5xl font-bold text-slate-100 leading-tight">Budi Imam Prasetyo</h1>
            <h2 className="text-2xl text-slate-300">Frontend Developer & UI/UX Designer</h2>
          </div>

          <p className="text-slate-400 text-lg">"Turning Concepts into Code"</p>

          <div className="flex flex-wrap gap-4">
            <Button className="btn btn-primary">
              <NavLink className="flex items-center" to="/projects">
                Lihat Proyek
                <Icon icon="mdi:rocket-launch" className="w-5 h-5 ml-2" />
              </NavLink>
            </Button>
            <Button className="btn btn-primary btn-outline">
              <NavLink className="flex items-center" to="/projects">
                Tentang Saya
                <Icon icon="mdi:arrow-right" className="w-5 h-5 ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            <img src={MyLogo} alt="Budi Imam Prasetyo" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover relative z-10 border-4 border-slate-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
