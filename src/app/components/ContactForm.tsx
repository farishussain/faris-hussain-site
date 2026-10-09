"use client";

import { useState, type FormEvent } from "react";

const REASONS = [
  "Consulting / advisory project",
  "Contract or freelance work",
  "Full-time opportunity",
  "Collaboration / other",
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljgbqpo";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [reason, setReason] = useState(REASONS[0]);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("reason", reason);

    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setReason(REASONS[0]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-emerald-400/30 bg-emerald-500/10 p-6 text-center">
        <p className="font-semibold text-emerald-300">Message sent — thank you!</p>
        <p className="mt-2 text-sm text-neutral-300">
          I&apos;ll get back to you within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-neutral-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-sky-400/60"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-sky-400/60"
          />
        </div>
      </div>

      <div>
        <label htmlFor="link" className="mb-1.5 block text-sm font-medium text-neutral-300">
          LinkedIn / Company / Project link <span className="text-neutral-500">(optional)</span>
        </label>
        <input
          id="link"
          name="link"
          type="url"
          placeholder="https://"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-sky-400/60"
        />
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-neutral-300">
          What are you reaching out about?
        </legend>
        <div className="flex flex-wrap gap-2">
          {REASONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setReason(option)}
              aria-pressed={reason === option}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                reason === option
                  ? "border-sky-400 bg-sky-500/20 text-white"
                  : "border-white/10 bg-white/5 text-neutral-400 hover:border-white/30"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell me a bit about the project or opportunity..."
          className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-sky-400/60"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400">
          Something went wrong sending your message. Please email me directly at{" "}
          <a href="mailto:farishussain021@gmail.com" className="underline">
            farishussain021@gmail.com
          </a>
          .
        </p>
      )}
      <p className="text-xs text-neutral-500">
        Your message is sent securely via Formspree — I&apos;ll reply directly to
        your email.
      </p>
    </form>
  );
}
