import React, { createContext, useState } from "react";
export const AuthContext = createContext();
export const Provider = ({ children }) => {
  const [user, setuser] = useState(null);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
