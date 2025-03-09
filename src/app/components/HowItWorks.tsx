"use client";

import { motion } from "framer-motion";

const steps = [
  "Lie down on the mat",
  "Relax for 10-20 minutes",
  "Feel the relief",
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-md"
            >
              <div className="text-green-500 text-2xl font-bold mb-4">
                {index + 1}
              </div>
              <p className="text-lg text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <iframe
            width="100%"
            height="315"
            src="/videos/acupressure-mat-video.mp4" // Заміни на своє відео
            title="How to Use Acupressure Mat"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};
