import React from "react";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { Logo, Nav } from "./components/styledComponents/styledApp";

const App = () => {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>online recepti</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
};

export default App;
