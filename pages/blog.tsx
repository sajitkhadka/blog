import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import { Paragraph, Subtitle } from "../components/CustomElements";
// import Date from "../components/date";
// import Date from "../components/date";
import HomeLayout from "../components/HomeLayout";
import { IPost, POSTS } from "../posts/posts";

export default function Home({ posts }: { posts: Array<IPost> }) {
  return (
    <HomeLayout>
      <Head>
        <title>Sajit Khadka | Personal Blog ~ Home</title>
      </Head>
      <section>
        <Paragraph>
          Welcome to my blog. I will try to post as high quality content as
          possible. Thanks for reading.
        </Paragraph>
      </section>
      <section>
        <Subtitle>All Posts</Subtitle>
        <ul>
          {posts.map(({ id, date, heading, slug }) => (
            <li key={id}>
              <Link href={`/posts/${slug}`}>
                <a>{heading}</a>
              </Link>
              <br />
              <small>{moment(date).calendar()}</small>
            </li>
          ))}
        </ul>
      </section>
    </HomeLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: POSTS,
    },
  };
}
