"use client";
import { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";

export default function HeroSection() {
    return (
        <div className="max-w-6xl px-4 lg:px-8 mx-auto">
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
                        Welcome to my corner of the internet! I{"'"}m Shivam, a software
                        engineer and the author/maintainer of some exciting projects. This page is a
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
                            width={400}
                            height={400}
                            className="w-auto aspect-square rounded overflow-hidden"
                        />
                        <div className="font-display lg:pt-2 lg:pb-0 pt-5 pb-2 text-3xl text-center dark:text-white">
                            Auli, 2024
                        </div>
                    </div>
                </div>
            </section>
            <div className="max-md:hidden grid grid-cols-1 w-full place-content-center place-items-center">
                <div className="scale-75">
                    <GitHubCalendar username="Shivamgautam043" />
                </div>
            </div>
            {/* <div className="w-full relative">
        <img
          src="https://res.cloudinary.com/duwfzddrs/image/upload/v1748461657/neo-desk_yi30jn.jpg"
          alt=""
          className="w-full"
        />
        <div className="absolute top-4 left-4">
          <MatrixText/>
        </div>
      </div> */}
        </div>
    );
}

export function MatrixText() {
    const [cursor, setCursor] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const text = "The Matrix has you...";
    const [modifiedText, setModifiedText] = useState("");
    const indexRef = useRef(0);
    const directionRef = useRef("increasing");

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

export function ProjectSection() {
    return (
        <>
            <div className="max-w-6xl mx-auto flex flex-row items-start justify-start">
                <div className="max-w-2xl px-4 lg:px-8 text-left">
                    <h2 className="text-3xl font-bold tracking-tight mb-3 dark:text-white">
                        Projects
                    </h2>
                    <p className="text-lg text-zinc-700 leading-relaxed tracking-normal dark:text-zinc-400">
                        Overtime I have worked on and built multiple projects, some during work,
                        some outside. Here{"'"}s a humble list of those, several of them are
                        open-source. If you{"'"}re inspired by what you see, don{"'"}t hesitate to dive
                        into the code and share your ideas for improvement.
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto flex flex-row items-start justify-start px-4 lg:px-8">
                <ProjectGrid />
            </div>

        </>
    )
}

type Project = {
    title: string;
    link: string;
    logo: string;
    stars: string;
    tags: string[];
    description: string;
    color: string;
};

const projects: Project[] = [
    {
        title: "MediConnect",
        link: "https://github.com/Shivamgautam043/mediconnect-client",
        logo: "https://res.cloudinary.com/duwfzddrs/image/upload/v1756059767/favicon_nyuwat.ico",
        stars: "120", // actual GitHub stars dal sakte ho, filhal placeholder
        tags: ["Remix", "React", "TypeScript", "Spring Boot", "PostgreSQL"],
        description:
            "MediConnect is a healthcare platform for seamless doctor-patient interaction with appointment booking, records, and real-time updates.",
        color: "#30b3bb",
    }
    ,
    {
        title: "Movie Buff",
        link: "https://github.com/Shivamgautam043/MovieBuff",
        logo: "https://res.cloudinary.com/duwfzddrs/image/upload/v1756061249/raw_bkurst.png",
        stars: "1K",
        tags: ["ReactJS", "NodeJS", "Firebase", "Axios"],
        description:
            "Genre-based movie platform with real-time trailers, CRUD features, Firebase auth, and a personalized 'My List' for users.",
        color: "#f97316",
    },

    {
        title: "Vizo",
        link: "https://github.com/Shivamgautam043/Video-Chat-App",
        logo: "https://res.cloudinary.com/duwfzddrs/image/upload/v1756062946/chatwoot.CTpgh9qQ_29JTjg_fqcwuj.webp",
        stars: "12",
        tags: ["React", "Socket.io", "PeerJS", "Express", "WebRTC"],
        description:
            "Vizo is a real-time video chat application built with React, Socket.io, and WebRTC. It enables seamless peer-to-peer video calls with room-based connections and secure sessions.",
        color: "#49aef6"
    },
    {
        title: "Bifrost",
        link: "https://github.com/Shivamgautam043/bifrost",
        logo: "https://res.cloudinary.com/duwfzddrs/image/upload/v1756146570/bifrost_2_zcda2y.png",
        stars: "8",
        tags: ["React", "Node.js", "Express", "JWT", "Authentication"],
        description:
            "Bifrost is a login and authentication app that provides secure user management using JWT-based authentication (in progress).",
        color: "#4cafef"
    }


];

export function ProjectGrid() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 -mx-2 gap-8" data-spotlight="">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    );
}

function ProjectCard({
    title,
    link,
    logo,
    stars,
    tags,
    description,
    color,
}: Project) {
    const [isHover, setIsHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
                ["--project-color" as any]: color,
                ["--mouse-x" as any]: "235px",
                ["--mouse-y" as any]: "295.6171875px",
            }}
            className="hover:-translate-y-0.5 duration-300 relative rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden
      before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] 
      after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[var(--project-color)] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px]"
        >
            <a
                href={link}
                target="_blank"
                className="block h-full rounded-[inherit] z-20 border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 p-8 space-y-4 group relative"
            >
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 relative">
                        <img src={logo} alt={title} className="w-auto h-8 rounded-md overflow-hidden transition-all duration-300" style={{ scale: isHover === true ? 1.25 : 1 }} />
                        <img
                            src={logo}
                            alt={`${title} blur`}
                            className="w-auto h-8 rounded-md absolute bg-red-500 blur-[25px] saturate-200 opacity-0 group-hover:opacity-50 transition-opacity duration-100"
                        />
                    </div>
                    <svg
                        className="stroke-2 text-[var(--project-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        viewBox="0 0 24 24"
                        width="1.2em"
                        height="1.2em"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <h3 className="font-medium dark:text-white">{title}</h3>
                        <span className="text-zinc-500 dark:bg-zinc-700 dark:text-zinc-200 group-hover:dark:text-white uppercase tracking-widest text-[10px] font-medium rounded-md px-1 leading-3 flex items-center gap-1 py-0.5 bg-zinc-100">
                            ⭐ {stars}
                        </span>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-zinc-500 uppercase tracking-widest dark:text-zinc-400 text-[10px] font-medium border dark:border-zinc-600 rounded-md px-1 py-1 leading-none"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <p className="text-zinc-700 leading-relaxed tracking-normal dark:text-zinc-400">
                    {description}
                </p>
            </a>
        </div>
    );
}

