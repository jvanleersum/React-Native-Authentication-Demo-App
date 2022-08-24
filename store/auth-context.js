import { createContext, useState } from "react";

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
  };

  const logoutHandler = () => {
    setToken(null);
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
