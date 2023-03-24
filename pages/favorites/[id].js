import { useRouter } from "next/router";
import Favorites from "../../components/Favorites";

export default function Favoriterecipes() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Favorites />
    </>
  );
}
