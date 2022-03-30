import { useEffect, useState } from "react";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=40`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data);
  };

  return (
    <div>
      {popular.map((recipe) => (
        <div key={recipe.id}>
          <p>{recipe.title}</p>
        </div>
      ))}
    </div>
  );

  //2V -> map
  // {popular.map((recipe) => {
  //   return <p>{recipe.title}</p>;
  // })}
}

export default Popular;
