import Head from "next/head";
import { Paragraph } from "../components/CustomElements";
import HomeLayout from "../components/HomeLayout";
import { POSTS } from "../posts/posts";

export default function Home({ allPostsData }) {
  return (
    <HomeLayout>
      <Head>
        <title>Sajit Khadka | Personal Blog ~ Home</title>
        <meta
          name="description"
          content="Hi, I am Sajit. This is my personal blog where I share my ideas and experience."
        />
      </Head>
      <section>
        <Paragraph>
          Hi, I'm Sajit Khadka, a software engineer. This is where I shall share
          my thoughts.
        </Paragraph>
        <Paragraph>
          I am currently working as a full time software developer. In this blog
          I will try to share my personal ideas and experience. Thanks for
          reading.
        </Paragraph>
      </section>
    </HomeLayout>
  );
}

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  return {
    props: { posts: POSTS },
  };
}
