import Heading from "../components/Heading";
import ButtonUrl from "../components/ButtonUrl/inde";
import ButtonRandomRecipes from "../components/ButtonRandomRecipes";

import RecipeListRandom from "../components/RecipeList";

export default function Home() {
  return (
    <main>
      <Heading>🔱Picky Eaters🔱</Heading>
      <ButtonUrl />
      <ButtonRandomRecipes />
    </main>
  );
}
