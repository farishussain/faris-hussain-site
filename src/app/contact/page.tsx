import type { Metadata } from "next";
import Image from "next/image";
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

const WHATSAPP_NUMBERS = [
  { country: "Germany", number: "+49 162 8582393", waNumber: "491628582393" },
  { country: "Pakistan", number: "+92 334 3974364", waNumber: "923343974364" },
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
                  <Image
                    src="/portrait-contact.jpg"
                    alt="Faris Hussain"
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-white/10"
                  />
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
                  {WHATSAPP_NUMBERS.map((phone) => (
                    <div
                      key={phone.country}
                      className="flex items-start justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm text-neutral-400">WhatsApp ({phone.country})</dt>
                      <dd className="text-right text-sm font-medium">
                        <a
                          href={`https://wa.me/${phone.waNumber}?text=${encodeURIComponent("Hi Faris, I'd like to talk about a project.")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-white transition hover:text-emerald-400"
                        >
                          <svg aria-hidden="true" viewBox="0 0 448 512" className="h-3.5 w-3.5 fill-emerald-400">
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                          </svg>
                          Chat
                        </a>
                      </dd>
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
