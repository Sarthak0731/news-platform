import RegionContent from '@/app/components/RegionContent';

const REGION_MAP: Record<string, string> = {
  'us': 'US',
  'usa': 'US',
  'india': 'India',
  'europe': 'Europe',
  'eu': 'Europe',
  'uk': 'Europe',
  'global': 'Global',
};

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const regionSlug = decodeURIComponent(region);
  const displayRegion = REGION_MAP[regionSlug.toLowerCase()] || regionSlug;

  return {
    title: `${displayRegion} News - Breaking News & Updates | News Platform`,
    description: `Latest news from ${displayRegion}. Get real-time updates on Politics, Economy, Business, and more in ${displayRegion}. Coverage across all major categories.`,
    keywords: [`${displayRegion} news`, `${displayRegion} breaking news`, `${displayRegion} latest`, `news from ${displayRegion}`],
    openGraph: {
      title: `${displayRegion} News - Breaking News & Updates`,
      description: `Latest news from ${displayRegion}`,
      url: `https://news-platform.com/news/${regionSlug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${displayRegion} News - Breaking News & Updates`,
      description: `Latest news from ${displayRegion}`,
    },
    alternates: {
      canonical: `https://news-platform.com/news/${regionSlug}`,
    },
  };
}

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
  const resolvedParams = await params;
  return <RegionContent params={resolvedParams} />;
}
