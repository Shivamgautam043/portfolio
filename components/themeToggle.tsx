"use client";
import { useEffect, useState } from "react";
import { HeaderDarkThemeIcon, HeaderLigthTheameIcon, HeaderSystemThemeIcon } from "../utilites/svgs";
import { getSystemTheme } from "../utilites/utilitiesFunctions";

function TheameChanger() {
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

  useEffect(() => {
    console.log(getSystemTheme());
  }, []);

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