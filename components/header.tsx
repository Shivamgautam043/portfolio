import Image from "next/image";

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
                href="https://https//github.com/Shivamgautam043"
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
      <div className="sm:flex-grow flex justify-end">
        {" "}
        <button
          aria-label="Toggle dark mode"
          id="toggle-theme"
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
              className="size-5 rounded-[5px] bg-white dark:bg-zinc-900 shadow absolute flex items-center justify-center animate-transform duration-100 ease-in-out text-zinc-600 dark:text-zinc-200"
              style={{ transform: "translateX(40px);" }}
            >
              {" "}
              <svg
                id="sw-i-light"
                style={{ display: "none" }}
                className="size-3.5"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
              >
                <path
                  fill="currentColor"
                  d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M7.5 12a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0m11.394-5.834a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061zM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75m-3.916 6.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06zM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18m-4.242-.697a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061zM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12m.697-4.243a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06z"
                ></path>
              </svg>{" "}
              <svg
                id="sw-i-dark"
                style={{ display: "block" }}
                className="size-3.5"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A9 9 0 0 0 9 6a9 9 0 0 0 9 9a9 9 0 0 0 3.463-.69a.75.75 0 0 1 .981.98a10.5 10.5 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5c0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              <svg
                id="sw-i-auto"
                style={{ display: "none" }}
                className="size-3.5"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
            </div>{" "}
          </div>{" "}
        </button>
        {/* <script data-astro-exec=""> */}
        {/* const themeOptions = ["light", "auto", "dark"];

  function updateUI(theme) {
    const positions = { light: "0px", auto: "20px", dark: "40px" };
    const switcher = document.getElementById("theme-switcher");
    switcher.style.transform = `translateX(${positions[theme]})`;

    document.getElementById("sw-i-light").style.display =
      theme === "light" ? "block" : "none";
    document.getElementById("sw-i-auto").style.display =
      theme === "auto" ? "block" : "none";
    document.getElementById("sw-i-dark").style.display =
      theme === "dark" ? "block" : "none";
  }

  function setTheme(theme) {
    document.documentElement.classList.remove(...themeOptions);
    localStorage.setItem("theme", theme);

    if (theme === "auto") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.classList.add(prefersDark ? "dark" : "light");
    } else {
      document.documentElement.classList.add(theme);
    }

    updateUI(theme);
  }

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme") || "auto";
    const nextTheme =
      themeOptions[
        (themeOptions.indexOf(currentTheme) + 1) % themeOptions.length
      ];
    setTheme(nextTheme);
  };

  document.addEventListener("astro:page-load", () => {
    setTheme(localStorage.getItem("theme") || "auto");
    document
      .getElementById("toggle-theme")
      .addEventListener("click", toggleTheme);
  });
</script> </div> */}
      </div>
    </header>
  );
}
