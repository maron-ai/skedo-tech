import type { Metadata } from "next";
import { ImigongoDivider } from "@/components/ImigongoDivider";

export const metadata: Metadata = {
  title: "Work — skedo.tech",
};

const projects = [
  {
    num: "01",
    name: "Mulstra",
    description:
      "The web as infrastructure. Every website becomes an API.",
  },
  {
    num: "02",
    name: "Persona",
    description:
      "Agents that operate across platforms. Real accounts, real actions at scale.",
  },
  {
    num: "03",
    name: "TinyThoughts",
    description:
      "Thought captured at the speed of thought. Your second brain.",
  },
];

export default function WorkPage() {
  return (
    <>
      <ImigongoDivider />
      <section className="px-8 py-24 max-w-3xl">
      <div className="space-y-0">
        {projects.map((p) => (
          <div
            key={p.num}
            className="border-b border-white/10 py-10 first:pt-0"
          >
            <div className="flex items-baseline gap-6">
              <span className="text-sm text-[var(--color-muted)] tabular-nums">
                {p.num}
              </span>
              <div>
                <h2 className="text-2xl font-bold">{p.name}</h2>
                <p className="text-[var(--color-muted)] mt-1">
                  {p.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
