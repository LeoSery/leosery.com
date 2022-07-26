import MainSkills from "../components/Home/MainSkills";
import About from "../components/Home/About";
import Main from "../components/Home/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leo Séry - Home</title>
        <meta name="Leo Séry - Portfolio" content="Home"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Main />
        <About />
        <MainSkills />
      </div>
    </>
  );
}
