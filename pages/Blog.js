import PostComponent from "../components/Blog/Post";
import matter from "gray-matter";
import Head from "next/head";
import React from "react";
import path from "path";
import fs from "fs";
import { sortByDate } from "../utils/Blog";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Leo Séry - Blog</title>
        <meta name="Leo Séry - Portfolio" content="Blog"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <div className="posts">
          <div className="w-full lg:h-15 p-2 pb-32">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
              <p className="text-xl tracking-widest uppercase text-[#ff9f1c] text-center">
                Blog
              </p>
              <h2 className="py-4 text-gray-700 text-center">Mes articles</h2>
              <div className="grid grid-cols-4 gap-4 justify-center items-center">
                {posts.map((posts, index) => (
                  <PostComponent key={index} post={posts} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("public/assets/BlogPosts/Markdown"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const MarkdownWithMeta = fs.readFileSync(
      path.join("public/assets/BlogPosts/Markdown", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(MarkdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
