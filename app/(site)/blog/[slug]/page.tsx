import { getBlogPosts, getBlogPost, BlogPost } from "@/lib/contentful";
import { notFound } from "next/navigation";
import RichTextRender from "@/app/components/reusable/RichTextRender";
import Image from "next/image";
import type { Metadata } from "next";

/**
 * Generate static params for SSG
 */
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.fields.slug }));
}

/**
 * Generate metadata dynamically per blog post
 */
export async function generateMetadata({ params }): Promise<Metadata> {
  const post: BlogPost | undefined = await getBlogPost(params.slug);

  if (!post || !post.fields.titleTag) {
    return { title: "Webentryx Blog | Insights on Digital Marketing & Analytics" };
  }

  return {
    title: post.fields.titleTag,
    openGraph: {
      title: post.fields.titleTag,
      description: post.fields.description || "",
      images: post.fields.image
        ? [
            {
              url: `https:${post.fields.image.fields.file.url}`,
              width: 1200,
              height: 630,
              alt: post.fields.title,
            },
          ]
        : [],
    },
  };
}

/**
 * Blog post page
 * DO NOT manually type `params` to avoid App Router PageProps errors
 */
export default async function BlogPostPage({ params }) {
  const post: BlogPost | undefined = await getBlogPost(params.slug);

  if (!post) return notFound();

  return (
    <div className="py-16 md:py-20 lg:py-24">
      {post.fields.image && (
        <Image
          src={`https:${post.fields.image.fields.file.url}`}
          alt={post.fields.title}
          width={1920}
          height={1080}
          className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
        />
      )}

      <article className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 1440xl:px-30 2xl:px-0 gap-12 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <RichTextRender content={post.fields.content} />
        </div>
      </article>
    </div>
  );
}
