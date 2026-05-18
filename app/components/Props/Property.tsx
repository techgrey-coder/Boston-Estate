"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HiOutlineLocationMarker,
  HiOutlineHome,
  HiOutlineArrowsExpand,
  HiOutlineHeart,
  HiOutlineCheckCircle,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from "react-icons/hi";

const galleryImages = [
  "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779012964/props1_htgtm6.jpg",
  "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779012984/props2_qi42wi.jpg",
  "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779012999/props3_eseq61.jpg",
  "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779013019/props4_byuxlr.jpg",
  "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779013035/props5_p8cm7n.jpg",
];

const propertyDetails = [
  { label: "Bedrooms", value: "4" },
  { label: "Bathrooms", value: "5" },
  { label: "Parking", value: "3 Cars" },
  { label: "Land Size", value: "650 sqm" },
  { label: "Furnishing", value: "Fully Furnished" },
  { label: "Year Built", value: "2025" },
];

const amenities = [
  "Swimming Pool",
  "Smart Home System",
  "Private Balcony",
  "Modern Gym",
  "24/7 Security",
  "Walk-in Closet",
];

const similarProperties = [
  {
    title: "Modern 5 Bedroom Villa",
    price: "₦620,000,000",
    image:
      "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779013614/img2_ohbraz.png",
    location: "Lekki Phase 1",
  },
  {
    title: "Luxury Smart Apartment",
    price: "₦390,000,000",
    image:
      "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779013660/img1_uq2aun.png",
    location: "Victoria Island",
  },
  {
    title: "Contemporary Family Home",
    price: "₦510,000,000",
    image:
      "https://res.cloudinary.com/dhqpupkdh/image/upload/v1779013680/img4_o8ab8n.png",
    location: "Ikoyi",
  },
];

