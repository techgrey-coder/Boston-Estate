"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { HiMiniSparkles } from "react-icons/hi2";

const topDesigners = [
    {
        name: "Sophia Laurent",
        bio: "Luxury interior designer known for refined modern spaces and timeless aesthetics.",
        bestWork: "Best Known For • Contemporary Penthouse Designs",
        image: "/designer-1.jpg",
    },
    {
        name: "Daniel Hart",
        bio: "Specializes in elegant residential interiors with premium textures and layered lighting.",
        bestWork: "Best Known For • Minimalist Luxury Villas",
        image: "/designer-2.jpg",
    },
    {
        name: "Isabella Stone",
        bio: "Blends sophistication with functionality to create warm, elevated living environments.",
        bestWork: "Best Known For • High-End Smart Homes",
        image: "/designer-3.jpg",
    },
    {
        name: "Ethan Cole",
        bio: "Award-winning designer celebrated for clean architectural interiors and bespoke detailing.",
        bestWork: "Best Known For • Luxury Commercial Spaces",
        image: "/designer-4.jpg",
    },
    {
        name: "David Cole",
        bio: "Creates soft, contemporary interiors inspired by luxury hospitality experiences.",
        bestWork: "Best Known For • Modern Signature Apartments",
        image: "/designer-5.jpg",
    },
];

export function Designers() {
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
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#eab308] font-medium">
                            Creative Excellence
                        </p>

                        <h3 className="mt-1 text-[rgb(0,27,10)] text-xl md:text-2xl font-semibold tracking-tight">
                            Our Top Designers
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
                            <div className="flex gap-5 px-5 md:px-8 pb-8 min-w-max">

                                {topDesigners.map((member, index) => (
                                    <div
                                        key={index}
                                        className="group relative w-65 md:w-72.5 overflow-hidden rounded-4xl border border-white/10 bg-white/4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#eab308]/30 hover:shadow-[0_20px_60px_rgba(234,179,8,0.12)]"
                                    >
                                        {/* Image */}
                                        <div className="relative h-85 overflow-hidden">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{
                                                    backgroundImage: `url(${member.image})`,
                                                }}
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

                                            {/* Floating Tag */}
                                            <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-[#eab308]/20 bg-black/40 backdrop-blur-md px-4 py-2">
                                                <HiMiniSparkles className="text-[#facc15]" />
                                                <span className="text-[10px] uppercase tracking-[0.24em] text-[#facc15] font-medium">
                                                    Elite Designer
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative bg-linear-to-br from-[rgb(0,27,10)] via-[rgb(6,45,20)] to-[rgb(15,75,35)] px-6 py-6">

                                            {/* Gold Divider */}
                                            <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#eab308]/40 to-transparent" />

                                            <h3 className="text-white text-xl font-semibold tracking-tight leading-snug">
                                                {member.name}
                                            </h3>

                                            <p className="mt-3 text-sm leading-relaxed text-white/72">
                                                {member.bio}
                                            </p>

                                            {/* Featured Work */}
                                            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md">
                                                <p className="text-[11px] uppercase tracking-[0.22em] text-[#facc15]/80">
                                                    Signature Work
                                                </p>

                                                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                                                    {member.bestWork}
                                                </p>
                                            </div>

                                            {/* Bottom Accent */}
                                            <div className="mt-5 flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-[#eab308]" />

                                                <span className="text-[11px] uppercase tracking-[0.24em] text-white/50">
                                                    Interior Specialist
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