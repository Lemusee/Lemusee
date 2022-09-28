import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { Helmet } from "react-helmet";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Helmet>
          <link rel="icon" type="image/png" href="favicon.png" />
        </Helmet>
        <App />
      </QueryClientProvider>
    </RecoilRoot>  
  </React.StrictMode>,
  document.getElementById("root")
);