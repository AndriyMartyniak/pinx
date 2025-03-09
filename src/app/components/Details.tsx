"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const Details = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null); // Типізуємо error

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formEndpoint = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`;

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Something went wrong. Try again!");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error!");
      }
    }
  };

  return (
    <section id="order-form-section" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <Image
            src="/images/product-view.avif"
            alt="Acupressure Mat Product"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold mb-4">Get Yours Today</h2>
          <p className="text-xl text-gray-600 mb-6">
            <span className="line-through text-gray-400">$89.99</span>{" "}
            <span className="text-green-500 font-bold">$49.99</span> – Limited
            Offer!
          </p>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-w-md mx-auto md:mx-0"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message (e.g., preferred color, questions)"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 cursor-pointer text-white px-6 py-3 rounded-full w-full hover:bg-green-600 transition font-semibold"
              >
                Order Now
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          ) : (
            <p className="text-green-500 text-lg">
              Thank you, {formData.name}! We’ll contact you within 24 hours.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
