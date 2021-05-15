import { useEffect, useState } from "react";
import { POSTS } from "../posts/posts";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export const getBlogPost = function (title: string) {
  let error = "";
  let fileContents = "";
  const post = POSTS.find((p) => (p.slug = title));
  if (post) {
    // const fileName = post.fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, post.fileName + ".md");
    console.log(fullPath);
    fileContents = fs.readFileSync(fullPath, "utf8");
    console.log(fileContents);
  }

  return {
    error,
    post,
    fileContents,
  };
};
