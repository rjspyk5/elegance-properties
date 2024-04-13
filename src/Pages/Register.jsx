import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card shrink-0 w-80 md:w-[500px] shadow-2xl  bg-base-100">
          <form className="card-body w-full">
            <h1 className="text-4xl font-bold text-first text-center">
              Registration Form
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Phot Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
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
          <legend className="text-center">Or register with</legend>
          <div className="flex items-center justify-center gap-5 my-2">
            <button className="flex items-center ">
              <FcGoogle size={30} />
            </button>
            <button className="flex items-center ">
              <FaGithub size={30} />
            </button>
          </div>
          <p className="my-5 text-center">
            Already have an account ? <Link to="/login">Login Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
