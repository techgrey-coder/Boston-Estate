"use client"

import { Bangers } from "next/font/google";
import { Fredoka, Inter } from "next/font/google";
import { Baloo_2 } from "next/font/google";

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

export default function PropsSection() {

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
                            Exclusive Properties for Elite Living
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
                          Experience a curated collection of high-end homes designed for refined living. Each listing offers privacy, space, and premium finishes that stand out.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}