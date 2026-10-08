import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="echo-card block overflow-hidden rounded-[1.75rem]">
      <div className="p-2.5 pb-0 sm:p-3 sm:pb-0">
        <div className="echo-window relative flex min-h-48 items-center justify-center overflow-hidden rounded-[1.35rem] ring-1 ring-white/10 sm:min-h-56">
          <div className="absolute inset-0 echo-window-glow" aria-hidden="true" />
          <p className="relative font-display text-3xl font-medium tracking-[0.14em] text-white uppercase sm:text-4xl">
            Coming soon
          </p>
        </div>
      </div>

      <div className="px-6 pt-4 pb-5 sm:px-7">
        <p className="text-[11px] font-medium tracking-[0.18em] text-[#e4d4f8]/80 uppercase">
          {product.category}
          <span className="px-2 text-[#e4d4f8]/40">•</span>
          {product.status}
        </p>
        <h3 className="mt-2 font-display text-[2rem] leading-none font-medium tracking-[-0.03em] text-white">
          {product.name}
        </h3>
        <p className="mt-2 text-[15px] leading-snug text-[#f6ecff]">{product.tagline}</p>
        <p className="mt-2 text-sm leading-6 text-[#ddd0ee]">{product.description}</p>
        <p
          aria-disabled="true"
          className="mt-4 inline-flex cursor-default items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/20"
        >
          Explore {product.name}
          <span aria-hidden="true">↗</span>
        </p>
      </div>
    </article>
  );
}
