import Head from "next/head";
import Link from "next/link";
import useTypeWriter from "../hooks/useTextWriter";
import { Container, Header, Title } from "./CustomElements";
import NavBar from "./NavBar";

const name = "Sajit Khadka";
export const siteTitle = "Sajit Khadka";
const iam = ["Software Engineer", "Learner", "Tech Enthusiast"];

export default function Layout({ children, home }) {
  const changingText = useTypeWriter();
  // console.log(abc);
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hey I am Sajit. This is my personal blog where I will share my personal programming ideas and experie"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        <Title>{name}</Title>

        <span
          style={{ borderRight: "0.08em solid #111", paddingRight: "0.08em" }}
        >
          {/* <Subtitle> */}
          {"> "}
          {changingText}
          {/* </Subtitle> */}
        </span>
      </Header>
      <NavBar />
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Container>
  );
}
