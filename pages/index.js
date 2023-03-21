import Heading from "../components/Heading";
import ButtonUrl from "../components/ButtonUrl/inde";
import ButtonRandomRecipes from "../components/ButtonRandomRecipes";
import { useRouter } from "next/router";
import { useEffect } from "react";

import RecipeList from "../components/RecipeList";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/recipes");
  }, []);

  return (
    <main>
      <Heading>🔱Picky Eaters🔱</Heading>
      <ButtonUrl />
      <ButtonRandomRecipes />
    </main>
  );
}
