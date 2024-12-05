import { Button } from "react-daisyui";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-100 mb-4">Hubungi Saya</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-slate-100">Media Sosial</h1>
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Icon icon="mdi:email" className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">Email</h3>
                  <a href="mailto:budiimamprsty@gmail.com" className="text-slate-400 hover:text-blue-400 transition">
                    budiimamprsty@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Icon icon="mdi:github" className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">Github</h3>
                  <a href="https://github.com/budi-imam-prasetyo" className="text-slate-400 hover:text-purple-400 transition">
                    Ryoukaii
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Icon icon="mdi:instagram" className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">Instagram</h3>
                  <a href="https://instagram.com/ryoukaii_1" className="text-slate-400 hover:text-purple-400 transition">
                    @ryoukaii_1
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Icon icon="mdi:linkedin" className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/budi-imam-prasetyo-401427286/" className="text-slate-400 hover:text-green-400 transition">
                    Budi Imam Prasetyo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition duration-300 cursor-pointer">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Kirim Pesan</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                  Nama
                </label>
                <input type="text" id="name" placeholder="Nama Anda" className="w-full p-3 rounded-lg bg-slate-800/50 text-slate-100 border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                  Email
                </label>
                <input type="email" id="email" placeholder="Email Anda" className="w-full p-3 rounded-lg bg-slate-800/50 text-slate-100 border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full p-3 rounded-lg bg-slate-800/50 text-slate-100 border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                ></textarea>
              </div>

              <Button className="btn btn-primary w-full">
                <span className="flex items-center justify-center gap-2">
                  Kirim Pesan
                  <Icon icon="mdi:send" className="w-5 h-5" />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
