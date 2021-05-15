import React from "react";
import styled, { css } from "styled-components";
import { Divider } from "./CustomElements";
import { useRouter } from "next/router";
import Link from "next/link";
import { el } from "date-fns/locale";

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// const NavElement = styled.div`

// `;

const StyledLink = styled.a`
  text-decoration: none;
  margin: 0.25em 1.5em 0.25em 0rem;
  padding: 0 0.3rem 0em 0.3rem;
  border-radius: 0.2rem;
  height: fit-content;
  font-family: Catamaran;
  :hover {
    cursor: pointer;
    text-decoration: none;
  }
  font-size: 0.8rem;
  color: #111;
  ${({ primary }) =>
    primary &&
    css`
      color: palevioletred;
    `};
`;

const navelements = [
  { path: "/", label: "Home" },
  { path: "/blog", label: "Blog" },
  { path: "/learners-blog", label: "Learner's Blog" },
  // { path: "/timeline", label: "Timeline" },
  { path: "/about", label: "About" },
];
export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <NavContainer>
        {navelements.map((_el) => (
          // <NavElement >
          <Link href={_el.path} passHref key={_el.label}>
            <StyledLink primary={router.pathname === _el.path}>
              {_el.label}
            </StyledLink>
          </Link>
          // </NavElement>
        ))}
      </NavContainer>
      <Divider />
    </>
  );
}
