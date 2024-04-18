import { Helmet } from "react-helmet-async";

import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Provider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const UpdateProfile = () => {
  const { user, UProfile } = useContext(AuthContext);
  const [updateName, setupdateName] = useState(user.displayName || "");
  const [updatephotoURL, setupdatephotoURL] = useState(user.photoURL || "");

  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    UProfile(updateName, updatephotoURL)
      .then(() => {
        Swal.fire({
          text: "Update successfully",
          icon: "success",
        });
        navigate("/updateProfile");
      })
      .catch((er) => console.log(er));
  };

  return (
    <div className="">
      <Helmet>
        <title>Elegance | update profile</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="card   shadow-2xl  bg-base-100">
          <div className="hero-content grid grid-cols-1 md:grid-cols-2">
            <div className="text-center flex flex-col justify-center items-center animate__animated animate__slow animate__backInLeft">
              <img
                className="rounded-full w-56"
                src={user.photoURL}
                alt="Image Not avilable"
              />

              <p className="py-4 font-bold text-2xl">
                Name:{" "}
                <span className="font-normal text-lg">
                  {user.displayName || "Not set yet"}
                </span>
              </p>
              {user.email && (
                <p className=" font-bold text-2xl">
                  Email:{" "}
                  <span className="font-normal text-lg">{user.email}</span>{" "}
                </p>
              )}
            </div>
            <div className="hero-content flex-col w-full">
              <div className="shrink-0 w-full md:w-[500px]  bg-base-100 animate__animated animate__slow animate__backInRight">
                <form className="card-body w-full " onSubmit={update}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={updateName}
                      onChange={(e) => setupdateName(e.target.value)}
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
                      value={updatephotoURL}
                      onChange={(e) => setupdatephotoURL(e.target.value)}
                      placeholder="Photo Url"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      disabled
                      name="email"
                      type="email"
                      value={user.email}
                      placeholder="Email"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn bg-first">Update profile</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
