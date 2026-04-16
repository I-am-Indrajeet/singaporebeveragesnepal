import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailHero } from "@/components/products/ProductDetailHero";
import { DistributorCTA } from "@/components/sections/DistributorCTA";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { SchemaScript } from "@/components/shared/SchemaScript";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CATALOG_PRODUCTS } from "@/data/products";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildProductSchema,
} from "@/lib/seo/metadata";
import { SPACING } from "@/styles/tokens";
import { PRODUCT_CATEGORY_LABELS } from "@/types/product";

type ProductPageProps = {
  params: { slug: string };
};

function getProduct(slug: string) {
  return CATALOG_PRODUCTS.find((item) => item.slug === slug) ?? null;
}

function getRelatedProducts(slug: string, category: string) {
  return CATALOG_PRODUCTS.filter((item) => item.slug !== slug)
    .sort((a, b) => Number(b.category === category) - Number(a.category === category))
    .slice(0, 3);
}

function getProductFaqs(productName: string, sizes: string[]) {
  return [
    {
      question: `What makes ${productName} distinct within the portfolio?`,
      answer: `${productName} is positioned around a clear flavour identity and a usage occasion that helps retailers and horeca partners understand where it fits best.`,
    },
    {
      question: `Which sizes are available for ${productName}?`,
      answer: `${productName} is currently listed in these sizes: ${sizes.join(", ")}.`,
    },
    {
      question: `Can ${productName} be used in commercial settings?`,
      answer: `Yes. ${productName} is presented as part of a channel-ready portfolio for retail, horeca, and event supply in Nepal.`,
    },
    {
      question: `Is ${productName} suitable for chilled service?`,
      answer: `Yes. The product is intended to be served chilled for the strongest flavour and presentation experience.`,
    },
  ];
}

export async function generateStaticParams() {
  return CATALOG_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = getProduct(params.slug);

  if (!product) {
    return buildMetadata({
      title: "Product",
      description: "Singapore Beverages product information.",
      path: `/products/${params.slug}`,
    });
  }

  return buildMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/products/${product.slug}`,
    image: product.image,
    keywords: product.seoKeywords,
  });
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, product.category);
  const categoryLabel = PRODUCT_CATEGORY_LABELS[product.category];

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#fff8f1_0%,#ffffff_18%,#fff6ec_100%)]">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
      <SchemaScript schema={buildProductSchema(product)} />

      <ProductDetailHero product={product} />

      <AnimatedSection className={`${SPACING.containerX} py-20 md:py-28`}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Product Story"
              title={`${product.name} is designed to feel immediate on shelf and clean in the glass.`}
              subtitle={product.description}
              accentColor={product.accentColor}
            />
            <div className="flex flex-wrap gap-3">
              {product.features.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/60 px-4 py-2 text-sm font-medium text-zinc-800 shadow-[0_16px_32px_-26px_rgba(24,24,27,0.8)] backdrop-blur"
                  style={{
                    borderColor: `${product.accentColor}4D`,
                    backgroundColor: `${product.accentColor}12`,
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_50px_-36px_rgba(24,24,27,0.45)] backdrop-blur-xl">
              <h2 className="font-heading text-2xl text-zinc-950">Collection</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {categoryLabel}
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_50px_-36px_rgba(24,24,27,0.45)] backdrop-blur-xl">
              <h2 className="font-heading text-2xl text-zinc-950">Best fit</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {product.usageOccasions[0]}, {product.usageOccasions[1]}, and commercial refreshment moments.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_50px_-36px_rgba(24,24,27,0.45)] backdrop-blur-xl">
              <h2 className="font-heading text-2xl text-zinc-950">Formats</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {product.sizes.join(" · ")}
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_50px_-36px_rgba(24,24,27,0.45)] backdrop-blur-xl">
              <h2 className="font-heading text-2xl text-zinc-950">Serving note</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Built to land best when fully chilled, with a bright first sip and a cleaner finish.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className={`${SPACING.containerX} pb-20 md:pb-28`} delay={0.05}>
        <div className="mx-auto max-w-7xl rounded-[2.75rem] border border-white/70 bg-white/80 p-8 shadow-[0_36px_90px_-52px_rgba(24,24,27,0.45)] backdrop-blur-xl md:p-12">
          <SectionHeading
            eyebrow="Flavor Highlights"
            title="The product story is built around a small set of crisp value cues."
            accentColor={product.accentColor}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {product.features.slice(0, 4).map((feature, index) => (
              <article
                key={feature}
                className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-zinc-50/80 p-6"
                style={{ boxShadow: `0 20px 45px -35px ${product.accentColor}` }}
              >
                <div
                  className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full blur-3xl"
                  style={{ backgroundColor: `${product.accentColor}22` }}
                />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-400">
                  0{index + 1}
                </p>
                <div
                  className="mt-5 h-2 w-16 rounded-full"
                  style={{ backgroundColor: product.accentColor }}
                />
                <h2 className="mt-5 font-heading text-2xl text-zinc-950">
                  {feature}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  A cue that helps this product read faster in-store and feel more deliberate in service.
                </p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className={`${SPACING.containerX} pb-20 md:pb-28`} delay={0.1}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionHeading
            eyebrow="Usage Occasions"
            title={`${product.name} feels strongest in moments where refreshment needs to read instantly.`}
            subtitle="These are the use cases that make the product easier to place, easier to serve, and easier to reorder."
            accentColor={product.accentColor}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {product.usageOccasions.map((occasion, index) => (
              <article
                key={occasion}
                className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_50px_-36px_rgba(24,24,27,0.45)] backdrop-blur-xl"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-zinc-950"
                  style={{ backgroundColor: `${product.accentColor}29` }}
                >
                  0{index + 1}
                </div>
                <h2 className="mt-5 font-heading text-2xl text-zinc-950">
                  {occasion}
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  This is where the bottle, flavour profile, and refreshment hit can do the clearest work.
                </p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className={`${SPACING.containerX} pb-20 md:pb-28`} delay={0.15}>
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Related Products"
            title="Explore adjacent products from the broader Singapore Beverages range."
            accentColor={product.accentColor}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <DistributorCTA />

      <section className={`${SPACING.sectionY} ${SPACING.containerX}`}>
        <div className="mx-auto max-w-5xl space-y-10">
          <SectionHeading
            eyebrow="Product FAQ"
            title={`Common questions about ${product.name}.`}
            accentColor={product.accentColor}
            align="center"
          />
          <FAQAccordion items={getProductFaqs(product.name, product.sizes)} />
        </div>
      </section>
    </main>
  );
}
