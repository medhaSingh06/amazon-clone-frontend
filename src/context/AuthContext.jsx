/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { removeAllItemsFromCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Atoken") || null);
  const dispatch = useDispatch();

  const signIn = (token) => {
    localStorage.setItem("Atoken", token);
    setToken(token);
  };
  // console.log(token)
  const signOut = () => {
    localStorage.removeItem("Atoken");
    dispatch(removeAllItemsFromCart())
      .then((response) => {
        console.log("removed successful", response);
      })
      .catch((error) => {
        console.log("error in removing", error);
      });
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
