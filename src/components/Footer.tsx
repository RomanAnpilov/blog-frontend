import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  background: #000;
  padding: 30px 0;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
`;

const Description = styled.p``;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Title>Airgrut Blog</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Duis eu
        velit tempus erat egestas efficitur. <br />
        In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit
        finibus.{" "}
      </Description>
    </Wrapper>
  );
};

export default Footer;
