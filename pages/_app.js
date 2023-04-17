import GlobalStyle from "../styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import Navigation from "../components/Navigation";
import Heading from "../components/Heading";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  return (
    <>
      <Head>
        <link rel="icon" href="/dish.png" />
      </Head>
      <GlobalStyle />
      <Heading />

      <SWRConfig value={{ fetcher }}>
        <Navigation />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
