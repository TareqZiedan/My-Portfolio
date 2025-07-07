"use client";

import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center">
        <Image
          height={200}
          width={200}
          src="/ME.jpg"
          alt="Tareq Ziedan's Image"
          className="mt-8 mb-4 rounded-full border-2 border-amber-600"
        />
        <p className="my-4 text-4xl text-amber-600">Hello, World</p>
        <p className="mt-4 mb-2 text-xl font-semibold text-white capitalize">
          Hi, I&apos;m Tareq Ziedan, a passionate frontend developer
          specializing in building modern,
        </p>
        <p className="my-2 text-xl font-semibold text-white capitalize">
          responsive web applications with React, Next.js, and TailwindCSS.
        </p>
        <p className="my-2 text-xl font-semibold text-white capitalize">
          I love crafting beautiful user experiences and writing clean,
          maintainable code.
        </p>
      </div>
    </>
  );
};

export default About;
