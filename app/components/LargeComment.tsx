"use client";

import { FaStar } from "react-icons/fa6";

type CommentCard = {
    review: {
        name: string;
        date: string;
        story: string;
        rating: number;
    };
};

export function CommentSection({ review }: CommentCard) {
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
        <section className="hidden lg:flex w-full justify-center">
            <article
                className="
          group
          relative
          w-full
          max-w-105
          xl:max-w-120
          min-h-70
          rounded-4xl
          overflow-hidden
          border
          border-white/10
          bg-linear-to-br
          from-zinc-900
          via-zinc-800
          to-zinc-900
          p-7
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-white/20
          hover:shadow-2xl
        "
            >
                {/* Glow */}
                <div
                    className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_45%)]
          "
                />

                {/* Header */}
                <div className="relative flex items-center gap-4 mb-6">
                    <div
                        className={`
              w-14
              h-14
              rounded-full
              flex
              items-center
              justify-center
              text-base
              font-bold
              text-white
              shadow-lg
              ${getColor(review.name)}
            `}
                    >
                        {getInitials(review.name)}
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-white font-semibold text-lg tracking-tight">
                            {review.name}
                        </h3>

                        <p className="text-sm text-white/50">{review.date}</p>
                    </div>
                </div>

                {/* Rating */}
                <div className="relative flex items-center gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={`text-sm transition ${i < review.rating
                                    ? "text-yellow-400"
                                    : "text-zinc-600"
                                }`}
                        />
                    ))}
                </div>

                {/* Review */}
                <p
                    className="
            relative
            text-[15px]
            leading-8
            text-white/80
            font-light
          "
                >
                    “{review.story}”
                </p>

                {/* Decorative blur */}
                <div
                    className="
            absolute
            -bottom-10
            -right-10
            w-32
            h-32
            rounded-full
            bg-white/5
            blur-3xl
          "
                />
            </article>
        </section>
    );
}