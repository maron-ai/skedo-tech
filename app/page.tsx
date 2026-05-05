"use client";

import { useState } from "react";
import { ImigongoDivider } from "@/components/ImigongoDivider";

export default function Home() {
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState("An idea, no code yet");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, stage, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setEmail("");
      setStage("An idea, no code yet");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="px-8 pt-24 pb-20 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight">
          Real software.
          <br />
          Shipped, productized,
          <br />
          maintained.
        </h1>
        <p className="mt-8 text-lg text-[var(--color-muted)] max-w-xl leading-relaxed">
          A studio for companies that need the thing built right the first time.
          Years of components. Industry standards. No prototypes that fall over.
        </p>
      </section>

      {/* Stats */}
      <section className="px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs tracking-widest text-[var(--color-muted)] uppercase mb-1">
              Founded
            </p>
            <p className="text-base">Charleston, SC</p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-[var(--color-muted)] uppercase mb-1">
              Flagship
            </p>
            <p className="text-base">Mulstra</p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-[var(--color-muted)] uppercase mb-1">
              Stack
            </p>
            <p className="text-base">TypeScript · Postgres · React</p>
          </div>
        </div>
      </section>

      <ImigongoDivider />

      {/* Contact */}
      <section id="contact" className="px-8 py-24 max-w-xl">
        <h2 className="text-3xl font-bold mb-2">Tell us what you need built.</h2>
        <p className="text-[var(--color-muted)] italic mb-10">
          We read every message. We reply if it is a fit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs tracking-widest text-[var(--color-muted)] uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs tracking-widest text-[var(--color-muted)] uppercase mb-2">
              Stage
            </label>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="w-full bg-[var(--color-bg)] border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
            >
              <option>An idea, no code yet</option>
              <option>Early prototype</option>
              <option>Working product</option>
              <option>Scaling</option>
            </select>
          </div>

          <div>
            <label className="block text-xs tracking-widest text-[var(--color-muted)] uppercase mb-2">
              What you need
            </label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors resize-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-white text-[var(--color-bg)] font-medium px-6 py-3 rounded hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send →"}
            </button>
          </div>

          {status === "sent" && (
            <p className="text-sm text-green-400">
              Message sent. We&apos;ll be in touch.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
