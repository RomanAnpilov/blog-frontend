import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  img: string;
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
const ArticleItem: React.FC<Props> = ({title, img}) => {
  return (
    <Wrapper>
      <Image src={img} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default ArticleItem;
