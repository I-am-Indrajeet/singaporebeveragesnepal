import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/products/ProductCard";
import { DistributorCTA } from "@/components/sections/DistributorCTA";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { SchemaScript } from "@/components/shared/SchemaScript";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PRODUCTS } from "@/data/products";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildProductSchema,
} from "@/lib/seo/metadata";
import { SPACING } from "@/styles/tokens";

type ProductPageProps = {
  params: { slug: string };
};

function getProduct(slug: string) {
  return PRODUCTS.find((item) => item.slug === slug) ?? null;
}

function getRelatedProducts(slug: string, category: string) {
  return PRODUCTS.filter((item) => item.slug !== slug)
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
  return PRODUCTS.map((product) => ({ slug: product.slug }));
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
  const textTone = product.textColor === "dark" ? "text-zinc-950" : "text-white";
  const mutedTone =
    product.textColor === "dark" ? "text-zinc-800/80" : "text-white/78";

  return (
    <main>
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
      <SchemaScript schema={buildProductSchema(product)} />

      <section
        className={`${SPACING.containerX} overflow-hidden`}
        style={{
          background: `linear-gradient(135deg, ${product.bgColor}, ${product.bgColorDark})`,
        }}
      >
        <div className="mx-auto grid min-h-[34rem] max-w-7xl gap-10 pt-32 pb-16 md:pt-48 md:pb-24 px-5 md:px-8 lg:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-7">
            <p className={`text-sm uppercase tracking-[0.24em] ${mutedTone}`}>
              {product.tagline}
            </p>
            <h1 className={`font-heading text-5xl leading-none md:text-6xl ${textTone}`}>
              {product.heroHeadline}
            </h1>
            <p className={`max-w-xl text-lg leading-8 ${mutedTone}`}>
              {product.heroSubtext}
            </p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    product.textColor === "dark"
                      ? "border-zinc-900/15 bg-white/40 text-zinc-950"
                      : "border-white/20 bg-white/10 text-white"
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={product.image}
              alt={`${product.name} product image`}
              width={720}
              height={1200}
              priority
              className="h-auto w-[17rem] object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.22)] md:w-[20rem]"
            />
          </div>
        </div>
      </section>

      <section className={`${SPACING.sectionY} ${SPACING.containerX}`}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Overview"
              title={`${product.name} is positioned for flavour clarity, visual impact, and practical serving versatility.`}
              subtitle={product.description}
              accentColor={product.accentColor}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6">
              <h2 className="font-heading text-2xl text-zinc-950">Category</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600 capitalize">
                {product.category}
              </p>
            </div>
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6">
              <h2 className="font-heading text-2xl text-zinc-950">Best fit</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {product.usageOccasions[0]}, {product.usageOccasions[1]}, and commercial refreshment moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${SPACING.sectionY} ${SPACING.containerX} bg-white`}>
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Flavor Highlights"
            title="The product story is built around a small set of clear value cues."
            accentColor={product.accentColor}
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {product.features.slice(0, 4).map((feature) => (
              <article
                key={feature}
                className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6"
              >
                <div
                  className="h-2 w-16 rounded-full"
                  style={{ backgroundColor: product.accentColor }}
                />
                <h2 className="mt-5 font-heading text-2xl text-zinc-950">
                  {feature}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${SPACING.sectionY} ${SPACING.containerX}`}>
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-zinc-200 bg-white p-8 md:p-12">
          <SectionHeading
            eyebrow="Packaging Sizes"
            title="Available formats support single-serve, hospitality, and larger refreshment occasions."
            accentColor={product.accentColor}
          />
          <div className="mt-8 flex flex-wrap gap-4">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="rounded-full border px-5 py-3 text-sm font-semibold text-zinc-900"
                style={{ borderColor: `${product.accentColor}66` }}
              >
                {size}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-zinc-600">
            Packaging conversations can be continued through the distributor and
            bulk-order pathways for specific business requirements.
          </p>
        </div>
      </section>

      <section className={`${SPACING.sectionY} ${SPACING.containerX} bg-white`}>
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Usage Occasions"
            title={`${product.name} is positioned around clear consumption moments.`}
            accentColor={product.accentColor}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {product.usageOccasions.map((occasion) => (
              <article
                key={occasion}
                className="rounded-[2rem] border border-zinc-200 bg-white p-6"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-zinc-950"
                  style={{ backgroundColor: `${product.accentColor}33` }}
                >
                  {occasion.charAt(0)}
                </div>
                <h2 className="mt-5 font-heading text-2xl text-zinc-950">
                  {occasion}
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  This occasion reflects where the product can naturally create
                  demand and repeat purchase.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${SPACING.sectionY} ${SPACING.containerX}`}>
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
      </section>

      <DistributorCTA />

      <section className={`${SPACING.sectionY} ${SPACING.containerX} bg-white`}>
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
