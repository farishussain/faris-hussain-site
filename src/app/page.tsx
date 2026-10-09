import Link from "next/link";
import Image from "next/image";
import Reveal from "./components/Reveal";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import FaqAccordion from "./components/FaqAccordion";


const WORKED_WITH = [
  { name: "Enmacc GmbH", url: "https://enmacc.com" },
  { name: "Royal Cyber Inc.", url: "https://www.royalcyber.com" },
  { name: "Astera Software", url: "https://www.astera.com" },
];

const FAQS = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Data platform modernisation (legacy to cloud), Data Vault 2.0 warehouse design, ETL/ELT pipeline builds, and agentic AI / LLM system design — from architecture through production implementation.",
  },
  {
    question: "Do you work hands-on, or just advise?",
    answer:
      "Hands-on. I design the architecture and build it — pipelines, data models, infrastructure as code, and working AI agents — not just recommendations on paper.",
  },
  {
    question: "Are you available for consulting or contract work?",
    answer:
      "I'm currently a Platform Data Engineer at Enmacc GmbH. I'm open to selective advisory, consulting, or collaboration on interesting data and AI projects — reach out and we can discuss scope and availability.",
  },
  {
    question: "What industries have you worked in?",
    answer:
      "Energy trading, insurance, and finance — modernising data warehouses for regulated, high-stakes environments, plus R&D on agentic AI for trading systems.",
  },
  {
    question: "Where are you based?",
    answer:
      "Munich, Germany. I work with teams across Europe and the US, having previously worked remotely with clients based in the USA.",
  },
];

const HERO_STATS = [
  { top: "Data Vault 2.0", bottom: "Specialist", position: "top-6 -left-6 sm:-left-10" },
  { top: "M.Eng. AI", bottom: "Autonomous Systems", position: "bottom-24 -right-6 sm:-right-10" },
  { top: "Munich", bottom: "Germany · Remote-friendly", position: "-bottom-6 left-8" },
];

const SERVICES = [
  {
    title: "Data Platform Architecture & Modernisation",
    description:
      "Design and implement modern, scalable data architectures — Medallion Architecture, cloud-native lakehouses, and legacy-to-cloud migrations for high-velocity, high-stakes environments.",
  },
  {
    title: "Data Vault 2.0 Design & Implementation",
    description:
      "End-to-end Data Vault 2.0 modelling and build-out for enterprise data warehouses, including Hub/Link/Satellite design, VaultSpeed automation, and multi-source integration.",
  },
  {
    title: "Agentic AI & LLM Systems",
    description:
      "Design and build autonomous, goal-oriented AI agents using Google ADK, Amazon Bedrock, and multi-agent simulation — from research prototypes to production-ready systems.",
  },
  {
    title: "Cloud Data Engineering (AWS / Azure / GCP)",
    description:
      "Build and operate ETL/ELT pipelines on AWS Glue, Lambda, S3, Azure Synapse, and Data Factory, with infrastructure as code via Terraform and CloudFormation.",
  },
  {
    title: "ETL/ELT Pipeline & Orchestration",
    description:
      "Design batch and streaming pipelines with Talend, Kafka, and Apache Airflow, with a focus on observability, reliability, and measurable data quality improvements.",
  },
  {
    title: "Analytics & BI Transformation",
    description:
      "Migrate legacy BI stacks to modern, AI-powered analytics platforms (e.g. Power BI / Tableau to ThoughtSpot) to reduce time-to-insight for business decision-making.",
  },
];