const workData = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLt1AlltAYEs1mvcNdykPeQePwPdUcGO-Hw&s",
    title: "Growth Jockey",
    tags: ["Software Developer-1", "Full-time"],
    role: "Jul 2024 – Present · Gurugram, India",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLt1AlltAYEs1mvcNdykPeQePwPdUcGO-Hw&s",
    title: "Growth Jockey",
    tags: ["Associate - SDE", "Full-time"],
    role: "Jan 2024 – Jun 2024 · Gurugram, India",
  },
//   {
//     logo: "https://res.cloudinary.com/duwfzddrs/image/upload/v1756061249/raw_bkurst.png",
//     title: "Movie Buff",
//     tags: ["ReactJS", "NodeJS", "Firebase"],
//     role: "Personal Project · 2023",
//   },
//   {
//     logo: "/work/mediconnect.png",
//     title: "MediConnect",
//     tags: ["Remix", "React", "PostgreSQL"],
//     role: "Personal Project · 2024",
//   },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRgxu9EM2Pq8Ca7C3D3l_UZlmiHetcToQvA&s",
    title: "The Sparks Foundation",
    tags: ["Web Development Intern"],
    role: "Jun 2023 – Jul 2023",
  },
];



export function Work() {
    return (
        <>
            <div className="max-w-6xl mx-auto">
                <div className="max-w-2xl px-4 lg:px-8 text-left">
                    <div className="max-w-2xl"> <h2 className="text-3xl font-bold tracking-tight mb-3 dark:text-white">Work</h2> <p className="text-lg text-zinc-700 leading-relaxed tracking-normal dark:text-zinc-400">
                        Over the past two years, I’ve gained valuable experience working with fast-growing startups
                        and diverse clients, building scalable platforms, booking systems, and engaging digital products.
                        This journey has given me the opportunity to collaborate with talented teams, solve real-world challenges,
                        and deliver solutions that drive both performance and user experience.
                    </p> </div>
                </div>
                <div className="grid gap-12 mt-8 max-w-xl  px-4 lg:px-8 text-left">
                    <div className="grid -mx-2 gap-4 group">
                        {workData.map((item, index) => (
                            <WorkCard
                                key={index}
                                logo={item.logo}
                                title={item.title}
                                tags={item.tags}
                                role={item.role}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}


function WorkCard({ logo, title, tags, role }: { logo: string, title: string, tags: string[], role: string }) {
    return (
        <div className="rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg p-4 flex items-start gap-3 hover:shadow-xl hover:-translate-y-0.5 hover:border-zinc-300 hover:dark:border-zinc-700 transition-all duration-200">
            <img
                loading="lazy"
                src={logo}
                height="40"
                width="40"
                className="dark:rounded-md dark:scale-110 overflow-hidden dark:bg-zinc-900"
                alt={`Logo for ${title}`}
            />
            <div>
                <div className="flex lg:flex-row flex-col items-start lg:items-center gap-2">
                    <h3 className="font-medium leading-none dark:text-white">{title}</h3>
                    <div className="flex gap-2">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="text-zinc-500 uppercase tracking-widest dark:text-zinc-400 text-[10px] font-medium border dark:border-zinc-600 rounded-md px-1 py-1 leading-none"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <p className="leading-relaxed tracking-normal text-zinc-500 mt-1 dark:text-zinc-400">
                    {role}
                </p>
            </div>
        </div>
    );
}

export function ContactMe() {
    return (
        <section className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="max-w-2xl px-4 lg:px-8 text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-3 dark:text-white">
                    Contact Me
                </h2>
                <p className="text-lg text-zinc-700 leading-relaxed dark:text-zinc-400">
                    Interested in working together or have an opportunity in mind?
                    Share your details and I’ll get back to you shortly.
                </p>
            </div>

            {/* Form */}
            <div className="max-w-xl px-4 lg:px-8 mt-10">
                <form className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm
                                       focus:outline-none focus:ring-2 focus:ring-zinc-900
                                       dark:border-zinc-700 dark:bg-zinc-900 dark:text-white
                                       dark:focus:ring-zinc-100"
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                            Company
                        </label>
                        <input
                            type="text"
                            placeholder="Company or startup name"
                            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm
                                       focus:outline-none focus:ring-2 focus:ring-zinc-900
                                       dark:border-zinc-700 dark:bg-zinc-900 dark:text-white
                                       dark:focus:ring-zinc-100"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@company.com"
                            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm
                                       focus:outline-none focus:ring-2 focus:ring-zinc-900
                                       dark:border-zinc-700 dark:bg-zinc-900 dark:text-white
                                       dark:focus:ring-zinc-100"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                            Phone
                        </label>
                        <input
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm
                                       focus:outline-none focus:ring-2 focus:ring-zinc-900
                                       dark:border-zinc-700 dark:bg-zinc-900 dark:text-white
                                       dark:focus:ring-zinc-100"
                        />
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-lg
                                       bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white
                                       hover:bg-zinc-800 transition
                                       dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                        >
                            Send Details
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

