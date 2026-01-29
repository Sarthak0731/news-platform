const API_BASE = "http://localhost:4000";

export interface Article {
  uid: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  region: string;
  category: string;
  publishedAt: string;
}

export interface NewsResponse {
  count: number;
  updatedAt: string;
  articles: Article[];
  region?: string;
  category?: string;
}

export interface CategoriesResponse {
  categories: string[];
  count: number;
  region?: string;
}

// 1️⃣ HOME PAGE — All Latest News
export async function fetchLatestNews() {
  const res = await fetch(
    `${API_BASE}/api/news/latest`,
    {
      next: { revalidate: 300 }, // ⏱️ 5 minutes
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch latest news");
  }

  return res.json() as Promise<NewsResponse>;
}

// 2️⃣ GLOBAL CATEGORY PAGE — One Category, All Regions
export async function fetchCategoryNews(category: string) {
  const res = await fetch(
    `${API_BASE}/api/news/category/${category}`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${category} news`);
  }

  return res.json() as Promise<NewsResponse>;
}

// 3️⃣ REGION PAGE — All Categories for One Region
export async function fetchRegionNews(region: string) {
  const res = await fetch(
    `${API_BASE}/api/news/region/${region}`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${region} news`);
  }

  return res.json() as Promise<NewsResponse>;
}

// 4️⃣ REGION + CATEGORY PAGE — Specific Filter
export async function fetchNews(region: string, category: string) {
  const res = await fetch(
    `${API_BASE}/api/news/region/${region}/${category}`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  return res.json() as Promise<NewsResponse>;
}

// 5️⃣ CATEGORY DETECTION — Global Categories
export async function fetchGlobalCategories() {
  const res = await fetch(
    `${API_BASE}/api/news/categories`,
    {
      next: { revalidate: 600 }, // ⏱️ 10 minutes
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json() as Promise<CategoriesResponse>;
}

// CATEGORY DETECTION — Region-Specific Categories
export async function fetchRegionCategories(region: string) {
  const res = await fetch(
    `${API_BASE}/api/news/categories/${region}`,
    {
      next: { revalidate: 600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${region} categories`);
  }

  return res.json() as Promise<CategoriesResponse>;
}