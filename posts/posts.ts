enum tags {
  javascript = "Javascript",
  nextJs = "Next Js",
  react = "React",
}

export interface IPost {
  id: number;
  heading: string;
  description: string;
  slug: string;
  tags: Array<tags>;
  fileName: string;
  date: string;
}

export const POSTS: Array<IPost> = [
  {
    id: 1,
    date: "2021-05-14",
    heading:
      "How to elegantly use next.js protected an unprotected routes with firebase?",
    description:
      "Protected and Unprotected routes with next.js. This article will illustrate how to use next.js router beautifully by using the power of react hooks.",
    // slug: "how-to-use-next-js-router",
    slug: "use-protected-and-unprotected-routes-with-next-js-firebase",
    tags: [tags.javascript, tags.nextJs, tags.react],
    fileName: "protected-unprotected-routes",
  },
];
