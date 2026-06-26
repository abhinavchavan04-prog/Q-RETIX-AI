import React from "react";
import { Metadata } from "next";
import { ArrowRight, Calendar, Newspaper, Download } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press | Q-RETIX AI",
  description: "Latest news, press releases, and media coverage about Q-RETIX AI.",
};

const pressReleases = [
  {
    date: "January 15, 2026",
    title: "Q-RETIX AI Announces Series A Funding Round",
    excerpt: "Company secures significant investment to expand AI-powered pharmaceutical research platform.",
  },
  {
    date: "December 3, 2025",
    title: "New AI Model Achieves Breakthrough in Drug Discovery",
    excerpt: "Q-RETIX AI's latest model demonstrates 40% improvement in compound screening accuracy.",
  },
  {
    date: "October 22, 2025",
    title: "Partnership Announced with Leading Research Institution",
    excerpt: "Strategic collaboration to accelerate clinical trial analysis and regulatory compliance.",
  },
];

const mediaKit = [
  { label: "Brand Guidelines", size: "2.4 MB" },
  { label: "Logo Package", size: "4.1 MB" },
  { label: "Executive Bios", size: "1.2 MB" },
  { label: "Fact Sheet", size: "890 KB" },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">Press</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] tracking-tight mb-6 leading-tight">
              News & Press Releases
            </h1>
            <p className="text-lg text-[#5A6B82] leading-relaxed">
              Stay updated with the latest announcements, product launches, and company milestones from Q-RETIX AI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#2C4D78] mb-8">Latest News</h2>
              <div className="space-y-6">
                {pressReleases.map((release) => (
                  <article
                    key={release.title}
                    className="group bg-white rounded-xl border border-[#E6EEF2] p-6 hover:border-[#A8DADC] hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 text-[13px] text-[#5A6B82] mb-3">
                      <Calendar className="w-4 h-4 text-[#A8DADC]" />
                      {release.date}
                    </div>
                    <h3 className="text-xl font-semibold text-[#2C4D78] mb-2 group-hover:text-[#1a3a5c] transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-[15px] text-[#5A6B82] mb-4">{release.excerpt}</p>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#2C4D78] hover:text-[#98D7C2] transition-colors">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F8FAFB] rounded-2xl p-8 border border-[#E6EEF2]">
                <h3 className="text-lg font-bold text-[#2C4D78] mb-6">Media Kit</h3>
                <div className="space-y-3">
                  {mediaKit.map((item) => (
                    <button
                      key={item.label}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-[#E6EEF2] hover:border-[#A8DADC] hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <Download className="w-4 h-4 text-[#2C4D78]" />
                        <span className="text-[13px] font-medium text-[#33415C]">{item.label}</span>
                      </div>
                      <span className="text-[11px] text-[#8A9BB0]">{item.size}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2C4D78] to-[#1A3650] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Newspaper className="w-6 h-6 text-[#98D7C2]" />
                  <h3 className="text-lg font-semibold">Press Inquiries</h3>
                </div>
                <p className="text-sm text-white/70 mb-6">
                  For media inquiries, interview requests, or additional information about Q-RETIX AI.
                </p>
                <Link
                  href="mailto:press@qretix.ai"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#98D7C2] hover:text-white transition-colors"
                >
                  Contact Press Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
