// Styles Imports
import "@/styles/globals.css";

// Next Imports
import type { AppProps } from "next/app";

// Provider Imports
import ReduxProvider from "@/providers/redux-provider";
import ReactQueryProvider from "@/providers/react-query-provider";
import { ToasterProvider } from "@/providers/toaster-provider";

// Higher Order Component Import
import HigherOrderComponent from "@/components/HigherOrderComponent";

// Font variable Imports
import { fontSatoshi } from "@/config/fonts.config";

// React Imports
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <main className={fontSatoshi.variable}>
    <ReactQueryProvider>
      <ReduxProvider>
        <HigherOrderComponent>
          <ToasterProvider />
          <Component {...pageProps} />
        </HigherOrderComponent>
      </ReduxProvider>
    </ReactQueryProvider>
  </main>
);

export default App;
