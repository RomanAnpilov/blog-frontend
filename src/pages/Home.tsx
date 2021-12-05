import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Header, LastArticle, ArticleItem, Footer } from "../components";
import { fetchArticles } from "../redux/actions/article";

const AllH1 = styled.h1`
  text-align: center;
  margin: 30px 0;
`;

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
  const dispatch = useDispatch();
  const articles = useSelector((data: any) => data?.articles.data);

  React.useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <>
      <Header />
      {articles !== undefined && articles ? (
        <NavLink to={`/articles/${articles[0]._id}`}>
          <LastArticle
            title={articles[0].title}
            img={articles[0].img}
            description={articles[0].description}
          />
        </NavLink>
      ) : (
        " "
      )}
      <AllH1>All Articles</AllH1>
      <Content>
        {articles !== undefined && articles
          ? articles
              .slice(1)
              .map(
                (
                  article: { title: string; img: string; _id: string },
                  index: number
                ) => (
                  <ArticleItem
                    key={index}
                    title={article.title}
                    img={article.img}
                    id={article._id}
                  />
                )
              )
          : " "}
      </Content>
      <Footer></Footer>
    </>
  );
};
export default Home;
