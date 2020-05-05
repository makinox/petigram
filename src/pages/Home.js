import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards';
import { Layout } from '../components/Layout/layout';
import React from 'react';

export const Home = ({ categoryId }) => {
  return (
    <Layout title={'Tu app de fotos de mascotas'} subtitle={'Con petigram puedes encontrar fotos de animales dómesticos muy bonitos'}>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  );
};
