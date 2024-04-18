import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { ErrorPage } from "../Componets/ErrorPage/ErrorPage";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { PrivateRoute } from "../Layout/PrivateRoute";
import { UpdateProfile } from "../Pages/UpdateProfile";

import { EstateDetails } from "../Componets/Estates/EstateDetails/EstateDetails";
import axios, { Axios } from "axios";
import { GetInTouch } from "../Componets/GetInTouch/GetInTouch";
import { Cart } from "../Pages/Cart/Cart";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
        loader: () => axios.get("/Properties.json"),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: () => axios.get("/Properties.json"),
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <GetInTouch />,
      },
    ],
  },
]);
