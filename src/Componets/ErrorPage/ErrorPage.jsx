import { useNavigate, useRouteError } from "react-router-dom";
import { Navbar } from "./../../SharedComponets/Navbar";
import { Footer } from "../../SharedComponets/Footer";
import { Helmet } from "react-helmet-async";

export const ErrorPage = () => {
  const error = useRouteError;
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <Helmet>
        <title>Elegance | Something went wrong</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button className="btn" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>

      <Footer />
    </div>
  );
};
