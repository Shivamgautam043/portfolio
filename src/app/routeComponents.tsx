"use client";
import { useState } from "react";

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
            onMouseEnter={()=>setIsHover(true)}
            onMouseLeave={()=>setIsHover(false)}
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
                        <img src={logo} alt={title} className="w-auto h-8 rounded-md overflow-hidden transition-all duration-300"   style={{scale:isHover===true?1.25:1}}/>
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
