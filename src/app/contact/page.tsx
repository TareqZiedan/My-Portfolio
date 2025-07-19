"use client";

import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mblyekgk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-2 h-auto w-158 space-y-4 overflow-hidden border-8 border-black bg-zinc-200"
    >
      <div className="rounded-lg">
        <label className="ml-2 font-bold text-black" htmlFor="email">
          Email
        </label>
        <div className="m-2 flex h-10 w-150 items-center border-2 border-zinc-200 bg-black shadow-md shadow-black">
          <input
            type="email"
            name="email"
            id="email"
            className="ml-2 w-146 font-bold text-white placeholder-zinc-200 focus:outline-0"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      <div className="rounded-lg">
        <label className="ml-2 font-bold text-black" htmlFor="message">
          Message
        </label>
        <div className="m-2 w-150 border-2 border-zinc-200 bg-black shadow-md shadow-black">
          <textarea
            name="message"
            id="message"
            className="mt-2 ml-2 max-h-45 w-146 font-bold text-white placeholder-zinc-200 focus:outline-0"
            rows={4}
            placeholder="Your message..."
            required
          ></textarea>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <div className="absolute left-144 z-0 h-10 w-20 -rotate-5 bg-black"></div>
        <button
          type="submit"
          className="relative z-10 ml-2 h-10 w-20 cursor-pointer border-2 border-black bg-zinc-200 font-bold text-black shadow shadow-black hover:bg-white"
        >
          Send
        </button>
      </div>
      <div className="fixed top-[18.75rem] h-100 w-400 -rotate-31 bg-black"></div>
      <div className="fixed top-[18.75rem] flex h-100 w-400 -rotate-36 items-center justify-center bg-zinc-200">
        <p className="flex h-50 items-center border-[20px] border-black p-20 text-center text-7xl font-bold text-black">
          Love Love Love Love Love
        </p>
      </div>

      {status === "success" && (
        <p className="font-medium text-green-500">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="font-medium text-red-500">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};

export default Contact;
