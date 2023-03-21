import React from "react";
import styled from "styled-components";
import RecipeListRandom from "../RecipeList";
import Link from "next/link";
import Recipes from "../../pages/recipes";

export default function ButtonRandomRecipes() {
  return (
    <>
      <Link href="/recipes/"> Inspire Me </Link>
    </>
  );
}
