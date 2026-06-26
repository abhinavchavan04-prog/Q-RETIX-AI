import React from "react";
import { Metadata } from "next";
import { Users, ArrowRight, MessageSquare, Calendar, BookOpen, Heart, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community | Q-RETIX AI",
  description: "Join the Q-RETIX AI community of researchers, developers, and pharmaceutical professionals.",
};

const channels = [
  {
    icon: MessageSquare,
    title: "Discussion Forum",
    description: "Ask questions, share insights, and connect with fellow researchers.",
    members: "1,200+",
  },
  {
    icon: Calendar,
    title: "Monthly Meetups",
    description: "Virtual and in-person events to learn and network with the community.",
    members: "500+",
  },
  {
    icon: BookOpen,
    title: "Research Journal",
    description: "Peer-reviewed articles and case studies from community members.",
    members: "300+",
  },
  {
    icon: Heart,
    title: "Open Source",
    description: "Contribute to our open-source tools and libraries.",
    members: "200+",
  },
];

const upcomingEvents = [
  { date: "Feb 15, 2026", title: "AI in Drug Discovery Workshop", type: "Virtual" },
  { date: "Mar 3, 2026", title: "Clinical Data Analysis Summit", type: "In-Person" },
  { date: "Mar 22, 2026", title: "Community Hackathon", type: "Hybrid" },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">Community</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] tracking-tight mb-6 leading-tight">
              Join the Q-RETIX AI Community
            </h1>
            <p className="text-lg text-[#5A6B82] leading-relaxed">
              Connect with researchers, developers, and pharmaceutical professionals who are shaping the future of AI-driven drug discovery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {channels.map((channel) => (
              <div
                key={channel.title}
                className="group bg-white rounded-2xl border border-[#E6EEF2] p-8 hover:border-[#A8DADC] hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E6EEF2] flex items-center justify-center mb-6 group-hover:bg-[#2C4D78] transition-colors">
                  <channel.icon className="w-5 h-5 text-[#2C4D78] group-hover:text-white transition-colors" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#2C4D78]">{channel.title}</h3>
                  <span className="text-[11px] font-bold text-[#98D7C2] bg-[#98D7C2]/10 px-2.5 py-1 rounded-full">
                    {channel.members} members
                  </span>
                </div>
                <p className="text-[15px] text-[#5A6B82]">{channel.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#2C4D78] mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.title}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFB] border border-[#E6EEF2]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#2C4D78] flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] font-semibold text-[#33415C]">{event.title}</p>
                      <p className="text-[12px] text-[#5A6B82]">{event.date} &bull; {event.type}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8A9BB0]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2C4D78] to-[#1A3650] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-[#98D7C2]" />
                <h3 className="text-xl font-bold">Community Stats</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Members", value: "2,500+" },
                  { label: "Countries", value: "40+" },
                  { label: "Discussions", value: "850+" },
                  { label: "Research Papers", value: "120+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-[#98D7C2] mb-1">{stat.value}</div>
                    <div className="text-[13px] text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
