import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";


const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], weight: "400" });

import { Jomhuria } from "next/font/google";

const jomhuria = Jomhuria({ subsets: ["latin"], weight: "400" });
export default function CollectUserInfo() {
    return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-purple-900 text-white px-4 ${robotoCondensed.className}`}>
      {/* Logo (Top Left) */}
      <div className="absolute top-6 left-6">
        <Image src="/logo.svg" alt="Kraftwave Logo" width={100} height={100} />
        <p className={`text-4xl mt-2 text-white ${jomhuria.className}`}>KRAFTWAVE</p>
      </div>

      {/* Title and Curved Line */}
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

      {/* Subtitle */}
      <p className="text-lg text-center">Do you have any disabilities?</p>
      <p className="text-gray-300 text-50 text-center mb-8">Please don&apos;t be afraid to tell</p>

      {/* Cards Container */}
      <div className="flex gap-10">
        {/* Yes Card */}
        <div className="w-80 p-6 bg-black rounded-2xl shadow-lg text-center">
          <h2 className="text-lg font-semibold gradient-text">
            If yes then continue and pick your disability
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            You will be allowed to choose from some disabilities in order to get the privileges that
            will make your prompting easier
          </p>
          <button className="mt-4 w-full py-2 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-blue-600 to-orange-400">
            NEXT
          </button>
        </div>

        {/* No Card */}
        <div className="w-80 p-6 bg-black rounded-2xl shadow-lg text-center">
          <h2 className="text-lg font-semibold gradient-text">
            If no then continue to the main window
          </h2>
          <p className="text-gray-400 text-sm mt-5 mb-7">Enjoy your time</p>
          <button className="mt-4 w-full py-2 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-blue-600 to-orange-400">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
