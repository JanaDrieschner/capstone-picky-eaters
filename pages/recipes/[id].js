import React from "react";
import { useRouter } from "next/router";
import RandomDetailPage from "../../components/RandomDetailPage";
import useSWR from "swr";

export default function RandomDetails({ recipe }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=32464ab8841f4c0cb8f3b724eb191b0f`
  );
  console.log(data);
  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <>
      <RandomDetailPage recipe={data} />
    </>
  );
}
