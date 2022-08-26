import fs from "fs";
import path from "path";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import { marked } from "marked";
import matter from "gray-matter";

export default function PostPage({
  frontmatter: { title, subtitle, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>
          Leo Séry - Blog - {title} - {subtitle}
        </title>
        <meta name="Leo Séry - Portfolio" content="Blog"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <div className="ArticlePage">
          <div className="PostHead">
            <div className="w-full lg:h-15 p-2 pb-10">
              <div className="max-w-[1240px] mx-auto">
                <Link href="/Blog">
                  <button className="px-6 mt-4 cursor-pointer bg-blue-600 text-white hover:shadow-lg hover:shadow-[#312f2f] hover:scale-105 hover:bg-[#ff9f1c] rounded-md text-sm font-medium capitalize">
                    <p>Retour</p>
                  </button>
                </Link>
                <h2 className="py-4 text-gray-700 text-center">{title}</h2>
                <h3 className="py-4 text-gray-700 text-center">
                  - {subtitle} -
                </h3>
                <p className="py-4 text-gray-600 m-auto cursor-auto text-center italic">
                  Publié le : {new Date(date).toLocaleDateString("en-GB")}
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-2xl rounded-lg max-w-[1000px] mx-auto bg-white border-solid border-2 border-gray-700">
            <span
              className="PostBody"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("public/assets/BlogPosts/Markdown"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const MarkdownWithMeta = fs.readFileSync(
    path.join("public/assets/BlogPosts/Markdown", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(MarkdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