const EXPERIENCE = [
  {
    role: "Platform Data Engineer",
    company: "Enmacc GmbH",
    location: "Munich, Germany (Hybrid)",
    period: "Feb 2025 – Present",
    points: [
      "Agentic AI R&D for an Agentic Energy Trading Marketplace, designing autonomous, goal-oriented trading agents using Google Agentic SDK (ADK) and Amazon Bedrock.",
      "Embedded AI pair-programming tools (Cursor, GitHub Copilot, Gemini) into the full SDLC, accelerating delivery and raising engineering quality.",
      "Led analytics transformation from Power BI / Tableau to ThoughtSpot, enabling AI-powered natural language search analytics.",
      "Provisioned cloud infrastructure as code with Terraform and AWS CloudFormation; built ETL pipelines on AWS Glue, S3, Lake Formation, and Lambda.",
      "Implemented Apache Airflow for workflow automation and deep observability into pipeline health.",
    ],
  },
  {
    role: "Senior Data Vault Engineer",
    company: "Royal Cyber Inc.",
    location: "Naperville, IL, USA (Remote)",
    period: "Mar 2023 – Nov 2024",
    points: [
      "Migrated legacy insurance and finance systems to Snowflake using Data Vault 2.0 methodology across multiple source systems.",
      "Designed ETL pipelines with advanced SQL logic for batch (Talend) and streaming (Kafka) processing.",
      "Automated data orchestration with Airflow and optimised modelling with VaultSpeed; integrated SAP Hana and SAP BODI.",
      "Managed CI/CD deployments via Azure DevOps in an agile environment.",
    ],
  },
  {
    role: "Senior Data Warehouse Engineer",
    company: "Astera Software",
    location: "USA (Remote)",
    period: "Jul 2020 – Mar 2023",
    points: [
      "Designed ETL pipelines for business use cases and ML model training; built data warehouses on Azure Synapse Analytics.",
      "Core contributor to Astera's Data Warehouse Builder — a low-code, metadata-driven DWH product with automated Data Vault generation.",
      "Implemented Data Vault 2.0, Kimball Dimensional, and Inmon 3NF modelling architectures.",
      "Maintained pipelines across Snowflake, Redshift, Oracle, SQL Server, Postgres, and Azure.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Data Platform Modernisation — Energy Commodities Trading",
    stack: "AWS · Redshift · Lambda · Glue · Medallion Architecture · Airflow · Python",
    description:
      "Designed a modern, agile, scalable data architecture aligned with business growth strategy, implementing Medallion Architecture for 360° analytical capability.",
    impact: "Startup-to-scaleup model built for cost efficiency without re-architecting later.",
  },
  {
    title: "Data Warehouse Modernisation — Insurance & Finance",
    stack: "Snowflake · Kafka · Data Vault 2.0 · VaultSpeed · Talend · SAP · DB2 · Airflow",
    description:
      "Migrated legacy insurance policy data from Mainframe/DB2 to Snowflake and designed Data Vault 2.0 architecture for SAP finance systems, decommissioning SAP BODI.",
    impact: "Retired a legacy mainframe/SAP BODI dependency across multiple enterprise source systems.",
  },
  {
    title: "Data Warehouse Builder — Product Development",
    stack: "Data Vault · Metadata-Driven Design · ETL Automation",
    description:
      "Core contributor to Astera's flagship low-code, metadata-driven DWH creation product with automated Data Vault generation and ETL orchestration.",
    impact: "Shipped a reusable product feature, not a one-off client build — used across Astera's customer base.",
  },
  {
    title: "REST API Browser — Feature Development",
    stack: "REST APIs · HTTP Methods · API Integration",
    description:
      "Built a feature for Astera Centerprise enabling drag-and-drop discovery and integration of third-party REST APIs directly from the platform.",
    impact: "Reduced manual configuration effort for users integrating third-party APIs.",
  },
];

const SKILL_GROUPS = [
  { label: "Programming", items: ["SQL", "Python", "Pandas", "NumPy", "PySpark"] },
  {
    label: "Databases",
    items: ["Snowflake", "Redshift", "Azure Synapse", "Oracle", "SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Databricks", "SAP Hana"],
  },
  { label: "Cloud", items: ["AWS", "Azure", "GCP", "Terraform", "CloudFormation"] },
  { label: "Data Processing", items: ["Kafka", "Spark", "Hadoop", "MapReduce", "Airflow"] },
  { label: "ETL & Modelling", items: ["Talend", "Informatica", "Data Factory", "VaultSpeed", "Data Vault 2.0", "Kimball", "3NF"] },
  { label: "AI & ML", items: ["LLMOps", "Agentic AI", "Google ADK", "Amazon Bedrock", "PyTorch", "TensorFlow"] },
  { label: "Visualisation", items: ["Power BI", "Tableau", "ThoughtSpot"] },
  { label: "DevOps", items: ["Docker", "Azure DevOps", "CI/CD", "Git", "GitHub Copilot", "Cursor"] },
];

const EDUCATION = [
  {
    degree: "M.Eng. — Artificial Intelligence of Autonomous Systems",
    school: "Technische Hochschule Ingolstadt, Germany",
    period: "2024 – 2026",
    detail:
      "Thesis: Simulating Over-the-Counter Energy Liquidity — Evaluating LLM Multi-Agent Systems in RFQ Dynamics.",
  },
  {
    degree: "Postgraduate Diploma — Big Data Analytics",
    school: "Institute of Business Administration (IBA)",
    period: "Feb 2023 – Oct 2023",
    detail: "Hadoop, Apache Spark, MapReduce, Airflow, Kafka, MongoDB.",
  },
  {
    degree: "B.Eng. — Computer Systems Engineering",
    school: "NED University of Engineering & Technology",
    period: "2016 – 2020",
    detail: "Final Year Project fully funded by Ignite National Technology — Top 21 NGIRI-2020.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteHeader />

      <main id="top">
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pt-20 pb-24">
          <div
            aria-hidden
            className="animate-blob absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-blob animation-delay-2000 absolute -top-10 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-blob animation-delay-4000 absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
          />

          <div className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left: copy */}
            <div className="animate-[fade-in-up_0.8s_ease-out] text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-sky-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Data &amp; AI Platform Engineer
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Hi, this is Faris Hussain
              </h1>
              <p className="mt-6 text-balance text-lg leading-relaxed text-neutral-300 lg:max-w-xl">
                I design and build modern data platforms and agentic AI systems — from
                Data Vault 2.0 warehouses for insurance and finance, to autonomous
                trading agents running in production. Based in Munich, Germany, I help
                companies modernise legacy data architecture and ship AI-driven
                engineering that actually works.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  href="/contact"
                  className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
                >
                  Book a call
                </Link>
                <a
                  href="#services"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-neutral-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/40"
                >
                  See what I can do
                </a>
              </div>
            </div>

            {/* Right: photo card with floating badges */}
            <div className="animate-[fade-in-up_1s_ease-out_0.2s_both] relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-500/30 via-purple-500/20 to-transparent blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40">
                <Image
                  src="/portrait.jpg"
                  alt="Faris Hussain"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 80vw"
                  className="object-cover"
                />
              </div>
              {HERO_STATS.map((stat, index) => (
                <div
                  key={stat.top}
                  style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                  className={`animate-[fade-in-up_0.6s_ease-out_both] absolute ${stat.position} rounded-2xl border border-white/10 bg-neutral-900/90 px-4 py-3 text-center shadow-xl shadow-black/30 backdrop-blur`}
                >
                  <p className="text-sm font-bold text-sky-400">{stat.top}</p>
                  <p className="text-xs text-neutral-300">{stat.bottom}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Worked With */}
        <Reveal>
          <section className="mx-auto max-w-5xl px-6 pb-16">
            <p className="text-center text-xs font-medium uppercase tracking-widest text-neutral-500">
              Worked with
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-neutral-400">
              {WORKED_WITH.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-semibold tracking-tight transition hover:text-white"
                >
                  {company.name}
                </a>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Services */}
        <section id="services" className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Services</h2>
            <p className="mt-2 max-w-2xl text-neutral-400">
              Practical, production-grade data and AI engineering — not just advice.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10">
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Experience</h2>
          </Reveal>
          <div className="mt-8 space-y-8">
            {EXPERIENCE.map((job, index) => (
              <Reveal key={job.role} delay={index * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {job.role} <span className="font-normal text-neutral-400">· {job.company}</span>
                    </h3>
                    <span className="text-sm text-neutral-500">{job.period}</span>
                  </div>
                  <p className="text-sm text-neutral-500">{job.location}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-300">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Key Projects</h2>
              <Link
                href="/case-studies"
                className="hidden text-sm font-medium text-sky-400 transition hover:text-sky-300 sm:inline-block"
              >
                Read full case studies →
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <Reveal key={project.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-sky-400">
                    {project.stack}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {project.description}
                  </p>
                  <p className="mt-3 text-sm font-medium text-emerald-400">
                    Impact: {project.impact}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Technical Skills</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {SKILL_GROUPS.map((group, index) => (
              <Reveal key={group.label} delay={index * 60}>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-400">
                    {group.label}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200 transition duration-200 hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Education</h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {EDUCATION.map((edu, index) => (
              <Reveal key={edu.degree} delay={index * 80}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                    <span className="text-sm text-neutral-500">{edu.period}</span>
                  </div>
                  <p className="text-sm text-neutral-400">{edu.school}</p>
                  <p className="mt-2 text-sm text-neutral-400">{edu.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8">
              <FaqAccordion items={FAQS} />
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let&apos;s work together</h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-400">
              Open to consulting engagements, contract work, and collaboration on data
              platform and agentic AI projects.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:farishussain021@gmail.com"
                className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
              >
                farishussain021@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/farishussain"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-neutral-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/40"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/farishussain"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-neutral-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/40"
              >
                GitHub
              </a>
            </div>
            <p className="mt-6 text-sm text-neutral-500">Munich, Germany · +49 162 8582393</p>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
