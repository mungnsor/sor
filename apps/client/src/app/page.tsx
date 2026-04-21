export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-zinc-50 px-6 text-zinc-950">
      <section className="max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase text-emerald-700">
          Monorepo 
        </p>
        <h1 className="mb-4 text-5xl font-bold leading-none">GrapQL</h1>
        <p className="text-lg leading-7 text-zinc-700">
          Projects live in <code className="font-mono">apps/*</code>.
        </p>
      </section>
    </main>
  );
}
