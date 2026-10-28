import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import photo from "@/assets/shmoys.jpg";
import { publications } from "@/data/publications";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "David B. Shmoys — Cornell ORIE" },
      {
        name: "description",
        content:
          "David B. Shmoys, Laibe/Acheson Professor at Cornell ORIE: approximation algorithms, discrete optimization, and data-driven decision-making.",
      },
      { property: "og:title", content: "David B. Shmoys — Cornell ORIE" },
      {
        property: "og:description",
        content: "Research, publications, and bio of David B. Shmoys at Cornell University.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const BASE = "https://people.orie.cornell.edu/shmoys/";
const NAV = [
  ["Research", "#research"],
  ["Publications", "#publications"],
  ["Bio", "#bio"],
  ["Students", BASE + "new_students.html"],
  ["CV", BASE + "cv-sd.pdf"],
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="#" className="font-serif text-lg font-semibold">
            David B. Shmoys
          </a>
          <nav className="flex gap-5 text-sm text-muted-foreground">
            {NAV.map(([l, h]) => (
              <a key={l} href={h} className="transition-colors hover:text-primary">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section className="grid gap-10 py-14 md:grid-cols-[220px_1fr]">
          <aside className="space-y-4 text-sm">
            <img
              src={photo}
              alt="David B. Shmoys"
              className="w-44 rounded-lg border shadow-sm md:w-full"
            />
            <div className="space-y-1 text-muted-foreground">
              <p>231 Rhodes Hall, 136 Hoy Road</p>
              <p>Cornell University, Ithaca, NY 14853</p>
              <p>(607) 255-9146</p>
              <a className="link" href="mailto:david.shmoys@cornell.edu">
                david.shmoys [at] cornell.edu
              </a>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                ["CV", BASE + "cv-sd.pdf"],
                ["Books", BASE + "new_books.html"],
                ["Scholar", "https://scholar.google.com/scholar?q=David+B.+Shmoys"],
                ["DBLP", "https://dblp.org/pid/s/DBShmoys.html"],
              ].map(([l, h]) => (
                <a
                  key={l}
                  href={h}
                  className="rounded-md border bg-card px-2.5 py-1 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  {l}
                </a>
              ))}
            </div>
          </aside>

          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">David B. Shmoys</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Laibe/Acheson Professor of Business Management &amp; Leadership Studies
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              <a className="link" href="https://www.orie.cornell.edu/">School of ORIE</a> ·{" "}
              <a className="link" href="https://www.cs.cornell.edu/">Computer Science</a> ·
              Center for Data Science for Enterprise &amp; Society
            </p>
            <div id="research" className="mt-8 scroll-mt-20 space-y-4 leading-relaxed">
              <p>
                My research focuses on the design and analysis of effective data-driven models and
                efficient algorithms that leverage tools from discrete optimization, in particular
                approximation algorithms for NP-hard and other computationally intractable
                problems. Linear programming relaxations play a fundamental role, and we study
                their application to clustering, sequencing and scheduling, and inventory problems
                in both deterministic and stochastic settings.
              </p>
              <p>
                Beyond theory, we have applied these techniques in genomics, medical aircraft
                scheduling, preservation of the red-cockaded woodpecker, and the logistics and
                design of bike-sharing systems — and more recently COVID epidemiological modeling,
                congressional districting, and IoT network design.
              </p>
            </div>
          </div>
        </section>

        <Publications />

        <section id="bio" className="scroll-mt-20 border-t py-14">
          <h2 className="text-3xl font-semibold">Brief Bio</h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed">
            <p>
              David Shmoys obtained his Ph.D. in computer science from UC Berkeley in 1984, held
              postdoctoral positions at MSRI and Harvard, and a faculty position at MIT before
              joining Cornell. He chaired the Provost's "radical collaboration" task force on data
              science and was Associate Director of the Institute of Computational Sustainability.
            </p>
            <p>
              He is a Fellow of ACM, INFORMS, and SIAM, was an NSF Presidential Young Investigator,
              and has served on numerous editorial boards, including Operations Research (co-Area
              Editor for Optimization) and Mathematics of Operations Research (Associate Editor).
              He has advised 27 graduated Ph.D. students, now on the faculties of MIT, Waterloo,
              Brown, Maryland, Georgetown, and elsewhere.
            </p>
            <p>
              His book with David Williamson, <em>The Design of Approximation Algorithms</em>, won
              the 2013 INFORMS Lanchester Prize, and "Analytics and Bikes" (with Freund,
              Henderson, and O'Mahony) won the 2018 INFORMS Daniel H. Wagner Prize.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} David B. Shmoys · Cornell University
      </footer>
    </div>
  );
}

function Publications() {
  const [active, setActive] = useState<string>("All");
  const [q, setQ] = useState("");

  const tags = useMemo(() => {
    const c = new Map<string, number>();
    publications.forEach((p) => p.tags.forEach((t) => c.set(t, (c.get(t) ?? 0) + 1)));
    return [...c.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const list = useMemo(() => {
    const s = q.toLowerCase();
    return publications
      .filter((p) => active === "All" || p.tags.includes(active))
      .filter((p) => !s || (p.title + p.authors + p.venue).toLowerCase().includes(s))
      .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  }, [active, q]);

  const chip = (label: string, n: number) => (
    <button
      key={label}
      onClick={() => setActive(label)}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
        active === label
          ? "border-primary bg-primary text-primary-foreground"
          : "bg-card hover:border-primary hover:text-primary"
      }`}
    >
      {label} <span className="opacity-60">({n})</span>
    </button>
  );

  return (
    <section id="publications" className="scroll-mt-20 border-t py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold">Publications</h2>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search titles, authors, venues…"
          className="w-full rounded-md border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring sm:w-72"
        />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {chip("All", publications.length)}
        {tags.map(([t, n]) => chip(t, n))}
      </div>

      <ul className="mt-8 divide-y">
        {list.map((p) => (
          <li key={p.title} className="py-5">
            <h3 className="text-lg font-medium leading-snug">{p.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.authors}</p>
            <p className="mt-1 text-sm italic">{p.venue}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {p.award && (
                <span className="rounded bg-award/15 px-2 py-0.5 text-xs font-semibold text-award">
                  ★ {p.award}
                </span>
              )}
              {p.tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  {t}
                </button>
              ))}
              {p.links.map((l) => (
                <a key={l.url} href={l.url} className="link text-xs font-medium">
                  {l.url.includes("arxiv") ? "arXiv" : l.label}
                </a>
              ))}
            </div>
          </li>
        ))}
        {list.length === 0 && (
          <li className="py-10 text-center text-muted-foreground">No matching publications.</li>
        )}
      </ul>
    </section>
  );
}
