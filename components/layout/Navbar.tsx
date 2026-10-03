"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import Logo from "../ui/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative px-6 py-6 lg:px-[68] bg-secondary">
      <div className="flex items-start justify-between items-center">

        <Link href="/" className="block" aria-label={`${site.brand.name} ${site.brand.tagline} home`}>
          <Logo></Logo>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 pt-2" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="uppercase text-caption font-normal hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button className="btn">
            {site.navCta.label}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -mr-2 p-2"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-7 bg-primary" />
          <span className="mt-2 block h-px w-7 bg-primary" />
          <span className="mt-2 block h-px w-7 bg-primary" />
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="lg:hidden absolute inset-x-0 top-full z-20 flex flex-col gap-5 bg-secondary px-6 pb-8 pt-2"
        >
          {[...site.nav, site.navCta].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="uppercase tracking-[0.14em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
