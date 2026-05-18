"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuildingColumns, FaBuildingShield } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { MdRealEstateAgent } from "react-icons/md";
import { TbBuildingEstate } from "react-icons/tb";
import { GiFamilyHouse, GiHouse, GiLighthouse, GiHouseKeys } from "react-icons/gi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { SiHomeassistantcommunitystore, SiHomeadvisor } from "react-icons/si";
import { PiBuildingBold, PiBuildingApartmentFill, PiBuildingsFill } from "react-icons/pi";

const icons = [
    BiSolidBuildingHouse,
    FaBuildingColumns,
    FaBuildingShield,
    BsBuildingsFill,
    GiFamilyHouse,
    GiHouseKeys,
    GiHouse,
    GiLighthouse,
    MdRealEstateAgent,
    SiHomeassistantcommunitystore,
    SiHomeadvisor,
    TbBuildingEstate,
    PiBuildingBold,
    PiBuildingApartmentFill,
    PiBuildingsFill,
];

export default function IconShuffle() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleIcons = [
        icons[currentIndex],
        icons[(currentIndex + 1) % icons.length],
        icons[(currentIndex + 2) % icons.length],
        icons[(currentIndex + 3) % icons.length],
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % icons.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full h-20 flex items-center justify-center relative overflow-hidden">

            <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-20">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="h-px bg-linear-to-r from-emerald-950/80 via-black/20 to-[#eab308]"
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "100%", opacity: [0, 1, 0] }}
                        transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex items-center gap-7">
                <AnimatePresence mode="popLayout">
                    {visibleIcons.map((Icon, i) => (
                        <motion.div
                            key={`${currentIndex}-${i}`}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.8 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="text-[rgb(0,27,10)] text-3xl"
                        >
                            <Icon />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}