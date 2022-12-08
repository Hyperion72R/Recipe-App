import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  let params = useParams;

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );

    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes);
  };

  useEffect(() => {
    getSearched(params.search);
    console.log(params);
    console.log(params.search);
  }, [params.search]);

  return (
    <div>
      {searchedRecipes.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} />
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Searched;
