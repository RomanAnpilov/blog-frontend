import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import { Header, Footer } from "../components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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

const Article: React.FC = () => {
  const params = useParams();

  const article = useSelector((data: any) => data?.articles.data.find((a: any) => a._id === params.id));


  return (
    <>
      <Header />
      <Wrapper>
        <Title>
          {article.title}
        </Title>
        <Description>
         {article.description}
        </Description>
        <Image src={`/${article.img}`} />

        <Content>
          <ReactMarkdown children={article.content} />
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Article;


