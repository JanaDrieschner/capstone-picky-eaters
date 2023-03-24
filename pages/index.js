import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Link from "next/link";

import LinksHomepage from "../components/LinksHomepage";

export default function Home() {
  return (
    <main>
      <Heading>🔱Picky Eaters🔱</Heading>

      <LinksHomepage />
    </main>
  );
}
