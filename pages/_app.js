import DarkThemeProvider from "../context/themeContext";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import Script from "next/script";
import SEO from "../components/Common/SEO";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="Game Programming Portfolio"
        description="Game programming portfolio of Leo Séry, showcasing projects in Unity3D, Unreal Engine, and game engine development."
        keywords="Game Programming, Game Development, Unity3D, Unreal Engine, Portfolio, Leo Séry"
      >
        {/* Métadonnées globales additionnelles */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff9f1c" />
        <meta name="author" content="Leo Séry" />

        {/* Favicon et icônes */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        
        {/* PWA tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Leo Séry Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Leo Séry Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
      </SEO>
      <DarkThemeProvider>
        <ThemeProvider enableSystem={true} attribute="class">
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-[#121212]">
            <Navbar />
            <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <Component {...pageProps} />
          </main>
            <Footer />
          </div>
        </ThemeProvider>
      </DarkThemeProvider>

      <Script
        id="googletagmanager"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NXQP4L74YT"
      />
      <Script id="analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NXQP4L74YT', {
          page_path: window.location.pathname,
          });
      `}
      </Script>
    </>
  );
}
