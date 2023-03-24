import GlobalStyle from "../styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
        <Navigation />
      </SWRConfig>
    </>
  );
}
