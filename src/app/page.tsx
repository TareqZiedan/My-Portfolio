"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mt-4 flex w-full flex-col items-center overflow-hidden px-4 py-10 text-center"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
      >
        <Image
          height={200}
          width={200}
          src="/ME.jpg"
          alt="Tareq Ziedan's Image"
          className="mb-6 rounded-full border-4 border-amber-600 shadow-md"
        />
      </motion.div>

      <motion.h1
        className="text-3xl font-bold text-amber-500 sm:text-4xl lg:text-5xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
      >
        Hello, World
      </motion.h1>

      <p className="mt-6 max-w-2xl text-base font-medium text-white sm:text-lg md:text-xl">
        Hi, I&apos;m <span className="text-amber-400">Tareq Ziedan</span>, a
        passionate frontend developer specializing in building modern,
        responsive web applications with
        <span className="text-amber-400"> React</span>,{" "}
        <span className="text-amber-400">Next.js</span>, and
        <span className="text-amber-400"> Tailwind CSS</span>.
      </p>

      <p className="mt-4 max-w-2xl text-base font-medium text-white sm:text-lg md:text-xl">
        I love crafting beautiful user experiences and writing clean,
        maintainable code.
      </p>

      <div className="flex w-[80%] flex-col items-center justify-between gap-4 md:flex-row">
        <p className="mt-6 max-w-xl text-base font-medium text-zinc-400 sm:text-lg">
          I’m currently open to new opportunities and collaborations. If you’ve
          got a project in mind, I’d love to hear about it!
        </p>

        <Link
          href="/contact"
          className="relative my-6 h-[4rem] w-[16rem] hover:scale-105"
        >
          <div className="absolute inset-0 -rotate-6 bg-zinc-200" />
          <motion.button
            className="relative h-full w-full cursor-pointer border-2 border-amber-500 bg-black px-6 py-2 text-lg font-semibold text-amber-500 transition hover:border-white hover:bg-amber-500 hover:text-black"
            whileTap={{ scale: 0.97 }}
          >
            Let’s Work Together
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default About;
