import type { FaqItem } from "@/lib/faq";

export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <details
          key={item.question}
          className="group border-b border-border last:border-b-0"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-[15px] text-foreground transition-colors duration-200 hover:text-highlight">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="faq-toggle flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-steel transition-transform duration-200"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-5 text-sm leading-7 text-secondary">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
