import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const { setuser, logIn, googleSignUp } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const pass = form.get("password");
    logIn(email, pass)
      .then((res) => successToast("Successfully login"))
      .catch((err) => {
        err == "FirebaseError: Firebase: Error (auth/invalid-credential)."
          ? errorToast("Invalid username or password")
          : errorToast(err);
      });
  };

  const successToast = (msz) => toast.success(msz);
  const errorToast = (msz) => toast.error(`${msz}`);
  return (
    <div className="hero min-h-screen bg-base-200">
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="hero-content flex-col w-full">
        <div className="card shrink-0 w-full md:w-[500px]  shadow-2xl  bg-base-100">
          <form className="card-body w-full " onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold text-first text-center">
              Login Form
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-first">Login</button>
            </div>
          </form>
          <legend className="text-center">Or login with</legend>
          <div className="flex items-center justify-center gap-5 my-2">
            <button
              onClick={() =>
                googleSignUp()
                  .then()
                  .catch((err) => errorToast(err))
              }
              className="flex items-center "
            >
              <FcGoogle size={30} />
            </button>
            <button className="flex items-center ">
              <FaGithub size={30} />
            </button>
          </div>
          <hr className="text-[#343B4C] my-5" />
          <p className="mb-5 text-center">
            New here?{" "}
            <Link className="text-second underline" to="/register">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
