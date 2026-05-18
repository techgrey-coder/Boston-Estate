"use client"

import { Bangers } from "next/font/google";
import { Fredoka, Inter } from "next/font/google";
import { Baloo_2 } from "next/font/google";
import { LuBadgeCheck } from "react-icons/lu";
import { FaAward, FaLocationDot } from "react-icons/fa6";
import {
    Facebook,
    Instagram,
    TwitterX,
    Pinterest,
} from "react-bootstrap-icons";

import {
    BiLogoGmail,
    BiLogoWhatsapp
} from "react-icons/bi";

const baloo = Baloo_2({
    weight: "400",
    subsets: ["latin"],
});

const fredoka = Fredoka({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });


const bangers = Bangers({
    weight: "400",
    subsets: ["latin"],
});

export default function HeroSection() {

    return (
        <section className="relative w-full h-full overflow-hidden">

            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover brightness-50"
            >
                <source src="/video/bg.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-linear-to-b from-emerald-950/80 via-black/20 to-emerald-900/10"></div>

            <div className="relative z-10 flex flex-col items-start justify-end h-full text-white text-center px-6">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center w-full h-full py-8 md:py-10 lg:py-12">
                        <h1
                            className={`
      ${fredoka.className}
      text-white font-bold
      text-4xl md:text-5xl lg:text-7xl xl:text-8xl
      leading-tight text-center 
      w-full lg:w-[70%] xl:w-[60%]
      px-4 md:px-6 lg:px-12 xl:px-12
    `}
                        >
                            Own More Than Property — Own Opportunity
                        </h1>

                        <p
                            className={`${inter.className}
                            text-gray-300
      text-sm md:text-lg lg:text-2xl xl:text-2xl font-medium
      leading-relaxed
      text-center
      w-full lg:w-[75%] xl:w-[60%]
      mt-4
      px-4 md:px-6 lg:px-12 xl:px-12
    `}
                        >
                            At <span className="text-[#eab308] font-semibold text-[13px] md:text-sm lg:text-xl xl:text-xl"> BOSTON ESTATES</span> we connect buyers, sellers, and investors with exceptional properties in desirable locations. Elegant service, trusted guidance, outstanding results.
                        </p>
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-start">
                        <div className="w-full h-20 flex items-end justify-center">
                            <div className="w-[85%] md:w-[72%] lg:w-[70%] xl:w-[60%] h-10 md:h-15 lg:h-20 flex items-end justify-between md:justify-end lg:justify-between rounded-b-3xl">

                                <button
                                    className={`${baloo.className}
        hidden lg:flex items-center justify-center
        w-[30%] xl:w-[20%] h-full
        text-xl font-bold text-black
        bg-[#eab308]
        rounded-3xl
        transition-all duration-500
        hover:rounded-lg hover:text-[rgb(0,27,10)]
      `}
                                >
                                  <a href="/properties#props"> OUR PROPERTIES</a> 
                                </button>

                                <button
                                    className={`${baloo.className}
        flex items-center justify-center
        w-full md:w-[45%] lg:w-[40%] xl:w-[30%]
        h-full
        text-sm md:text-xl font-bold
        text-[rgb(0,27,10)]
        bg-white
        rounded-xl
        transition-all duration-500
        hover:scale-95 hover:bg-[rgb(0,27,10)] hover:text-white
      `}
                                >
                                 <a href="/about#consultant">• SCHEDULE INSPECTION •</a>
                                </button>

                            </div>
                        </div>
                        <div className="w-full h-full">
                            <div className="w-full px-2 py-1 md:hidden h-10 lg:hidden xl:hidden flex items-center justify-center rounded-b-3xl">

                                <button
                                    className={`${baloo.className}
        flex items-center justify-center
        w-[83%] h-full
        text-sm font-bold text-black
        bg-[#eab308]
        rounded-lg
        transition-all duration-500
     hover:text-[rgb(0,27,10)]
      `}
                                >
                                  <a href="/properties#props"> OUR PROPERTIES</a>
                                </button>
                            </div>
                            <div className="w-full h-full hidden md:flex lg:flex xl:flex md:justify-center md:flex-col md:items-center">
                                <div className="w-[71%] mt-1 h-13 lg:hidden xl:hidden flex items-center justify-end rounded-b-3xl">

                                    <button
                                        className={`${baloo.className}
        flex lg:hidden xl:hidden items-center justify-center
        w-[45%] h-full
        text-lg font-bold text-black
        bg-[#eab308]
        rounded-lg
        transition-all duration-500
     hover:text-[rgb(0,27,10)]
      `}
                                    >
                                       <a href="/properties#props"> OUR PROPERTIES</a>
                                    </button>

                                </div>
                                <section className="w-full h-full flex justify-center items-center">
                                    <div className="md:w-[60%] lg:w-[66%] xl:w-[65%] h-full flex flex-row justify-between items-end ">
                                        <div className="w-30 h-27 lg:w-35 lg:h-33 xl:w-45 xl:h-35 relative bg-[rgb(0,27,10)] rounded-t-lg flex justify-center items-center">
                                            <div className="z-10 w-[35%] h-[35%] rounded-full flex items-center justify-center bg-[rgb(0,27,10)]">
                                                <span className="text-white  md:text-[15px] lg:text-[17px] xl:text-[19px] font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                                    <LuBadgeCheck />
                                                </span>
                                            </div>
                                            <svg
                                                className="absolute w-full h-full"
                                                viewBox="0 0 200 200"
                                            >
                                                <defs>
                                                    <path
                                                        id="circlePath"
                                                        d="
          M 100,100
          m -75,0
          a 75,75 0 1,1 150,0
          a 75,75 0 1,1 -150,0
        "
                                                    />
                                                </defs>

                                                <text
                                                    fill="white"
                                                    className="
        text-[10px]
        md:text-[14px]
        lg:text-[18px]
        xl:text-[20px]
        tracking-[2px]
        
      "
                                                >
                                                    <textPath
                                                        href="#circlePath"
                                                        startOffset="50%"
                                                        textAnchor="middle"
                                                    >
                                                        •VERIFIED LANDED PROPERTIES •
                                                    </textPath>
                                                </text>
                                            </svg>

                                        </div>

                                        <div className="w-30 h-27 lg:w-35 lg:h-33 xl:w-45 xl:h-35 relative bg-[rgb(0,27,10)] rounded-t-lg flex justify-center items-center">
                                            <div className="z-10 w-[35%] h-[35%] rounded-full flex items-center justify-center bg-[rgb(0,27,10)]">
                                                <span className="text-white md:text-[15px] lg:text-[17px] xl:text-[19px] font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                                   <FaAward/>
                                                </span>
                                            </div>
                                            <svg
                                                className="absolute w-full h-full"
                                                viewBox="0 0 200 200"
                                            >
                                                <defs>
                                                    <path
                                                        id="circlePath"
                                                        d="
          M 100,100
          m -75,0
          a 75,75 0 1,1 150,0
          a 75,75 0 1,1 -150,0
        "
                                                    />
                                                </defs>

                                                <text
                                                    fill="white"
                                                    className="
        text-[10px]
        md:text-[14px]
        lg:text-[18px]
        xl:text-[20px]
        tracking-[2px]
      "
                                                >
                                                    <textPath
                                                        href="#circlePath"
                                                        startOffset="50%"
                                                        textAnchor="middle"
                                                    >
                                                        • SMART INVESTMENTS • 
                                                    </textPath>
                                                </text>
                                            </svg>

                                        </div>

                                        <div className="md:hidden lg:w-35 lg:h-33 xl:w-45 xl:h-35 relative bg-[rgb(0,27,10)] rounded-t-lg lg:flex lg:justify-center lg:items-center xl:flex xl:justify-center xl:items-center">
                                            <div className="z-10 w-[35%] h-[35%] rounded-full flex items-center justify-center bg-[rgb(0,27,10)]">
                                                <span className="text-white lg:text-[17px] xl:text-[19px] font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                                    <FaLocationDot/>
                                                </span>
                                            </div>
                                            <svg
                                                className="absolute w-full h-full"
                                                viewBox="0 0 200 200"
                                            >
                                                <defs>
                                                    <path
                                                        id="circlePath"
                                                        d="
          M 100,100
          m -75,0
          a 75,75 0 1,1 150,0
          a 75,75 0 1,1 -150,0
        "
                                                    />
                                                </defs>

                                                <text
                                                    fill="white"
                                                    className="
        text-[10px]
        md:text-[14px]
        lg:text-[18px]
        xl:text-[20px]
        tracking-[2px]
        
      "
                                                >
                                                    <textPath
                                                        href="#circlePath"
                                                        startOffset="50%"
                                                        textAnchor="middle"
                                                    >
                                                        • PRIME TRUSTED LOCATIONS • 
                                                    </textPath>
                                                </text>
                                            </svg>

                                        </div>
                                    </div>
                                </section>


                            </div>
                        </div>
                    </div>
                    <aside className="w-full h-20 flex flex-col items-center justify-end">
                        <div className="hidden md:w-[72%] md:h-15 lg:w-[70%] lg:h-20 xl:w-[70%] xl:h-20 h-10 bg-[rgb(0,27,10)] rounded-t-3xl 
  md:flex md:flex-row md:overflow-hidden
  lg:flex lg:flex-row lg:overflow-hidden
  xl:flex xl:flex-row xl:overflow-hidden">

                            <div
                                className={`${baloo.className} w-[30%] h-full hidden lg:flex xl:flex justify-center items-center text-white lg:text-2xl xl:text-2xl tracking-wide`}
                            >
                                <b>CONTACT US →</b>

                            </div>

                            <div className=" w-full lg:w-[70%] xl:w-[70%] h-full grid grid-cols-6 gap-3 md:gap-4 px-2 md:px-4 items-center justify-items-center">

                                {[
                                    { icon: Facebook, color: "border-blue-500 text-blue-400 hover:bg-blue-500/10" },
                                    { icon: Instagram, color: "border-pink-500 text-pink-400 hover:bg-pink-500/10" },
                                    { icon: Pinterest, color: "border-red-500 text-red-400 hover:bg-red-500/10" },
                                    { icon: TwitterX, color: "border-gray-300 text-white hover:bg-white/10" },
                                    { icon: BiLogoGmail, color: "border-yellow-500 text-yellow-400 hover:bg-yellow-500/10" },
                                    { icon: BiLogoWhatsapp, color: "border-green-500 text-green-400 hover:bg-green-500/10" },
                                ].map(({ icon: Icon, color }, i) => (
                                    <button
                                        key={i}
                                        className={`md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 border rounded-full flex items-center justify-center
          transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${color}`}
                                    >
                                        <Icon className="md:w-4 md:h-3 lg:w-5 lg:h-4 xl:w-6 xl:h-5 transition-all duration-300" />
                                    </button>
                                ))}

                            </div>
                        </div>
                    </aside>
                </div>


            </div>
        </section>
    );
}