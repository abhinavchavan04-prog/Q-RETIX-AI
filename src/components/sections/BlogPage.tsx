"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  Search,
  BookOpen,
  TrendingUp,
  Sparkles,
  ChevronRight,
  Bookmark,
  Share2,
  Filter,
} from "lucide-react";
import Link from "next/link";

const categories = [
  "All",
  "Research",
  "Drug Discovery",
  "Artificial Intelligence",
  "Clinical Trials",
  "Healthcare Innovation",
  "Pharmaceutical Industry",
];

const tags = ["AI", "Machine Learning", "Clinical", "Research", "Drug Discovery", "Regulatory", "FDA", "Genomics", "Vision"];

const posts = [
  {
    slug: "future-of-ai-pharmaceutical-research",
    title: "The Future of AI in Pharmaceutical Research",
    excerpt: "How large language models and multimodal AI are transforming drug discovery pipelines, reducing time-to-market, and enabling precision medicine at scale.",
    category: "Artificial Intelligence",
    date: "June 15, 2026",
    readTime: "8 min read",
    author: "Dr. Sarah Chen",
    featured: true,
  },
  {
    slug: "optimizing-clinical-trials-ml",
    title: "Optimizing Clinical Trials with Machine Learning",
    excerpt: "Machine learning approaches to patient stratification, adaptive trial design, and real-world evidence integration.",
    category: "Clinical Trials",
    date: "June 12, 2026",
    readTime: "6 min read",
    author: "Dr. James Wilson",
    featured: false,
  },
  {
    slug: "generative-ai-molecule-design",
    title: "Generative AI for Molecule Design",
    excerpt: "Exploring how generative models like diffusion models and transformers are revolutionizing de novo drug design.",
    category: "Drug Discovery",
    date: "June 8, 2026",
    readTime: "10 min read",
    author: "Dr. Maria Rodriguez",
    featured: false,
  },
  {
    slug: "real-world-evidence-2026",
    title: "Real-World Evidence in 2026: A Regulatory Perspective",
    excerpt: "An overview of how regulatory agencies are embracing real-world data and AI-driven evidence generation.",
    category: "Research",
    date: "June 5, 2026",
    readTime: "7 min read",
    author: "Dr. Alan Park",
    featured: false,
  },
  {
    slug: "precision-medicine-breakthroughs",
    title: "Precision Medicine Breakthroughs Powered by AI",
    excerpt: "From genomic biomarkers to personalized dosing algorithms, AI is enabling truly individualized therapies.",
    category: "Healthcare Innovation",
    date: "June 1, 2026",
    readTime: "9 min read",
    author: "Dr. Lisa Thompson",
    featured: false,
  },
  {
    slug: "pharma-supply-chain-ai",
    title: "Pharma Supply Chain Resilience with AI",
    excerpt: "Predictive analytics and digital twins are helping pharmaceutical companies build resilient supply chains.",
    category: "Pharmaceutical Industry",
    date: "May 28, 2026",
    readTime: "5 min read",
    author: "Dr. Robert Kim",
    featured: false,
  },
  {
    slug: "ai-regulatory-compliance",
    title: "Navigating AI Regulatory Compliance in Pharma",
    excerpt: "Key considerations for ensuring AI systems meet FDA, EMA, and global regulatory standards.",
    category: "Research",
    date: "May 25, 2026",
    readTime: "11 min read",
    author: "Dr. Emily Foster",
    featured: false,
  },
];

