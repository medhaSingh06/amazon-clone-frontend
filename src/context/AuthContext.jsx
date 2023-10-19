/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Atoken") || null);

  const signIn = (token) => {
    localStorage.setItem("Atoken", token);
    setToken(token);
  };
  // console.log(token)
  const signOut = () => {
    localStorage.removeItem("Atoken");
    setToken(null);
  };

  const value = {
    token,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
