import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const isLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    AsyncStorage.setItem('token', token)
  };

  const logoutHandler = () => {
    setToken(null);
    AsyncStorage.removeItem('token')
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
