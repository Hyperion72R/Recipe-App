import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/splide";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data);
  };

  return (
    <div>
      <Wrapper>
        <h3 style={{ paddingBottom: "10rem" }}>Popular Picks</h3>
        {popular.map((recipe) => {
          return (
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
            </Card>
          );
        })}
      </Wrapper>
    </div>
  );
}

{
  /*
2V -> map
{popular.map((recipe) => {
return <p>{recipe.title}</p>;
})}

2 wersja
{popular.map((recipe) => (
<Wrapper key={recipe.id}>
<p>{recipe.title}</p>
</Wrapper>
))}

*/
}

{
  /*
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <Wrapper>
            <h3 style={{ paddingBottom: "10rem" }}>Popular Picks</h3>
            {popular.map((recipe) => {
              return (
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              );
            })}
          </Wrapper>
        );
      })}
    </div>
  );
  */
}

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default Popular;
