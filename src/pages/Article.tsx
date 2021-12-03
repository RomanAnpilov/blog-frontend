import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import { Header, Footer } from "../components";

const Wrapper = styled.div`
  text-align: center;
  width: 850px;
  margin: 0 auto;

  p,
  h1,
  h2,
  h3 {
    margin: 30px 0;
  }
`;

const Image = styled.img`
  width: 850px;
`;

const Title = styled.h1`
  font-size: 54px;
  margin-top: 20px;
`;
const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 20px 0;
`;

const Content = styled.div`
text-align: left;
  p { font-size: 20px;}
`;

const markdown = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. 

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus. 

# Next on the pipeline
  `;

const Article: React.FC = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Title>
          A few words about this blog platform, Ghost, and how this site was
          made
        </Title>
        <Description>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </Description>
        <Image src="preview.png" />

        <Content>
          <ReactMarkdown children={markdown} />
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Article;
