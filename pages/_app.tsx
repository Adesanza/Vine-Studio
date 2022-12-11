import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { store } from '../store/store';
import NextNProgress from "nextjs-progressbar";
// import { UserProvider } from '../contexts/user-context';
import { ReactElement, ReactNode, Suspense } from "react";
import { NextPage } from "next";
import Head from "next/head";
import LoadingScreen from "../components/LoadingScreen";
import { Toaster } from "react-hot-toast";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    // <UserProvider initialUser={pageProps?.user}>
    <Suspense fallback={<LoadingScreen />}>
      {/* <Provider store={store}> */}
      <Head>
        <title>Vine Studio</title>
        <meta name="description" content="Vine-Studio" />
      </Head>
      <NextNProgress
        color="#EA622B"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      {/* <Component {...pageProps} /> */}
      {getLayout(<Component {...pageProps} />)}
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          style: {
            // background: '#363636',
            color: "#fff",
            zIndex: 1,
          },
          duration: 5000,
          // Default options for specific types
          success: {
            duration: 3000,
            style: {
              background: "#DCF8E7",
              border: "0.8px solid #279058",
              borderRadius: "8px",
              color: "#279058",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontSize: "14px",
            },
          },
          error: {
            duration: 3000,
            style: {
              background: "#FFE4E4",
              border: "0.8px solid #B44445",
              borderRadius: "8px",
              color: "#B44445",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontSize: "14px",
            },
          },
          loading: {
            duration: 3000,
            style: {
              background: "#FAFAFA",
              border: "0.8px solid #BDBDBD",
              borderRadius: "8px",
              color: "#828282",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontSize: "14px",
            },
          },
        }}
      />
      {/* </Provider> */}
    </Suspense>
    // </UserProvider>
  );
}

export default MyApp;
