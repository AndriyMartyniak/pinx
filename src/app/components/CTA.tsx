"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export const CTA = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("order-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-16 bg-green-500 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Feel Better?</h2>
        <p className="text-lg mb-6">Order now and we will send it ASAP!</p>
        <button
          onClick={scrollToForm}
          className="bg-white cursor-pointer text-green-500 px-6 py-3 rounded-full flex items-center mx-auto hover:bg-gray-100 transition"
        >
          Order Now <FaArrowRight className="ml-2" />
        </button>
      </motion.div>
    </section>
  );
};
