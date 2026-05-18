"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BiImages } from "react-icons/bi";
import { IoArrowForward, IoClose } from "react-icons/io5";

const estates = [
  {
    id: 1,
    title: "Aloe Ville",
    desc: "Luxury smart estate with modern infrastructure and green spaces.",
    cover: "/estate.png",
    gallery: ["/estate.png", "/estate2.png", "/estate3.png", "/img5.jpg"],
  },
  {
    id: 2,
    title: "La Garden",
    desc: "Premium family-friendly estate with serene surroundings.",
    cover: "/garden.png",
    gallery: [
      "/garden.png",
      "/garden2.png",
      "/garden3.png",
      "/garden4.png",
      "/garden5.png",
    ],
  },
];

export function ProductArticle() {
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);

  // lock body scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = selectedGallery ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedGallery]);

  return (
    <>
      <section className="w-full py-8 sm:py-10 lg:py-14">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          {/* PROPERTY CARDS */}
          <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {estates.map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="
                  relative
                  min-h-70
                  sm:min-h-85
                  lg:min-h-105
                  rounded-3xl
                  overflow-hidden
                  isolate
                  group
                  bg-zinc-200
                  shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                "
              >
                {/* IMAGE */}
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  priority
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.04]
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/90
                    via-black/45
                    to-black/10
                  "
                />

                {/* CONTENT */}
                <div
                  className="
                    absolute inset-0 z-10
                    flex flex-col justify-end
                    p-4 sm:p-5 lg:p-6
                  "
                >
                  <div className="max-w-[92%]">
                    <h2
                      className="
                        text-white
                        text-xl
                        
                        lg:text-[1.7rem]
                        font-bold
                        leading-tight
                      "
                    >
                      {item.title}
                    </h2>

                    <p
                      className="
                        mt-2.5
                        text-sm
                        sm:text-[15px]
                        leading-relaxed
                        text-gray-200
                      "
                    >
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedGallery(item.gallery)}
                    className="
                      mt-5
                      w-fit
                      inline-flex
                      items-center
                      gap-2
                      rounded-2xl
                      border border-white/15
                      bg-white/10
                      backdrop-blur-md
                      px-4 py-2.5
                      lg:text-[10px]
                  text-[8px]
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-black
                      hover:gap-3
                      active:scale-[0.98]
                    "
                  >
                    <BiImages className="text-lg" />
                    View Gallery
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA CARD */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="xl:col-span-4 lg:min-h-65 min-h-80"
          >
            <div
              className="
                relative
                h-full
                overflow-hidden
                rounded-3xl
                bg-linear-to-br
                from-zinc-950
                via-zinc-700
                to-zinc-800
                p-5 sm:p-6 lg:p-7
                shadow-[0_8px_30px_rgba(0,0,0,0.14)]
                flex flex-col justify-between
              "
            >
              {/* glow */}
              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  h-44
                  w-44
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              <div className="relative z-10">
                <span
                  className="
                    text-[7px]
                    lg:text-[10px]
                    uppercase
                    tracking-[0.26em]
                    text-gray-400
                  "
                >
                  Premium Living
                </span>

                <h2
                  className="
                    mt-4
                    text-2xl
                    sm:text-3xl
                    lg:text-[2.3rem]
                    font-bold
                    leading-tight
                    text-white
                  "
                >
                  Find Your Next Dream Home
                </h2>

                <p
                  className="
                    mt-4
                    text-sm
                    sm:text-[15px]
                    leading-relaxed
                    text-gray-300
                  "
                >
                  Discover luxury estates, modern apartments, and investment
                  opportunities crafted for comfort and elegance.
                </p>
              </div>

              <button
                className="
                  relative z-10
                  mt-7
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-5 py-3
                  lg:text-[10px]
                  text-[8px]
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#eab308]
                  hover:gap-4
                  active:scale-[0.98]
                "
              >
               <a href="/properties#props"> Explore Properties</a>
                <IoArrowForward className="text-lg" />
              </button>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              bg-black/85
              backdrop-blur-md
              overflow-y-auto
              p-3 sm:p-5 mt-20 lg:mt-0
            "
          >
            <div className="min-h-full flex items-center justify-center">
              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.96 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 16, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="
                  relative
                  w-full
                  max-w-6xl
                  rounded-[26px]
                  bg-white
                  p-3 sm:p-5 lg:p-6
                  shadow-2xl
                "
              >
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="
                    fixed
                    lg:top-3 lg:right-5
                    sm:absolute
                    sm:top-5 right-8
                    z-100
                    flex
                    h-6 w-6
                    lg:h-8 lg:w-8
                    items-center
                    justify-center
                    rounded-full
                    border border-white/10
                    bg-black/90
                    text-white
                    shadow-lg
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:rotate-90
                    hover:scale-105
                    active:scale-95
                  "
                >
                  <IoClose className="text-[17px]" />
                </button>

                {/* GALLERY GRID */}
                <div
                  className="
                    mt-12 sm:mt-12
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    xl:grid-cols-3
                    gap-3 sm:gap-4
                  "
                >
                  {selectedGallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="
                        relative
                        aspect-4/3
                        overflow-hidden
                        rounded-2xl
                        bg-zinc-100
                        group
                      "
                    >
                      <Image
                        src={img}
                        alt={`Estate image ${i + 1}`}
                        fill
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1280px) 50vw,
                          33vw
                        "
                        className="
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}