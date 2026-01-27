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

app.get("/api/news/:region/:category", async (req, res) => {
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
      .limit(80) // fetch more to dedupe safely
      .get();

    const seen = new Set();
    const articles = [];

    snapshot.docs.forEach(doc => {
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

    const finalArticles = articles.slice(0, 20);

    res.json({
      region: regionValue,
      category: categoryValue,
      count: finalArticles.length,
      updatedAt: new Date().toISOString(),
      articles: finalArticles,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});
/* 🔥 END API BLOCK */

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});


