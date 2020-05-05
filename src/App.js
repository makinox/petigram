import React, { Suspense } from 'react';
import Context from './Context';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NotFound } from './pages/NotFound';
import { Logo } from './components/Logo/Logo';
import { Router, Redirect } from '@reach/router';
import { NavBar } from './components/NavBar/NavBar';
import { GlobalStyles } from './styles/globalStyles';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
const User = React.lazy(() => import('./pages/User'));
const Favs = React.lazy(() => import('./pages/Favs'));

export const App = () => {
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  );
};
