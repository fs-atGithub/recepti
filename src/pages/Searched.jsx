import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, Card } from "../components/styledComponents/styledSearched";
const Searched = () => {
  const [query, setQuery] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&numer=20&query=${name}`
    );
    const recipes = await data.json();
    setQuery(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {query.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Searched;
