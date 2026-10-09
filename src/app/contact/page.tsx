import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Faris Hussain",
  description:
    "Get in touch with Faris Hussain for data platform modernisation, Data Vault 2.0 architecture, or agentic AI engineering work.",
};

const INFO_CARDS = [
  { label: "Response Time", value: "Within 2–3 days" },
  { label: "Availability", value: "Munich (CET) — Remote friendly" },
  { label: "Engagement", value: "Consulting & Advisory" },
];

const CALENDLY_URL = "https://calendly.com/farishussain021/30min";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open to select consulting work
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to start a project?
            </h1>
            <h2 className="mt-2 text-xl font-semibold text-neutral-300">
              Fill Out This <span className="text-sky-400 italic">Form</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-400">
              I&apos;ll get back to you within a day or two. The more detail you share,
              the better I can understand how to help.
            </p>
          </Reveal>
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* Form + sidebar */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-purple-500 text-lg font-bold text-white">
                    FH
                  </div>
                  <div>
                    <p className="font-semibold text-white">Faris Hussain</p>
                    <p className="text-sm text-neutral-400">Data &amp; AI Platform Engineer</p>
                  </div>
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-widest text-neutral-500">
                  Contact Info
                </p>
                <dl className="mt-4 space-y-4">
                  {INFO_CARDS.map((item) => (
                    <div key={item.label} className="flex items-start justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <dt className="text-sm text-neutral-400">{item.label}</dt>
                      <dd className="text-right text-sm font-medium text-white">{item.value}</dd>
                    </div>
                  ))}
                  <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <dt className="text-sm text-neutral-400">Book a Call</dt>
                    <dd className="text-right text-sm font-medium">
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-400 transition hover:text-sky-300"
                      >
                        Schedule Appointment →
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-sky-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-sky-400"
                  >
                    Schedule a Call
                  </a>
                  <a
                    href="mailto:farishussain021@gmail.com"
                    className="rounded-full border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-neutral-100 transition hover:border-white/40"
                  >
                    Email Directly
                  </a>
                  <a
                    href="https://www.linkedin.com/in/farishussain"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-neutral-100 transition hover:border-white/40"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-purple-500/10 p-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to new projects
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                Looking for a Data &amp; AI <span className="text-sky-400 italic">Engineer?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-neutral-400">
                Let&apos;s talk about modernising your data platform or building your
                next agentic AI system. I&apos;m happy to have a conversation.
              </p>
              <a
                href="https://www.linkedin.com/in/farishussain"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
              >
                Connect on LinkedIn
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
