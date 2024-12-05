import { Button } from "react-daisyui";
import MyLogo from "../MyLogo.png";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 min-h-screen flex flex-col justify-around items-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full max-w-6xl">
        <div className="md:col-span-2 flex justify-center items-center">
          <img src={MyLogo} alt="Logo" className="w-3/4 md:w-1/2 rounded-full shadow-lg shadow-white" />
        </div>
        <div className="md:col-span-3 flex flex-col justify-center items-start space-y-4 px-4">
          <h1 className="text-5xl font-bold text-slate-100">Tentang Saya</h1>
          <p className="text-lg text-slate-400">
            Hai! Saya Budi Imam Prasetyo, saya saat ini adalah seorang siswa kelas XII dari SMKN 11 Bandung dengan jurusan Rekayasa Perangkat Lunak. Saya sangat menyukai hal tentang desain terlebih lagi dalam desain UI/UX. Walaupun begitu,
            terkadang saya suka mengulik hal lain yang tidak ada kaitannya dengan desain.
          </p>
          <p className="text-lg text-slate-400">Selain coding, saya juga menyukai tantangan baru, mengeksplorasi teknologi terkini, dan berkolaborasi dalam tim untuk menciptakan solusi inovatif.</p>
          <div className="flex space-x-4 mt-5">
            <Button className="btn btn-outline flex items-center justify-center">
              <NavLink to="/projects" className="flex items-center">
                Proyek Saya
                <Icon icon="mdi:folder-outline" className="w-5 h-5 ml-2" />
              </NavLink>
            </Button>
            <Button className="btn btn-primary flex items-center justify-center">
              <NavLink to="/contact" className="flex items-center">
                Hubungi Saya
                <Icon icon="mdi:email-outline" className="w-5 h-5 ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="w-full h-1 bg-slate-700 my-8"></div>
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-slate-100">Keahlian Saya</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center">
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <Icon icon="mdi:code-tags" className="w-10 h-10 text-blue-400 mx-auto" />
            <p className="text-slate-100 mt-2">Frontend Development</p>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <Icon icon="mdi:palette" className="w-10 h-10 text-pink-400 mx-auto" />
            <p className="text-slate-100 mt-2">UI/UX Design</p>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <Icon icon="mdi:responsive" className="w-10 h-10 text-green-400 mx-auto" />
            <p className="text-slate-100 mt-2">Responsive Design</p>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <Icon icon="mdi:github" className="w-10 h-10 text-gray-400 mx-auto" />
            <p className="text-slate-100 mt-2">Version Control</p>
          </div>
        </div>
      </div>
    </div>
  );
}
