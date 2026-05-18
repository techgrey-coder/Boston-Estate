"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SideMenu } from "../components/sideMenu";
import AboutSection from "../components/section/AboutPage";
import IconShuffle from "../components/IconFade";
import { useEffect, useState, useRef } from "react";
import { Board } from "../components/ExecutiveTeam.tsx/BOD";
import { Agents } from "../components/ExecutiveTeam.tsx/Agent";
import { Designers } from "../components/ExecutiveTeam.tsx/Designer";
import { Consultants } from "../components/ExecutiveTeam.tsx/Consult";
import { Faq } from "../components/FAQ";
import { Baloo_2 } from "next/font/google";
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
import {
  HiOutlineBadgeCheck,
  HiOutlineUserGroup,
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
  HiOutlineSupport,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineTrendingUp,
} from "react-icons/hi";


const baloo = Baloo_2({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/properties", label: "PROPERTIES" },
    { href: "/contact", label: "CONTACT" },
    { href: "/developer", label: "DEVELOPER" }
  ];
  const footerRef = useRef<HTMLElement | null>(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      <main className="flex flex-col w-full items-start justify-between overflow-hidden h-fit">
        <div className="flex flex-col w-full h-full items-start bg-background">
          <header
            className={`
    fixed
    top-0
    left-0
    w-full
    h-20
    z-2000
    flex
    flex-row
    items-center
    justify-between
    px-4
    lg:px-8

    bg-background/70
    backdrop-blur-[20px]
    supports-backdrop-filter:bg-background/60

    border-b
    border-white/10

    pointer-events-auto

    transition-all
    duration-500
    ease-out

    ${footerVisible
                ? "-translate-y-full opacity-0 pointer-events-none"
                : "translate-y-0 opacity-100"
              }
  `}
          >
            <Link
              href="/"
              className="w-[70%] h-23 lg:w-[40%] xl:w-[35%] flex items-center justify-center"
            >
              <Image
                src="/logo.png"
                alt="Boston Estates Logo"
                width={150}
                height={20}
                priority
                className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(34,197,94,0.8)]"
              />
            </Link>
            <nav className=" w-[30%] h-20 lg:w-[60%] xl:w-[65%] flex items-center">
              <div className="block lg:hidden xl:hidden w-full h-20"> <SideMenu /></div>
              <aside className="hidden lg:flex xl:flex lg:flex-row xl:flex-row lg:items-center xl:items-center w-full h-20 ">
                <div className="xl:w-[40%] xl:flex lg:hidden xl:h-20"><IconShuffle /> </div>
                <div className="xl:w-[60%] lg:w-full h-20 flex items-center justify-center gap-2 lg:gap-4">
                  {[
                    { href: "/", label: "HOME" },
                    { href: "/about", label: "ABOUT" },
                    { href: "/properties", label: "PROPERTIES" },
                    { href: "/contact", label: "CONTACT" },
                  ].map(({ href, label }) => {
                    const active = isActive(href);

                    return (
                      <Link
                        key={href}
                        href={href}
                        className={`relative group px-3 py-2 lg:px-4 font-bold font-serif text-sm transition-colors duration-300 ${active ? "text-black" : "text-green-800"
                          }`}
                      >
                        <span className="relative z-10">{label}</span>

                        <span
                          className="
            absolute inset-0 rounded-lg
            border border-green-900
            scale-0 opacity-0
            group-hover:scale-100 group-hover:opacity-100
            transition-all duration-500
          "
                        />
                      </Link>
                    );
                  })}
                </div>
              </aside>

            </nav>
          </header>
          <section className="w-full h-120 md:h-170 lg:h-210 xl:h-220 mt-20">
            <div className="w-full h-full flex">
              <AboutSection />

            </div>

          </section>

          <section className="bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_90%)] bg-emerald-300/15  w-full h-fit flex flex-col justify-center items-center mt-25 pb-20 gap-7">
            <div className="bg-mist-950 rounded-r-xl rounded-l-xl md:rounded-r-2xl md:rounded-l-2xl w-[80%] md:w-[70%] h-15 md:h-20 flex flex-col justify-center items-center">
              <h2 className="text-[17px] md:text-[24px] lg:text-[28px] font-semibold uppercase tracking-tight text-white leading-tight">

                The Boston Experience
              </h2>

            </div>
            <div className=" w-full h-fit gap-7 lg:gap-0 grid grid-cols-1 lg:grid-cols-3">
              <div className="w-full flex-col flex justify-center items-center">
                <div className="w-[88%] md:w-[72%] lg:w-[80%] rounded-3xl border border-[rgb(0,27,10)]/15 bg-white/95 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-md overflow-hidden">

                  <div className="relative w-full h-0.75 bg-linear-to-r from-[rgb(0,27,10)] via-[rgb(25,110,55)] to-[rgb(0,27,10)]">
                    <div className="absolute inset-0 blur-sm opacity-60 bg-[rgb(15,75,35)]" />
                  </div>

                  <div className=" flex flex-col gap-5 md:gap-7 p-5 md:p-8 lg:p-10">


                    <div className="w-9 h-9 md:w-11 md:h-10 rounded-full border border-[rgb(0,27,10)]/15 bg-[rgb(0,27,10)]/5 flex items-center justify-center text-[16px] md:text-[20px] text-[rgb(0,27,10)] shadow-[0_8px_25px_rgba(0,27,10,0.08)]">
                      ★
                    </div>


                    <div className="space-y-3">

                      <h2 className="text-[17px] md:text-[20px] lg:text-[24px] font-semibold tracking-tight text-[rgb(0,27,10)] leading-tight">
                        Built on Trust, Designed for Modern Living
                      </h2>

                      <p className="text-[13px] md:text-[11px] lg:text-[14px] leading-[1.9] text-black/70 font-medium">
                        Boston Estate was founded with a vision to make modern real estate more transparent,
                        reliable, and people-focused. We help individuals, families, and investors discover
                        quality properties without the stress and uncertainty that often come with the market.
                        Through thoughtful development, trusted service, and well-planned spaces, Boston Estate
                        creates real estate solutions that make owning, investing, and living more rewarding.
                      </p>

                    </div>


                    <div className="w-full h-20 md:h-35 rounded-2xl bg-linear-to-br from-[rgb(0,27,10)] via-[rgb(6,45,20)] to-[rgb(15,75,35)] flex items-end p-5 md:p-7 overflow-hidden relative">

                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]" />

                      <div className="relative z-10">
                        <p className="text-white/70 text-[10px] md:text-[10px] uppercase tracking-[0.2em]">
                          Boston Estate
                        </p>

                        <h3 className="text-white text-[11px] md:text-[13px] lg:text-[14px] font-semibold leading-tight max-w-125">
                          Creating spaces people are proud to call home.
                        </h3>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col flex justify-center items-center">
                <div className="w-[88%] md:w-[72%] lg:w-[78%] rounded-[28px] border border-[rgb(0,27,10)]/10 bg-white/95 shadow-[0_15px_50px_rgba(0,0,0,0.08)] backdrop-blur-md overflow-hidden">

                  <div className="relative w-full h-0.75 bg-linear-to-r from-[rgb(0,27,10)] via-[rgb(25,110,55)] to-[rgb(0,27,10)]">
                    <div className="absolute inset-0 blur-sm opacity-60 bg-[rgb(15,75,35)]" />
                  </div>

                  <div className="flex flex-col gap-5 md:gap-7 p-5 md:p-8 lg:p-10">

                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[rgb(0,27,10)]/10 bg-[rgb(0,27,10)]/5 flex items-center justify-center text-[16px] md:text-[15px] text-[rgb(0,27,10)] shadow-[0_8px_25px_rgba(0,27,10,0.08)]">
                      ◼
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-3">

                        <h2 className="text-[17px] md:text-[20px] lg:text-[24px] font-semibold tracking-tight text-[rgb(0,27,10)] leading-tight">
                          Built on Trust, Designed for Modern Living
                        </h2>
                        <p className="text-[13px] md:text-[12px] lg:text-[14px] leading-[1.8] text-black/60 font-medium max-w-175">
                          Boston Estate delivers premium real estate solutions tailored for          modern lifestyles, smart investments, and comfortable living.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 pt-1">
                        {[
                          "Property Sales",
                          "Luxury Homes",
                          "Commercial Real Estate",
                          "Rentals", "Property Management",
                          "Investment Advisory",
                        ].map((item, index) => (
                          <div key={index} className="rounded-xl border border-[rgb(0,27,10)]/10 bg-[rgb(0,27,10)]/3 px-3 py-2 md:px-4 md:py-3 text-[11px] md:text-[13px] lg:text-[11px] font-semibold text-[rgb(0,27,10)] flex items-center gap-2 hover:bg-[rgb(0,27,10)] hover:text-white transition-all duration-300 cursor-pointer"  >
                            <span className="text-[rgb(15,75,35)]">
                              ✦
                            </span>
                            {item}
                          </div>
                        ))
                        }
                      </div>
                    </div>
                    <a href="/properties#props">
                      <button className="group relative overflow-hidden w-[70%]  h-12 md:h-14 rounded-2xl bg-linear-to-br from-[rgb(0,27,10)] via-[rgb(6,45,20)] to-[rgb(15,75,35)] flex items-center justify-between px-5 md:px-7 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_12px_30px_rgba(0,27,10,0.25)]">

                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]" />
                        <div className="relative z-10 flex flex-row items-center justify-between gap-9 lg:gap-15">

                          <h3 className="text-white text-[13px] md:text-[15px] lg:text-[12px] font-semibold">
                            View Listings
                          </h3>

                        </div>
                        <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white text-[14px] md:text-[16px] group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </div>

                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full flex-col flex justify-center items-center">
                <div className="w-[88%] md:w-[72%] lg:w-[78%] rounded-4xl border border-[rgb(0,27,10)]/10 bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl overflow-hidden">


                  <div className="relative w-full h-0.75 bg-linear-to-r from-[rgb(0,27,10)] via-[rgb(25,110,55)] to-[rgb(0,27,10)]">
                    <div className="absolute inset-0 blur-sm opacity-60 bg-[rgb(15,75,35)]" />
                  </div>

                  <div className="flex flex-col gap-6 md:gap-8 p-5 md:p-8 lg:p-10">

                    {/* Header Icon */}
                    <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl border border-[rgb(0,27,10)]/10 bg-linear-to-br from-[rgb(0,27,10)]/6 to-[rgb(15,75,35)]/8 flex items-center justify-center text-[16px] md:text-[22px] text-[rgb(0,27,10)] shadow-[0_8px_25px_rgba(0,27,10,0.08)]">
                      ✦
                    </div>


                    <div className="space-y-5">

                      <div className="space-y-3">
                        <p className="text-[10px] md:text-[13px] uppercase tracking-[0.28em] text-[rgb(15,75,35)] font-semibold">
                          Why Clients Trust Boston Estate
                        </p>

                        <h2 className="text-[17px] md:text-[22px] lg:text-[26px] font-semibold tracking-tight text-[rgb(0,27,10)] leading-tight">
                          Real Estate Experience Built Around Excellence
                        </h2>

                        <p className="text-[13px] md:text-[12px] lg:text-[14px] leading-[1.9] text-black/60 font-medium max-w-180">
                          From verified listings to dedicated client support, Boston Estate
                          delivers a refined real estate experience focused on trust,
                          transparency, and premium living opportunities.
                        </p>
                      </div>


                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">

                        {[
                          {
                            title: "Verified Listings",
                            icon: <HiOutlineBadgeCheck />,
                          },
                          {
                            title: "Trusted Agents",
                            icon: <HiOutlineUserGroup />,
                          },
                          {
                            title: "Transparent Pricing",
                            icon: <HiOutlineCurrencyDollar />,
                          },
                          {
                            title: "Prime Locations",
                            icon: <HiOutlineLocationMarker />,
                          },
                          {
                            title: "Personalized Support",
                            icon: <HiOutlineSupport />,
                          },
                          {
                            title: "Fast Response Time",
                            icon: <HiOutlineLightningBolt />,
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="group rounded-2xl border border-[rgb(0,27,10)]/8 bg-linear-to-br from-[rgb(0,27,10)]/2.5 to-[rgb(15,75,35)]/4 px-3 py-3 md:px-5 md:py-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(15,75,35)]/20 hover:bg-[rgb(0,27,10)] hover:shadow-[0_15px_35px_rgba(0,27,10,0.12)] cursor-pointer"
                          >


                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white border border-[rgb(0,27,10)]/8 flex items-center justify-center text-[rgb(15,75,35)] text-[11px] md:text-[15px] shadow-sm group-hover:bg-white/10 group-hover:border-white/10 group-hover:text-white transition-all duration-300">
                              {item.icon}
                            </div>


                            <p className="text-[11px] md:text-[8px] lg:text-[11px] font-semibold text-[rgb(0,27,10)] leading-snug group-hover:text-white transition-colors duration-300">
                              {item.title}
                            </p>

                          </div>
                        ))}
                      </div>
                    </div>

                    <a href="/about#consultant">
                      <button className="group relative overflow-hidden w-full h-22 md:h-25 rounded-[22px] bg-linear-to-br from-[rgb(0,27,10)] via-[rgb(6,45,20)] to-[rgb(15,75,35)] flex items-center justify-between px-5 md:px-7 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_18px_40px_rgba(0,27,10,0.28)]">


                        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,white,transparent_45%)]" />


                        <div className="relative z-10 flex flex-col items-start">
                          <p className="text-white/60 text-[10px] md:text-[11px] lg:text-[9.5px] uppercase tracking-[0.28em] font-medium">
                            Talk to Our Experts
                          </p>

                          <h3 className="text-white text-[13px] md:text-[15px] lg:text-[13px] font-semibold tracking-tight">
                            Book Consultation
                          </h3>
                        </div>


                        <div className="relative z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-white text-[15px] md:text-[16px] group-hover:translate-x-1.5 transition-all duration-300">
                          →
                        </div>

                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <article className=" bg-linear-to-b from-emerald-300/15 via-gray-200/20 to-background w-full h-fit pb-20">
            <div className="w-full flex justify-center items-center py-8 md:py-10">
              <div className="w-[92%] sm:w-[90%] md:w-[86%] lg:w-[78%] xl:w-[72%] 2xl:w-[68%] rounded-[28px] md:rounded-[36px] border border-[rgb(0,27,10)]/10 bg-white/90 shadow-[0_15px_45px_rgba(0,0,0,0.06)] backdrop-blur-xl overflow-hidden">

                <div className="relative w-full h-0.75 bg-linear-to-r from-[rgb(0,27,10)] via-[rgb(25,110,55)] to-[rgb(0,27,10)]">
                  <div className="absolute inset-0 blur-sm opacity-60 bg-[rgb(15,75,35)]" />
                </div>

                <div className="flex flex-col gap-7 md:gap-9 p-4 sm:p-5 md:p-7 lg:p-8">

                  <div className="space-y-4">

                    <p className="lg:text-[9px] text-[10px] md:text-[9px] uppercase tracking-[0.24em] text-[rgb(15,75,35)] font-semibold">
                      Our Achievements
                    </p>

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

                      <div className="space-y-3 max-w-170">

                        <h2 className="text-[18px] md:text-[23px] lg:text-[24px] font-semibold tracking-tight text-[rgb(0,27,10)] leading-[1.15]">
                          Numbers That Reflect Trust & Excellence
                        </h2>

                        <p className="lg:text-[13px] text-[13px] md:text-[12px] leading-[1.8] text-black/60 font-medium max-w-155">
                          Over the years, Boston Estate has built a reputation rooted in
                          exceptional service, successful transactions, and lasting client
                          relationships across the real estate market.
                        </p>

                      </div>

                      <div className="w-fit rounded-2xl border border-[rgb(0,27,10)]/10 bg-[rgb(0,27,10)]/3 px-4 py-3">
                        <p className="text-[9px] md:text-[9px] uppercase tracking-[0.2em] text-[rgb(15,75,35)] font-semibold whitespace-nowrap">
                          Trusted Real Estate Brand
                        </p>
                      </div>

                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">

                    {[
                      {
                        icon: <HiOutlineHome />,
                        value: "500+",
                        label: "Properties Listed",
                      },
                      {
                        icon: <HiOutlineUsers />,
                        value: "1,200+",
                        label: "Happy Clients",
                      },
                      {
                        icon: <HiOutlineClock />,
                        value: "10+",
                        label: "Years Experience",
                      },
                      {
                        icon: <HiOutlineTrendingUp />,
                        value: "₦2B+",
                        label: "Property Transactions",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-[18px] md:rounded-[20px] border border-[rgb(0,27,10)]/8 bg-linear-to-br from-white to-[rgb(0,27,10)]/3 p-4 md:p-5 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-1 hover:border-[rgb(15,75,35)]/20 hover:shadow-[0_18px_35px_rgba(0,27,10,0.08)]"
                      >

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(15,75,35,0.08),transparent_45%)]" />

                        <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-2xl border border-[rgb(0,27,10)]/10 bg-[rgb(0,27,10)]/4 flex items-center justify-center text-[rgb(15,75,35)] text-[14px] md:text-[18px] shadow-sm">
                          {item.icon}
                        </div>

                        <div className="relative z-10 space-y-1.5">

                          <h3 className="lg:text-[15px] text-[11px] md:text-[20px] font-semibold tracking-tight text-[rgb(0,27,10)] leading-none">
                            {item.value}
                          </h3>

                          <p className="lg:text-[11px] text-[10px] md:text-[10px] text-black/60 font-medium leading-relaxed">
                            {item.label}
                          </p>

                        </div>

                      </div>
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-3xl md:rounded-[30px] bg-linear-to-br from-[rgb(0,27,10)] via-[rgb(6,45,20)] to-[rgb(15,75,35)] px-5 py-4 md:px-5 md:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,white,transparent_45%)]" />

                    <div className="relative z-10 space-y-1.5 max-w-120">

                      <p className="text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-medium">
                        Boston Estate
                      </p>

                      <h3 className="text-white text-[11px] md:text-[15px] lg:text-[13px] font-semibold tracking-tight leading-snug">
                        Helping clients make smarter property decisions every day.
                      </h3>

                    </div>

                    <button className="relative z-10 h-7 md:h-9 px-4 md:px-5 rounded-2xl bg-white text-[rgb(0,27,10)] text-[11px] md:text-[10px] font-semibold hover:scale-[1.03] hover:bg-[#facc15] transition-all duration-300 shadow-lg whitespace-nowrap">
                      <a href="/properties#props">  Explore Properties</a>
                    </button>

                  </div>

                </div>
              </div>
            </div>
          </article>
          <section className=" w-full h-full flex flex-col justify-center items-center pb-20">
            <div className="bg-mist-950 rounded-r-xl rounded-l-xl md:rounded-r-2xl md:rounded-l-2xl w-[80%] md:w-[70%] h-15 md:h-20 flex flex-col justify-center items-center">
              <h2 className="text-[17px] md:text-[24px] lg:text-[28px] font-semibold uppercase tracking-tight text-white leading-tight">
                Meet The Team
              </h2>
            </div>
            <section className="bg-emerald-300/15 w-full h-fit flex flex-col">
              <div className="w-full h-fit">
                <Board />
              </div>
              <div className="w-full h-fit">
                <Agents />
              </div>
              <div className="w-full h-fit">
                <Designers />
              </div>
              <div id="consultant" className="w-full h-fit">
                <Consultants />
              </div>
            </section>
          </section>
          <article className="w-full h-fit bg-linear-to-b from-emerald-background via-emerald-300/15 to-background flex flex-col justify-center items-center pb-20">
            <div className="flex w-full h-15 md:h-20 items-center justify-center">
              <h3 className="text-[rgb(0,27,10)] font-semibold tracking-[0.25em] text-[14px] md:text-[15px] lg:text-[17px]">FAQ's</h3>
            </div>
            <section className=" w-full h-full flex flex-col ">
              <div className=" w-full h-full">
                <Faq />
              </div>
              <p className="w-full pl-4 h-10 text-black leading-snug text-[10px] md:text-[12px]">For more enquiries, kindly reach out to our consultants</p>
            </section>
          </article>

          <footer className="
            transition-all
            duration-500
            bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_70%)] bg-mist-950 w-full h-fit">
            <div className="lg:hidden flex w-full h-full flex-col">
              <div className="flex items-center justify-start w-full px-6 h-24 border-b border-white/10">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/image copy.png"
                    alt="Boston Estates Logo"
                    width={150}
                    height={20}
                    priority
                    className="transition-all duration-300  hover:scale-105 hover:drop-shadow-[0_0_25px_#dbffd3]"
                  />
                </Link>
              </div>
              <nav className="flex flex-col gap-5 px-6 py-8">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-white font-semibold tracking-[0.25em] text-[10px] md:text-[11px]
             pb-3 transition duration-300 hover:pl-2"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <section className="mb-14 rounded-t-3xl px-6 py-6">
                <h2 className="text-white font-bold text-[12px] mb-4 underline">Our Socials</h2>

                <div className="grid grid-cols-3 gap-6 md:grid-cols-6 gmd:ap-4">
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
                      className={`w-7 h-7 md:w-11 md:h-11 border rounded-full flex items-center justify-center
                transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${color}`}
                    >
                      <Icon className=" w-4 h-5 md:w-5 md:h-5 transition-all duration-300" />
                    </button>
                  ))}
                </div>
              </section>
              <div className=" w-full h-40 flex flex-col justify-center items-center">
                <div data-aos="fade-up" className=" flex justify-center items-center text-[10px] md:text-[10px] lg:text-[11px] xl:text-[11px] font-sans  w-[80%] h-20  lg:w-[80%] xl:w-[80%] text-white border-t-white border-t md:border-0 lg:border-0 xl:border-0 ">
                  &copy; 2026 Designed by Tech-Grey.
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-col w-full h-full">
              <div className=" w-full h-full flex flex-col">
                <div className="w-full h-full flex flex-row items-center">
                  <div className="flex items-center justify-start w-[25%] px-6 h-30">
                    <Link href="/" className="flex items-center gap-3">
                      <Image
                        src="/image copy.png"
                        alt="Boston Estates Logo"
                        width={150}
                        height={20}
                        priority
                        className="transition-all duration-300  hover:scale-105 hover:drop-shadow-[0_0_25px_#dbffd3]"
                      />
                    </Link>
                  </div>
                  <div className=" flex flex-col w-[20%] h-fit">
                    <nav className="flex flex-col gap-5 px-6 py-8">
                      {navLinks.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          className="text-white flex flex-col items-center justify-center font-semibold tracking-[0.25em] text-[8px]
             pb-3 transition duration-300 hover:pl-2"
                        >
                          {label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-col w-[20%] h-fit">
                    <nav className="flex flex-col gap-5 px-6 py-8">
                      {navLinks.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          className="text-white flex flex-col items-center justify-center font-semibold tracking-[0.25em] text-[8px]
             pb-3 transition duration-300 hover:pl-2"
                        >
                          {label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-col w-[20%] h-fit">
                    <nav className="flex flex-col gap-5 px-6 py-8">
                      {navLinks.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          className="text-white flex flex-col items-center justify-center font-semibold tracking-[0.25em] text-[8px]
             pb-3 transition duration-300 hover:pl-2"
                        >
                          {label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="w-full h-40 flex flex-row ">
                  <div
                    className={`${baloo.className} w-[30%] h-full flex justify-center items-center text-white lg:text-2xl xl:text-2xl tracking-wide`}
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
              </div>
              <div className=" w-full h-40 flex flex-col justify-center items-center">
                <div data-aos="fade-up" className=" flex justify-center items-center text-[10px] md:text-[10px] lg:text-[11px] xl:text-[11px] font-sans  w-[80%] h-20  lg:w-[80%] xl:w-[80%] text-white border-t-white border-t md:border-0 lg:border-0 xl:border-0 ">
                  &copy; 2026 Designed by Tech-Grey.
                </div>
              </div>
            </div>
          </footer>
        </div>

      </main >
    </div >
  );
}
