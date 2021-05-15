import path from "path";
import { POSTS } from "../posts/posts";

export const getAllBlogPaths = function () {
  return POSTS.map((_p) => ({
    params: {
      slug: _p.slug.replace(/\.md$/, ""),
    },
  }));
};
