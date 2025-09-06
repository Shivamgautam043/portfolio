"use client";
import { useEffect, useState } from "react";
import {
  HeaderDarkThemeIcon,
  HeaderLigthTheameIcon,
  HeaderSystemThemeIcon,
} from "../utilites/svgs";
import Link from "next/link";
import { getSystemTheme } from "../utilites/utilitiesFunctions";
import { usePathname } from "next/navigation";
import { Open_Sans } from "next/font/google";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: "Bookmarks", href: "/bookmarks" },
    { label: "Projects", href: "/projects" },
    { label: "Uses", href: "/uses" },
  ];
  const socialLinks = [
    {
      label: "Twitter",
      href: "https://x.com/ShivamG50827915",
    },
    {
      label: "GitHub",
      href: "https://github.com/Shivamgautam043",
    },
  ];
  const pathname = usePathname();
  return (
    <header className="max-w-6xl px-4 lg:px-8 mx-auto py-8 flex flex-wrap items-center sm:justify-start justify-between gap-y-2 gap-x-2 sm:gap-x-5 relative z-20">
      <div className="gap-2 flex items-center sm:hidden">
        <Link
          href="/"
          className="rounded-lg block dark:bg-zinc-900 bg-white/90 px-3 py-2.5 text-sm font-medium dark:text-white dark:font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 dark:ring-zinc-200/10 ring-zinc-900/5 backdrop-blur"
        >
          {" "}
          <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
            <g fill="currentColor">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06z"></path>
              <path d="m12 5.432l8.159 8.159q.045.044.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198l.091-.086z"></path>
            </g>
          </svg>{" "}
        </Link>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="rounded-lg dark:bg-zinc-900 bg-white/90 px-3 py-2 text-sm font-medium dark:text-white dark:font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 dark:ring-zinc-200/10 ring-zinc-900/5 backdrop-blur">
          Menu
        </button>
      </div>
      <div className="sm:hidden absolute top-0 w-full">
        {openMenu && (
          <MobileOpenMenu socialLinks={socialLinks} navItems={navItems} pathName={pathname} />
        )}
      </div>
      <div className="max-sm:hidden">
        <MobileOpenMenu socialLinks={socialLinks} navItems={navItems} pathName={pathname} />
      </div>

      {/* <TheameChanger /> */}
    </header>
  );
}


function MobileOpenMenu({ navItems, socialLinks, pathName }: { navItems: Array<{ label: string, href: string, }>, socialLinks: Array<{ label: string, href: string }>, pathName: string }) {
  return (
    <div
      id="menuContent"
      className="sm:flex flex-wrap gap-2 absolute sm:static top-20 flex"
    >
      <nav>
        <div className="grid grid-flow-col py-2 max-sm:grid-flow-row rounded-lg dark:bg-zinc-900 bg-white/90 px-2 text-sm font-medium dark:text-white dark:font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 dark:ring-zinc-200/10 ring-zinc-900/5 backdrop-blur">
          {navItems.map((item) => {
            const isActive = pathName === item.href;
            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${isActive ? "text-teal-500" : ""
                    }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>

      <nav>
        <ul className="flex flex-col py-2 sm:py-0 sm:flex-row rounded-lg dark:bg-zinc-900 bg-white/90 px-2 text-sm font-medium dark:text-white dark:font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 dark:ring-zinc-200/10 ring-zinc-900/5 backdrop-blur">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                data-astro-prefetch="load"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

  )
}

