"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { ShivamLogo } from "../utilites/svgs";

export default function Banner() {
  return (
    <div className="max-w-6xl px-4 lg:px-8 mx-auto bg-[#000000f2]">
      <MatrixText />
      {/* <Image
        src={
          "https://res.cloudinary.com/duwfzddrs/image/upload/v1748460158/s-white-logo_wp2nbw.svg"
        }
        width={20}
        height={20}
        alt="s-logo"
      /> */}
      <section className="flex gap-12 flex-wrap my-16">
        <div className="max-w-2xl lg:w-[42rem]">
          <h1 className="text-5xl font-bold tracking-tight mb-3 dark:text-white">
            Software developer, designer.
          </h1>
          <p className="text-xl font-medium dark:font-normal text-zinc-700 leading-relaxed dark:text-zinc-400">
            Welcome to my corner of the internet! I&apos;m Shivam, a software
            engineer at{" "}
            <a
              href="https://growthjockey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-zinc-300 text-zinc-800 underline"
            >
              Growth Jockey
            </a>{" "}
            and the author/maintainer of some exciting projects. This page is a
            list of my creations and musings, you can also find me on Twitter (
            <a
              href="https://x.com/ShivamG50827915"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-zinc-300 text-zinc-800 underline"
            >
              @ShivamG50827915
            </a>
            ) and{" "}
            <a
              href="https://github.com/Shivamgautam043"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-zinc-300 text-zinc-800 underline"
            >
              GitHub
            </a>{" "}
            for all things tech and beyond.
          </p>
        </div>

        <div className="max-w-80 relative">
          <div className="rounded-lg shadow-lg border border-gray-100 dark:border-gray-100/10 rotate-2 p-2 dark:bg-zinc-900 bg-white lg:max-w-72 w-full">
            <img
              src="https://shivam.dev/_astro/me.gUlH0Jun_247FUu.webp"
              alt="Shivam, standing on a cliff facing the Himalayas."
              loading="eager"
              className="w-auto aspect-square rounded overflow-hidden"
              width="400"
              height="400"
              decoding="async"
            />
            <div className="font-display lg:pt-2 lg:pb-0 pt-5 pb-2 text-3xl text-center dark:text-white">
              Auli, 2024
            </div>
          </div>
        </div>
      </section>
      <div className="max-md:hidden grid grid-cols-1 w-full place-content-center place-items-center">
        <div className="">
          <GitHubCalendar username="Shivamgautam043" />
        </div>
      </div>
      <div className="w-full">
        <img src="https://res.cloudinary.com/duwfzddrs/image/upload/v1748461657/neo-desk_yi30jn.jpg" alt="" className="w-full"/>

      </div>
    </div>
  );
}

function MatrixText() {
  const [cursor, setCursor] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const text = "The Matrix has you...";
  const [modifiedText, setModifiedText] = useState("");
  const indexRef = useRef(0); // Persistent index
  const directionRef = useRef("increasing"); // "increasing" or "decreasing"

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = indexRef.current;
      const direction = directionRef.current;

      if (direction === "increasing") {
        const nextIndex = currentIndex + 1;
        setModifiedText(text.slice(0, nextIndex));
        indexRef.current = nextIndex;

        if (nextIndex === text.length) {
          directionRef.current = "decreasing";
        }
      } else {
        const nextIndex = currentIndex - 1;
        setModifiedText(text.slice(0, nextIndex));
        indexRef.current = nextIndex;

        if (nextIndex === 0) {
          directionRef.current = "increasing";
        }
      }
    }, 150);

    return () => clearInterval(interval); // Cleanup
  }, []);
  return (
    <div className="text-[#03A062] grid grid-flow-col place-content-start place-items-center">
      <div className={`h-6 w-[0.1px]`}></div>
      {modifiedText}{" "}
      <div
        className={`${cursor === true ? "w-2" : "w-0"} h-4 bg-[#03A062]`}
      ></div>
    </div>
  );
}
