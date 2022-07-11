import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function CV() {
  return (
    <>
      <Head>
        <title>Leo Séry - CV</title>
        <meta
          name="Leo Séry - Portfolio"
          content="Blog, CV and Portfolio"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Navbar />
        <Footer />
      </div>
    </>
  );
}
