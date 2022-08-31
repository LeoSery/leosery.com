import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Post({ post }) {
  return (
    <>
      <div className="card cursor-pointer">
        <Link href={`/Blog/${post.frontmatter.slug}`}>
          <div className="p-3 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 max-w-[400px] border-solid border border-[#C8CCCE]">
            <div className="grid grid-cols-1 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3 className="cursor-default">{post.frontmatter.title}</h3>
                <h3 className="cursor-default italic text-gray-500">
                  {post.frontmatter.subtitle}
                </h3>
              </div>
              <div className="m-auto">
                <Image
                  className="rounded-md"
                  src={post.frontmatter.cover_image}
                  width="350px"
                  height="200px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-start">
                <p className="italic cursor-default">
                  Posté le :{" "}
                  {new Date(post.frontmatter.date).toLocaleDateString("en-GB")}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
