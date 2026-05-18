"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DeveloperPage() {
    const router = useRouter();
    const [copied, setCopied] = useState("");

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(""), 2000);
    };
    const handleBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push("/");
        }
    };

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">

            <div className="text-center max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Contact Developer
                </h1>
                <p className="text-gray-400">
                    Need a website, UI design, Graphic design, or want to collaborate? Let’s build something clean and powerful.
                </p>
            </div>

            <div className="mt-10 w-full max-w-xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 space-y-6 shadow-lg">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                        src="/tg.png"
                        alt="Company Logo"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                </div>

                <div>
                    <p className="text-sm text-gray-400">Developer</p>
                    <h2 className="text-xl font-semibold">Tech-Grey</h2>
                </div>

                <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-sm">techgrey7@gmail.com</span>
                    <button
                        onClick={() => copyToClipboard("techgrey7@gmail.com", "email")}
                        className="text-xs bg-white text-black px-3 py-1 rounded hover:opacity-80"
                    >
                        {copied === "email" ? "Copied!" : "Copy"}
                    </button>
                </div>


                <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-sm">+234 706 243 9066</span>
                    <button
                        onClick={() => copyToClipboard("+234 706 243 9066", "phone")}
                        className="text-xs bg-white text-black px-3 py-1 rounded hover:opacity-80"
                    >
                        {copied === "phone" ? "Copied!" : "Copy"}
                    </button>
                </div>

                <div className="flex gap-4 justify-center pt-4">
                    <a
                        href="https://wa.me/2347062439066"
                        target="_blank"
                        className="bg-green-500 px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                    >
                        WhatsApp
                    </a>

                    <a
                        href="https://twitter.com/techgrey_coder"
                        target="_blank"
                        className="bg-blue-500 px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                    >
                        Twitter
                    </a>

                    <a
                        href="https://github.com/techgrey-coder"
                        target="_blank"
                        className="bg-gray-800 px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>

            <p className="text-gray-500 text-xs mt-10">
                Built with precision & attention to detail.
            </p>

            <button
                onClick={handleBack}
                className="mt-8 bg-white text-black px-6 py-2 rounded-lg hover:opacity-80 transition"
            >
                ← Back
            </button>
        </main>
    );
}
