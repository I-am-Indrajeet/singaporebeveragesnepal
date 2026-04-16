import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { NEWS_POSTS } from "@/data/news";
import { getNewsBySlug } from "@/lib/cms/content";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const revalidate = 60;

type NewsPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return NEWS_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const post = await getNewsBySlug(params.slug);

  if (!post) {
    return buildMetadata({
      title: "News",
      description: "Singapore Beverages article.",
      path: `/news/${params.slug}`,
    });
  }

  return buildMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/news/${post.slug}`,
    image: post.coverImage,
  });
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const post = await getNewsBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#FAFAF9] min-h-screen pt-32 pb-32 px-5 md:px-8 lg:px-10 md:pt-48">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "News", path: "/news" },
          { name: post.title, path: `/news/${post.slug}` },
        ])}
      />
      <article className="mx-auto max-w-4xl rounded-[2.25rem] border border-zinc-200 bg-white p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
          {post.category} · {post.publishDate}
        </p>
        <h1 className="mt-4 font-heading text-4xl text-zinc-950 md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700">{post.excerpt}</p>
        <div className="mt-10 space-y-6 text-base leading-8 text-zinc-600">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
