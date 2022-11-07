import React from "react";
import { createContext } from "react";

export const AuthContexts = createContext();

const AuthProvider = ({ children }) => {
  const user = { displayName: "Fahim Islam" };
  const authInfo = { user };
  return (
    <AuthContexts.Provider value={authInfo}>{children}</AuthContexts.Provider>
  );
};

export default AuthProvider;
