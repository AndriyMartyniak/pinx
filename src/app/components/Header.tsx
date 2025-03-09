"use client";

import { motion } from "framer-motion";

export const Header = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("order-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-4 bg-white shadow-md sticky top-0 w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-green-500">Pinx</h1>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={scrollToForm}
          className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-full hover:bg-green-600 transition font-semibold"
        >
          Order Now
        </motion.button>
      </div>
    </header>
  );
};
