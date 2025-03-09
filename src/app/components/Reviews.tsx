"use client";

import { motion } from "framer-motion";

const reviews = [
  { name: "Anna S.", text: "My back pain is gone after just a week!" },
  { name: "Mark T.", text: "Best purchase for relaxation. Highly recommend!" },
  { name: "Lisa K.", text: "So easy to use, and I sleep much better now." },
];

export const Reviews = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <p className="text-gray-600 mb-4">"{review.text}"</p>
              <p className="font-semibold text-gray-900">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
