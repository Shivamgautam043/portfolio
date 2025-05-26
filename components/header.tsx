"use client";
import { useState } from "react";
import {
  HeaderDarkThemeIcon,
  HeaderLigthTheameIcon,
  HeaderSystemThemeIcon,
} from "../utilites/svgs";

export default function Header() {
  return (
    <header className="max-w-6xl px-4 lg:px-8 mx-auto py-8 flex flex-wrap items-center sm:justify-start justify-between gap-y-2 gap-x-2 sm:gap-x-5 relative z-20">
      <div className="gap-2 flex items-center sm:hidden">
        <a
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
        </a>
        <button className="rounded-lg dark:bg-zinc-900 bg-white/90 px-3 py-2 text-sm font-medium dark:text-white dark:font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 dark:ring-zinc-200/10 ring-zinc-900/5 backdrop-blur">
          Menu
        </button>
      </div>
      <div
        id="menuContent"
        className="hidden sm:flex flex-wrap gap-2 absolute sm:static top-20"
      >
        {" "}
        <nav>
          {" "}
          <ul className="flex flex-col py-2 sm:py-0 sm:flex-row rounded-lg dark:bg-zinc-900 bg-white/90 px-2 text-sm font-medium dark:text-white dark:font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 dark:ring-zinc-200/10 ring-zinc-900/5 backdrop-blur">
            {" "}
            <li>
              {" "}
              <a
                href="/"
                className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 text-teal-500"
                data-astro-prefetch="load"
                target="_self"
              >
                {" "}
                Home{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/blog"
                className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                data-astro-prefetch="load"
                target="_self"
              >
                {" "}
                Blog{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/bookmarks"
                className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                data-astro-prefetch="load"
                target="_self"
              >
                {" "}
                Bookmarks{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/papershelf"
                className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                data-astro-prefetch="load"
                target="_self"
              >
                {" "}
                Papershelf{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/uses"
                className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                data-astro-prefetch="load"
                target="_self"
              >
                {" "}
                Uses{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
        <nav>
          {" "}
          <ul className="flex flex-col py-2 sm:py-0 sm:flex-row rounded-lg dark:bg-zinc-900 bg-white/90 px-2 text-sm font-medium dark:text-white dark:font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 dark:ring-zinc-200/10 ring-zinc-900/5 backdrop-blur">
            {" "}
            <li>
              {" "}
              <a
                href="https://x.com/ShivamG50827915"
                className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                data-astro-prefetch="load"
                target="_blank"
              >
                {" "}
                Twitter{" "}
              </a>{" "}
            </li>
            {/* <li>
              {" "}
              <a
                href="https://bsky.app/profile/shivam.dev"
                className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                data-astro-prefetch="load"
                target="_blank"
              >
                {" "}
                Bluesky{" "}
              </a>{" "}
            </li> */}
            <li>
              {" "}
              <a
                href="https://github.com/Shivamgautam043"
                className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                data-astro-prefetch="load"
                target="_blank"
              >
                {" "}
                GitHub{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
      </div>
      <TheameButtons />
    </header>
  );
}

function TheameButtons() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "system" | "dark">(
    "dark"
  );

  const toggleTheme = () => {
    switch (currentTheme) {
      case "dark": {
        setCurrentTheme("light");
        break;
      }
      case "light": {
        setCurrentTheme("system");
        break;
      }
      case "system": {
        setCurrentTheme("dark");
        break;
      }
      default: {
        setCurrentTheme("dark");
      }
    }
  };

  return (
    <div className="sm:flex-grow flex justify-end">
      {" "}
      <button
        id="toggle-theme"
        onClick={() => toggleTheme()}
        className="relative rounded-lg dark:bg-zinc-900 bg-white/90 p-1 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 dark:ring-zinc-200/10 ring-zinc-900/5 backdrop-blur"
      >
        {" "}
        <div className="bg-gray-200 dark:bg-zinc-800 p-1 flex items-center rounded-md">
          {" "}
          <div className="size-5 flex items-center justify-center">
            {" "}
            <div className="size-1.5 bg-zinc-500 dark:bg-zinc-700 rounded-full"></div>{" "}
          </div>{" "}
          <div className="size-5 flex items-center justify-center">
            {" "}
            <div className="size-1.5 bg-zinc-500 dark:bg-zinc-700 rounded-full"></div>{" "}
          </div>{" "}
          <div className="size-5 flex items-center justify-center">
            {" "}
            <div className="size-1.5 bg-zinc-500 dark:bg-zinc-700 rounded-full"></div>{" "}
          </div>{" "}
          <div
            id="theme-switcher"
            className="size-5 rounded-[5px] bg-white dark:bg-zinc-900 shadow absolute flex items-center justify-center transition-transform duration-100 ease-in-out text-zinc-600 dark:text-zinc-200"
            style={{
              transform:
                currentTheme === "dark"
                  ? "translateX(40px)"
                  : currentTheme === "light"
                  ? "translateX(0px)"
                  : "translateX(20px)",
            }}
          >
            {currentTheme === "dark" ? (
              <HeaderDarkThemeIcon />
            ) : currentTheme === "light" ? (
              <HeaderLigthTheameIcon />
            ) : (
              <HeaderSystemThemeIcon />
            )}
          </div>{" "}
        </div>{" "}
      </button>
    </div>
  );
}
