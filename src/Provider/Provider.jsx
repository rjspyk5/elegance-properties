import { createContext, useEffect, useState } from "react";
import { auth } from "./../Firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const Provider = ({ children }) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setuser(user));
    return () => {
      unsubscribe();
    };
  }, []);
  const logIn = (email, pass) => signInWithEmailAndPassword(auth, email, pass);

  const signUp = (email, pass) =>
    createUserWithEmailAndPassword(auth, email, pass);
  const logOut = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
