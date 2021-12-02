import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  max-width: 300px;
  max-height: 180px;
`;
const Title = styled.h2`
  margin: 10px 0 40px 0;
`;
const ArticleItem: React.FC = () => {
  return (
    <Wrapper>
      <Image src="preview.png" />
      <Title>Title</Title>
    </Wrapper>
  );
};

export default ArticleItem;
