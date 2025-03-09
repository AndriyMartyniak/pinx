"use client";

import { motion } from "framer-motion";
import { FaHeartbeat, FaBed, FaHome, FaDollarSign } from "react-icons/fa";

const features = [
  { icon: <FaHeartbeat />, text: "Relieves back & neck pain" },
  { icon: <FaBed />, text: "Improves sleep & circulation" },
  { icon: <FaHome />, text: "Easy to use at home" },
  { icon: <FaDollarSign />, text: "Affordable alternative to massage" },
];

export const Features = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-green-500 text-4xl mb-4">{feature.icon}</div>
              <p className="text-lg text-gray-700">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
