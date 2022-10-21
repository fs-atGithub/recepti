import React from "react";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
const App = () => {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>delicious</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`;
const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
