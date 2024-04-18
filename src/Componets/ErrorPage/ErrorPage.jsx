import { useNavigate, useRouteError } from "react-router-dom";
import { Navbar } from "./../../SharedComponets/Navbar";
import { Footer } from "../../SharedComponets/Footer";
import { Helmet } from "react-helmet-async";

export const ErrorPage = () => {
  const error = useRouteError;
  const navigate = useNavigate();
  return (
    <div id="error-page" className=" ">
      <Helmet>
        <title>Elegance | Something went wrong</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl animate__bounce animate__animated">Oops!</h1>
        <p className="text-2xl font-bold text-[red]">
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button className="btn bg-first" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>

      <Footer />
    </div>
  );
};
