import { createContext, useEffect, useState } from "react";
import { auth } from "./../Firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext();

export const Provider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
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
  const signUp = (email, pass) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignUp, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
