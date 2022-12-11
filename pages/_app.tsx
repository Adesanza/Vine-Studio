import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
// import store from "../state/store";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment, useEffect, useState } from "react";

import Head from "next/head";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Fragment>
      {/* <ReduxProvider store={store}> */}
      <ToastContainer />

      <>
        {!loading ? (
          <Fragment>
            <Head>
              <title>Vine-Studio</title>
              <meta
                name="description"
                content="content for seo for vine studio"
              />
              {/* <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
              ></meta> */}
              {/* <meta name="HandheldFriendly" content="true" /> */}
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <NextNProgress
              color="#340F33"
              startPosition={0.3}
              stopDelayMs={200}
              height={4}
              showOnShallow={true}
              options={{ showSpinner: false }}
            />
          </Fragment>
        ) : (
          <LoadingScreen />
        )}
      </>

      {/* <Component {...pageProps} /> */}
      {/* </ReduxProvider> */}
    </Fragment>
  );
}

export default MyApp;
