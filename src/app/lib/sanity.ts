import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "a3kbijby",
  dataset: "production",
  apiVersion: "v2026-06-18",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// 3. Export the urlFor helper function
export function urlFor(source: any) {
  return builder.image(source);
}