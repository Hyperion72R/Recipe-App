import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import React from "react";

function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState({});

  const FetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const detailData = await data.json();

    setDetails(detailData);
  };

  useEffect(() => {
    FetchDetails();
  }, [params.name]);

  return <div>{details.title}</div>;
}

export default Recipe;
