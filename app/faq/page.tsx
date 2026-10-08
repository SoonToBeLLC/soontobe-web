import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { faqCategories } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about SoonToBe, EchoPulse, partnerships, privacy, and support.",
};

export default function FaqPage() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-7xl px-5 pt-20 pb-10 sm:px-8 sm:pt-28">
        <p className="text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
          SoonToBe / FAQ
        </p>
        <h1 className="font-display mt-6 max-w-3xl text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
          Frequently asked.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-secondary">
          Concise answers about the studio, EchoPulse, partnerships, and how
          to reach SoonToBe.
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="glass-shell rounded-[2rem] px-6 py-4 sm:px-12 sm:py-8">
          {faqCategories.map((category) => (
            <div
              key={category.id}
              className="border-b border-border py-8 last:border-b-0"
            >
              <h2 className="text-[11px] font-medium tracking-[0.24em] text-accent uppercase">
                {category.title}
              </h2>
              <FaqList items={category.items} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
