'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchGlobalCategories } from '@/lib/api';

const REGIONS = [
  { slug: 'us', label: 'US' },
  { slug: 'india', label: 'India' },
  { slug: 'europe', label: 'Europe' },
  { slug: 'global', label: 'Global' },
];

export default function Navigation() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchGlobalCategories();
        setCategories(data.categories);
      } catch (error) {
        console.error('Failed to load categories:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-bold text-xl hover:text-blue-600 whitespace-nowrap">
              📰 News Platform
            </Link>
            <Link href="/seo" className="text-sm hover:text-blue-600">
              SEO
            </Link>
          </div>
        </div>
      </nav>

      {/* Regions Navigation Bar */}
      <nav className="bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-6 overflow-x-auto">
            <span className="font-semibold text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">Regions:</span>
            {REGIONS.map((region) => (
              <Link
                key={region.slug}
                href={`/news/${region.slug}`}
                className="hover:text-blue-600 hover:underline whitespace-nowrap text-sm transition"
              >
                {region.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Categories Navigation Bar */}
      <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 sticky top-28 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-6 overflow-x-auto">
            <span className="font-semibold text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">Categories:</span>
            <Link
              href="/"
              className="hover:text-blue-600 hover:underline whitespace-nowrap text-sm transition font-medium"
            >
              All News
            </Link>
            {!loading && categories.length > 0 && (
              <>
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase()}`}
                    className="hover:text-blue-600 hover:underline whitespace-nowrap text-sm transition"
                  >
                    {category}
                  </Link>
                ))}
              </>
            )}
            {loading && (
              <div className="text-gray-500 text-sm">Loading...</div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
