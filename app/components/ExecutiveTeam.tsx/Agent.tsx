"use client";

import { useState } from "react";
import { IoChevronDown, IoLocationSharp } from "react-icons/io5";
import { HiMiniShieldCheck } from "react-icons/hi2";

const agentsDetails = [
    {
        name: "Daniel Brooks",
        location: "Abuja, Nigeria",
        bios: "Luxury residential specialist with 8+ years experience.",
        image: "/agent-1.jpg",
    },
    {
        name: "Sophia Carter",
        location: "Lagos, Nigeria",
        bios: "Focused on premium apartments and investment properties.",
        image: "/agent-2.jpg",
    },
    {
        name: "Michael Stone",
        location: "Port Harcourt",
        bios: "Helping clients secure modern family homes effortlessly.",
        image: "/agent-3.jpg",
    },
    {
        name: "Sarah Wilson",
        location: "Enugu, Nigeria",
        bios: "Expert in commercial real estate and luxury listings.",
        image: "/agent-4.jpg",
    },
    {
        name: "David Kelvin",
        location: "Ibadan, Nigeria",
        bios: "Trusted property consultant with strong local expertise.",
        image: "/agent-5.jpg",
    },
    {
        name: "Emma Ray",
        location: "Abuja, Nigeria",
        bios: "Dedicated to finding elegant homes for modern living.",
        image: "/agent-6.jpg",
    },
];

export function Agents() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section className="w-full py-8 md:py-12">
            <article className="overflow-hidden rounded-4xl border border-white/10 bg-white/3 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.18)]">

                {/* Header */}
                <button
                    onClick={() => setIsVisible((prev) => !prev)}
                    className="group flex w-full items-center justify-between px-5 md:px-8 py-5 md:py-6 transition-all duration-300 hover:bg-white/3 active:scale-[0.995]"
                >
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#eab308] font-medium">
                            Professional Team
                        </p>

                        <h3 className="mt-1 text-[rgb(0,27,10)] text-xl md:text-2xl font-semibold tracking-tight">
                            Our Trusted Agents
                        </h3>
                    </div>

                    <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 ${isVisible
                                ? "rotate-180 bg-[#eab308] text-black"
                                : "text-black"
                            }`}
                    >
                        <IoChevronDown className="text-lg" />
                    </div>
                </button>

                {/* Expandable Content */}
                <div
                    className={`grid transition-all duration-500 ease-in-out ${isVisible
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        <div className="overflow-x-auto no-scrollbar">
                            <div className="flex gap-4 px-5 md:px-8 pb-8 min-w-max">

                                {agentsDetails.map((member, index) => (
                                    <div
                                        key={index}
                                        className="group relative w-60 md:w-65 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#eab308]/30 hover:shadow-[0_20px_60px_rgba(234,179,8,0.12)]"
                                    >
                                        {/* Image */}
                                        <div className="relative h-70 overflow-hidden">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{
                                                    backgroundImage: `url(${member.image})`,
                                                }}
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

                                            {/* Verified Badge */}
                                            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-[#eab308]/20 bg-black/40 backdrop-blur-md px-3 py-2">
                                                <HiMiniShieldCheck className="text-[#facc15]" />
                                                <span className="text-[10px] uppercase tracking-[0.22em] text-[#facc15] font-medium">
                                                    Verified
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative bg-linear-to-br from-[rgb(0,27,10)] via-[rgb(6,45,20)] to-[rgb(15,75,35)] px-5 py-5">

                                            <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#eab308]/40 to-transparent" />

                                            <h3 className="text-lg text-white font-semibold tracking-tight leading-snug">
                                                {member.name}
                                            </h3>

                                            <div className="mt-2 flex items-center gap-2 text-white/65">
                                                <IoLocationSharp className="text-[#eab308]" />
                                                <p className="text-sm font-medium">
                                                    {member.location}
                                                </p>
                                            </div>

                                            <p className="mt-4 text-sm leading-relaxed text-white/70">
                                                {member.bios}
                                            </p>

                                            {/* Bottom Line */}
                                            <div className="mt-5 flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-[#eab308]" />
                                                <span className="text-[11px] uppercase tracking-[0.24em] text-white/50">
                                                    Estate Consultant
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