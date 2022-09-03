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
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params);
    console.log(params.type);
  }, [params.type]);

  return <div></div>;
}

export default Cousine;
