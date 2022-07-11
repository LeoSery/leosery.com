import MainSkills from "../components/Home/MainSkills";
import About from "../components/Home/About";
import Main from "../components/Home/Main";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leo Séry - Home</title>
        <meta
          name="Leo Séry - Portfolio"
          content="Blog, CV and Portfolio"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Navbar />
        <Main />
        <About />
        <MainSkills />
        <Footer />
      </div>
    </>
  );
}
