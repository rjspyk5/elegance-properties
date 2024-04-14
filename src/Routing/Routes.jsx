import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { ErrorPage } from "../Componets/ErrorPage/ErrorPage";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { PrivateRoute } from "../Layout/PrivateRoute";
import { UpdateProfile } from "../Pages/UpdateProfile";
import { Profile } from "../Pages/Profile";

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
        path: "/viewprofile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
