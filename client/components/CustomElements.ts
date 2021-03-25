import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1.53rem;
`;

export const Title = styled.h2`
  font-size: 2.3rem;
  line-height: 0.2;
`;

export const Subtitle = styled.h3`
  font-size: 1rem;
  line-height: 0.2;
`;

export const Header = styled.div`
  padding-top: 0;
  padding-bottom: 0.5rem;
`;

export const Container = styled.div`
  max-width: 45rem;
  padding: 0 1rem;
  margin: 2rem auto 6rem;
  @media (max-width: 1080px) {
    max-width: 40rem;
  }
  @media (max-width: 768px) {
    max-width: 30rem;
  }
`;

export const Divider = styled.div`
  position: relative;
  margin-bottom: 2rem;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(18%, palevioletred),
      color-stop(38%, #e4e4e0)
    );
    background: linear-gradient(90deg, palevioletred 18%, #e4e4e0 38%);
    -webkit-box-shadow: 0 0 0 0.1rem #e4e4e0;
    box-shadow: 0 0 0 0.01rem #f4f4f0;
    height: 1px;
    width: 100%;
    border-radius: 100px;
    max-width: 90%;
  }
`;
