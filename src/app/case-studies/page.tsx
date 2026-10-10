import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies" },
  title: "Case Studies — Faris Hussain",
  description:
    "In-depth case studies on agentic AI for energy trading and Data Vault 2.0 data warehouse modernisation for insurance and finance.",
};

const CASE_STUDIES = [
  {
    slug: "agentic-ai-energy-trading",
    title: "Energy Trading Agents — Development & Research",
    company: "Enmacc GmbH",
    period: "Feb 2025 – Present",
    stack: "Google ADK · Amazon Bedrock · AWS Glue/S3/Lambda · Airflow · Terraform",
    challenge:
      "Energy-trading agents need domain-specific workflows and a way to assess negotiation behaviour. The work includes agent-development R&D at Enmacc and a separate academic comparison of LLM-driven and rule-based agents in simulated request-for-quote (RFQ) negotiations.",
    approach: [
      "At Enmacc, designed goal-oriented energy-trading agents using Google ADK and Amazon Bedrock as part of agent-development R&D.",
      "Platform contributions included AWS Glue, S3, Lake Formation and Lambda data foundations, with Terraform and CloudFormation for infrastructure as code.",
      "Implemented Apache Airflow for workflow orchestration and visibility into pipeline health.",
      "Separately, the M.Eng. research compared LLM-driven and rule-based agents in energy RFQ simulations, with energy-specific agents, data transformations, negotiation workflows and experiment analytics.",
    ],
    outcome:
      "The contributions cover agent-development R&D and platform engineering at Enmacc, alongside a separate simulation-based research evaluation. The academic work examines negotiation outcomes, economic measures and model telemetry; it does not establish live autonomous trading performance, commercial returns or adoption of the findings in production.",
  },
  {
    slug: "data-vault-insurance-finance",
    title: "Data Vault 2.0 Modernisation for Insurance & Finance",
    company: "Royal Cyber Inc.",
    period: "Mar 2023 – Nov 2024",
    stack: "Snowflake · Data Vault 2.0 · VaultSpeed · Talend · Kafka · Airflow · SAP",
    challenge:
      "Insurance and finance data held in Mainframe/DB2 and SAP systems needed to be integrated into modern enterprise warehouses with consistent modelling across multiple sources.",
    approach: [
      "Migrated Mainframe/DB2 insurance data to Snowflake and designed Data Vault 2.0 models for SAP finance data.",
      "Built SQL transformations and pipelines using Talend for batch processing and Kafka for streaming.",
      "Automated orchestration with Airflow and warehouse modelling with VaultSpeed, integrating multiple source systems.",
      "Replaced SAP BODI ETL logic with Talend and managed warehouse and pipeline deployments through Azure DevOps CI/CD.",
    ],
    outcome:
      "Integrated legacy insurance and finance data into enterprise warehouse models and replaced SAP BODI ETL logic with Talend. The delivered work covered source migration, modelling, pipeline orchestration and deployment automation.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-10 text-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-sky-400">
              Case Studies
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How I approach data platform and agentic AI problems
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-neutral-300">
              Two projects, in more depth than the summary cards — the problem I was
              solving, the approach I took, and the outcome it produced.
            </p>
          </Reveal>
        </section>

        {/* Case studies */}
        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="space-y-10">
            {CASE_STUDIES.map((study, index) => (
              <Reveal key={study.title} delay={index * 100}>
                <article
                  id={study.slug}
                  className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-sky-500/30"
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-sky-400">
                    {study.company} · {study.period}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    {study.title}
                  </h2>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
                    {study.stack}
                  </p>

                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                    The challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {study.challenge}
                  </p>

                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                    The approach
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {study.approach.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-neutral-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                    The outcome
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-emerald-400">
                    {study.outcome}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="mx-auto max-w-5xl px-6 pb-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Have a similar problem?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-300">
              Let&apos;s talk about your data platform or agentic AI challenge.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
            >
              Book a call
            </Link>
          </section>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
