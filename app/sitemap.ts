import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.SITE_URL;
  return [
    {
      url: `${siteUrl}`,
    },
    {
      url: `${siteUrl}ar`,
    },
    {
      url: `${siteUrl}en`,
    },
    {
      url: `${siteUrl}about`,
    },
    {
      url: `${siteUrl}ar/about`,
    },
    {
      url: `${siteUrl}tr/about`,
    },
  ];
}
