import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Post({ post }) {
  return (
    <>
      <div className="card">
        <Link href={`/Blog/${post.frontmatter.slug}`}>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-w-[400px]">
            <div className="grid grid-cols-1 gap-1 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3 className="cursor-default">{post.frontmatter.title}</h3>
              </div>
              <div className="m-auto">
                <Image
                  className="rounded-md"
                  src={post.frontmatter.cover_image}
                  width="300px"
                  height="150px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-start">
                <p className="italic cursor-default">
                  Posté le : {post.frontmatter.date}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
