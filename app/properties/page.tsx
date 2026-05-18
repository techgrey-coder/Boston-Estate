"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SideMenu } from "../components/sideMenu";
import PropsSection from "../components/section/PropsPage";
import { useEffect, useState, useRef } from "react";
import IconShuffle from "../components/IconFade";
import PropertyDetailsPage from "../components/Props/Property";
import PropertyDetails from "../components/Props/Property2";
import GardenVille from "../components/Props/Property3";
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

const baloo = Baloo_2({
  weight: "400",
  subsets: ["latin"],
});


export default function Properties() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const footerRef = useRef<HTMLElement | null>(null);
  const [footerVisible, setFooterVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/properties", label: "PROPERTIES" },
    { href: "/contact", label: "CONTACT" },
    { href: "/developer", label: "DEVELOPER" }
  ];

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
              <PropsSection />

            </div>

          </section>


          <section id="props" className="bg-linear-to-b from-[#f7f8f7] via-emerald-400/15 to-background w-full h-fit">
            <PropertyDetails />
          </section>
          <div className=" w-full h-fit">
            <PropertyDetailsPage />
          </div>
          <div className="w-full h-fit bg-linear-to-b from-[#f7f8f7] via-[#f7f8f7] to-background">
            <GardenVille />
          </div>

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

      </main>
    </div>
  );
}
