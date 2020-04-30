import React from 'react';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards';
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories';

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
};
