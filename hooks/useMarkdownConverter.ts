import { useEffect, useState } from "react";
import { POSTS } from "../posts/posts";
import useConstructor from "./useConstructor";
import fs from "fs";
import path from "path";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

export const useMarkDownConverter = function (text) {
  const [html, setHTML] = useState("");
  useEffect(() => {
    setHTML(md.render(text));
  }, [text]);

  return html;
};
