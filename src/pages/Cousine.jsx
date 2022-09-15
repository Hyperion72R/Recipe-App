import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { montion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cousine() {
  const [cousine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cousine=${name}`
    );

    const recipes = await data.json();
    setCuisine(recipes.results);
    console.log(recipes);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params);
    console.log(params.type);
  }, [params.type]);

  return <div></div>;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-grap: 3rem;
`;

const Card = styled.div`
  img{
    width: 100%
    border-raduis: 2rem;
  }
`;

export default Cousine;
