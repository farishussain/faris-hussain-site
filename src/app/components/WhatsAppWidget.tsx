"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBERS = [
  { country: "Pakistan", waNumber: "923343974364" },
  { country: "Germany", waNumber: "491628582393" },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [waNumber, setWaNumber] = useState(WHATSAPP_NUMBERS[0].waNumber);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      `Hi Faris, I'm ${name} (${email}).`,
      note ? note : "I'd like to talk about a project.",
    ];
    const text = encodeURIComponent(lines.join(" "));

    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank", "noopener,noreferrer");
    setOpen(false);
    setName("");
    setEmail("");
    setNote("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105 hover:bg-emerald-400"
      >
        <svg aria-hidden="true" viewBox="0 0 448 512" className="h-7 w-7 fill-white">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950 p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-neutral-400 transition hover:text-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.3 9.17 12 2.89 5.71 4.3 4.29l6.29 6.3 6.3-6.3z" />
              </svg>
            </button>

            <h3 className="pr-8 text-xl font-semibold text-white">
              Chat on WhatsApp
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              Share a few details and I&apos;ll continue the conversation on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="wa-name" className="text-sm text-neutral-300">
                  Full Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  id="wa-name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="wa-email" className="text-sm text-neutral-300">
                  Email <span className="text-emerald-400">*</span>
                </label>
                <input
                  id="wa-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="wa-note" className="text-sm text-neutral-300">
                  What would you like to talk about? (optional)
                </label>
                <input
                  id="wa-note"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="e.g. Data platform project"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <span className="text-sm text-neutral-300">WhatsApp Number</span>
                <div className="mt-1.5 grid grid-cols-2 gap-2">
                  {WHATSAPP_NUMBERS.map((option) => (
                    <button
                      key={option.waNumber}
                      type="button"
                      onClick={() => setWaNumber(option.waNumber)}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                        waNumber === option.waNumber
                          ? "border-emerald-400 bg-emerald-400/10 text-emerald-300"
                          : "border-white/10 text-neutral-300 hover:border-white/30"
                      }`}
                    >
                      {option.country}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-300"
              >
                <svg aria-hidden="true" viewBox="0 0 448 512" className="h-4 w-4 fill-current">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Chat On WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
