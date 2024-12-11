import MainSkills from "../components/Home/MainSkills";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import About from "../components/Home/About";
import Main from "../components/Home/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leo Séry - home</title>
        <meta name="Leo Séry - Portfolio" content="home"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Main />
        <FeaturedProjects />
        <About />
        <MainSkills />
      </div>
    </>
  );
}
