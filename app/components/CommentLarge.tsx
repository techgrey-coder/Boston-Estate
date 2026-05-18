"use client";

import { CommentSection } from "./LargeComment";

export function CommentCard() {
    const reviews = [
        {
            name: "Grace M.",
            date: "October 2025",
            rating: 5,
            story:
                "We viewed multiple estates before choosing Boston Estates, and nothing else came close in terms of layout, finishing quality, and overall ambience.",
        },
        {
            name: "Ibrahim S.",
            date: "September 2025",
            rating: 5,
            story:
                "The professionalism stood out immediately. The team handled everything smoothly, and the property looked exactly like the renders and promises.",
        },
        {
            name: "Chioma E.",
            date: "August 2025",
            rating: 4,
            story:
                "I love how quiet and organized the estate is. It feels private, modern, and family-friendly without losing that luxury touch.",
        },
        {
            name: "Tomiwa E.",
            date: "November 2025",
            rating: 5,
            story:
                "Moving into Boston Estates was one of the best decisions for my family. Clean roads, reliable infrastructure, and a calm environment that actually feels secure.",
        },
        {
            name: "Kelvin A.",
            date: "July 2025",
            rating: 5,
            story:
                "Boston Estates delivered beyond expectations. The architecture, lighting, and overall atmosphere give it a truly high-end feel.",
        },
    ];

    return (
        <section className="hidden lg:flex w-full justify-center">
            <div
                className="
          w-full
          max-w-400
          overflow-x-auto
          scrollbar-hide
          no-scrollbar
          snap-x
          snap-mandatory
          scroll-smooth
          px-8
          xl:px-14
          py-6
        "
            >
                <div
                    className="
            flex
            items-stretch
            gap-6
            xl:gap-8
            w-max
          "
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="
                snap-center
                shrink-0
                w-105
                xl:w-120
                transition-transform
                duration-500
                hover:scale-[1.02]
              "
                        >
                            <CommentSection review={review} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}