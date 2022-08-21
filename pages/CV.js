import PDFviewer from "../components/PDF/PDFviewer";
import Head from "next/head";

export default function CV() {
  return (
    <>
      <Head>
        <title>Leo Séry - CV</title>
        <meta name="Leo Séry - Portfolio" content="CV"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <PDFviewer />
      </div>
    </>
  );
}
