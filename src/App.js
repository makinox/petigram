import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { Logo } from './components/Logo/Logo';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
import { Home } from './pages/Home';
import { Router } from '@reach/router';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar/NavBar';

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
      <NavBar />
    </>
  );
};
