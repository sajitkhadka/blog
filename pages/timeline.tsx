import Head from "next/head";
import { Paragraph } from "../components/CustomElements";
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
        <Paragraph>
          I have been realizing that our memory is very limited and there are so
          many things out there that you are expected to Learn and remember. I
          am afraid I can't do that. Instead I shall spill the things that I
          learn into this blog.
        </Paragraph>
        <Paragraph>
          To the experienced developers out there, this blog might not provide
          any values as I will most likely post the things that I learn on a
          daily basis. But still, I would love to hear critics, reviews,
          suggestions, comments and concerns. I am very excited to start this
          blogging journey. I hope you will enjoy your time here and thank you.
        </Paragraph>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
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
