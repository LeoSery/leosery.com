import Main from "../components/Projects/Main";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leo Séry - Projects</title>
        <meta
          name="Leo Séry - Portfolio"
          content="Blog, CV and Portfolio"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}
