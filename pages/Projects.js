import Main from "../components/Projects/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leo Séry - Projects</title>
        <meta name="Leo Séry - Portfolio" content="Projects"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Main />
      </div>
    </>
  );
}
