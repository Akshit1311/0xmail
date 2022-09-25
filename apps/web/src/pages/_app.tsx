import "../../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
} & AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
