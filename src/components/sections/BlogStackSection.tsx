"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "AI in Medical Diagnosis: The New Frontier",
    description:
      "How artificial intelligence is revolutionizing early disease detection, diagnostic imaging, and clinical decision support systems in modern healthcare.",
    category: "Healthcare Intelligence",
    readTime: "8 min read",
    date: "Dec 15, 2025",
    author: "Dr. Sarah Chen",
    gradient: "from-[#2C4D78] to-[#3D5F8A]",
  },
  {
    id: 2,
    title: "Future of Healthcare Intelligence",
    description:
      "Exploring the convergence of multimodal AI, real-world evidence, and predictive analytics to transform patient outcomes and pharmaceutical research.",
    category: "Research Insights",
    readTime: "12 min read",
    date: "Dec 10, 2025",
    author: "Dr. James Wilson",
    gradient: "from-[#1A6B5B] to-[#2C7A6B]",
  },
  {
    id: 3,
    title: "Research Paper Highlights: Explainable AI",
    description:
      "Deep dive into the latest research on interpretable machine learning models for clinical decision-making and regulatory approval pathways.",
    category: "AI Research",
    readTime: "10 min read",
    date: "Dec 5, 2025",
    author: "Dr. Maria Rodriguez",
    gradient: "from-[#5A4D8A] to-[#6B5F9A]",
  },
  {
    id: 4,
    title: "How Q-RETIX Detects Diseases with Vision Models",
    description:
      "An inside look at our medical vision models, training pipelines, and validation frameworks that power automated pathology screening.",
    category: "Product Deep Dive",
    readTime: "15 min read",
    date: "Nov 28, 2025",
    author: "Dr. Alan Park",
    gradient: "from-[#2C4D78] to-[#3D5F8A]",
  },
];

function BlogCard({
  blog,
  index,
  totalCards,
  progress,
}: {
  blog: (typeof blogs)[0];
  index: number;
  totalCards: number;
  progress: ReturnType<typeof useSpring>;
}) {
  const step = 1 / totalCards;
  const entryStart = index * step;
  const entryEnd = entryStart + step * 0.6;
  const settleEnd = entryStart + step;
  const shrinkStart = settleEnd;
  const shrinkEnd = shrinkStart + step * 0.4;

  // Card rises from below viewport
  const y = useTransform(
    progress,
    [entryStart, entryEnd],
    ["100%", "0%"]
  );

  // Card scales from slightly smaller to full size during entry
  const scale = useTransform(
    progress,
    [entryStart, entryEnd, shrinkStart, shrinkEnd],
    [0.88, 1, 1, 0.94 - index * 0.01]
  );

  // Card opacity during entry
  const opacity = useTransform(
    progress,
    [entryStart, entryStart + 0.02, entryEnd],
    [0, 1, 1]
  );

  // Slight brightness/darkness shift when covered
  const brightness = useTransform(
    progress,
    [shrinkStart, shrinkEnd],
    [1, 0.85]
  );

  const springY = useSpring(y, { stiffness: 80, damping: 25, restDelta: 0.001 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const springBrightness = useSpring(brightness, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="absolute inset-0 px-4 sm:px-6 lg:px-8"
      style={{
        y: springY,
        scale: springScale,
        opacity: springOpacity,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="mx-auto max-w-[1100px] h-full flex items-center"
        style={{ filter: springBrightness.get() === 1 ? undefined : `brightness(${springBrightness})` }}
      >
        <div className="w-full bg-white/90 backdrop-blur-2xl rounded-[32px] border border-[#D0E0E8]/50 shadow-2xl shadow-[#2C4D78]/8 overflow-hidden relative group will-change-transform">
          {/* Animated gradient border on hover */}
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#2C4D78]/10 via-transparent to-[#98D7C2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image / Visual Side */}
            <div
              className={`relative h-64 lg:h-[420px] bg-gradient-to-br ${blog.gradient} overflow-hidden`}
            >
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-30">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              {/* Floating medical icon with gentle animation */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-36 h-36 rounded-[28px] bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shadow-2xl">
                  <svg
                    className="w-16 h-16 text-white/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M9 12h6m-3-3v6m-9 3V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 2v4M8 4h8" strokeLinecap="round" />
                  </svg>
                </div>
              </motion.div>

              {/* Ambient glow orbs */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-[80px]" />
              <div className="absolute top-0 left-0 w-36 h-36 bg-white/10 rounded-full blur-[60px]" />

              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <div className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[13px] font-semibold tracking-wide">
                  {blog.category}
                </div>
              </div>

              {/* Index number badge */}
              <div className="absolute bottom-6 right-6">
                <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center relative">
              <div className="flex items-center gap-4 mb-5 text-[13px] text-[#8A9BB0]">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {blog.author}
                </div>
                <span className="w-1 h-1 rounded-full bg-[#D0E0E8]" />
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {blog.date}
                </div>
                <span className="w-1 h-1 rounded-full bg-[#D0E0E8]" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {blog.readTime}
                </div>
              </div>

              <h3 className="text-2xl lg:text-[28px] font-bold text-[#2C4D78] leading-tight mb-4 group-hover:text-[#1a3a5c] transition-colors duration-300">
                {blog.title}
              </h3>

              <p className="text-[15px] text-[#5A6B82] leading-relaxed mb-8">
                {blog.description}
              </p>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#2C4D78] hover:text-[#1a3a5c] transition-colors group/btn w-fit"
              >
                Read Article
                <motion.div
                  className="w-8 h-8 rounded-full bg-[#E6EEF2] flex items-center justify-center group-hover/btn:bg-[#2C4D78] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <ArrowRight className="w-4 h-4 text-[#2C4D78] group-hover/btn:text-white transition-colors duration-300" />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BlogStackSection() {
  const spacerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section id="blog" className="relative bg-[#F8FAFB]">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C4D78 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
            <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">
              Blog
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C4D78] tracking-tight mb-5 leading-tight">
            Latest Insights & Research
          </h2>

          <p className="text-base lg:text-lg text-[#5A6B82] leading-relaxed">
            Stay updated with breakthroughs in AI-powered healthcare, research,
            product updates, and medical innovation.
          </p>
        </motion.div>
      </div>

      {/* Sticky stack area */}
      <div className="relative">
        {/* Sticky container for cards */}
        <div className="sticky top-0 h-[100dvh] overflow-hidden flex items-center justify-center z-10">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              totalCards={blogs.length}
              progress={progress}
            />
          ))}
        </div>

        {/* Scroll spacer that drives the animation */}
        <div
          ref={spacerRef}
          style={{ height: `${blogs.length * 100}vh` }}
          className="relative z-0"
        />
      </div>

      {/* Read More CTA */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Link href="/blog">
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2C4D78] to-[#3D5F8A] text-white font-semibold text-[15px] shadow-xl shadow-[#2C4D78]/20 hover:shadow-2xl hover:shadow-[#2C4D78]/30 transition-shadow duration-300 relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

              <span className="relative">Read More Articles</span>
              <motion.div
                className="relative w-6 h-6 rounded-full bg-white/15 flex items-center justify-center"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
