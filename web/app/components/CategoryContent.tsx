'use client';

import { useEffect, useState } from 'react';
import { fetchCategoryNews, Article } from '@/lib/api';
import ArticleCard from '@/app/components/ArticleCard';

export default function CategoryContent({ params }: { params: { category: string } }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = decodeURIComponent(params.category);
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const data = await fetchCategoryNews(category);
        setArticles(data.articles);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load news');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [category]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
          {formattedCategory} News
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Global news in {formattedCategory} • All regions • Latest first
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
          <p className="text-gray-600 dark:text-gray-400">
            No {formattedCategory.toLowerCase()} news available
          </p>
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
  );
}
