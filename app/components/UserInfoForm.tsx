
"use client";

import { useState } from "react";
import Image from 'next/image';
import { Jomhuria } from "next/font/google";

const jomhuria = Jomhuria({ subsets: ["latin"], weight: "400" });

export default function UserInfoForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    dob: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black to-purple-900">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <p className={`text-4xl mt-2 text-white ${jomhuria.className}`}>KRAFTWAVE</p>
       
      </div>

      {/* Form Container */}
      <div className="w-full max-w-lg p-8 bg-opacity-10 bg-black rounded-lg border-3 border-purple-500 shadow-lg text-center">
        <h1 className="text-white text-2xl font-medium mb-4 font-roboto-condensed">
          Collect user info
        </h1>

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

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white text-sm mb-1">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 bg-black text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-1">Second name</label>
            <input
              type="text"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              className="w-full p-3 bg-black text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-1">
              Date of birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 bg-black text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            // className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            className="w-20  h-[45px] bg-[#4426FE] text-white py-3 rounded-md hover:bg-blue-700 transition "
            // w-[100px] h-[31px] left-1/2 transform -translate-x-1/2 top-[390px]
          >
            NEXT
          </button>
        </form>
      </div>
    </div>
  );
}
