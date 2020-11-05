import type { AppProps } from "next/app";
import type React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

if (process.env.NODE_ENV !== "production" && process.browser) {
  import("../mocks/browser").then((v) => {
    v.worker.start();
  });
}

const queryCache = new QueryCache();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ReactQueryDevtools initialIsOpen={true} />
      <div>
        <Component {...pageProps} />
      </div>
    </ReactQueryCacheProvider>
  );
};

export default App;
