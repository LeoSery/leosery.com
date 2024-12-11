import Main from "../components/Contact/Main";
import Head from "next/head";
import React from "react";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Leo Séry - contact</title>
        <meta name="Leo Séry - Portfolio" content="contact"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Main />
      </div>
    </>
  );
}
