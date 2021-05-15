import Head from "next/head";
import { useEffect, useState } from "react";
import { H1 } from "../../components/CustomElements";
import Layout from "../../components/HomeLayout";
import { useMarkDownConverter } from "../../hooks/useMarkdownConverter";
import { getAllBlogPaths } from "../../lib/getAllBlogPaths";
import { getBlogPost } from "../../lib/getBlogPost";
import { IPost, POSTS } from "../../posts/posts";

export default function Post({
  postData,
}: {
  postData: { post: IPost; fileContents: string };
}) {
  const html = useMarkDownConverter(postData.fileContents);

  return (
    <Layout>
      <Head>
        <title>{postData.post.heading}</title>
      </Head>
      <article>
        <H1>{postData.post.heading}</H1>
        <div>{/* <Date dateString={postData.post.date} /> */}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllBlogPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getBlogPost(params.slug);
  return {
    props: {
      postData,
    },
  };
}
