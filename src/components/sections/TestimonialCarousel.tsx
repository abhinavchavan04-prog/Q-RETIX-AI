"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame, useSpring } from "framer-motion";
import { Star, BadgeCheck, ExternalLink } from "lucide-react";

type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  org: string;
  quote: string;
  rating: number;
  verified: boolean;
  initials: string;
  color: string;
};

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    org: "St. Jude Medical Center",
    quote: "Q-RETIX AI has transformed our diagnostic pipeline. We've seen a 40% reduction in false negatives and our radiologists now trust AI-assisted screening as a first-line tool.",
    rating: 5,
    verified: true,
    initials: "SC",
    color: "#2C4D78",
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    role: "Head of Research",
    org: "Novartis Institute",
    quote: "The drug discovery acceleration is remarkable. What used to take our team 18 months for lead compound identification now happens in under 8 weeks with Q-RETIX's molecular analysis.",
    rating: 5,
    verified: true,
    initials: "JW",
    color: "#1A6B5B",
  },
  {
    id: 3,
    name: "Dr. Maria Rodriguez",
    role: "Clinical Trial Director",
    org: "Johns Hopkins Medicine",
    quote: "Patient stratification used to be our biggest bottleneck. Q-RETIX's AI models now identify optimal cohorts with 94% accuracy, saving us millions in trial costs.",
    rating: 5,
    verified: true,
    initials: "MR",
    color: "#5A4D8A",
  },
  {
    id: 4,
    name: "Prof. Alan Park",
    role: "Director of AI Research",
    org: "Stanford Medicine",
    quote: "As an academic researcher, I need tools that are transparent and reproducible. Q-RETIX delivers explainable AI with full audit trails — essential for regulatory submissions.",
    rating: 5,
    verified: true,
    initials: "AP",
    color: "#2C4D78",
  },
  {
    id: 5,
    name: "Dr. Emily Foster",
    role: "Medical AI Specialist",
    org: "Mayo Clinic",
    quote: "The integration with our existing PACS system was seamless. Within 2 weeks, our pathologists were using Q-RETIX for automated tissue analysis daily.",
    rating: 5,
    verified: true,
    initials: "EF",
    color: "#1A6B5B",
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    role: "Pharmaceutical Consultant",
    org: "McKinsey Health",
    quote: "I've recommended Q-RETIX to three Fortune 500 pharma clients. The regulatory document generation alone saves their compliance teams 200+ hours per submission.",
    rating: 5,
    verified: true,
    initials: "RK",
    color: "#5A4D8A",
  },
  {
    id: 7,
    name: "Dr. Lisa Thompson",
    role: "Precision Medicine Lead",
    org: "Memorial Sloan Kettering",
    quote: "Personalized oncology is data-intensive. Q-RETIX's multi-omics integration lets us build comprehensive patient profiles that guide targeted therapy selection.",
    rating: 5,
    verified: true,
    initials: "LT",
    color: "#2C4D78",
  },
  {
    id: 8,
    name: "Dr. Michael Chang",
    role: "Healthcare Startup Founder",
    org: "MedVision AI",
    quote: "Building our own AI models would have taken 2 years and $5M. Q-RETIX gave us production-ready medical vision APIs in 6 weeks. Game changer for our startup.",
    rating: 5,
    verified: true,
    initials: "MC",
    color: "#1A6B5B",
  },
];

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-[380px] sm:w-[420px] group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-[#D0E0E8]/40 p-7 shadow-lg shadow-[#2C4D78]/3 hover:shadow-xl hover:shadow-[#2C4D78]/8 transition-shadow duration-500 overflow-hidden">
        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2C4D78]/5 via-transparent to-[#98D7C2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Glow effect */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px]"
          style={{ backgroundColor: testimonial.color }}
          animate={{ opacity: isHovered ? 0.06 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-[13px]"
                style={{ backgroundColor: testimonial.color }}
              >
                {testimonial.initials}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-[14px] font-semibold text-[#2C4D78]">{testimonial.name}</p>
                  {testimonial.verified && (
                    <BadgeCheck className="w-4 h-4 text-[#98D7C2]" />
                  )}
                </div>
                <p className="text-[12px] text-[#8A9BB0]">
                  {testimonial.role} &bull; {testimonial.org}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-0.5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#E8B923] text-[#E8B923]" />
              ))}
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-[15px] text-[#5A6B82] leading-relaxed mb-5">
            "{testimonial.quote}"
          </blockquote>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] text-[#8A9BB0]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#98D7C2] animate-pulse" />
              Verified Healthcare Professional
            </div>
            <button className="w-8 h-8 rounded-lg bg-[#E6EEF2] flex items-center justify-center hover:bg-[#2C4D78] transition-colors group/icon">
              <ExternalLink className="w-3.5 h-3.5 text-[#5A6B82] group-hover/icon:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MarqueeRow({
  direction = "left",
  speed = 1,
  testimonials: items,
}: {
  direction: "left" | "right";
  speed: number;
  testimonials: TestimonialItem[];
}) {
  const baseVelocity = direction === "left" ? -speed * 20 : speed * 20;
  const baseX = useMotionValue(0);
  const smoothX = useSpring(baseX, { stiffness: 50, damping: 20 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (width === 0) return;
    let moveBy = baseVelocity * (delta / 1000);
    let newX = baseX.get() + moveBy;

    if (direction === "left" && newX <= -width) {
      newX = 0;
    } else if (direction === "right" && newX >= 0) {
      newX = -width;
    }

    baseX.set(newX);
  });

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8FAFB] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8FAFB] to-transparent z-10 pointer-events-none" />

      <motion.div ref={containerRef} style={{ x: smoothX }} className="flex gap-5 py-3">
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialCarousel() {
  return (
    <section id="testimonials" className="relative py-28 bg-[#F8FAFB] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C4D78 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
            <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">Testimonials</span>
            <div className="w-1 h-8 bg-gradient-to-b from-[#98D7C2] to-[#2C4D78] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C4D78] tracking-tight mb-5 leading-tight">
            Trusted by Researchers, Doctors &amp; Healthcare Innovators
          </h2>

          <p className="text-base lg:text-lg text-[#5A6B82] leading-relaxed">
            Discover why healthcare professionals choose Q-RETIX AI.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-5">
        <MarqueeRow direction="left" speed={1.2} testimonials={testimonials.slice(0, 4)} />
        <MarqueeRow direction="right" speed={1} testimonials={testimonials.slice(4, 8)} />
      </div>
    </section>
  );
}
