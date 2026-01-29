import { db } from "./lib/firebaseAdmin.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const app = express();
app.use(cors());
app.use(express.json());



function normalizeRegion(region) {
  const map = {
    us: "US",
    usa: "US",
    india: "India",
    eu: "Europe",
    europe: "Europe",
    uk: "Europe",
    global: "Global"
  };

  return map[region.toLowerCase()] || "Global";
}
/* health check */
app.get("/", (req, res) => {
  res.json({ message: "News Platform Backend is running", status: "OK" });
});

// Deduplication helper
function deduplicateArticles(docs, limit = 20) {
  const seen = new Set();
  const articles = [];

  docs.forEach(doc => {
    const data = doc.data();

    // Normalize title
    let title = (data.title || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/\n/g, " ")
      .trim();

    const dashIndex = title.lastIndexOf(" - ");
    if (dashIndex !== -1) {
      title = title.substring(0, dashIndex).trim();
    }

    // Create dedupe key (title OR URL)
    const dedupeKey = title || data.sourceUrl;

    if (!seen.has(dedupeKey)) {
      seen.add(dedupeKey);
      articles.push(data);
    }
  });

  return articles.slice(0, limit);
}

/* 1️⃣ HOME PAGE — All Latest News */
app.get("/api/news/latest", async (req, res) => {
  try {
    const snapshot = await db
      .collection("news")
      .orderBy("publishedAt", "desc")
      .limit(100)
      .get();

    const articles = deduplicateArticles(snapshot.docs, 30);

    res.json({
      count: articles.length,
      updatedAt: new Date().toISOString(),
      articles: articles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch latest news" });
  }
});

/* 2️⃣ GLOBAL CATEGORY PAGE — One Category, All Regions */
app.get("/api/news/category/:category", async (req, res) => {
  const { category } = req.params;

  try {
    const categoryValue = category.charAt(0).toUpperCase() + category.slice(1);

    const snapshot = await db
      .collection("news")
      .where("category", "==", categoryValue)
      .orderBy("publishedAt", "desc")
      .limit(80)
      .get();

    const articles = deduplicateArticles(snapshot.docs, 30);

    res.json({
      category: categoryValue,
      count: articles.length,
      updatedAt: new Date().toISOString(),
      articles: articles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch category news" });
  }
});

/* 3️⃣ REGION PAGE — All Categories for One Region */
app.get("/api/news/region/:region", async (req, res) => {
  const { region } = req.params;

  try {
    const regionValue = normalizeRegion(region);

    const snapshot = await db
      .collection("news")
      .where("region", "==", regionValue)
      .orderBy("publishedAt", "desc")
      .limit(100)
      .get();

    const articles = deduplicateArticles(snapshot.docs, 30);

    res.json({
      region: regionValue,
      count: articles.length,
      updatedAt: new Date().toISOString(),
      articles: articles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch region news" });
  }
});

/* 4️⃣ REGION + CATEGORY PAGE — Specific Filter */
app.get("/api/news/region/:region/:category", async (req, res) => {
  const { region, category } = req.params;

  try {
    const regionValue = normalizeRegion(region);
    const categoryValue =
      category.charAt(0).toUpperCase() + category.slice(1);

    const snapshot = await db
      .collection("news")
      .where("region", "==", regionValue)
      .where("category", "==", categoryValue)
      .orderBy("publishedAt", "desc")
      .limit(80)
      .get();

    const articles = deduplicateArticles(snapshot.docs, 20);

    res.json({
      region: regionValue,
      category: categoryValue,
      count: articles.length,
      updatedAt: new Date().toISOString(),
      articles: articles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

/* 5️⃣ CATEGORY DETECTION — Global Categories */
app.get("/api/news/categories", async (req, res) => {
  try {
    const snapshot = await db
      .collection("news")
      .select("category")
      .get();

    const categories = new Set();
    snapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.category) {
        categories.add(data.category);
      }
    });

    const sortedCategories = Array.from(categories).sort();

    res.json({
      categories: sortedCategories,
      count: sortedCategories.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

/* CATEGORY DETECTION — Region-Specific Categories */
app.get("/api/news/categories/:region", async (req, res) => {
  const { region } = req.params;

  try {
    const regionValue = normalizeRegion(region);

    const snapshot = await db
      .collection("news")
      .where("region", "==", regionValue)
      .select("category")
      .get();

    const categories = new Set();
    snapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.category) {
        categories.add(data.category);
      }
    });

    const sortedCategories = Array.from(categories).sort();

    res.json({
      region: regionValue,
      categories: sortedCategories,
      count: sortedCategories.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch region categories" });
  }
});

/* 🔥 SEO SITEMAP GENERATOR */
app.get("/api/sitemap", async (req, res) => {
  try {
    // Get all global categories
    const categoriesSnapshot = await db
      .collection("news")
      .select("category")
      .get();

    const categories = new Set();
    categoriesSnapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.category) {
        categories.add(data.category);
      }
    });

    // Get all regions
    const regionsSnapshot = await db
      .collection("news")
      .select("region")
      .get();

    const regions = new Set();
    regionsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.region) {
        regions.add(data.region);
      }
    });

    // Build sitemap data
    const sitemapData = {
      home: "/",
      categories: Array.from(categories).map(cat => ({
        name: cat,
        url: `/category/${cat.toLowerCase()}`,
      })),
      regions: Array.from(regions).map(region => ({
        name: region,
        url: `/news/${region.toLowerCase()}`,
      })),
      regionCategories: [],
    };

    // Add region-category combinations
    for (const region of regions) {
      const regionSnapshot = await db
        .collection("news")
        .where("region", "==", region)
        .select("category")
        .get();

      const regionCategories = new Set();
      regionSnapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data.category) {
          regionCategories.add(data.category);
        }
      });

      for (const category of regionCategories) {
        sitemapData.regionCategories.push({
          region: region,
          category: category,
          url: `/news/${region.toLowerCase()}/${category.toLowerCase()}`,
        });
      }
    }

    res.json(sitemapData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate sitemap data" });
  }
});
/* 🔥 END API BLOCK */

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});


