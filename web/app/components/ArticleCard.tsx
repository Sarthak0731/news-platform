'use client';

import { Article } from '@/lib/api';

const REGION_FLAGS: Record<string, string> = {
  'US': '🇺🇸',
  'India': '🇮🇳',
  'Europe': '🇪🇺',
  'Global': '🌍',
};

export default function ArticleCard({ article }: { article: Article }) {
  const regionFlag = REGION_FLAGS[article.region] || '🌐';

  return (
    <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-lg transition-shadow dark:bg-gray-900">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
              {article.category}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {regionFlag} {article.region}
            </span>
          </div>
          <h2 className="text-lg font-bold text-black dark:text-white mb-2 hover:text-blue-600">
            <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            {article.summary}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>📰 {article.source}</span>
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
