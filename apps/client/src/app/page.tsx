const categories = [
  {
    name: "Living",
    description: "Layered textures, calm tones, and pieces that make the room breathe.",
    accent: "Sand + Walnut",
  },
  {
    name: "Kitchen",
    description: "Objects for everyday rituals, from stoneware sets to clean-lined tools.",
    accent: "Clay + Brass",
  },
  {
    name: "Bedroom",
    description: "Soft-weight linen, sculpted lamps, and quiet details for slower nights.",
    accent: "Oat + Smoke",
  },
];

const arrivals = [
  {
    name: "Ridge Lounge Chair",
    price: "$280",
    note: "Low profile oak frame with boucle texture.",
  },
  {
    name: "Halo Pendant",
    price: "$96",
    note: "Warm light for dining corners and reading nooks.",
  },
  {
    name: "Terra Vase Set",
    price: "$54",
    note: "Hand-finished ceramic pair for shelves and tables.",
  },
];

const promises = [
  "Free delivery in Ulaanbaatar on orders over $80",
  "Curated weekly drops with limited-stock releases",
  "30-day easy returns for untouched items",
];

export default function Home() {
  return (
    <main className="home-shell min-h-screen px-5 pb-16 pt-6 text-[var(--ink)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="soft-card mb-6 flex flex-col gap-4 px-5 py-4 sm:flex-row sm.items-center sm:justify-between sm:px-6">
          <div>
            <p className="eyebrow">Nomad Edit</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-[0.08em]">Curated Home Store</h1>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            <a href="#new" className="rounded-full border border-[var(--line)] px-4 py-2 transition hover:border-[var(--ink)] hover:text-[var(--ink)]">
              New In
            </a>
            <a href="#collections" className="rounded-full border border-[var(--line)] px-4 py-2 transition hover:border-[var(--ink)] hover:text-[var(--ink)]">
              Collections
            </a>
            <a href="#about" className="rounded-full border border-[var(--line)] px-4 py-2 transition hover:border-[var(--ink)] hover:text-[var(--ink)]">
              Why Us
            </a>
          </nav>
        </header>

        <section className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] px-6 py-8 shadow-[0_20px_80px_rgba(33,29,26,0.08)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--glow)] blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-24 w-24 rounded-full bg-white/50 blur-2xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow">Spring Studio Drop</p>
              <h2 className="mt-4 max-w-2xl text-5xl leading-none sm:text-6xl lg:text-7xl">
                Make every corner feel collected, warm, and lived in.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                Discover furniture, lighting, and objects selected for modern apartments
                with a soft editorial mood.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#new"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
                >
                  Shop new arrivals
                </a>
                <a
                  href="#collections"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] px-6 py-3 text-sm font-semibold transition hover:bg-white/60"
                >
                  Browse collections
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-semibold">120+</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">Curated pieces ready to ship</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">48h</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">Fast dispatch on in-stock orders</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">4.9/5</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">Average rating from repeat shoppers</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <article className="soft-card relative overflow-hidden p-6">
                <div className="absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(212,170,116,0.24))]" />
                <p className="eyebrow">Editor Pick</p>
                <h3 className="mt-3 max-w-xs text-3xl leading-tight">Sora modular sofa in dune boucle.</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
                  Sculptural comfort with removable covers and a made-to-stay silhouette.
                </p>
                <div className="mt-6 flex items-end justify-between">
                  <p className="text-lg font-semibold">$640</p>
                  <span className="rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Best seller
                  </span>
                </div>
              </article>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="soft-card p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Lighting</p>
                  <h3 className="mt-4 text-2xl">Orb table lamp</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Frosted glow with a travertine base for bedside or desk.
                  </p>
                  <p className="mt-6 text-base font-semibold">$78</p>
                </article>
                <article className="rounded-[1.6rem] border border-dashed border-[var(--line-strong)] bg-[rgba(255,248,239,0.75)] p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Weekly Offer</p>
                  <h3 className="mt-4 text-2xl">Save 15%</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    On dining and tabletop orders through Sunday midnight.
                  </p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em]">Use code: TABLE15</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="pt-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Collections</p>
              <h2 className="section-title mt-3">Designed for the way you actually live.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
              Start with a room, then layer in objects that make it feel personal without
              feeling crowded.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {categories.map((category) => (
              <article key={category.name} className="soft-card flex min-h-[280px] flex-col justify-between p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                    {category.accent}
                  </p>
                  <h3 className="mt-4 text-3xl">{category.name}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
                    {category.description}
                  </p>
                </div>
                <a href="#new" className="mt-8 text-sm font-semibold uppercase tracking-[0.16em]">
                  Explore room
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="new" className="pt-16">
          <div className="mb-8">
            <p className="eyebrow">New Arrivals</p>
            <h2 className="section-title mt-3">Fresh pieces with tactile finishes.</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {arrivals.map((item, index) => (
              <article key={item.name} className="soft-card overflow-hidden">
                <div className="h-56 bg-[linear-gradient(135deg,rgba(244,233,219,0.8),rgba(212,170,116,0.28))]" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                        0{index + 1}
                      </p>
                      <h3 className="mt-3 text-2xl">{item.name}</h3>
                    </div>
                    <p className="text-lg font-semibold">{item.price}</p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.note}</p>
                  <a
                    href="#about"
                    className="mt-6 inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold transition hover:border-[var(--ink)]"
                  >
                    View details
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="pt-16">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[2rem] bg-[var(--ink)] p-8 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-white/65">Store Promise</p>
              <h2 className="mt-4 max-w-md text-4xl leading-tight">
                Thoughtful basics, premium feel, no visual noise.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
                We focus on pieces that last longer than a trend cycle and work inside compact
                city homes.
              </p>
            </article>

            <div className="grid gap-5 sm:grid-cols-3">
              {promises.map((promise, index) => (
                <article key={promise} className="soft-card p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--glow)] text-sm font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{promise}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
