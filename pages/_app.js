import DarkThemeProvider from "../context/themeContext";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
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
