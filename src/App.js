import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { Logo } from './components/Logo/Logo';
import { ListOfPhotoCards } from './containers/ListOfPhotoCards';
import { ListOfCategories } from './components/ListOfCategories/ListOfCategories';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  console.log(detailId);

  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={2} />
        </>
      )}
    </>
  );
};
