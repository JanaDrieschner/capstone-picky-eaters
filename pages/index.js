import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Link from "next/link";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import OwnRecipeDetails from "../components/OwnDetailPage";

import LinksHomepage from "../components/LinksHomepage";

export default function Home() {
  return (
    <>
      <Heading>Picky Eaters</Heading>
      <main>
        <LinksHomepage />
      </main>
    </>
  );
}
