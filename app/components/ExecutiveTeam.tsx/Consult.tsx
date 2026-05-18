"use client";

import { useState } from "react";
import { IoChevronDown, IoCall } from "react-icons/io5";
import { HiMiniBriefcase } from "react-icons/hi2";

const consultantBio = [
  {
    name: "Daniel Brooks",
    bio: "Experienced real estate consultant specializing in luxury residential investments and property advisory.",
    image: "/consultant-1.jpg",
    phoneNumber: "+234 801 234 5678",
  },
  {
    name: "Sophia Carter",
    bio: "Helping clients secure premium properties with confidence, clarity, and market expertise.",
    image: "/consultant-2.jpg",
    phoneNumber: "+234 803 987 1122",
  },
  {
    name: "Michael Stone",
    bio: "Trusted consultant focused on modern developments, commercial spaces, and smart investments.",
    image: "/consultant-3.jpg",
    phoneNumber: "+234 809 456 7788",
  },
  {
    name: "Sarah Wilson",
    bio: "Dedicated to creating seamless luxury property experiences for homeowners and investors.",
    image: "/consultant-4.jpg",
    phoneNumber: "+234 810 998 7766",
  },
  {
    name: "Emma Ray",
    bio: "Specialist in premium homes, interior consultation, and personalized property guidance.",
    image: "/consultant-5.jpg",
    phoneNumber: "+234 816 443 2200",
  },
];

export function Consultants() {
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
              Expert Guidance
            </p>

            <h3 className="mt-1 text-[rgb(0,27,10)] text-xl md:text-2xl font-semibold tracking-tight">
              Our Consultants
            </h3>
          </div>

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 ${
              isVisible
                ? "rotate-180 bg-[#eab308] text-[rgb(0,27,10)]"
                : "text-black"
            }`}
          >
            <IoChevronDown className="text-lg" />
          </div>
        </button>

        {/* Expandable Content */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isVisible
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-4 px-5 md:px-8 pb-8">

              {consultantBio.map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-linear-to-br from-[rgb(0,27,10)] via-[rgb(6,45,20)] to-[rgb(15,75,35)] backdrop-blur-xl transition-all duration-500 hover:border-[#eab308]/30 hover:shadow-[0_20px_50px_rgba(234,179,8,0.10)]"
                >
                  <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#eab308]/40 to-transparent" />

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-5 p-5 md:p-6">

                    {/* Profile Image */}
                    <div className="relative shrink-0">
                      <div className="h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-3xl border border-white/10">
                        <div
                          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{
                            backgroundImage: `url(${member.image})`,
                          }}
                        />
                      </div>

                      {/* Gold Glow */}
                      <div className="absolute inset-0 rounded-3xl ring-1 ring-[#eab308]/20" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-white text-lg md:text-xl font-semibold tracking-tight">
                          {member.name}
                        </h3>

                        <div className="flex items-center gap-2 rounded-full border border-[#eab308]/20 bg-[#eab308]/10 px-3 py-1">
                          <HiMiniBriefcase className="text-[#facc15]" />

                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#facc15] font-medium">
                            Consultant
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-white/70 max-w-3xl">
                        {member.bio}
                      </p>

                      {/* Contact */}
                      <div className="mt-5 flex flex-wrap items-center gap-3">

                        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md">
                          <IoCall className="text-[#eab308]" />

                          <span className="text-sm text-white/80 font-medium tracking-wide">
                            {member.phoneNumber}
                          </span>
                        </div>

                        <div className="h-2 w-2 rounded-full bg-[#eab308]" />

                        <span className="text-[11px] uppercase tracking-[0.25em] text-white/45">
                          Trusted Property Advisor
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </article>
    </section>
  );
}