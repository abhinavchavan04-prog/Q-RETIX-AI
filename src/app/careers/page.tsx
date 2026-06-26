import React from "react";
import { Metadata } from "next";
import { ArrowRight, MapPin, Clock, Briefcase, Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Q-RETIX AI",
  description: "Join our team and help shape the future of pharmaceutical research with AI.",
};

const positions = [
  {
    title: "Senior ML Engineer",
    department: "Engineering",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
  },
  {
    title: "Computational Chemist",
    department: "Research",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Clinical Data Scientist",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Regulatory Affairs Specialist",
    department: "Operations",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
  },
];

const benefits = [
  "Competitive salary and equity",
  "Health, dental, and vision coverage",
  "Flexible remote work policy",
  "Annual conference and learning budget",
  "Home office stipend",
  "Unlimited PTO",
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">Careers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] tracking-tight mb-6 leading-tight">
              Build the Future of Pharma AI
            </h1>
            <p className="text-lg text-[#5A6B82] leading-relaxed">
              Join a team of researchers, engineers, and innovators working to accelerate drug discovery and save lives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#2C4D78] mb-8">Open Positions</h2>
              <div className="space-y-4">
                {positions.map((position) => (
                  <div
                    key={position.title}
                    className="group bg-white rounded-xl border border-[#E6EEF2] p-6 hover:border-[#A8DADC] hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#2C4D78] mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#5A6B82]">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E6EEF2]">
                            <Briefcase className="w-3 h-3" />
                            {position.department}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E6EEF2]">
                            <MapPin className="w-3 h-3" />
                            {position.location}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E6EEF2]">
                            <Clock className="w-3 h-3" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <button className="shrink-0 w-10 h-10 rounded-full bg-[#E6EEF2] group-hover:bg-[#2C4D78] flex items-center justify-center transition-colors">
                        <ArrowRight className="w-4 h-4 text-[#2C4D78] group-hover:text-white transition-colors" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[#F8FAFB] rounded-2xl p-8 border border-[#E6EEF2] sticky top-24">
                <h3 className="text-lg font-bold text-[#2C4D78] mb-6">Why Q-RETIX AI?</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#98D7C2]/20 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-[#98D7C2]" />
                      </div>
                      <span className="text-[15px] text-[#5A6B82]">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[#E6EEF2]">
                  <p className="text-sm text-[#5A6B82] mb-4">
                    Don&apos;t see a role that fits? We&apos;re always interested in meeting exceptional people.
                  </p>
                  <Link
                    href="mailto:careers@qretix.ai"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2C4D78] hover:text-[#98D7C2] transition-colors"
                  >
                    Send a general application
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
