'use client';

import { useEffect, useState } from 'react';
import { fetchNews, fetchRegionCategories, Article } from '@/lib/api';
import ArticleCard from '@/app/components/ArticleCard';
import Link from 'next/link';

export const REGION_DISPLAY_MAP: Record<string, string> = {
  'us': 'US',
  'usa': 'US',
  'india': 'India',
  'europe': 'Europe',
  'eu': 'Europe',
  'uk': 'Europe',
  'global': 'Global',
};

export default function RegionCategoryContent({
  params,
}: {
  params: { region: string; category: string };
}) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const regionSlug = decodeURIComponent(params.region);
  const categorySlug = decodeURIComponent(params.category);
  const displayRegion = REGION_DISPLAY_MAP[regionSlug.toLowerCase()] || regionSlug;
  const displayCategory = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [newsData, categoriesData] = await Promise.all([
          fetchNews(regionSlug, categorySlug),
          fetchRegionCategories(regionSlug),
        ]);
        setArticles(newsData.articles);
        setCategories(categoriesData.categories);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load news');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [regionSlug, categorySlug]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 sticky top-20">
          <h3 className="font-bold text-black dark:text-white mb-4">
            Categories in {displayRegion}
          </h3>
          <div className="flex flex-col gap-2">
            {categories.length === 0 ? (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                No categories available
              </p>
            ) : (
              categories.map((category) => (
                <Link
                  key={category}
                  href={`/news/${regionSlug}/${category.toLowerCase()}`}
                  className={`text-sm px-2 py-1 rounded transition ${
                    category.toLowerCase() === categorySlug.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900'
                  }`}
                >
                  {category}
                </Link>
              ))
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:col-span-3">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
            {displayCategory} in {displayRegion}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {displayCategory} news from {displayRegion} • Latest first
          </p>
        </div>

        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-800 dark:text-red-200 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading news...</p>
          </div>
        )}

        {!loading && articles.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No {displayCategory.toLowerCase()} news available for {displayRegion}
            </p>
            <Link
              href={`/news/${regionSlug}`}
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to {displayRegion} news
            </Link>
          </div>
        )}

        {!loading && articles.length > 0 && (
          <div className="grid gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.uid} article={article} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
