import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { Logo } from './components/Logo/Logo';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
import { Home } from './pages/Home';
import { Router } from '@reach/router';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  // console.log(detailId);

  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:categoryId" />
        </Router>
      )}
    </>
  );
};
