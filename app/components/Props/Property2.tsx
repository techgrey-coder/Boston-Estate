"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HiOutlineLocationMarker,
  HiOutlineHome,
  HiOutlineOfficeBuilding,
  HiOutlinePhotograph,
  HiOutlineArrowsExpand,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineMap,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineX,
} from "react-icons/hi";
import { HiMiniSparkles } from "react-icons/hi2";

const galleryImages = [
  "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779015870/img_r0aabe.jpg",
  "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779013775/estate3_xy8wkz.png",
  "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779013614/img2_ohbraz.png",
  "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779015432/img3_qe7g7s.png",
  "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779015870/img_r0aabe.jpg",
];

const amenities = [
  "Swimming Pool",
  "Smart Home System",
  "Private Balcony",
  "Modern Gym",
  "24/7 Security",
  "Walk-in Closet",
  "Private Garden",
  "Dedicated Parking",
];

const propertyDetails = [
  { label: "Bedrooms", value: "5" },
  { label: "Bathrooms", value: "6" },
  { label: "Parking", value: "4 Cars" },
  { label: "Land Size", value: "800 sqm" },
  { label: "Furnishing", value: "Fully Furnished" },
  { label: "Year Built", value: "2026" },
  { label: "Property ID", value: "BST-GWA-9021" },
  { label: "Property Type", value: "Luxury Detached Duplex" },
];

const similarProperties = [
  {
    title: "Contemporary Smart Villa",
    price: "₦780,000,000",
    image:
      "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779013680/img4_o8ab8n.png",
    location: "Maitama, Abuja",
  },
  {
    title: "Elegant Family Residence",
    price: "₦690,000,000",
    image:
      "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779015608/img5_pnsnth.png",
    location: "Asokoro, Abuja",
  },
  {
    title: "Modern Luxury Duplex",
    price: "₦720,000,000",
    image:
      "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779015432/img3_qe7g7s.png",
    location: "Jabi, Abuja",
  },
];

