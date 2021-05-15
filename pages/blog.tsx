import Head from "next/head";
import Link from "next/link";
import { Paragraph, Subtitle, Title } from "../components/CustomElements";
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
          Welcome to my blog. I will try to post as high quality content as
          possible. Thanks for reading.
        </Paragraph>
      </section>
      <section>
        <Subtitle>Recent Posts</Subtitle>
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
