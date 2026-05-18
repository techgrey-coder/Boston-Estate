"use client";

import { useState } from "react";
import Image from "next/image";
import {
    HiOutlineLocationMarker,
    HiOutlineCalendar,
    HiOutlineSparkles,
    HiOutlinePhotograph,
    HiOutlineX,
    HiOutlineCheckCircle,
} from "react-icons/hi";
import { HiMiniTrophy } from "react-icons/hi2";

const galleryImages = [
    "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779097151/garden_zx7tqs.png",
    "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779097193/garden4_ycez03.png",
    "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779097164/garden2_hhikdq.png",
    "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779097176/garden3_zlpjba.png",
];

const experiences = [
    "Luxury Weddings",
    "Private Celebrations",
    "Corporate Events",
    "Engagement Dinners",
    "Garden Receptions",
    "Exclusive Parties",
];

const features = [
    {
        title: "Grand Outdoor Gardens",
        desc: "Elegantly landscaped surroundings designed for timeless celebrations.",
    },
    {
        title: "Premium Event Spaces",
        desc: "Sophisticated halls and open-air venues with refined architectural detail.",
    },
    {
        title: "Tailored Experiences",
        desc: "Personalized event styling curated for unforgettable moments.",
    },
    {
        title: "Prime Locations",
        desc: "Located in Abuja and Port Harcourt for accessible luxury hosting.",
    },
];