export default function PropertyDetails() {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <section className="w-full bg-black mt-20 overflow-hidden">
      {/* HERO */}
      <div className="w-[92%] lg:w-[88%] mx-auto py-6 md:py-10">
        <div className="relative rounded-4xl md:rounded-[40px] overflow-hidden border border-white/10 bg-[#0b0b0b]">
          
          {/* Premium Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)] z-10" />

          {/* Top Bar */}
          <div className="absolute top-4 md:top-6 left-0 w-full px-4 md:px-6 z-30 flex items-center justify-between">
            <div className="px-4 md:px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white text-[9px] md:text-[11px] tracking-[0.22em] uppercase">
              Boston Estate
            </div>

            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
              <HiOutlineStar className="text-[18px] md:text-[20px]" />
            </button>
          </div>

          {/* Content */}
          <div className="relative z-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center px-5 sm:px-7 md:px-10 lg:px-14 pt-24 md:pt-28 pb-8 md:pb-10">
            
            {/* Left */}
            <div className="space-y-5 md:space-y-6">
              <div className="w-fit px-4 md:px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white text-[9px] md:text-[11px] tracking-[0.22em] uppercase">
                <HiMiniSparkles className="inline mr-2" />
                Premium Property • Gwarimpa Abuja
              </div>

              <div className="space-y-4">
                <h1 className="text-white text-[2rem] sm:text-[2.7rem] md:text-[4.5rem] leading-none font-semibold max-w-212.5 tracking-[-0.04em]">
                  Luxury 5 Bedroom Smart Duplex in Gwarimpa
                </h1>

                <p className="text-white/60 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-162.5">
                  Sophisticated architecture, smart automation, expansive
                  interiors, and premium lifestyle amenities designed for
                  refined modern living in Abuja.
                </p>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 md:gap-5 text-white/75 text-[12px] sm:text-[13px] md:text-[15px] font-medium">
                <div className="flex items-center gap-2">
                  <HiOutlineCurrencyDollar />
                  ₦850,000,000
                </div>

                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker />
                  Gwarimpa, Abuja
                </div>

                <div className="flex items-center gap-2">
                  <HiOutlineHome />
                  Detached Duplex
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 pt-1">
                {[
                  "5 Bedrooms",
                  "6 Bathrooms",
                  "800 sqm",
                  "Smart Home",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="px-4 md:px-5 py-3 rounded-2xl bg-white/6 backdrop-blur-xl border border-white/10 text-white text-[11px] sm:text-[12px] md:text-[14px]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-3">
                <button
                  onClick={() => setOpenInfo(true)}
                  className="group px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-white text-black font-semibold text-[13px] md:text-[15px] hover:scale-[1.03] hover:bg-[#facc15]  transition-all duration-500"
                >
                  <span className="flex items-center gap-3">
                    <HiOutlineOfficeBuilding className="text-[18px] md:text-[20px]" />
                    Property Info
                  </span>
                </button>
              </div>
            </div>

            {/* Right Premium Image Card */}
            <div className="relative">
              <div className="relative h-80 sm:h-105 lg:h-135 rounded-[28px] overflow-hidden border border-white/10 bg-white/5">
                <Image
                  src={galleryImages[0]}
                  alt="Luxury Property"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Card */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 md:p-5 rounded-3xl bg-black/35 backdrop-blur-2xl border border-white/10">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-white/60 uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
                        Premium Residence
                      </p>

                      <h3 className="text-white font-semibold text-[15px] md:text-[18px] mt-1">
                        Gwarimpa District
                      </h3>
                    </div>

                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white text-black flex items-center justify-center">
                      <HiOutlinePhotograph className="text-[22px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* PROPERTY INFO MODAL */}
      <div
        className={`fixed inset-0 z-999 transition-all duration-500 ${
          openInfo
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
          className={`absolute right-0 top-0 h-full w-full md:w-[88%] lg:w-[70%] bg-[#f7f8f7] overflow-y-auto transition-all duration-700 ${
            openInfo ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close */}
          <div className="sticky top-0 z-50 mt-25 bg-[#f7f8f7]/80 backdrop-blur-xl border-b border-black/5 px-6 py-5 flex justify-between items-center">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[rgb(15,75,35)] font-semibold">
                Property Information
              </p>

              <h2 className="text-[24px] md:text-[32px] font-semibold text-[rgb(0,27,10)]">
                Luxury Duplex in Gwarimpa
              </h2>
            </div>

            <button
              onClick={() => setOpenInfo(false)}
              className="w-12 h-12 rounded-full bg-[rgb(0,27,10)] text-white flex items-center justify-center"
            >
              <HiOutlineX className="text-[22px]" />
            </button>
          </div>

          <div className="p-6 md:p-10 space-y-10">

            {/* About */}
            <div className="rounded-[30px] bg-white border border-black/5 p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">

              <div className="space-y-4 max-w-212.5">

                <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(15,75,35)] font-semibold">
                  Property Overview
                </p>

                <h2 className="text-[26px] md:text-[42px] leading-tight font-semibold text-[rgb(0,27,10)]">
                  Refined Luxury Living in One of Abuja’s Most Prestigious Communities
                </h2>

                <p className="text-[14px] md:text-[15px] leading-loose text-black/65">
                  Located within the serene and highly secure district of
                  Gwarimpa, Abuja, this contemporary smart duplex offers a
                  perfect blend of sophistication, comfort, and modern
                  architecture. Designed with expansive living spaces,
                  premium finishes, smart automation, and resort-inspired
                  amenities, the property delivers an exceptional lifestyle
                  experience ideal for families, executives, and investors.
                </p>

              </div>

            </div>

            {/* Gallery */}
            <div className="space-y-5">

              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(15,75,35)] font-semibold">
                  Image Gallery
                </p>

                <h3 className="text-[28px] font-semibold text-[rgb(0,27,10)] mt-2">
                  Explore The Property
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-65 md:h-80 rounded-[28px] overflow-hidden group"
                  >
                    <Image
                      src={image}
                      alt="Property"
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />

                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white flex items-center justify-center">
                      <HiOutlineArrowsExpand />
                    </button>

                  </div>
                ))}
              </div>

            </div>

            {/* Details & Amenities */}
            <div className="grid lg:grid-cols-2 gap-5">

              {/* Details */}
              <div className="rounded-[30px] bg-white border border-black/5 p-6 md:p-8">

                <div className="space-y-6">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(15,75,35)] font-semibold">
                      Property Details
                    </p>

                    <h3 className="text-[24px] font-semibold text-[rgb(0,27,10)] mt-2">
                      Key Information
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">

                    {propertyDetails.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-black/5 bg-[rgb(0,27,10)]/3 p-4"
                      >
                        <p className="text-[11px] text-black/50 font-medium">
                          {item.label}
                        </p>

                        <h4 className="text-[15px] font-semibold text-[rgb(0,27,10)] mt-1">
                          {item.value}
                        </h4>
                      </div>
                    ))}

                  </div>

                </div>

              </div>

              {/* Amenities */}
              <div className="rounded-[30px] bg-white border border-black/5 p-6 md:p-8">

                <div className="space-y-6">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(15,75,35)] font-semibold">
                      Features & Amenities
                    </p>

                    <h3 className="text-[24px] font-semibold text-[rgb(0,27,10)] mt-2">
                      Premium Comfort
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">

                    {amenities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[rgb(0,27,10)]/3 px-4 py-4"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[rgb(0,27,10)] text-white flex items-center justify-center">
                          <HiOutlineCheckCircle />
                        </div>

                        <p className="text-[13px] font-semibold text-[rgb(0,27,10)]">
                          {item}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

            {/* Pricing */}
            <div className="rounded-4xl bg-linear-to-br from-[rgb(0,27,10)] via-[rgb(6,45,20)] to-[rgb(15,75,35)] p-8 md:p-10 text-white relative overflow-hidden">

              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,white,transparent_45%)]" />

              <div className="relative z-10 space-y-5">

                <p className="text-[10px] uppercase tracking-[0.28em] text-white/60 font-semibold">
                  Pricing Information
                </p>

                <h2 className="text-[36px] md:text-[56px] font-semibold">
                  ₦850,000,000
                </h2>

                <p className="text-white/70 max-w-175 leading-loose text-[14px]">
                  Flexible payment structure available with premium financing
                  support for qualified buyers and investors.
                </p>

              </div>

            </div>

            {/* Location */}
            <div className="grid lg:grid-cols-2 gap-5">

              <div className="rounded-[30px] overflow-hidden h-87.5 bg-[#dfe7df] flex items-center justify-center">

                <div className="text-center space-y-3">
                  <HiOutlineMap className="text-[42px] text-[rgb(0,27,10)] mx-auto" />

                  <p className="text-[14px] font-semibold text-[rgb(0,27,10)]">
                    Embedded Google Map Here
                  </p>
                </div>

              </div>

              <div className="rounded-[30px] bg-white border border-black/5 p-6 md:p-8">

                <div className="space-y-5">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(15,75,35)] font-semibold">
                      Prime Location
                    </p>

                    <h3 className="text-[26px] font-semibold text-[rgb(0,27,10)] mt-2">
                      Connected To Everything
                    </h3>
                  </div>

                  {[
                    "10 mins from Jabi Lake Mall",
                    "Close to Top International Schools",
                    "Nearby Premium Restaurants",
                    "Easy Access to Central Abuja",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[rgb(0,27,10)]/3 px-4 py-4"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[rgb(0,27,10)] text-white flex items-center justify-center">
                        <HiOutlineLocationMarker />
                      </div>

                      <p className="text-[13px] font-semibold text-[rgb(0,27,10)]">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* Similar Properties */}
            <div className="space-y-6">

              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(15,75,35)] font-semibold">
                  Similar Properties
                </p>

                <h2 className="text-[30px] font-semibold text-[rgb(0,27,10)] mt-2">
                  You May Also Like
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                {similarProperties.map((property, index) => (
                  <div
                    key={index}
                    className="group rounded-[28px] overflow-hidden bg-white border border-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
                  >

                    <div className="relative h-60 overflow-hidden">

                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-all duration-700"
                      />

                    </div>

                    <div className="p-5 space-y-3">

                      <h3 className="text-[18px] font-semibold text-[rgb(0,27,10)]">
                        {property.title}
                      </h3>

                      <div className="flex items-center justify-between">

                        <p className="text-[rgb(15,75,35)] font-semibold">
                          {property.price}
                        </p>

                        <p className="text-black/50 text-[13px]">
                          {property.location}
                        </p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}