export default function PropertyDetailsPage() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="w-full bg-[#f5f5f2] py-8 md:py-14 flex justify-center overflow-hidden">
      <div className="w-[92%] lg:w-[88%] space-y-10 mt-20">

        {/* HERO */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5">

          {/* Main Image */}
          <div className="relative h-125 md:h-180 rounded-[38px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.12)]">

            <Image
              src={galleryImages[0]}
              alt="Luxury Property"
              fill
              priority
              className="object-cover scale-[1.01]"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/10" />

            {/* Floating top actions */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">

              <div className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-[11px] md:text-[12px] uppercase tracking-[0.28em] text-white font-medium">
                Signature Residence
              </div>

              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <HiOutlineHeart className="text-[18px]" />
              </button>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">

              <div className="max-w-190 space-y-5">

                <h1 className="text-[32px] md:text-[60px] font-semibold leading-[1.05] tracking-[-0.04em]">
                  Luxury 4 Bedroom Duplex in Lekki
                </h1>

                <div className="flex flex-wrap items-center gap-5 text-white/75 text-[13px] md:text-[15px]">

                  <div className="text-[26px] md:text-[34px] font-semibold text-white tracking-[-0.03em]">
                    ₦450,000,000
                  </div>

                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/30" />

                  <div className="flex items-center gap-2">
                    <HiOutlineLocationMarker className="text-[17px]" />
                    Lagos, Nigeria
                  </div>

                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/30" />

                  <div className="flex items-center gap-2">
                    <HiOutlineHome className="text-[17px]" />
                    Duplex
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-3 pt-2">

                  {["4 Bedrooms", "5 Bathrooms", "650 sqm"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-[13px] md:text-[14px] font-medium"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Side Images */}
          <div className="grid grid-cols-2 gap-4">

            {galleryImages.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative h-44 md:h-87.5 rounded-[30px] overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <Image
                  src={image}
                  alt="Property"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-1000 ease-out"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition duration-500" />

                <button className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <HiOutlineArrowsExpand className="text-[18px]" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* OVERVIEW */}
        <div className="relative bg-white rounded-[38px] border border-black/5 p-6 md:p-12 overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.05)]">

          <div className="absolute top-0 right-0 w-72 h-72 bg-[rgb(15,75,35)]/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-215 space-y-5">

            <p className="text-[11px] uppercase tracking-[0.3em] text-[rgb(15,75,35)] font-semibold">
              Property Overview
            </p>

            <h2 className="text-[28px] md:text-[46px] font-semibold text-[rgb(0,27,10)] leading-[1.1] tracking-[-0.04em]">
              Elegant Living Designed Around Comfort & Luxury
            </h2>

            <p className="text-[15px] md:text-[16px] leading-loose text-black/55 max-w-190">
              A refined luxury residence located in one of Lagos’ most
              prestigious neighborhoods, combining spacious interiors,
              contemporary architecture, and premium finishes crafted for
              modern living.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => setShowAbout(!showAbout)}
              className="mt-5 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[rgb(0,27,10)] text-white text-[13px] font-medium hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-black/10"
            >
              {showAbout ? "Hide Property Details" : "About Property"}

              {showAbout ? (
                <HiOutlineChevronUp className="text-[18px]" />
              ) : (
                <HiOutlineChevronDown className="text-[18px]" />
              )}
            </button>
          </div>

          {/* HIDDEN DETAILS */}
          <div
            className={`grid transition-all duration-700 overflow-hidden ${
              showAbout
                ? "grid-rows-[1fr] opacity-100 pt-10"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">

              <div className="grid lg:grid-cols-2 gap-5">

                {/* DETAILS */}
                <div className="rounded-4xl bg-[#f8f8f6] p-6 md:p-7 space-y-6 border border-black/5">

                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] font-semibold text-[rgb(0,27,10)]">
                      Property Details
                    </h3>

                    <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center">
                      <HiOutlineHome className="text-[20px] text-[rgb(15,75,35)]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    {propertyDetails.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-3xl bg-white p-5 border border-black/5 hover:shadow-md transition duration-300"
                      >
                        <p className="text-[11px] uppercase tracking-[0.15em] text-black/40">
                          {item.label}
                        </p>

                        <h4 className="text-[16px] font-semibold text-[rgb(0,27,10)] mt-2">
                          {item.value}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AMENITIES */}
                <div className="rounded-4xl bg-[#f8f8f6] p-6 md:p-7 space-y-6 border border-black/5">

                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] font-semibold text-[rgb(0,27,10)]">
                      Premium Amenities
                    </h3>

                    <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center">
                      <HiOutlineCheckCircle className="text-[20px] text-[rgb(15,75,35)]" />
                    </div>
                  </div>

                  <div className="grid gap-4">

                    {amenities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-3xl bg-white border border-black/5 p-4 hover:translate-x-1 transition duration-300"
                      >
                        <div className="w-11 h-11 rounded-2xl bg-[rgb(0,27,10)] text-white flex items-center justify-center shrink-0">
                          <HiOutlineCheckCircle className="text-[18px]" />
                        </div>

                        <p className="text-[15px] font-semibold text-[rgb(0,27,10)]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* SIMILAR PROPERTIES */}
        <div className="space-y-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[rgb(15,75,35)] font-semibold">
                Similar Properties
              </p>

              <h2 className="text-[28px] md:text-[42px] font-semibold text-[rgb(0,27,10)] mt-2 tracking-[-0.04em]">
                You May Also Like
              </h2>
            </div>

            <p className="text-black/45 text-[14px] max-w-105">
              Discover other carefully selected luxury residences crafted for
              premium living and timeless comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {similarProperties.map((property, index) => (
              <div
                key={index}
                className="group rounded-4xl overflow-hidden bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500"
              >

                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-1000"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-80" />

                  <button className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center">
                    <HiOutlineHeart className="text-[18px]" />
                  </button>

                </div>

                <div className="p-6 space-y-4">

                  <div className="space-y-2">
                    <h3 className="text-[21px] font-semibold text-[rgb(0,27,10)] leading-snug">
                      {property.title}
                    </h3>

                    <div className="flex items-center gap-2 text-black/45 text-[13px]">
                      <HiOutlineLocationMarker />
                      {property.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-black/5">

                    <p className="text-[rgb(15,75,35)] text-[20px] font-semibold tracking-[-0.02em]">
                      {property.price}
                    </p>

                    <button className="px-4 py-2 rounded-xl bg-[#f5f5f2] text-[13px] font-medium text-[rgb(0,27,10)] hover:bg-[rgb(0,27,10)] hover:text-white transition-all duration-300">
                      View
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}