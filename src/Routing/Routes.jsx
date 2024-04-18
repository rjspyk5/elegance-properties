import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { ErrorPage } from "../Componets/ErrorPage/ErrorPage";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { PrivateRoute } from "../Layout/PrivateRoute";
import { UpdateProfile } from "../Pages/UpdateProfile";
import { EstateDetails } from "../Componets/Estates/EstateDetails/EstateDetails";
import axios from "axios";
import { GetInTouch } from "../Componets/GetInTouch/GetInTouch";
import { Wishlist } from "../Pages/Wishlist/Wishlist";

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
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
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
