import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-o1t5rprdr1jz74uf.us.auth0.com"
     clientId="OSvnBSnVMHzZUY4jh4YecEi62Ns6dNEe"
     authorizationParams={{
      redirect_uri: "https://final-peak-u-indol.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
