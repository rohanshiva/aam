import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import ApolloCustomProvider from "./utils/apollo-custom-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloCustomProvider>
      <App />
    </ApolloCustomProvider>
  </React.StrictMode>
);
