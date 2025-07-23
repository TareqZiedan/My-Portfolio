"use client";

import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiReactquery,
  SiNextdotjs,
} from "react-icons/si";
import { MdDevices, MdApi } from "react-icons/md";

const skillIcons: Record<string, React.ReactNode> = {
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-blue-500" />,
  JAVASCRIPT: <SiJavascript className="text-yellow-400" />,
  TYPESCRIPT: <SiTypescript className="text-blue-600" />,
  TAILWINDCSS: <SiTailwindcss className="text-cyan-400" />,
  RESPONSIVE: <MdDevices className="text-green-500" />,
  "GIT/GITHUB": <SiGithub className="text-zinc-200" />,
  "REACT JS": <SiReact className="text-cyan-500" />,
  "RESTFUL API": <MdApi className="text-green-400" />,
  REDUX: <SiRedux className="text-purple-500" />,
  "REDUX TOOLKIT": <SiRedux className="text-purple-400" />,
  "REACT ROUTER": <SiReactrouter className="text-pink-500" />,
  "REACT QUERY": <SiReactquery className="text-red-400" />,
  "NEXT JS": <SiNextdotjs className="text-zinc-200" />,
};

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JAVASCRIPT", level: "Advanced" },
  { name: "TYPESCRIPT", level: "Intermediate" },
  { name: "TAILWINDCSS", level: "Advanced" },
  { name: "RESPONSIVE", level: "Advanced" },
  { name: "GIT/GITHUB", level: "Intermediate" },
  { name: "REACT JS", level: "Advanced" },
  { name: "RESTFUL API", level: "Advanced" },
  { name: "REDUX", level: "Intermediate" },
  { name: "REDUX TOOLKIT", level: "Intermediate" },
  { name: "REACT ROUTER", level: "Advanced" },
  { name: "REACT QUERY", level: "Intermediate" },
  { name: "NEXT JS", level: "Advanced" },
];

const Skills = () => (
  <section className="flex w-full flex-col items-center justify-center overflow-hidden px-4 py-12 sm:px-8 md:px-16">
    <h2 className="mt-10 mb-16 text-center text-4xl font-bold text-zinc-200">
      Frontend Development
    </h2>

    <div className="mb-4 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 md:gap-10 lg:gap-12">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="relative flex h-[6rem] w-[20rem] items-center justify-center hover:scale-105 sm:w-[12rem]"
        >
          <div className="absolute inset-0 -rotate-6 bg-zinc-200" />
          <div className="relative flex h-full w-full items-center gap-4 border-2 border-zinc-200 bg-black p-5 text-zinc-200 transition-transform duration-200">
            <div className="flex h-[4rem] w-[4rem] items-center justify-center text-5xl">
              {skillIcons[skill.name]}
            </div>
            <div className="flex flex-col">
              <span className="mr-2 cursor-default text-lg font-semibold">
                {skill.name}
              </span>
              <span className="mt-1 cursor-default rounded-full text-sm text-zinc-400">
                {skill.level}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
