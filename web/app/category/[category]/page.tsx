import CategoryContent from '@/app/components/CategoryContent';

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${formattedCategory} News - Global Coverage | News Platform`,
    description: `Latest ${formattedCategory} news from around the world. Real-time updates on global ${formattedCategory} stories across US, India, Europe and more.`,
    keywords: [`${formattedCategory} news`, `global ${formattedCategory}`, `latest ${formattedCategory}`, `${formattedCategory} updates`],
    openGraph: {
      title: `${formattedCategory} News - Global Coverage`,
      description: `Latest ${formattedCategory} news from around the world`,
      url: `https://news-platform.com/category/${category}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${formattedCategory} News - Global Coverage`,
      description: `Latest ${formattedCategory} news from around the world`,
    },
    alternates: {
      canonical: `https://news-platform.com/category/${category}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  return <CategoryContent params={resolvedParams} />;
}
