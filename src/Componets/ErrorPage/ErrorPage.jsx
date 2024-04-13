import { useNavigate, useRouteError } from "react-router-dom";
import { Navbar } from "./../../SharedComponets/Navbar";
import { Footer } from "../../SharedComponets/Footer";

export const ErrorPage = () => {
  const error = useRouteError;
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <Navbar></Navbar>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
      <Footer />
    </div>
  );
};
