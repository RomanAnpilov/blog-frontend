import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 850px;
  text-align: center;
  margin: 0 auto;
  border-bottom: 4px solid #000;
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

const LastArticle: React.FC = () => {
  return (
    <Wrapper>
      <Image src="preview.png" />
      <Title>
        A few words about this blog platform, Ghost, and how this site was made
      </Title>
      <Description>
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </Description>
    </Wrapper>
  );
};

export default LastArticle;
