"use client";

import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Shopshifter",
      link: "https://shopshifter-mu.vercel.app/",
      image: "/Shopshifter_Home_Dark.png",
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
          <div className="z-10 mx-4 flex h-90 w-full justify-between">
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
          </div>
        </div>
      ))}
    </div>
  );
}