const stats = [
  { label: "Articles", value: "50+", icon: BookOpen },
  { label: "Research", value: "120+", icon: TrendingUp },
  { label: "Readers", value: "10K+", icon: Sparkles },
  { label: "Updates", value: "Weekly", icon: Calendar },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const otherPosts = filteredPosts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFB] via-white to-[#F0F7F5]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#98D7C2]/8 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#A8DADC]/8 rounded-full blur-[150px] pointer-events-none" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#2C4D78 1px, transparent 1px), linear-gradient(90deg, #2C4D78 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6EEF2]/80 border border-[#D0E0E8]/50 text-sm font-medium text-[#2C4D78] mb-6">
                <Sparkles className="w-4 h-4" />
                Q-RETIX Research &amp; Insights
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C4D78] mb-6 tracking-tight leading-tight">
                Latest Research &amp; Insights
              </h1>

              <p className="text-lg text-[#5A6B82] leading-relaxed max-w-2xl mx-auto mb-10">
                Explore breakthroughs in AI-powered healthcare, pharmaceutical research, and medical innovation.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#D0E0E8]/40 p-4 text-center"
                  >
                    <stat.icon className="w-5 h-5 text-[#A8DADC] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-[#2C4D78]">{stat.value}</div>
                    <div className="text-[11px] font-medium text-[#5A6B82] uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky top-[76px] z-40 bg-white/80 backdrop-blur-xl border-b border-[#E6EEF2] py-4">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB0]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-xl bg-[#F8FAFB] border border-[#E6EEF2] text-[13px] text-[#33415C] placeholder-[#8A9BB0] focus:border-[#2C4D78] focus:ring-1 focus:ring-[#2C4D78]/20 outline-none transition-all"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
              <Filter className="w-4 h-4 text-[#8A9BB0] shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-[#2C4D78] text-white shadow-md shadow-[#2C4D78]/15"
                      : "bg-[#F8FAFB] text-[#5A6B82] border border-[#E6EEF2] hover:border-[#2C4D78]/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                  selectedTag === tag
                    ? "bg-[#A8DADC]/20 text-[#2C4D78] border border-[#A8DADC]"
                    : "text-[#8A9BB0] hover:text-[#5A6B82]"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Article */}
        {!searchQuery && selectedCategory === "All" && (
          <div className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-white rounded-[32px] border border-[#E6EEF2] overflow-hidden hover:shadow-2xl hover:shadow-[#2C4D78]/5 transition-all duration-500 cursor-pointer"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-72 lg:h-[440px] bg-gradient-to-br from-[#2C4D78] to-[#1A3650] overflow-hidden">
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    />

                    <motion.div
                      animate={{ y: [0, -10, 0], rotate: [0, 1, 0, -1, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-28 h-28 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-white/40" />
                      </div>
                    </motion.div>

                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[13px] font-semibold">
                        Featured Article
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6">
                      <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-[12px] font-medium">
                        {featuredPost.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 text-[13px] text-[#8A9BB0]">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {featuredPost.author}
                      </div>
                      <span className="w-1 h-1 rounded-full bg-[#D0E0E8]" />
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredPost.date}
                      </div>
                      <span className="w-1 h-1 rounded-full bg-[#D0E0E8]" />
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#2C4D78] mb-4 leading-tight group-hover:text-[#1a3a5c] transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-[15px] text-[#5A6B82] leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2C4D78] group-hover:text-[#98D7C2] transition-colors"
                    >
                      Read Article
                      <div className="w-8 h-8 rounded-full bg-[#E6EEF2] flex items-center justify-center group-hover:bg-[#2C4D78] transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        )}

        {/* Blog Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2C4D78] mb-6">
            {searchQuery ? `Search Results (${otherPosts.length})` : "Latest Articles"}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {otherPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="group bg-white rounded-2xl border border-[#E6EEF2] overflow-hidden hover:shadow-xl hover:shadow-[#2C4D78]/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-[#E6EEF2] to-[#D0E0E8]/50 flex items-center justify-center overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, #2C4D78 1px, transparent 0)`,
                          backgroundSize: "20px 20px",
                        }}
                      />

                      <div className="relative w-14 h-14 rounded-2xl bg-white/80 backdrop-blur border border-[#D0E0E8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      >
                        <BookOpen className="w-6 h-6 text-[#2C4D78]/40" />
                      </div>

                      <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <button className="w-8 h-8 rounded-lg bg-white/80 backdrop-blur border border-[#D0E0E8] flex items-center justify-center hover:bg-[#2C4D78] hover:text-white transition-colors"
                        >
                          <Bookmark className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-white/80 backdrop-blur border border-[#D0E0E8] flex items-center justify-center hover:bg-[#2C4D78] hover:text-white transition-colors"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="px-2.5 py-1 rounded-full bg-[#E6EEF2] text-[11px] font-semibold text-[#2C4D78] uppercase tracking-wider"
                        >
                          {post.category}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-[#8A9BB0]"
                        >
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-[#33415C] mb-2 group-hover:text-[#2C4D78] transition-colors leading-snug"
                      >
                        {post.title}
                      </h3>

                      <p className="text-[13px] text-[#5A6B82] leading-relaxed mb-4 line-clamp-2 flex-1"
                      >
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#E6EEF2]">
                        <div className="flex items-center gap-2 text-[12px] text-[#8A9BB0]">
                          <div className="w-6 h-6 rounded-full bg-[#E6EEF2] flex items-center justify-center text-[10px] font-bold text-[#2C4D78]">
                            {post.author.split(" ").map((n) => n[0]).join("")}
                          </div>
                          {post.author}
                        </div>

                        <div className="flex items-center gap-1 text-[12px] font-medium text-[#2C4D78] group-hover:gap-2 transition-all">
                          Read
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {otherPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Search className="w-12 h-12 text-[#D0E0E8] mx-auto mb-4" />
            <p className="text-[#5A6B82]">No articles found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
