import { fetchNews, type Article } from "@/lib/api";

interface PageProps {
  params: Promise<{
    region: string;
    category: string;
  }>;
}

export default async function NewsPage({ params }: PageProps) {
  const { region, category } = await params;
  const data = await fetchNews(region, category);

return (
  <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
    <header style={{ marginBottom: "32px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        {category.toUpperCase()} News in {region.toUpperCase()}
      </h1>
      <p style={{ color: "#666" }}>
        {data.count} latest verified articles
      </p>
    </header>

    <section>
      {data.articles.map((article: Article) => (
        <article
          key={article.uid}
          style={{
            borderBottom: "1px solid #eaeaea",
            paddingBottom: "20px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{ fontSize: "18px", marginBottom: "8px" }}
            dangerouslySetInnerHTML={{ __html: article.title }}
          />

          <p style={{ fontSize: "14px", color: "#555" }}>
            <strong>{article.source}</strong> •{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>

          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "8px",
              color: "#0066cc",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Read full article →
          </a>
        </article>
      ))}
    </section>
  </main>
);
}