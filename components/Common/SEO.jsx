import Head from 'next/head';

const SEO = ({ 
  title,
  description,
  keywords,
  ogImage = '/assets/images/Common/DefaultMediaImage.png',
  ogType = 'website',
  children 
}) => {
  const fullTitle = title ? `Léo Séry - ${title}` : 'Léo Séry - Game Programming Portfolio';
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.leosery.com';
  
  return (
    <Head>
      {/* Tags de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content="Léo Séry Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={baseUrl} />

      {children}
    </Head>
  );
};

export default SEO;