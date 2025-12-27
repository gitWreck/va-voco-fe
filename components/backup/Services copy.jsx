"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faChartLine,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const services = [
    {
      key: "executive",
      title: "Executive Assistance",
      desc: "Email & calendar management, scheduling, research, and reports.",
      icon: faUserTie,
    },
    {
      key: "marketing",
      title: "Marketing Support",
      desc: "Social media management, content creation, analytics, and campaigns.",
      icon: faChartLine,
    },
    {
      key: "customer",
      title: "Customer Support",
      desc: "Chat, email, ticketing, and order follow-ups.",
      icon: faComments,
    },
  ];

  return (
    <motion.section
  id="services"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="py-16 bg-[var(--background)]"
>


    <section className="py-20 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-primary)]">
          What We Can Do For You
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.key}
              className="bg-[var(--card-bg)] p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-[var(--color-primary)] text-5xl mb-6">
                <FontAwesomeIcon icon={svc.icon} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-foreground)]">
                {svc.title}
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
</motion.section>
  );
}
