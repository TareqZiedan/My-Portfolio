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
    <div className="flex h-full w-full items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-[40rem] max-w-full space-y-6 overflow-hidden border-8 border-black bg-zinc-200 p-6 shadow shadow-white"
      >
        <div>
          <label className="ml-2 font-bold text-black" htmlFor="email">
            Email
          </label>
          <div className="mx-2 mt-1 flex h-[2rem] items-center border-2 border-zinc-200 bg-black p-[2px] shadow-md shadow-black">
            <input
              type="email"
              name="email"
              id="email"
              className="ml-1 w-[37.25rem] bg-transparent px-3 py-2 font-bold text-white placeholder-zinc-300 focus:outline-none"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        <div>
          <label className="ml-2 font-bold text-black" htmlFor="message">
            Message
          </label>
          <div className="mx-2 mt-1 border-2 border-zinc-200 bg-black p-[2px] shadow-md shadow-black">
            <textarea
              name="message"
              id="message"
              className="ml-1 h-[20rem] max-h-[20rem] min-h-[2rem] w-[37.25rem] bg-transparent px-3 py-2 font-bold text-white placeholder-zinc-300 focus:outline-none"
              rows={5}
              placeholder="Your message..."
              required
            ></textarea>
          </div>
        </div>
        <div className="mt-10 mb-5 flex items-center justify-center">
          <div className="relative hover:scale-105">
            <div className="absolute inset-0 -rotate-6 bg-black"></div>
            <button
              type="submit"
              className="relative z-10 h-10 w-28 cursor-pointer border-2 border-black bg-zinc-200 font-bold text-black shadow shadow-black hover:bg-white"
            >
              Send
            </button>
          </div>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-center font-medium text-green-500">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-center font-medium text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
