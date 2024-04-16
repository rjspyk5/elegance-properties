import { Helmet } from "react-helmet-async";
import { auth } from "../Firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Provider";

export const UpdateProfile = () => {
  const { user, setuser } = useContext(AuthContext);
  const [updateName, setupdateName] = useState(user.displayName || "");
  const [updatephotoURL, setupdatephotoURL] = useState(user.photoURL || "");
  const [updateMail, setupdateMail] = useState(user.email || "");

  const update = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: updateName,
      photoURL: updatephotoURL,
    }).catch((er) => console.log(er));
  };
  console.log(user);
  return (
    <div>
      <Helmet>
        <title>Elegance | update profile</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2">
          <div className="text-center flex flex-col justify-center items-center">
            <img
              className="rounded-full w-56"
              src={user.photoURL}
              alt="Image Not avilable"
            />

            <p className="py-6 font-bold text-2xl">{user.displayName}</p>
            {user.email && (
              <p className="py-6 font-bold text-2xl">{user.email}</p>
            )}
            <p className="py-6 ">{user.photoURL}</p>
          </div>
          <div className="hero-content flex-col w-full">
            <div className="card shrink-0 w-full md:w-[500px]  shadow-2xl  bg-base-100">
              <form className="card-body w-full " onSubmit={update}>
                <h1 className="text-4xl font-bold text-first text-center">
                  Edit
                </h1>
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
                    value={updateMail}
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-first">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