export default function GardenVille() {
    const [openInfo, setOpenInfo] = useState(false);

    return (
        <section className="w-full bg-[#0d0d0d] mt-20 overflow-hidden">
            {/* HERO */}
            <div className="w-[92%] lg:w-[88%] mx-auto py-6 md:py-10 mb-30">
                <div className="relative overflow-hidden rounded-[34px] md:rounded-[42px] border border-[#d6c7a133] bg-[#111111]">

                    {/* Background */}
                    <div className="absolute inset-0">
                        <Image
                            src={galleryImages[0]}
                            alt="La Garden"
                            fill
                            priority
                            className="object-cover opacity-30 scale-105"
                        />

                        <div className="absolute inset-0 bg-black/65" />

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,199,161,0.12),transparent_35%)]" />
                    </div>

                    {/* Top Bar */}
                    <div className="absolute top-5 md:top-7 left-0 w-full px-5 md:px-8 z-30 flex items-center justify-between">
                        <div className="px-5 py-2.5 rounded-full border border-[#d6c7a133] bg-[#ffffff08] backdrop-blur-xl">
                            <p className="text-[#e7dcc2] text-[9px] md:text-[11px] uppercase tracking-[0.28em]">
                                Garden Ville
                            </p>
                        </div>

                        <button className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#d6c7a133] bg-[#ffffff08] backdrop-blur-xl text-[#f5ead3] flex items-center justify-center hover:bg-[#f5ead3] hover:text-black transition-all duration-500">
                            <HiMiniTrophy className="text-[15px]" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center px-5 sm:px-8 md:px-12 lg:px-16 pt-28 md:pt-32 pb-10 md:pb-14">

                        {/* LEFT */}
                        <div className="space-y-7">

                            <div className="w-fit px-5 py-2 rounded-full border border-[#d6c7a133] bg-[#ffffff08] backdrop-blur-xl">
                                <p className="text-[#e7dcc2] text-[9px] md:text-[11px] uppercase tracking-[0.3em]">
                                    Luxury Event Venue • Abuja & Port Harcourt
                                </p>
                            </div>

                            <div className="space-y-5 max-w-195">

                                <h1 className="text-[#f8f3ea] text-[2.4rem] sm:text-[3.4rem] md:text-[5.6rem] leading-[0.95] tracking-tighter font-medium">
                                    Garden Ville
                                </h1>

                                <h2 className="text-[#d6c7a1] text-[1rem] sm:text-[1.15rem] md:text-[1.45rem] leading-relaxed font-light max-w-155">
                                    An exquisite destination for timeless weddings, elegant
                                    celebrations, and unforgettable luxury events.
                                </h2>

                                <p className="text-[#f8f3ea99] text-[14px] md:text-[15px] leading-loose max-w-162.5">
                                    Crafted with sophistication and serenity in mind, Garden Ville
                                    blends refined architecture, lush outdoor scenery, and elevated
                                    hospitality into a truly distinguished event experience.
                                </p>

                            </div>

                            {/* Meta */}
                            <div className="flex flex-wrap gap-4 text-[#f8f3eab0] text-[12px] md:text-[14px]">

                                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-[#d6c7a11f] bg-[#ffffff05]">
                                    <HiOutlineLocationMarker />
                                    Abuja & Port Harcourt
                                </div>

                                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-[#d6c7a11f] bg-[#ffffff05]">
                                    <HiOutlineCalendar />
                                    Weddings & Luxury Events
                                </div>

                                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-[#d6c7a11f] bg-[#ffffff05]">
                                    <HiOutlineSparkles />
                                    Old Money Elegance
                                </div>

                            </div>

                            {/* Experiences */}
                            <div className="flex flex-wrap gap-3">
                                {experiences.map((item, index) => (
                                    <div
                                        key={index}
                                        className="px-4 md:px-5 py-3 rounded-full border border-[#d6c7a122] bg-[#ffffff05] text-[#f8f3ead0] text-[11px] md:text-[13px]"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="pt-3 flex flex-wrap gap-4">

                                <button
                                    onClick={() => setOpenInfo(true)}
                                    className="px-7 md:px-9 py-4 rounded-full bg-[#f5ead3] text-black text-[13px] md:text-[15px] font-semibold hover:scale-[1.03] hover:bg-[#facc15] transition-all duration-500"
                                >
                                    <span className="flex items-center gap-3">
                                        <HiOutlinePhotograph className="text-[20px]" />
                                        Explore Garden Ville
                                    </span>
                                </button>

                                <button className="px-7 md:px-9 py-4 rounded-full border border-[#d6c7a133] bg-[#ffffff05] text-[#f8f3ea] text-[13px] md:text-[15px] hover:bg-[#ffffff10] transition-all duration-500">
                                    <a href="/contact#care"> Reserve A Date</a>
                                </button>

                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="relative">
                            <div className="relative h-90 sm:h-117.5 lg:h-162.5 overflow-hidden rounded-[34px] border border-[#d6c7a133]">

                                <Image
                                    src={galleryImages[1]}
                                    alt="Garden Ville"
                                    fill
                                     sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 50vw,
      45vw
    "
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

                                {/* Floating Card */}
                                <div className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7 p-5 md:p-6 rounded-[28px] border border-[#ffffff1a] bg-[#00000055] backdrop-blur-2xl">

                                    <div className="flex items-center justify-between gap-5">

                                        <div className="space-y-2">
                                            <p className="text-[#d6c7a1] uppercase tracking-[0.25em] text-[9px]">
                                                Signature Experience
                                            </p>

                                            <h3 className="text-[#f8f3ea] text-[18px] md:text-[24px] font-medium leading-tight">
                                                Curated Celebrations With Timeless Grandeur
                                            </h3>
                                        </div>

                                        <div className="w-14 h-14 rounded-2xl bg-[#f5ead3] text-black flex items-center justify-center shrink-0">
                                            <HiOutlineSparkles className="text-[24px]" />
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* MODAL */}
            <div
                className={`fixed inset-0 z-999 transition-all duration-500 ${openInfo
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
            >

                {/* Backdrop */}
                <div
                    onClick={() => setOpenInfo(false)}
                    className="absolute inset-0 bg-black/70 backdrop-blur-md"
                />

                {/* Modal */}
                <div
                    className={`absolute right-0 top-0 h-full w-full md:w-[90%] lg:w-[72%] bg-[#f6f1e8] overflow-y-auto transition-all duration-700 ${openInfo ? "translate-x-0" : "translate-x-full"
                        }`}
                >

                    {/* Header */}
                    <div className="sticky top-0 z-50 mt-25 bg-[#f6f1e8]/90 backdrop-blur-xl border-b border-black/5 px-6 md:px-10 py-5 flex items-center justify-between">

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7355] font-semibold">
                                La Garden
                            </p>

                            <h2 className="text-[26px] md:text-[38px] text-[#1f1a17] font-medium">
                                Elegant Event Experiences
                            </h2>
                        </div>

                        <button
                            onClick={() => setOpenInfo(false)}
                            className="w-12 h-12 rounded-full bg-[#1f1a17] text-white flex items-center justify-center"
                        >
                            <HiOutlineX className="text-[22px]" />
                        </button>

                    </div>

                    {/* BODY */}
                    <div className="p-6 md:p-10 space-y-10">

                        {/* About */}
                        <div className="rounded-[34px] bg-white p-7 md:p-10 border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

                            <div className="space-y-5 max-w-212.5">

                                <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7355] font-semibold">
                                    About La Garden
                                </p>

                                <h2 className="text-[2rem] md:text-[3.4rem] leading-none font-medium text-[#1f1a17] tracking-tighter">
                                    Where Refined Celebrations Become Lasting Memories
                                </h2>

                                <p className="text-[#3d352d]/75 leading-loose text-[15px]">
                                    La Garden is a distinguished luxury venue created for
                                    elegant weddings, sophisticated receptions, intimate soirées,
                                    and unforgettable private events. Inspired by timeless old
                                    money aesthetics, every detail reflects grace, prestige, and
                                    elevated hospitality.
                                </p>

                            </div>

                        </div>

                        {/* Features */}
                        <div className="grid md:grid-cols-2 gap-5">

                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-[30px] bg-white border border-black/5 p-7"
                                >

                                    <div className="space-y-4">

                                        <div className="w-12 h-12 rounded-2xl bg-[#1f1a17] text-white flex items-center justify-center">
                                            <HiOutlineCheckCircle className="text-[22px]" />
                                        </div>

                                        <div>
                                            <h3 className="text-[22px] text-[#1f1a17] font-medium">
                                                {item.title}
                                            </h3>

                                            <p className="text-[14px] leading-[1.9] text-[#3d352d]/70 mt-3">
                                                {item.desc}
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>

                        {/* Gallery */}
                        <div className="space-y-5">

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7355] font-semibold">
                                    Venue Gallery
                                </p>

                                <h2 className="text-[2rem] md:text-[3rem] text-[#1f1a17] font-medium mt-2">
                                    A Glimpse Into The Experience
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">

                                {galleryImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative h-70 md:h-95 overflow-hidden rounded-[30px]"
                                    >

                                        <Image
                                            src={image}
                                            alt="La Garden"
                                            fill
                                            sizes="
        (max-width: 768px) 100vw,
        (max-width: 1024px) 50vw,
        50vw
      "
                                            className="object-cover hover:scale-105 transition-all duration-700"
                                        />

                                        <div className="absolute inset-0 bg-black/10" />

                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* Bottom CTA */}
                        <div className="rounded-[36px] bg-[#1a1715] overflow-hidden relative p-8 md:p-12">

                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,199,161,0.18),transparent_40%)]" />

                            <div className="relative z-10 max-w-190 space-y-5">

                                <p className="text-[10px] uppercase tracking-[0.28em] text-[#d6c7a1] font-semibold">
                                    Reserve Your Experience
                                </p>

                                <h2 className="text-[2.3rem] md:text-[4rem] leading-none tracking-tighter font-medium text-[#f8f3ea]">
                                    Celebrate With Elegance & Distinction
                                </h2>

                                <p className="text-[#f8f3ea99] leading-loose text-[15px] max-w-155">
                                    From intimate gatherings to grand celebrations, La Garden
                                    offers an atmosphere of timeless sophistication curated for
                                    extraordinary moments.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-2">

                                    <button className="px-8 py-4 rounded-full bg-[#f5ead3] text-black hover:bg-[#facc15] font-semibold text-[14px]">
                                        <a href="/about#consultation"> Book A Consultation</a>
                                    </button>

                                    <button className="px-8 py-4 rounded-full border border-[#d6c7a133] text-[#f8f3ea] text-[14px]">
                                        View Availability
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}