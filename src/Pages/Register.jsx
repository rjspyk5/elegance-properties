import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

export const Register = () => {
  const { user, setuser, signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const pass = form.get("password");
    const name = form.get("name");
    const url = form.get("url");
    if (!/[a-z]/.test(pass) || !/[A-Z]/.test(pass)) {
      errorToast(
        "Must have atleast one Uppercase and one lowecase letter in the password"
      );
      return;
    }
    if (pass.length < 6) {
      errorToast("password length must be at least 6 character");
      return;
    }

    signUp(email, pass)
      .then((res) => {
        res.user.displayName = name;
        res.user.photoURL = url;
        navigate("/");
        Swal.fire({
          text: "Registration successfull",
          icon: "success",
        });
      })
      .catch((err) => errorToast(err));
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
              Registration Form
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name="url"
                type="text"
                placeholder="Photo Url"
                className="input input-bordered"
              />
            </div>
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
              <button className="btn bg-first">Register</button>
            </div>
          </form>

          <hr className="text-[#343B4C] my-5" />
          <p className="mb-5 text-center">
            Already have an account ?{" "}
            <Link className="text-second underline" to="/login">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
