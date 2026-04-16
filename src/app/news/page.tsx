import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { PageHero } from "@/components/shared/PageHero";
import { getAllNews } from "@/lib/cms/content";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "News",
  description:
    "Read the latest Singapore Beverages news, product updates, and distribution-focused stories for Nepal.",
  path: "/news",
  keywords: ["beverage news nepal", "singapore beverages news"],
});

export default async function NewsPage() {
  const posts = await getAllNews();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <main className="bg-white min-h-screen pb-32">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "News", path: "/news" },
        ])}
      />
      
      <PageHero 
        label="Editorial"
        title="Brand & industry updates."
        description="Read the latest product updates, brand milestones, and distribution-focused stories from Singapore Beverages."
        gradientFrom="from-[#00E5FF]/10"
      />

      <div className="mx-auto max-w-[85rem] px-5 md:px-8 lg:px-10 pt-20 space-y-16">

        {featuredPost ? (
          <section className="grid gap-8 overflow-hidden rounded-[2.25rem] border border-zinc-200 bg-white lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex items-center justify-center bg-zinc-50 p-8">
              <Image
                src={featuredPost.coverImage}
                alt={`${featuredPost.title} cover image`}
                width={560}
                height={900}
                className="h-auto w-[12rem] object-contain md:w-[14rem]"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                {featuredPost.category}
              </p>
              <h2 className="mt-4 font-heading text-4xl text-zinc-950">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                {featuredPost.excerpt}
              </p>
              <p className="mt-6 text-sm font-medium text-zinc-700">
                {featuredPost.publishDate}
              </p>
              <Link
                href={`/news/${featuredPost.slug}`}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white"
              >
                Read Article
              </Link>
            </div>
          </section>
        ) : null}

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {otherPosts.map((post) => (
            <Link
              key={post.id}
              href={`/news/${post.slug}`}
              className="rounded-[2rem] border border-zinc-200 bg-white p-6"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                {post.category}
              </p>
              <h2 className="mt-4 font-heading text-2xl text-zinc-950">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {post.excerpt}
              </p>
              <p className="mt-6 text-sm font-medium text-zinc-700">
                {post.publishDate}
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
