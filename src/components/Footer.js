import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center space-y-4 text-center p-6">
      <p className="text-slate-400">Media Sosial Saya:</p>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/budi-imam-prasetyo-401427286/" className="text-slate-300 hover:text-slate-100 transition duration-300">
          <Icon icon="mdi:linkedin" className="w-8 h-8" />
        </a>
        <a href="https://github.com/budi-imam-prasetyo" className="text-slate-300 hover:text-slate-100 transition duration-300">
          <Icon icon="mdi:github" className="w-8 h-8" />
        </a>
        <a href="https://instagram.com/ryoukaii_1" className="text-slate-300 hover:text-slate-100 transition duration-300">
          <Icon icon="mdi:instagram" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
