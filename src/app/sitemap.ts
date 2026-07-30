import { MetadataRoute } from "next";
import { client } from "@/app/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kneswo.org";

  const staticPages = [
    "",
    "/who-we-are",
    "/team",
    "/sexual",
    "/news",
    "/projects",
    "/feminist",
    "/crisis",
    "/climate",
    "/advocacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const posts = await client.fetch(`
    *[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }
  `);

  const blogPages = posts.map((post: any) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

