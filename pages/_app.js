import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
