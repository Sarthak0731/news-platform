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
  region: string;
  category: string;
  count: number;
  updatedAt: string;
  articles: Article[];
}

export async function fetchNews(region: string, category: string) {
  const res = await fetch(
    `${API_BASE}/api/news/${region}/${category}`,
    {
      next: { revalidate: 300 }, // ⏱️ 5 minutes
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  return res.json();
}