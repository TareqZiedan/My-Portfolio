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
  "GIT/GITHUB": <SiGithub className="text-gray-800" />,
  "REACT JS": <SiReact className="text-cyan-500" />,
  "RESTFUL API": <MdApi className="text-green-400" />,
  REDUX: <SiRedux className="text-purple-500" />,
  "REDUX TOOLKIT": <SiRedux className="text-purple-400" />,
  "REACT ROUTER": <SiReactrouter className="text-pink-500" />,
  "REACT QUERY": <SiReactquery className="text-red-400" />,
  "NEXT JS": <SiNextdotjs className="text-black" />,
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
  <div className="mx-8 p-6 w-auto">
    <h2 className="text-center text-4xl font-bold mb-16 mt-8 text-zinc-800">
      Frontend Development
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="cursor-pointer flex items-center bg-white hover:bg-gray-100 rounded-lg p-5 gap-4"
        >
          <div className="flex-shrink-0 flex items-center text-6xl h-16 w-16 justify-center">
            {skillIcons[skill.name] || <SiReact className="text-gray-400" />}
          </div>
          <div className="flex flex-col justify-center h-16">
            <span className="text-lg font-semibold text-zinc-900">
              {skill.name}
            </span>
            <span className="mt-1 font-medium px-3 py-1 rounded-full w-fit">
              {skill.level}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
