import React from 'react';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards';
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories';

export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
};
