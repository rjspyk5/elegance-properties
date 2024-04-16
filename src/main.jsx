import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";

import { routes } from "./Routing/Routes.jsx";
import { Provider } from "./Provider/Provider.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider>
        <RouterProvider router={routes} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
