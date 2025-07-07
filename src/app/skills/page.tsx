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
  <div className="mx-8 w-auto p-6">
    <h2 className="mt-8 mb-12 text-center text-4xl font-bold text-zinc-200">
      Frontend Development
    </h2>
    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-4 rounded-lg bg-black p-5 text-zinc-200 hover:scale-110 hover:bg-zinc-800"
        >
          <div className="m-2 flex h-16 w-16 flex-shrink-0 items-center justify-center text-6xl">
            {skillIcons[skill.name]}
          </div>
          <div className="flex h-16 flex-col justify-center">
            <span className="text-lg font-semibold text-zinc-200">
              {skill.name}
            </span>
            <span className="mt-1 w-fit rounded-full px-3 py-1 font-medium">
              {skill.level}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
