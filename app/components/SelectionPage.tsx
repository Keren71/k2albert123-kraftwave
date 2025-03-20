'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Eye, Ear, Accessibility, Camera } from 'lucide-react';
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], weight: "400" });
import { Jomhuria } from "next/font/google";

const jomhuria = Jomhuria({ subsets: ["latin"], weight: "400" });

export default function SelectionPage() {
  const [selected, setSelected] = useState(['Visual', 'Motor']);

  const toggleSelection = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const options = [
    { name: 'Visual', icon: <Eye size={60} /> },
    { name: 'Auditory', icon: <Ear size={60} /> },
    { name: 'Motor', icon: <Accessibility size={60} /> },
  ];

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-[#0B0D18] text-white px-4 ${robotoCondensed.className}`}>

       <div className="absolute top-6 left-6">
              <Image src="/logo.svg" alt="Kraftwave Logo" width={100} height={100} />
              <p className={`text-4xl mt-2 text-white ${jomhuria.className}`}>KRAFTWAVE</p>
            </div>
      <h1 className="text-2xl md:text-3xl font-semibold text-center">You have chosen</h1>
      {/* curved line */}
      <svg
          className="mx-auto mb-6"
          width="160"
          height="12"
          viewBox="0 0 310 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M304.794 10.4885C188.692 -3.78191 121.301 -3.21626 5.19229 10.5154C2.25109 10.8632 0 13.3631 0 16.3249C0 19.8608 3.14297 22.5841 6.64983 22.1313C114.296 8.23085 181.263 7.69415 303.345 22.201C306.861 22.6187 310 19.8816 310 16.3417C310 13.3667 307.747 10.8515 304.794 10.4885Z"
            fill="url(#paint0_linear_21_262)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_21_262"
              x1="235.821"
              y1="11.4494"
              x2="70.8571"
              y2="11.4494"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4426FE" />
              <stop offset="0.515" stopColor="#D450FC" />
              <stop offset="0.86" stopColor="#FDC88A" />
            </linearGradient>
          </defs>
        </svg>

      
      <div className="flex justify-center gap-6 mt-10">
        {options.map(({ name, icon }) => (
          <div
            key={name}
            className={`relative flex flex-col items-center bg-black p-6 rounded-lg border border-gray-700 w-32 h-40 cursor-pointer transition-all ${
              selected.includes(name) ? 'border-blue-500' : ''
            }`}
            onClick={() => toggleSelection(name)}
          >
            <div className="mb-3 text-white">{icon}</div>
            <p className="text-sm font-medium">{name}</p>
            {selected.includes(name) && (
              <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 text-xs flex items-center justify-center rounded-sm">✔</div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-10 text-center font-bold text-lg">TAKE A PICTURE FOR THE AI TO DETECT WHICH MOTOR ORGAN YOU ARE MISSING</p>
      <p className="text-sm text-gray-400">we need a full body scan so take a picture for your whole body</p>
      
      <div className="mt-6 p-4 bg-gray-800 rounded-lg cursor-pointer">
        <Camera size={40} color="white" />
      </div>

      <button className="mt-6 px-10 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-lg">CONTINUE</button>
    </div>
  );
}
