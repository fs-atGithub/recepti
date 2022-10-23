import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { List, Slink } from "./styledComponents/styledCategory";

const Category = () => {
  return (
    <List>
      <Slink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
    </List>
  );
};

export default Category;
