'use client';

export default function SEOPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
          SEO & Sitemap
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Search Engine Optimization information and resources
        </p>
      </div>

      <div className="space-y-8">
        {/* SEO Overview */}
        <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The News Platform is fully optimized for search engines with comprehensive SEO features.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-black p-4 rounded border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-black dark:text-white mb-2">✓ Sitemap</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Dynamic XML sitemap generated from database
              </p>
            </div>
            <div className="bg-white dark:bg-black p-4 rounded border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-black dark:text-white mb-2">✓ Robots.txt</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Configured crawl rules and directives
              </p>
            </div>
            <div className="bg-white dark:bg-black p-4 rounded border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-black dark:text-white mb-2">✓ Meta Tags</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Optimized title, description, and keywords
              </p>
            </div>
            <div className="bg-white dark:bg-black p-4 rounded border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-black dark:text-white mb-2">✓ Open Graph</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Social media preview optimization
              </p>
            </div>
            <div className="bg-white dark:bg-black p-4 rounded border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-black dark:text-white mb-2">✓ Canonical URLs</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Prevent duplicate content issues
              </p>
            </div>
            <div className="bg-white dark:bg-black p-4 rounded border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-black dark:text-white mb-2">✓ Structured Data</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Schema.org markup for rich snippets
              </p>
            </div>
          </div>
        </section>

        {/* Page Structure */}
        <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Page Structure
          </h2>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-black dark:text-white">/</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Home page with latest news • Priority: 1.0 • Daily
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-black dark:text-white">/category/[category]</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Global category pages • Priority: 0.9 • Daily
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-black dark:text-white">/news/[region]</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Region pages • Priority: 0.85 • Daily
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-black dark:text-white">/news/[region]/[category]</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Region + Category pages • Priority: 0.8 • Weekly
              </p>
            </div>
          </div>
        </section>

        {/* Optimization Features */}
        <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Optimization Features
          </h2>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>✓ <strong>Responsive Design:</strong> Mobile-first, fully responsive</p>
            <p>✓ <strong>Fast Loading:</strong> Optimized performance and Core Web Vitals</p>
            <p>✓ <strong>Internal Linking:</strong> Strategic navigation and cross-links</p>
            <p>✓ <strong>URL Structure:</strong> Clean, descriptive, hierarchy-based URLs</p>
            <p>✓ <strong>Metadata:</strong> Unique titles and descriptions per page</p>
            <p>✓ <strong>Keywords:</strong> Targeted keywords for each category and region</p>
            <p>✓ <strong>Images:</strong> Optimized images with alt text</p>
            <p>✓ <strong>Accessibility:</strong> WCAG compliant, semantic HTML</p>
          </div>
        </section>

        {/* Technical SEO */}
        <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Technical SEO
          </h2>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>✓ XML Sitemap at <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">/sitemap.xml</code></p>
            <p>✓ Robots.txt at <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">/robots.txt</code></p>
            <p>✓ Dynamic robots rules based on content</p>
            <p>✓ Crawl-delay: 1 second</p>
            <p>✓ 24-hour cache revalidation for sitemap</p>
            <p>✓ Proper HTTP status codes</p>
            <p>✓ SSL/HTTPS support</p>
            <p>✓ Mobile-friendly design</p>
          </div>
        </section>

        {/* Resources */}
        <section className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Resources
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <a href="/sitemap-info" className="text-blue-600 hover:text-blue-800 underline">
                View Complete Sitemap
              </a>
            </li>
            <li>
              <a href="/sitemap.xml" className="text-blue-600 hover:text-blue-800 underline">
                XML Sitemap
              </a>
            </li>
            <li>
              <a href="/robots.txt" className="text-blue-600 hover:text-blue-800 underline">
                robots.txt
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
