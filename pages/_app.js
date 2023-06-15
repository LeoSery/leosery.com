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
          <Navbar />
          <Component {...pageProps} />
          <Footer />
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
