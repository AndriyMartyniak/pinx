"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "Does it hurt?",
    a: "It might feel intense at first, but it’s not painful.",
  },
  { q: "How long should I use it?", a: "10-20 minutes daily is ideal." },
  { q: "How do I clean it?", a: "Wipe with a damp cloth and let it air dry." },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full text-left bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <span className="text-lg font-semibold">{faq.q}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg text-gray-600">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
