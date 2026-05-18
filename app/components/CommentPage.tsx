"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";

type CommentCard = {
  review: {
    name: string;
    date: string;
    story: string;
    rating: number;
  };
};

export function Comment({ review }: CommentCard) {
  const [isVisible, setIsVisible] = useState(false);

  function getInitials(name: string) {
    return name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  function getColor(name: string) {
    const colors = [
      "bg-pink-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-orange-500",
    ];

    return colors[name.charCodeAt(0) % colors.length];
  }

  return (
    <section className="w-full flex justify-center">
      <article className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden no-scrollbar shadow-lg">
        
        {/* Header */}
        <button
          onClick={() => setIsVisible((prev) => !prev)}
          className="w-full flex items-center justify-between px-4 py-4 bg-[#eab308] active:scale-[0.98] transition"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-black ${getColor(
                review.name
              )}`}
            >
              {getInitials(review.name)}
            </div>

            <div className="text-left">
              <h3 className="text-sm font-semibold text-black line-clamp-1">
                {review.name}
              </h3>

              <p className="text-xs text-black">{review.date}</p>
            </div>
          </div>

          <IoChevronDown
            className={`text-black text-lg transition-transform duration-300 ${
              isVisible ? "rotate-180" : ""
            }`}
          />
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
            <div className="px-4 pb-5 pt-1 border-t border-white/10 bg-linear-to-br from-zinc-950 via-zinc-800 to-zinc-900">
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < review.rating
                        ? "text-yellow-400"
                        : "text-zinc-600"
                    }`}
                  />
                ))}
              </div>

              {/* Story */}
              <p className="text-sm leading-7 text-white/85 wrap-break-words">
                {review.story}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}