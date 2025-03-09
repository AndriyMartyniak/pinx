"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("order-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Relieve Pain & Stress in Just 10 Minutes a Day
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Natural acupressure therapy at home – no pills, no expensive
            massages.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-green-500 cursor-pointer text-white px-6 py-3 rounded-full flex items-center mx-auto md:mx-0 hover:bg-green-600 transition"
          >
            Order Now <FaArrowRight className="ml-2" />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <Image
            src="/images/hero-image.jpg"
            alt="Acupressure Mat"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};
