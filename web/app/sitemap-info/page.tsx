'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface SitemapData {
  home: string;
  categories: Array<{ name: string; url: string }>;
  regions: Array<{ name: string; url: string }>;
  regionCategories: Array<{ region: string; category: string; url: string }>;
}

const API_BASE = "http://localhost:4000";

export default function SitemapPage() {
  const [sitemap, setSitemap] = useState<SitemapData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/sitemap`);
        if (res.ok) {
          const data = await res.json();
          setSitemap(data);
        }
      } catch (error) {
        console.error('Failed to fetch sitemap data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSitemap();
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
          Sitemap
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Complete site structure and navigation
        </p>
      </div>

      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading sitemap...</p>
        </div>
      )}

      {sitemap && !loading && (
        <div className="space-y-8">
          {/* Home */}
          <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Home
            </h2>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Latest News
            </Link>
          </section>

          {/* Categories */}
          <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Global Categories ({sitemap.categories.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sitemap.categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.url}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Regions */}
          <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Regions ({sitemap.regions.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sitemap.regions.map((region) => (
                <Link
                  key={region.name}
                  href={region.url}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {region.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Region + Category Combinations */}
          <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Region + Category Pages ({sitemap.regionCategories.length})
            </h2>
            <div className="space-y-4">
              {sitemap.regions.map((region) => {
                const regionPages = sitemap.regionCategories.filter(
                  (rc) => rc.region === region.name
                );
                if (regionPages.length === 0) return null;

                return (
                  <div key={region.name}>
                    <h3 className="font-semibold text-black dark:text-white mb-2">
                      {region.name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4">
                      {regionPages.map((page) => (
                        <Link
                          key={page.url}
                          href={page.url}
                          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {page.category}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SEO Info */}
          <section className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              SEO Information
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Dynamic sitemap generation</li>
              <li>✓ Robots.txt configured</li>
              <li>✓ Open Graph metadata</li>
              <li>✓ Twitter Card support</li>
              <li>✓ Canonical URLs</li>
              <li>✓ Structured navigation</li>
              <li>✓ Mobile-responsive design</li>
              <li>✓ Fast page load times</li>
            </ul>
          </section>
        </div>
      )}
    </main>
  );
}
