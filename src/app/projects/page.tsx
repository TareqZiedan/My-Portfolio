"use client";

import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Shopshifter",
      link: "https://shopshifter-mu.vercel.app/",
      image: "/Shopshifter_Home_Dark.png",
      description:
        "Shopshifter is an e-commerce platform that I created all by myself from zero.",
      tech: "HTML - CSS - JavaScript - React.js - Next.js - TypeScript - Tailwind CSS - Redux",
    },
  ];

  return (
    <div className="grid h-auto w-full grid-cols-1 gap-2 overflow-hidden px-4 py-10 sm:h-full sm:px-6 lg:px-12">
      {projects.map((project) => (
        <div
          key={project.name}
          className="relative mx-4 mt-5 mb-10 flex items-center border-2 border-zinc-200 bg-black shadow-md shadow-white sm:h-[25rem]"
        >
          {/* Rotated BG */}
          <div className="absolute inset-0 z-0 h-auto w-full -rotate-4 bg-zinc-200 shadow-md shadow-black sm:h-[25rem]" />

          <div className="z-10 flex h-[45rem] w-full flex-col p-2 sm:mx-4 sm:h-[25rem] sm:flex-row">
            {/* Left: Image & title/CTA */}
            <div className="mx-auto my-6 flex h-[20rem] w-[80%] flex-col justify-between sm:h-[22.5rem] sm:w-[50%] sm:items-center">
              <Image
                width={1300}
                height={500}
                alt={project.name + " Preview Image"}
                src={project.image}
                quality={100}
                className="h-[70%] w-full border-2 border-black shadow-lg shadow-black sm:h-[80%]"
              />
              <div className="flex w-full items-center justify-between">
                <p className="text-2xl font-bold text-black sm:text-3xl">
                  {project.name}
                </p>
                <div className="relative hover:scale-105">
                  <div className="absolute inset-0 -rotate-6 bg-black"></div>
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="relative h-12 w-[6rem] cursor-pointer border-2 border-black bg-zinc-200 font-bold text-black shadow shadow-black hover:bg-white"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Description & Tech */}
            <div className="mx-auto my-auto flex w-[80%] flex-col items-center sm:h-[80%] sm:w-[40%] sm:justify-center sm:px-4">
              <h3 className="text-center text-lg font-medium text-zinc-900 capitalize sm:-mt-15 sm:text-xl">
                {project.description}
              </h3>
              <div className="mt-8 h-px w-full border-t border-zinc-500" />
              <h2 className="my-8 text-xl font-bold text-black sm:text-2xl">
                Technology
              </h2>
              <p className="text-center text-sm font-medium text-zinc-900 sm:text-base">
                {project.tech}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
