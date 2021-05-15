import Head from "next/head";
import { Paragraph } from "../components/CustomElements";
import HomeLayout, { siteTitle } from "../components/HomeLayout";

export default function Home({ allPostsData }) {
  return (
    <HomeLayout>
      <Head>
        <title>Sajit Khadka | About</title>
        <meta name="description" content="Learn more about Sajit Khadka. " />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section>
        {/* <Paragraph>
          I am a beginner, just starting to understand how things work out in
          internet; sometimes I wonder if I know anything at all.
        </Paragraph>
        <Paragraph>
          I have been realizing that our memory is very limited and there are so
          many things out there that you are expected to Learn and remember
          which I am afraid I can't do. Instead I shall spill the things that I
          learn into this blog.
        </Paragraph>
        <Paragraph>
          To the experienced developers out there, this blog might not provide
          any values as I will most likely post the things that I learn on a
          daily basis. But still, I would love to hear critics, reviews,
          suggestions, comments and concerns. I am very excited to start this
          blogging journey. I hope you will enjoy your time here and thank you.
        </Paragraph> */}
        <Paragraph>
          As a developer I usually have a very monotonous life as I spend most
          of my time in front of a computer. I love working on computer though.
          It gives me a purpose and I can build very cool things with it.
        </Paragraph>
        <Paragraph>
          In order to refresh myself I often go to the nearest park. Sometimes I
          spend hours watching the waves of lake ontario. I love swimming,
          playing table tennis(basically any sports) and travel. I also like to
          make friends. Even though I am not very active on twitter you can
          follow me on twitter with twitter.com/sajitkhadka.
        </Paragraph>
      </section>
    </HomeLayout>
  );
}
