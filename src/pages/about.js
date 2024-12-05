import { Button } from "react-daisyui";
import MyLogo from "../MyLogo.png";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <img src={MyLogo} alt="Budi Imam Prasetyo" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover relative z-10 border-4 border-slate-700 shadow-xl" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-5xl font-bold text-slate-100">Tentang Saya</h1>
            <div className="space-y-4">
              <p className="text-lg text-slate-400">
                Hai! Saya Budi Imam Prasetyo, lahir pada 03 Oktober 2006. Saya seorang siswa kelas XII dari SMKN 11 Bandung jurusan Rekayasa Perangkat Lunak. Saya sangat menyukai hal tentang desain terlebih lagi dalam desain UI/UX. Walaupun
                begitu, terkadang saya suka mengulik hal lain yang justru tidak ada kaitannya dengan desain.
              </p>
            </div>
            <div className="flex gap-4">
              <Button className="btn btn-primary">
                <NavLink to="/projects" className="flex items-center gap-2">
                  Lihat Proyek
                  <Icon icon="mdi:rocket-launch" className="w-5 h-5" />
                </NavLink>
              </Button>
              <Button className="btn btn-outline">
                <NavLink to="/contact" className="flex items-center gap-2">
                  Hubungi Saya
                  <Icon icon="mdi:email" className="w-5 h-5" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-slate-100 text-center mb-12">Keahlian & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition duration-300 cursor-pointer">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon icon="mdi:code-tags" className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">Frontend Dev</h3>
              <p className="text-slate-400">React, Vue, TailwindCSS, Bootstrap</p>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition duration-300 cursor-pointer">
              <div className="bg-pink-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon icon="mdi:palette" className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">UI/UX Design</h3>
              <p className="text-slate-400">Figma, Penpot</p>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition duration-300 cursor-pointer">
              <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon icon="mdi:git" className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">Version Control</h3>
              <p className="text-slate-400">Git, GitHub, GitLab</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
