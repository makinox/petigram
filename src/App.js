import React from 'react';
import { Home } from './pages/Home';
import { User } from './pages/User';
import { Favs } from './pages/Favs';
import { Router, Redirect } from '@reach/router';
import { Detail } from './pages/Detail';
import { Logo } from './components/Logo/Logo';
import { NavBar } from './components/NavBar/NavBar';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { GlobalStyles } from './styles/globalStyles';
import { NotFound } from './pages/NotFound';
import Context from './Context';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Context.Consumer>
        {({ isAuth }) => {
          console.log(isAuth);
          return (
            <Router>
              <NotFound default />
              <Home path="/" />
              <Home path="/pet/:categoryId" />
              <Detail path="/detail/:categoryId" />
              {!isAuth && <NotRegisteredUser path="/login" />}
              {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
              {!isAuth && <Redirect noThrow from="/user" to="/login" />}
              {isAuth && <Redirect noThrow from="/login" to="/" />}
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          );
        }}
      </Context.Consumer>
      <NavBar />
    </>
  );
};
