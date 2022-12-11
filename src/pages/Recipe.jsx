import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import React from "react";

function Recipe() {
  let params = useParams();

  return <div>{params.name}</div>;
}

export default Recipe;
