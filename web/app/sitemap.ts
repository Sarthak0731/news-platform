import { MetadataRoute } from 'next';

const API_BASE = "http://localhost:4000";

interface Category {
  name: string;
  url: string;
}

interface Region {
  name: string;
  url: string;
}

interface RegionCategory {
  region: string;
  category: string;
  url: string;
}

interface SitemapData {
  home: string;
  categories: Category[];
  regions: Region[];
  regionCategories: RegionCategory[];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const response = await fetch(`${API_BASE}/api/sitemap`, {
      next: { revalidate: 86400 }, // 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch sitemap data");
    }

    const data: SitemapData = await response.json();
    const baseUrl = "https://news-platform.com"; // Change to your domain

    const urls: MetadataRoute.Sitemap = [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ];

    // Add category pages
    data.categories.forEach((cat: Category) => {
      urls.push({
        url: `${baseUrl}${cat.url}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      });
    });

    // Add region pages
    data.regions.forEach((region: Region) => {
      urls.push({
        url: `${baseUrl}${region.url}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.85,
      });
    });

    // Add region + category pages
    data.regionCategories.forEach((item: RegionCategory) => {
      urls.push({
        url: `${baseUrl}${item.url}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });

    return urls;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return minimal sitemap on error
    return [
      {
        url: 'https://news-platform.com',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ];
  }
}
