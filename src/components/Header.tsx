import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
`;

const Wrapper = styled.header`
  padding: 2em;
  border-bottom: 1px solid #cacaca;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
`;

const MenuItem = styled.li`
  &:not(:last-child) {
    padding-right: 30px;
  }
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
      color: #a54848;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/" ><Title>Airgurt Blog</Title></Link>
      <Menu>
        <MenuItem>Blog</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Links</MenuItem>
        <MenuItem>Projects</MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default Header;
