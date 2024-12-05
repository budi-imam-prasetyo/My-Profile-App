import { Button } from "react-daisyui";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 min-h-screen flex flex-col justify-around items-center p-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-slate-100">Hubungi Saya</h1>
        <p className="text-lg text-slate-400">Saya selalu terbuka untuk diskusi, kolaborasi, atau hanya sekedar berbagi ide. Jangan ragu untuk menghubungi saya melalui formulir di bawah ini atau melalui media sosial!</p>
      </div>
      
      <div className="w-full max-w-4xl bg-slate-700 p-8 rounded-lg shadow-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-slate-300 font-semibold mb-2">
              Nama
            </label>
            <input type="text" id="name" placeholder="Nama Anda" className="w-full p-3 rounded-lg bg-slate-800 text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-slate-300 font-semibold mb-2">
              Email
            </label>
            <input type="email" id="email" placeholder="Email Anda" className="w-full p-3 rounded-lg bg-slate-800 text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="subject" className="block text-slate-300 font-semibold mb-2">
              Subjek
            </label>
            <input type="text" id="subject" placeholder="Judul Pesan Anda" className="w-full p-3 rounded-lg bg-slate-800 text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-slate-300 font-semibold mb-2">
              Pesan
            </label>
            <textarea id="message" rows="6" placeholder="Tulis pesan Anda di sini..." className="w-full p-3 rounded-lg bg-slate-800 text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          </div>
          
          <div className="md:col-span-2 flex justify-center">
            <Button className="btn btn-primary flex items-center">
              Kirim Pesan
              <Icon icon="mdi:send-outline" className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
