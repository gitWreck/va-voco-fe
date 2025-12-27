"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <motion.section
  id="services"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="py-16 bg-[var(--background)]"
>

    <section className="py-20 bg-[var(--background)] text-[var(--foreground)]" id="contact">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-[var(--color-primary)]">
          Get in Touch
        </h2>

        {submitted ? (
          <p className="text-center text-[var(--color-primary)] text-lg font-medium">
            ✅ Thanks! We’ll reply soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-[var(--card-bg)] p-8 rounded-2xl shadow-md border border-gray-200"
          >
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              required
            />

            <input
              name="email"
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
</motion.section>
  );
}
