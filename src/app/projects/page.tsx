"use client";

import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Shopshifter",
      link: "https://shopshifter-mu.vercel.app/",
      image: "/Shopshifter_Home_Dark.png",
      description:
        "Shopshifter is an e-commerce platform that i created all by myself from zero.",
      tech: "HTML - CSS - JavaScript - React.js - Next.js - TypeScript - TailwindCss - Redux",
    },
  ];

  return (
    <div className="grid h-full w-full grid-cols-1 gap-2 overflow-hidden">
      {projects.map((project) => (
        <div
          key={project.name}
          className="relative m-4 flex h-100 w-full items-center bg-black"
        >
          <div className="absolute z-0 h-100 w-full -rotate-4 bg-zinc-200 shadow-lg shadow-black"></div>
          <div className="z-10 mx-4 flex h-90 w-full">
            <div className="flex w-[50%] flex-col items-center justify-between">
              <Image
                width={1300}
                height={500}
                alt={project.name + "Preview Image"}
                src={project.image}
                quality={100}
                className="h-[80%] w-full border-2 border-black shadow-lg shadow-black"
              />
              <div className="flex w-full items-center justify-between">
                <p className="text-3xl text-black">{project.name}</p>
                <button
                  className="h-12 w-24 cursor-pointer rounded-lg border-2 border-white bg-black text-white hover:border-black hover:bg-white hover:text-black"
                  onClick={() => {
                    window.open(project.link, "_blank");
                  }}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="mx-auto my-auto flex h-[80%] w-[40%] flex-col items-center">
              <h3 className="text-xl font-medium text-zinc-900 capitalize">
                {project.description}
              </h3>
              <div className="mt-8 h-0.5 w-full border-t border-zinc-500 pt-8"></div>
              <h2 className="my-8 text-2xl font-bold text-black">Technology</h2>
              <p className="font-medium text-zinc-900">{project.tech}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
