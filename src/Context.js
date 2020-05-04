import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });
  const value = {
    isAuth,
    activateAuth: (token) => {
      setAuth(true);
      window.sessionStorage.setItem('token', token);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
