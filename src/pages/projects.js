import { useState } from "react";
import MyProject from "../MyProject.png";
import Porto1 from "../portofolio-1.png";
import Porto2 from "../portofolio-2.png";
import Porto3 from "../portofolio-3.png";
import { Icon } from "@iconify/react";

export default function Projects() {
  const [porto, setPorto] = useState(null);

  const projects = [
    {
      id: 1,
      nama: "Pendataan Tamu Sekolah",
      deskripsi: "Sebuah aplikasi untuk mendata tamu sekolah menggunakan qrcode.",
      teknologi: ["Laravel", "Tailwind CSS"],
      link: "https://github.com/budi-imam-prasetyo/GuBook-PendataanTamu",
      gambar: Porto2
    },
    {
      id: 2, 
      nama: "Website PPLG SMKN 11 Bandung",
      deskripsi: "Website ini dibuat menggunakan WordPress untuk kemudahan pengelolaan konten.",
      teknologi: ["WordPress"],
      link: "https://pplg1.kelas.smkn11bdg.sch.id/",
      gambar: Porto1
    },
    {
      id: 3,
      nama: "Landing Page ROG Phone 7 Ultimate",
      deskripsi: "Dashboard untuk memonitor data dengan visualisasi` chart menggunakan Chart.js.",
      teknologi: ["HTML", "Bootstrap"],
      link: "https://budi-imam-prasetyo.github.io/Landing-Page-ROG/",
      gambar: Porto3
    },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-100 mb-4">Portfolio Proyek</h1>
          <p className="text-xl text-slate-400">Kumpulan karya dan proyek yang telah saya kerjakan</p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Proyek Terbaik 😎</h2>
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition duration-300">
            <div className="grid md:grid-cols-2 gap-8 p-8 group">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-100">Ryo Dev Runner: Frontend & Backend</h3>
                <p className="text-slate-400">VSCode extension untuk memudahkan pengembangan aplikasi Framework JavaScript dengan Laravel. Menjalankan server development frontend dan backend secara bersamaan.</p>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-slate-100">Fitur Utama</h4>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center gap-2">
                      <Icon icon="mdi:check-circle" className="text-blue-500" />
                      Quick start untuk Vue.js frontend dan Laravel backend
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="mdi:check-circle" className="text-blue-500" />
                      Dual terminal automation
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="mdi:check-circle" className="text-blue-500" />
                      Status bar controls
                    </li>
                  </ul>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">VSCode</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Extension</span>
                </div>
                <a href="https://marketplace.visualstudio.com/items?itemName=budiimamprsty.ryodev" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                  Lihat di Marketplace
                  <Icon icon="mdi:arrow-right" />
                </a>
              </div>
              <div className="relative group group-hover:scale-105 transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 opacity-5 group-hover:opacity-10 transition duration-300 rounded-xl"></div>
                <img src={MyProject} alt="Ryo Dev Runner" className="rounded-xl shadow-lg w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Proyek Lainnya</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-700/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition duration-300 cursor-pointer" onClick={() => setPorto(project)}>
                <img src={project.gambar} alt={project.nama} className="w-full h-48 object-cover" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-100">{project.nama}</h3>
                  <p className="text-slate-400">{project.deskripsi}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.teknologi.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {porto && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl max-w-2xl w-full shadow-2xl">
            <img src={porto.gambar} alt={porto.nama} className="w-full h-64 object-cover rounded-t-2xl" />
            <div className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-slate-100">{porto.nama}</h2>
              <p className="text-slate-400">{porto.deskripsi}</p>
              <div className="flex flex-wrap gap-2">
                {porto.teknologi.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end gap-4">
                <button className="px-4 py-2 text-slate-400 hover:text-slate-100 transition" onClick={() => setPorto(null)}>
                  Tutup
                </button>
                <a href={porto.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
                  Lihat Proyek
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
