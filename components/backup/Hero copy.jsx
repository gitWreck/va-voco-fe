"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="py-20 text-center bg-[var(--background)] text-[var(--foreground)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Scale Your Business with <span className="text-[var(--foreground)]/80">N-VA</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[var(--foreground)]/70">
          <strong>Delegate tasks, save time, and focus on growth</strong> — we’ll handle the rest.
        </p>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-[var(--primary)] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[var(--accent)] transition"
        >
          Get Started
        </button>
      </div>
    </motion.section>
  );
}
