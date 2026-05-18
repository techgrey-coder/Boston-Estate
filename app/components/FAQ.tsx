"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { HiMiniSparkles } from "react-icons/hi2";

const faqQuestion = [
  {
    question: "Are listings verified?",
    answer:
      "Yes. Every property listed on our platform goes through a verification process to ensure authenticity, ownership validation, and accurate property details.",
  },
  {
    question: "Do you help with documentation?",
    answer:
      "Absolutely. Our team assists clients with property agreements, title verification, legal documentation, and transaction guidance from start to finish.",
  },
  {
    question: "Can foreigners buy properties?",
    answer:
      "Yes. We guide international buyers through the legal and investment process to make property acquisition smooth and transparent.",
  },
  {
    question: "Are there hidden charges or fees?",
    answer:
      "No. We maintain full transparency on all fees, commissions, and payment structures before any transaction is finalized.",
  },
  {
    question: "Do you manage rental properties?",
    answer:
      "Yes. We provide professional property management services including tenant sourcing, rent collection, maintenance coordination, and inspections.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Your privacy is important to us. All client information and transactions are protected with secure handling and confidential processes.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-8 md:py-12">
      <article className="overflow-hidden rounded-4xl border border-white/10 bg-white/3 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.18)]">

        <div className="border-b border-white/10 px-5 md:px-8 py-6 md:py-8">
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#eab308] to-[#facc15] shadow-lg shadow-yellow-500/20">
              <HiMiniSparkles className="text-black text-xl" />
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#eab308] font-medium">
                Support & Answers
              </p>

              <h2 className="mt-1 text-[rgb(0,27,10)] text-2xl md:text-3xl font-semibold tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          {/* Quick Topics */}
          <div className="mt-6 flex flex-wrap gap-3">
            {faqQuestion.map((item, index) => (
              <div
                key={index}
                className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-[11px] md:text-xs font-medium tracking-wide text-gray-600 backdrop-blur-md"
              >
                {item.question}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 p-5 md:p-8">

          {faqQuestion.map((quiz, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group overflow-hidden rounded-[1.8rem] border transition-all duration-500 ${
                  isOpen
                    ? "border-[#eab308]/30 bg-linear-to-br from-[rgb(0,27,10)] via-[rgb(6,45,20)] to-[rgb(15,75,35)] shadow-[0_20px_50px_rgba(234,179,8,0.10)]"
                    : "border-white/10 bg-white/3 hover:border-white/20"
                }`}
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 md:px-6 py-5 text-left transition-all duration-300"
                >
                  <div className="flex items-start gap-4">

                    <div
                      className={`mt-1 h-3 w-3 rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.7)]"
                          : "bg-white/20"
                      }`}
                    />

                    <h3
                      className={`text-base md:text-lg font-semibold tracking-tight transition-colors duration-300 ${
                        isOpen
                          ? "text-white/85"
                          : "text-[rgb(0,27,10)]"
                      }`}
                    >
                      {quiz.question}
                    </h3>
                  </div>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-[#eab308]/30 bg-[#eab308] text-black"
                        : "border-white/10 bg-white/4 text-[rgb(0,27,10)]"
                    }`}
                  >
                    <IoChevronDown className="text-lg" />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-6 pb-6">

                      <div className="h-px w-full bg-linear-to-r from-transparent via-[#eab308]/30 to-transparent" />

                      <p className="pt-5 text-sm md:text-[15px] leading-relaxed text-white/72 max-w-4xl">
                        {quiz.answer}
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </article>
    </section>
  );
}