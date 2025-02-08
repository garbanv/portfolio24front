// components/Seo.tsx
import { useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

interface OpenGraphImage {
  url: string;
  alt: string;
}

interface OpenGraph {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  images: OpenGraphImage[];
}

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  openGraph?: OpenGraph | null; // Allow other meta tags
  children?: React.ReactNode;
}

const defaultMeta: MetaProps = {
  title: 'Default Title',
  description: 'Default Description',
  keywords: 'default, keywords',
  openGraph: {
    title: 'Default Open Graph Title',
    description: 'Default Open Graph Description',
    url: '',
    type: 'website',
    images: [],
  },
};

const Seo: React.FC<MetaProps> = ({ title, description, keywords, openGraph, children, ...rest }) => {
  const router = useRouter();

  const meta = useMemo(() => {
    return {
      ...defaultMeta,
      title: title || defaultMeta.title,
      description: description || defaultMeta.description,
      keywords: keywords || defaultMeta.keywords,
      openGraph: {
        ...defaultMeta.openGraph,
        ...openGraph,
        title: openGraph?.title || title || defaultMeta?.openGraph?.title,
        description: openGraph?.description || description || defaultMeta?.openGraph?.description,
        url: typeof window !== 'undefined' ? window.location.href : (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : ''),
      },
      ...rest,
    };
  }, [title, description, keywords, openGraph]);

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={meta.openGraph?.title} />
      <meta property="og:description" content={meta.openGraph?.description} />
      <meta property="og:url" content={meta.openGraph?.url} />
      <meta property="og:type" content={meta.openGraph?.type} />
      {meta.openGraph?.images?.map((image, index) => (
        <meta property="og:image" content={image.url} key={index} />
      ))}

      {/* Canonical Link */}
      <link rel="canonical" href={meta.openGraph?.url} />

      {/* Viewport Meta Tag */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Other Meta Tags */}
      {children} {/* To add other head elements if needed */}
    </Head>
  );
};

export default Seo;