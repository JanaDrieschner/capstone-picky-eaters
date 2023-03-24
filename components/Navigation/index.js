import Link from "next/link";

export default function Navigation({ children }) {
  return (
    <section>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/favorites">Favorite Recipes</Link>
        </li>
      </ul>
    </section>
  );
}

/*togglelogik
svgs*/
