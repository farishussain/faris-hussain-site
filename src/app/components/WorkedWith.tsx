"use client";

import { useState } from "react";
import "./WorkedWith.css";

type Company = { name: string; url?: string };

export default function WorkedWith({ companies }: { companies: Company[] }) {
  const [paused, setPaused] = useState(false);

  return (
    <section
      aria-labelledby="worked-with-heading"
      className="worked-with mx-auto max-w-5xl px-6 pb-16"
      data-paused={paused}
    >
      <div className="flex items-center justify-between gap-4">
        <h2
          id="worked-with-heading"
          className="text-xs font-medium uppercase tracking-widest text-neutral-500"
        >
          Worked with
        </h2>
        <button
          type="button"
          aria-controls="worked-with-companies"
          onClick={() => setPaused((value) => !value)}
          className="worked-with-control rounded-md px-3 py-2 text-xs text-neutral-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        >
          {paused ? "Resume scrolling" : "Pause scrolling"}
        </button>
      </div>
      <div id="worked-with-companies" className="worked-with-viewport">
        <div className="worked-with-track">
          <ul className="worked-with-group">
            {companies.map((company) => (
              <li key={company.name} className="worked-with-company">
                {company.url ? (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-sm transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                  >
                    {company.name}
                  </a>
                ) : (
                  company.name
                )}
              </li>
            ))}
          </ul>
          <ul className="worked-with-group worked-with-copy" aria-hidden="true">
            {companies.map((company) => (
              <li key={company.name} className="worked-with-company">
                {company.url ? (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={-1}
                    className="transition hover:text-white"
                  >
                    {company.name}
                  </a>
                ) : (
                  company.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
