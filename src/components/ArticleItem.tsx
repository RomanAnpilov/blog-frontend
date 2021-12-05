import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  title: string;
  img: string;
  id: string;
}

const Wrapper = styled.div`
  width: 300px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Image = styled.img`
  max-width: 300px;
  max-height: 180px;
`;
const Title = styled.h2`
  margin: 10px 0 40px 0;
`;
const ArticleItem: React.FC<Props> = ({ title, img, id }) => {
  return (
    <Wrapper>
      <NavLink to={`/articles/${id}`}>
        <Image src={img} />
        <Title>{title}</Title>
      </NavLink>
    </Wrapper>
  );
};

export default ArticleItem;
