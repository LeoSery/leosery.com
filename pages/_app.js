import DarkThemeProvider from "../context/themeContext";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <DarkThemeProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </DarkThemeProvider>
  );
}
