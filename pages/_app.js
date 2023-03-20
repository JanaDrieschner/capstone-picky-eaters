import GlobalStyle from "../styles";
import Head from "next/head";
import useSWR from "swr";
import RecipeListRandom from "../components/RecipeList";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <RecipeListRandom />
      <Component {...pageProps} />
    </>
  );
}
