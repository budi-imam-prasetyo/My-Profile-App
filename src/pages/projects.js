import { useState } from "react";
import MyProject from "../MyProject.png";
import { Icon } from "@iconify/react";



export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      nama: "Pendataan Tamu Sekolah",
      deskripsi: "Sebuah aplikasi untuk mendata tamu sekolah menggunakan qrcode.",
      teknologi: ["Laravel", "Tailwind CSS"],
      link: "https://github.com/budi-imam-prasetyo/GuBook-PendataanTamu",
    },
    {
      id: 2,
      nama: "Website PPLG SMKN 11 Bandung",
      deskripsi: "Website ini dibuat menggunakan WordPress untuk kemudahan pengelolaan konten.",
      teknologi: ["WordPress"],
      link: "https://pplg1.kelas.smkn11bdg.sch.id/",
    },
    {
      id: 3,
      nama: "Landing Page ROG Phone 7 Ultimate",
      deskripsi: "Dashboard untuk memonitor data dengan visualisasi chart menggunakan Chart.js.",
      teknologi: ["HTML", "Bootstrap"],
      link: "https://budi-imam-prasetyo.github.io/Landing-Page-ROG/",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 min-h-screen flex flex-col justify-evenly items-center p-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-slate-100">Kumpulan Project</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl my-8">
        <div className="bg-slate-700 overflow-hidden rounded-xl shadow-lg cursor-pointer">
          <img src={MyProject} alt="Logo" className="w-full shadow-xl" />
          <div className="p-6">
            <a href="https://marketplace.visualstudio.com/items?itemName=budiimamprsty.ryodev" className="text-2xl font-semibold text-slate-100 hover:text-blue-500">
              Ryo Dev Runner: Frontend & Backend
              <Icon icon="mdi:link" className="w-5 h-5 ml-2 inline" />
            </a>
            <p className="text-slate-400 mt-4">
              Ryo Dev adalah VSCode extension yang memudahkan pengembangan aplikasi Framework JavaScript dengan Laravel. Extension ini memungkinkan Anda menjalankan server development frontend dan backend secara bersamaan dengan satu klik.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-slate-100">Features</h3>
              <ul className="list-disc list-inside text-slate-400 mt-2 space-y-2">
                <li>🚀 Quick start untuk Vue.js frontend dan Laravel backend</li>
                <li>
                  💻 Menjalankan dua terminal secara otomatis (<code>npm run dev</code> dan <code>php artisan serve</code>)
                </li>
                <li>🔄 Toggle start/stop dengan mudah melalui status bar</li>
                <li>⚡ Mendukung dua mode: Dev Serve dan Vue Laravel</li>
                <li>📁 Konfigurasi folder frontend dan backend yang fleksibel</li>
              </ul>
            </div>
            <div className="flex space-x-2 mt-4">
              <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">TypeScript</span>
              <span className="bg-green-500 text-white text-sm px-2 py-1 rounded">VSCode</span>
              <span className="bg-purple-500 text-white text-sm px-2 py-1 rounded">Extension</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-lg text-slate-400">Beberapa project yang telah saya kerjakan, klik untuk melihat detailnya.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-slate-700 p-6 rounded-lg shadow-lg hover:scale-105 transition transform flex flex-col justify-around duration-300 cursor-pointer" onClick={() => setSelectedProject(project)}>
            <h2 className="text-2xl font-semibold text-slate-100">{project.nama}</h2>
            <p className="text-slate-400 mt-2">{project.deskripsi.substring(0, 50)}...</p>
            <div className="flex space-x-2 mt-4">
              {project.teknologi.map((tech, idx) => (
                <span key={idx} className="bg-blue-500 text-white text-sm px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-slate-800 p-8 rounded-lg max-w-md w-full shadow-lg">
            <h2 className="text-3xl font-bold text-slate-100">{selectedProject.nama}</h2>
            <p className="text-slate-400 mt-4">{selectedProject.deskripsi}</p>
            <div className="flex flex-wrap space-x-2 mt-4">
              {selectedProject.teknologi.map((tech, idx) => (
                <span key={idx} className="bg-green-500 text-white text-sm px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button className="text-slate-400 hover:text-slate-100" onClick={() => setSelectedProject(null)}>
                Tutup
              </button>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Lihat Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
