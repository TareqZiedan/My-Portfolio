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
    <form onSubmit={handleSubmit} className="m-2 space-y-4">
      <div className="rounded-lg border border-gray-300">
        <label className="ml-2" htmlFor="email">
          Email
        </label>
        <div className="m-2">
          <input
            type="email"
            name="email"
            id="email"
            className="w-md bg-zinc-900 text-white focus:outline-0"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      <div className="rounded-lg border border-zinc-200">
        <label className="ml-2" htmlFor="message">
          Message
        </label>
        <div className="m-2">
          <textarea
            name="message"
            id="message"
            className="w-full bg-zinc-900 text-white focus:outline-0"
            rows={4}
            placeholder="Your message..."
            required
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="h-10 w-20 cursor-pointer rounded border border-zinc-200 text-zinc-200 hover:border-black hover:bg-zinc-200 hover:text-zinc-900"
      >
        Send
      </button>

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
