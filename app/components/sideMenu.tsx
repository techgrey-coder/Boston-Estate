"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  List,
  X,
  Facebook,
  Instagram,
  TwitterX,
  Pinterest,
} from "react-bootstrap-icons";
import { BiLogoGmail,
    BiLogoWhatsapp
 } from "react-icons/bi";

export function SideMenu(): React.ReactElement {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    setIsMenu((prev) => !prev);
  };

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/properties", label: "PROPERTIES" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <main className={`${isMenu ? "overflow-hidden h-screen" : ""}`}>
      {/* Menu Button */}
      <div className="w-full h-20 flex items-center justify-center">
        <button
          onClick={toggleVisibility}
          className="text-black text-2xl md:text-3xl rounded-full p-2 transition duration-300 hover:scale-110"
        >
          <List />
        </button>
      </div>

      <div
        onClick={toggleVisibility}
        className={`fixed inset-0 z-40 h-screen bg-background  transition-all duration-1000 ${
          isMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[85%] md:w-[80%]
        bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_90%)] bg-mist-950 rounded-r-3xl shadow-2xl flex flex-col
        transition-transform duration-300 ease-out
        ${isMenu ? "translate-x-0" : "-translate-x-full"}`}
      >

        <div className="flex items-center justify-between px-6 h-24 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/image copy.png"
              alt="Boston Estates Logo"
               style={{ height: "auto" }}
              width={150}
              height={20}
              priority
              className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_25px_#dbffd3]"
            />
          </Link>

          <button
            onClick={toggleVisibility}
            className="text-white text-3xl transition duration-300 hover:rotate-90 hover:scale-110"
          >
            <X />
          </button>
        </div>

        <nav className="flex flex-col gap-5 px-6 py-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={toggleVisibility}
              className="text-white font-semibold tracking-[0.25em] text-[11px] md:text-[12px]
              border-b border-white/10 pb-3 transition duration-300 hover:pl-2"
            >
              {label}
            </Link>
          ))}
        </nav>

        <section className="mb-14 rounded-t-3xl px-6 py-6">
          <h2 className="text-white font-bold text-[13px] md:text-[15px] mb-4">Find Us</h2>

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
                className={`w-7 h-7 md:w-10 md:h-10 border rounded-full flex items-center justify-center
                transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${color}`}
              >
                <Icon className=" w-4 h-5 md:w-5 md:h-5 transition-all duration-300" />
              </button>
            ))}
          </div>
        </section>
      </aside>
    </main>
  );
}