"use client"

import { useEffect } from "react";
import AOS from "aos";
import { usePathname } from "next/navigation";

export default function AOSProvider() {

    const pathname = usePathname();

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        AOS.init({
            duration: isMobile ? 100 : 800,
            once: true,
            offset: 20,
            disable: false,
            easing: "ease-out",
        });
    }, []);
    useEffect(() => {
        const handleScroll = () => AOS.refresh();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return null;
}