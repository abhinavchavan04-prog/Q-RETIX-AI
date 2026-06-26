import React from "react";
import { Metadata } from "next";
import { BookOpen, ArrowRight, Code, FileText, MessageSquare, Zap, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation | Q-RETIX AI",
  description: "Comprehensive documentation for Q-RETIX AI platform, APIs, and integrations.",
};

const sections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Quick start guides and platform overview for new users.",
    links: ["Platform Overview", "Quick Start Guide", "Account Setup", "Authentication"],
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation with examples and endpoints.",
    links: ["REST API", "GraphQL", "Webhooks", "Rate Limits"],
  },
  {
    icon: FileText,
    title: "Guides",
    description: "Detailed guides for common use cases and workflows.",
    links: ["Drug Discovery Pipeline", "Clinical Trial Setup", "Data Import", "Reporting"],
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "Connect Q-RETIX AI with your existing tools and workflows.",
    links: ["Electronic Lab Notebooks", "LIMS Systems", "CRMs", "Data Warehouses"],
  },
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">Documentation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] tracking-tight mb-6 leading-tight">
              Q-RETIX AI Documentation
            </h1>
            <p className="text-lg text-[#5A6B82] leading-relaxed">
              Everything you need to integrate, configure, and get the most out of the Q-RETIX AI platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="group bg-white rounded-2xl border border-[#E6EEF2] p-8 hover:border-[#A8DADC] hover:shadow-xl hover:shadow-[#2C4D78]/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E6EEF2] flex items-center justify-center mb-6 group-hover:bg-[#2C4D78] transition-colors">
                  <section.icon className="w-5 h-5 text-[#2C4D78] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#2C4D78] mb-2">{section.title}</h3>
                <p className="text-[15px] text-[#5A6B82] mb-6">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <button className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors">
                        <ArrowRight className="w-3 h-3" />
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-gradient-to-br from-[#2C4D78] to-[#1A3650] rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <ExternalLink className="w-5 h-5 text-[#98D7C2]" />
                </div>
                <h3 className="text-xl font-bold mb-2">API Reference</h3>
                <p className="text-sm text-white/70">
                  Explore our complete API documentation with interactive examples and code samples.
                </p>
              </div>
              <Link
                href="/docs/api"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#98D7C2] hover:text-white transition-colors"
              >
                View API Docs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
