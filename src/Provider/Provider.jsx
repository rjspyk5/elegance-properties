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
  const [user, setuser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setuser(user));
    return () => {
      unsubscribe();
    };
  }, []);
  const logIn = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
  const googleSignUp = () => signInWithPopup(auth, googleProvider);

  const signUp = (email, pass) =>
    createUserWithEmailAndPassword(auth, email, pass);
  const logOut = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, logIn, signUp, logOut, googleSignUp }}>
      {children}
    </AuthContext.Provider>
  );
};
