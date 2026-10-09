import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Case Studies — Faris Hussain",
  description:
    "In-depth case studies on agentic AI for energy trading and Data Vault 2.0 data warehouse modernisation for insurance and finance.",
};

const CASE_STUDIES = [
  {
    slug: "agentic-ai-energy-trading",
    title: "Agentic AI for an Energy Trading Marketplace",
    company: "Enmacc GmbH",
    period: "Feb 2025 – Present",
    stack: "Google ADK · Amazon Bedrock · AWS Glue/S3/Lambda · Airflow · Terraform",
    challenge:
      "Enmacc's energy trading marketplace needed to explore whether autonomous, LLM-driven agents could handle request-for-quote (RFQ) negotiation reliably enough to sit alongside deterministic trading logic — without a clear precedent for how these agents would behave under real market conditions.",
    approach: [
      "Designed autonomous, goal-oriented trading agents using Google's Agentic SDK (ADK) and Amazon Bedrock, applying M.Sc.-level agentic AI research directly in a production setting.",
      "Built the supporting data foundation — AWS Glue, S3, Lake Formation, and Lambda — to feed the agents real-time trading datasets, with Terraform and CloudFormation for reproducible infrastructure.",
      "Used Apache Airflow for orchestration and observability, so pipeline health and agent behaviour could be monitored end-to-end.",
      "Ran the architecture question in parallel through academic research: an M.Eng. thesis benchmarking Gemini 2.5 Flash agents against deterministic rule-based agents in wholesale energy RFQ simulations.",
    ],
    outcome:
      "The research found economic equivalence between LLM-driven and rule-based agents, with distinct tradeoffs in decision quality — directly informing how agentic components are being designed into the trading marketplace's architecture.",
  },
  {
    slug: "data-vault-insurance-finance",
    title: "Data Vault 2.0 Modernisation for Insurance & Finance",
    company: "Royal Cyber Inc.",
    period: "Mar 2023 – Nov 2024",
    stack: "Snowflake · Data Vault 2.0 · VaultSpeed · Talend · Kafka · Airflow · SAP",
    challenge:
      "A portfolio of legacy insurance and finance systems — running on Mainframe/DB2 and SAP, with data spread across multiple source systems — needed to move onto a modern, auditable enterprise data warehouse without disrupting live policy and finance operations.",
    approach: [
      "Migrated legacy insurance policy data from Mainframe/DB2 to Snowflake using the Data Vault 2.0 methodology, supporting multiple source systems in a single enterprise DWH.",
      "Built ETL pipelines combining Talend for batch processing and Kafka for streaming, with advanced SQL logic to improve data accuracy across business units.",
      "Automated orchestration with Airflow and optimised data modelling using VaultSpeed; integrated SAP Hana and SAP BODI platforms into the new warehouse.",
      "Decommissioned SAP BODI entirely by translating its ETL logic into Talend, and managed the rollout through CI/CD in Azure DevOps with client requests tracked via ServiceNow.",
    ],
    outcome:
      "Consolidated multiple insurance and finance source systems onto a single Snowflake + Data Vault 2.0 warehouse and retired a legacy SAP BODI dependency — giving the business an auditable, scalable foundation for policy and finance data going forward.",
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
