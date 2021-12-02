import React from "react";
import styled from "styled-components";

import { Header, LastArticle, ArticleItem, Footer } from "../components";

const AllH1 = styled.h1`
text-align: center;
margin: 30px 0;`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    margin: 0 auto;
    flex-wrap: wrap;

    h1 {
        font-size: 100px;
    }
`;

const Home = () => {
  return (
    <>
      <Header />
      <LastArticle />
      <AllH1>All Articles</AllH1>
      <Content>
            <ArticleItem></ArticleItem>
            <ArticleItem></ArticleItem>
            <ArticleItem></ArticleItem>
            <ArticleItem></ArticleItem>
      </Content>
      <Footer></Footer>
    </>
  );
};
export default Home;
