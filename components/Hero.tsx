"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const nameVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const subVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.12, duration: 0.6 },
  },
};

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 0.15], [28, 0]);

  return (
    <section className="h-screen flex items-center" aria-labelledby="hero-title">
      <motion.div
        style={{ opacity, y }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h1
          id="hero-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={nameVariant}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight"
        >
          <span className="block">Drishti Abhay Desai</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={subVariant}
          className="mt-6 text-lg md:text-xl text-muted max-w-3xl mx-auto"
        >
          Building scalable backend systems and intelligent data-driven
          applications.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={subVariant}
          className="mt-3 text-muted max-w-2xl mx-auto"
        >
          Computer Engineering student focused on backend systems, automation, and
          real-world problem solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.25 }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <a
            href="mailto:drishtidesai2005@gmail.com"
            className="text-sm text-text bg-[#111] px-4 py-2 rounded-lg hover:brightness-110"
          >
            Email
          </a>

          <a
            href="https://github.com/Drishti-Desai"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-text bg-[#111] px-4 py-2 rounded-lg hover:brightness-110"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}