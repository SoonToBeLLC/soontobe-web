import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { FaqList } from "@/components/faq-list";
import { BrandMark } from "@/components/logo";
import { ProductCard } from "@/components/product-card";
import { homepageFaqs } from "@/lib/faq";
import { products } from "@/lib/products";

const process = [
  {
    title: "Imagine",
    body: "Bold ideas begin with a clear creative vision.",
    accent: "bg-highlight",
  },
  {
    title: "Build",
    body: "We turn that vision into thoughtful technology, systems, and experiences.",
    accent: "bg-violet",
  },
  {
    title: "Launch",
    body: "We shape finished ideas into products people can actually enter, use, and connect with.",
    accent: "bg-magenta",
  },
] as const;

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="hero-light pointer-events-none absolute inset-0" />
        <div aria-hidden="true" className="ambient-grid pointer-events-none absolute inset-0" />
        <BrandMark className="mark-drift-left pointer-events-none absolute top-[4%] -left-[46%] h-[46vh] w-auto opacity-[0.03] blur-[1.5px] md:-left-[18%] md:h-[min(58vh,480px)] md:opacity-[0.04]" />
        <BrandMark className="mark-drift pointer-events-none absolute top-1/2 -right-[46%] h-[46vh] w-auto opacity-[0.03] blur-[1.5px] md:-right-[18%] md:h-[min(58vh,480px)] md:opacity-[0.04]" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-7xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8 lg:py-36">
          <p className="text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
            SoonToBe / Creative Product Studio
          </p>
          <h1 className="font-display mt-8 max-w-5xl text-5xl leading-[0.96] font-medium tracking-tight text-foreground sm:text-7xl lg:text-8xl lg:leading-[1.08]">
            <span className="lg:block">Bringing creative</span> visions{" "}
            <br className="lg:hidden" />
            <span className="text-highlight">to life.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-secondary sm:text-lg">
            We build original digital products at the intersection of creativity,
            technology, and culture—turning ambitious ideas into experiences
            people can actually use.
          </p>
          <div className="mt-10 flex w-full max-w-md flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <CtaLink href="#products" className="w-full sm:w-auto">
              Explore Products
            </CtaLink>
            <CtaLink href="#studio" variant="secondary" className="w-full sm:w-auto">
              Discover SoonToBe
            </CtaLink>
          </div>
          <p className="mt-8 text-xs tracking-[0.18em] text-muted uppercase">
            Independent ideas. Original products. Built from vision to launch.
          </p>
        </div>
      </section>

      <section className="section-tone px-5 py-28 sm:px-8 lg:py-40">
        <div id="products" className="mx-auto max-w-7xl text-center">
          <p className="text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
            Our Work
          </p>
          <h2 className="font-display mt-6 text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
            SOONTOBE PRODUCTS
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-secondary">
            A growing collection of original products built to turn bold ideas
            into real experiences.
          </p>

          <div
            className={
              products.length === 1
                ? "mt-16 flex justify-center"
                : "mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            }
          >
            {products.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="w-full max-w-[920px] scroll-mt-28 text-left"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 lg:py-40">
        <div id="studio" className="mx-auto max-w-7xl text-center">
          <p className="text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
            How We Build
          </p>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
            From idea to experience.
          </h2>
          <div className="glass-shell mt-14 grid overflow-hidden rounded-[2rem] text-left lg:grid-cols-3">
            {process.map((step, index) => (
              <article
                key={step.title}
                className={`px-7 py-10 sm:px-10 sm:py-12 ${
                  index > 0 ? "border-t border-border lg:border-t-0 lg:border-l" : ""
                }`}
              >
                <span className={`mb-5 block h-1.5 w-8 rounded-full ${step.accent}`} aria-hidden="true" />
                <h3 className="font-display text-2xl font-medium tracking-[0.14em] text-foreground uppercase">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-7 text-secondary">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
          <p className="font-display mx-auto mt-20 max-w-4xl text-center text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-5xl lg:mt-28">
            What begins as an idea becomes
            <br />
            what’s soon to be.
          </p>
        </div>
      </section>

      <div aria-hidden="true" className="flex justify-center py-6">
        <BrandMark className="h-14 w-auto opacity-[0.22] sm:h-16" />
      </div>

      <section className="section-tone px-5 py-28 sm:px-8 lg:py-40">
        <div id="company" className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl leading-tight font-medium tracking-tight text-foreground sm:text-6xl">
            We don’t build for the sake of building.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-secondary sm:text-lg">
            SoonToBe exists to create products with identity—ideas that feel
            distinct, purposeful, and worth bringing into the world.
          </p>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 lg:py-40">
        <div className="glass-shell mx-auto max-w-7xl rounded-[2rem] px-6 py-12 sm:px-12 sm:py-16">
          <div className="text-center">
            <p className="text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
              Questions
            </p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Frequently asked.
            </h2>
            <Link
              href="/faq"
              className="mt-5 inline-block text-sm text-accent transition-colors duration-200 hover:text-foreground"
            >
              View all FAQs ↗
            </Link>
          </div>
          <div className="mt-10 text-left">
            <FaqList items={homepageFaqs} />
          </div>
        </div>
      </section>

      <section className="cta-glow px-5 py-28 sm:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl leading-tight font-medium tracking-tight text-foreground sm:text-6xl">
            The next idea is already becoming real.
          </h2>
          <p className="mt-6 text-base text-secondary sm:text-lg">
            See what we’re building.
          </p>
          <CtaLink href="/echopulse" className="mt-10">
            Explore EchoPulse ↗
          </CtaLink>
        </div>
      </section>
    </main>
  );
}
