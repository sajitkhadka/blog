import Head from "next/head";
import Link from "next/link";
import { Paragraph } from "../components/CustomElements";
import Date from "../components/date";
import HomeLayout from "../components/HomeLayout";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <HomeLayout>
      <Head>
        <title>Sajit Khadka | Personal Blog ~ Home</title>
      </Head>
      <section>
        <Paragraph>
          Hi, I'm Sajit Khadka, a software engineer. This is where I shall share
          my thoughts.
        </Paragraph>
        <Paragraph>
          I am a beginner, just starting to understand how things work out in
          internet; sometimes I wonder if I know anything at all. I created this
          blog mostly for myself.
        </Paragraph>
        <section>
          <h2>Recent Posts</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </HomeLayout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
