import Link from "next/link";

const columns = [
  { title: "Conn", links: [["About", "/about"], ["Home", "/"], ["Blogs", "/blog"], ["Career", "/careers"]] },
  { title: "Help", links: [["Terms & Conditions", "/legal/terms"], ["Privacy Policy", "/legal/privacy"]] },
  { title: "Resources", links: [["Blog", "/blog"], ["Explore", "/docs"]] },
];

export default function Footer() {
  return (
    <footer className="rounded-t-[34px] bg-[#fff9ef] text-[#17191d]">
      <div className="mx-auto max-w-[1240px] px-6 pb-8 pt-16 sm:px-12 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.35fr]">
          {columns.map((column) => <div key={column.title}><h3 className="mb-6 text-sm font-bold">{column.title}</h3><ul className="space-y-4">{column.links.map(([label, href]) => <li key={label}><Link href={href} className="text-xs text-[#50545c] transition hover:text-[#1450ef]">{label}</Link></li>)}</ul></div>)}
          <div><h3 className="mb-6 text-sm font-bold">Join us</h3><a href="mailto:hello@qretix.ai" className="flex h-10 items-center rounded-xl bg-[#fff0d8] px-4 text-xs text-[#79746b]">Enter your email...</a></div>
        </div>
        <div className="mt-16 flex flex-col gap-5 border-t border-[#ece4d8] pt-7 text-[10px] text-[#6d6c6a] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5"><a href="#" aria-label="Twitter">𝕏</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="GitHub">◉</a><Link href="/legal/privacy">Privacy Policy</Link><Link href="/legal/terms">Terms & Conditions</Link><Link href="/support">Support</Link></div>
          <p>© Copyright 2026, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
