import React from 'react';
import { Home } from './pages/Home';
import { User } from './pages/User';
import { Favs } from './pages/Favs';
import { Router } from '@reach/router';
import { Detail } from './pages/Detail';
import { Logo } from './components/Logo/Logo';
import { NavBar } from './components/NavBar/NavBar';
import { GlobalStyles } from './styles/globalStyles';
import { NotRegisteredUser } from './pages/NotRegisteredUser';

const UserLogged = ({ children }) => {
  return children({ isAuth: true });
};

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:categoryId" />
      </Router>
      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <User path="/user" />
              <Favs path="/favs" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/user" />
              <NotRegisteredUser path="/favs" />
            </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </>
  );
};
