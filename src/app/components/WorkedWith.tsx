import "./WorkedWith.css";

type Company = { name: string; url?: string };

export default function WorkedWith({ companies }: { companies: Company[] }) {
  return (
    <section
      aria-labelledby="worked-with-heading"
      className="worked-with mx-auto max-w-5xl px-6 pb-16"
    >
      <h2
        id="worked-with-heading"
        className="text-center text-xs font-medium uppercase tracking-widest text-neutral-500"
      >
        Worked with
      </h2>
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
