import { createContext, useEffect, useState } from "react";
import { auth } from "./../Firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
export const AuthContext = createContext();

export const Provider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setuser(user);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logIn = (email, pass) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const googleSignUp = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignUp = () => {
    setloading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const signUp = (email, pass) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const UProfile = (email, url) => {
    return updateProfile(auth.currentUser, {
      displayName: email,
      photoURL: url,
    });
  };
  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setuser,
        logIn,
        signUp,
        logOut,
        googleSignUp,
        loading,
        githubSignUp,
        UProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
Provider.propTypes = {
  children: PropTypes.node,
};
