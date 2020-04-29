import React from 'react';
import { GlobalStyles } from './globalStyles';
import { Logo } from './components/Logo/Logo';
import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards';
import { ListOfCategories } from './components/ListOfCategories/ListOfCategories';

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
);
