import RegionCategoryContent from '@/app/components/RegionCategoryContent';

const REGION_MAP: Record<string, string> = {
  'us': 'US',
  'usa': 'US',
  'india': 'India',
  'europe': 'Europe',
  'eu': 'Europe',
  'uk': 'Europe',
  'global': 'Global',
};

export async function generateMetadata({ params }: { params: Promise<{ region: string; category: string }> }) {
  const { region, category } = await params;
  const regionSlug = decodeURIComponent(region);
  const categorySlug = decodeURIComponent(category);
  const displayRegion = REGION_MAP[regionSlug.toLowerCase()] || regionSlug;
  const displayCategory = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  return {
    title: `${displayCategory} News in ${displayRegion} | News Platform`,
    description: `Latest ${displayCategory} news from ${displayRegion}. Get real-time updates and breaking news about ${displayCategory} developments in ${displayRegion}.`,
    keywords: [`${displayCategory}`, `${displayRegion}`, `${displayCategory} news ${displayRegion}`, `${displayRegion} ${displayCategory}`, `latest ${displayCategory} in ${displayRegion}`],
    openGraph: {
      title: `${displayCategory} News in ${displayRegion}`,
      description: `Latest ${displayCategory} news from ${displayRegion}`,
      url: `https://news-platform.com/news/${regionSlug}/${categorySlug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${displayCategory} News in ${displayRegion}`,
      description: `Latest ${displayCategory} news from ${displayRegion}`,
    },
    alternates: {
      canonical: `https://news-platform.com/news/${regionSlug}/${categorySlug}`,
    },
  };
}

export default async function RegionCategoryPage({
  params,
}: {
  params: Promise<{ region: string; category: string }>;
}) {
  const resolvedParams = await params;
  return <RegionCategoryContent params={resolvedParams} />;
}