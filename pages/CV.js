import PDFviewer from "../components/PDF/PDFviewer";
import Head from "next/head";
import React from "react";

export default function CV() {
  return (
    <>
      <Head>
        <title>Leo Séry - CV</title>
        <meta name="description" content="Curriculum Vitae of Leo Séry - Game Programming Student" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1 w-full dark:bg-[#121212] min-h-screen">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4">
          <div className="mb-4">
            <h1 className="text-[#ff9f1c] text-xl sm:text-2xl font-bold tracking-wide">
              CURRICULUM VITAE
            </h1>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">
              My professional experience and education history
            </p>
          </div>
          <PDFviewer />
        </div>
      </div>
    </>
  );
}