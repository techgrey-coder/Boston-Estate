"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { HiMiniStar } from "react-icons/hi2";

const boardMembers = [
  {
    name: "Mr. Boston James",
    role: "Chief Executive Officer",
    image: "/ceo-1.jpg",
  },
  {
    name: "Mr. Peter Henshaw",
    role: "Managing Director",
    image: "/ceo-2.jpg",
  },
  {
    name: "Mr. Luther Davis",
    role: "Executive Chairman",
    image: "/ceo-3.jpg",
  },
  {
    name: "Mr. Samuel Paul",
    role: "Operations Director",
    image: "/ceo-4.jpg",
  },
  {
    name: "Mrs. Lara Deens A.",
    role: "Investment Director",
    image: "/ceo-5.jpg",
  },
];

export function Board() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="w-full py-8 md:py-12">
      <article className="w-full rounded-4xl border border-white/10 bg-white/3 backdrop-blur-xl overflow-hidden shadow-[0_10px_60px_rgba(0,0,0,0.18)]">
        
        {/* Header */}
        <button
          onClick={() => setIsVisible((prev) => !prev)}
          className="group flex w-full items-center justify-between px-5 md:px-8 py-5 md:py-6 transition-all duration-300 hover:bg-white/3 active:scale-[0.995]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#eab308] to-[#facc15] shadow-lg shadow-yellow-500/20">
              <HiMiniStar className="text-[18px] text-black" />
            </div>

            <div className="text-left">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#eab308] font-medium">
                Leadership
              </p>

              <h2 className="text-[rgb(0,27,10)] text-xl md:text-2xl font-semibold tracking-tight">
                Founding Fathers
              </h2>
            </div>
          </div>

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 ${
              isVisible
                ? "rotate-180 bg-[#eab308] text-black"
                : "text-black"
            }`}
          >
            <IoChevronDown className="text-lg" />
          </div>
        </button>

        {/* Content */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isVisible
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="overflow-x-auto no-scrollbar">
              <div className="flex gap-5 px-5 md:px-8 pb-8 min-w-max">
                {boardMembers.map((member, index) => (
                  <div
                    key={index}
                    className="group relative w-70 md:w-[320px] overflow-hidden rounded-4xl border border-white/10 bg-white/4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#eab308]/30 hover:shadow-[0_20px_60px_rgba(234,179,8,0.15)]"
                  >
                    {/* Image */}
                    <div className="relative h-90 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${member.image})`,
                        }}
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Gold Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-t from-[#eab308]/10 to-transparent" />

                      {/* Badge */}
                      <div className="absolute top-5 left-5 rounded-full border border-[#eab308]/30 bg-black/40 backdrop-blur-md px-4 py-2">
                        <p className="text-[11px] tracking-[0.25em] uppercase text-[#facc15] font-medium">
                          Board Member
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative px-6 py-6 bg-linear-to-br from-[rgb(0,27,10)] via-[rgb(6,45,20)] to-[rgb(15,75,35)]">
                      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#eab308]/40 to-transparent" />

                      <h3 className="text-white text-xl font-semibold tracking-tight leading-snug">
                        {member.name}
                      </h3>

                      <p className="mt-2 text-sm text-white/70 font-medium tracking-wide">
                        {member.role}
                      </p>

                      <div className="mt-5 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#eab308]" />
                        <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                          Executive Leadership
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}