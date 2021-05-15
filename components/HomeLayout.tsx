import Head from "next/head";
import useTypeWriter from "../hooks/useTextWriter";
import { Container, Header, Title } from "./CustomElements";
import NavBar from "./NavBar";

const name = "Sajit Khadka";
export const siteTitle = "Sajit Khadka";
const iam = ["Software Engineer", "Learner", "Tech Enthusiast"];

export default function HomeLayout({ children }) {
  const changingText = useTypeWriter();
  // console.log(abc);
  return (
    <Container>
      <Header>
        <Title>{name}</Title>
        <html lang="en" />
        {/* <span
          style={{
            borderRight: "0.08em solid #111",
            paddingRight: "0.08em",
            fontFamily: "Catamaran",
          }}
        >
          {"> "}
          {changingText}
        </span> */}
      </Header>
      <NavBar />

      <main>{children}</main>
    </Container>
  );
}
