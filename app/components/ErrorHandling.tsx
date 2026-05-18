"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuTriangleAlert, LuRefreshCcw, LuHouse } from "react-icons/lu";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen w-full bg-linear-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="
          relative
          w-full
          max-w-xl
          overflow-hidden
          rounded-3xl
          border border-gray-200
          bg-white/80
          backdrop-blur-xl
          shadow-2xl
          p-8 md:p-10
        "
      >
        {/* Glow */}
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <div
            className="
              flex h-20 w-20 items-center justify-center
              rounded-2xl
              bg-red-100
              text-red-600
              shadow-lg
            "
          >
            <LuTriangleAlert size={40} />
          </div>
        </div>

        {/* Text */}
        <div className="relative z-10 mt-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            Something went wrong
          </p>

          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Oops! An unexpected error occurred.
          </h1>

          <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-600">
            We couldn&apos;t process your request right now.
            Try refreshing the page or head back home.
          </p>

          {/* Optional Error Message */}
          {error?.message && (
            <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-4 text-left">
              <p className="text-xs uppercase tracking-wide text-red-500 font-semibold">
                Error Details
              </p>

              <p className="mt-2 text-sm text-red-700 wrap-break-word">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="
              inline-flex items-center justify-center gap-2
              rounded-2xl
              bg-black
              px-6 py-3
              text-sm font-medium text-white
              transition-all duration-300
              hover:scale-105 hover:bg-gray-900
              active:scale-95
              shadow-lg
            "
          >
            <LuRefreshCcw size={16} />
            Try Again
          </button>

          <Link
            href="/"
            className="
              inline-flex items-center justify-center gap-2
              rounded-2xl
              border border-gray-300
              bg-white
              px-6 py-3
              text-sm font-medium text-gray-700
              transition-all duration-300
              hover:scale-105 hover:bg-gray-50
              active:scale-95
            "
          >
            <LuHouse size={16} />
            Back Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}