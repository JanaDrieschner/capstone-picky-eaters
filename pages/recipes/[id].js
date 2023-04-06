import React from "react";
import { useRouter } from "next/router";
import RandomDetailPage from "../../components/RandomDetailPage";
import useSWR from "swr";

export default function RandomDetails({ recipe }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `/api/spoonacular/recipes/${id}/information?includeNutrition=false`
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
