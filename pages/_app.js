import DarkThemeProvider from "../context/themeContext";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import Script from "next/script";
import SEO from "../components/Common/SEO";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useTheme } from "next-themes";

export default function App({ Component, pageProps }) {
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <SEO
        title="Game Programming Portfolio"
        description="Game programming portfolio of Léo Séry, showcasing projects in Unity3D, Unreal Engine, and game engine development."
        keywords="Game Programming, Game Development, Unity3D, Unreal Engine, Portfolio, Léo Séry"
      >
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#121212" />
        <meta property="theme-color" content="#ff9f1c" />
        <meta property="og:theme-color" content="#ff9f1c" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Léo Séry Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Léo Séry Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
      </SEO>
      <DarkThemeProvider>
        <ThemeProvider enableSystem={false} defaultTheme="dark" forcedTheme="dark" attribute="class">
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-[#121212]">
            <Navbar />
            <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <Component {...pageProps} />
          </main>
            <Footer />
          </div>
        </ThemeProvider>
      </DarkThemeProvider>

      <Analytics />
      <SpeedInsights />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
